import { Server, Socket } from "socket.io";
import { v4 as uuidv4 } from "uuid";

interface Player {
  id: string;
  socketId: string;
  username: string;
  x: number;
  y: number;
  z: number;
  rotation: number;
  health: number;
  isDead: boolean;
  score: number;
}

interface Zombie {
  id: string;
  x: number;
  y: number;
  z: number;
  health: number;
  type: 'normal' | 'fast' | 'tank' | 'exploder';
  targetId: string | null;
}

interface GameState {
  players: Record<string, Player>;
  zombies: Record<string, Zombie>;
  wave: number;
  zombiesRemaining: number;
  zombiesToSpawn: number;
  gameActive: boolean;
  lastZombieSpawnTime: number;
}

class Room {
  id: string;
  io: Server;
  players: Record<string, Player> = {};
  gameState: GameState;
  hostId: string;
  interval: NodeJS.Timeout | null = null;

  constructor(id: string, io: Server, hostId: string) {
    this.id = id;
    this.io = io;
    this.hostId = hostId;
    this.gameState = {
      players: {},
      zombies: {},
      wave: 1,
      zombiesRemaining: 0,
      zombiesToSpawn: 0,
      gameActive: false,
      lastZombieSpawnTime: 0,
    };
  }

  addPlayer(socket: Socket, username: string) {
    this.players[socket.id] = {
      id: socket.id,
      socketId: socket.id,
      username: username || `Player ${socket.id.substring(0, 4)}`,
      x: 0,
      y: 1,
      z: 0,
      rotation: 0,
      health: 100,
      isDead: false,
      score: 0,
    };
    this.gameState.players[socket.id] = this.players[socket.id];
    socket.join(this.id);
    
    // Notify everyone
    this.io.to(this.id).emit("room_update", {
      roomId: this.id,
      players: this.players,
      hostId: this.hostId,
      gameActive: this.gameState.gameActive
    });
  }

  removePlayer(socketId: string) {
    delete this.players[socketId];
    delete this.gameState.players[socketId];
    
    if (Object.keys(this.players).length === 0) {
      this.stopGame();
      return true; // Room empty
    }

    if (socketId === this.hostId) {
      this.hostId = Object.keys(this.players)[0];
    }

    this.io.to(this.id).emit("room_update", {
      roomId: this.id,
      players: this.players,
      hostId: this.hostId,
      gameActive: this.gameState.gameActive
    });
    return false;
  }

  startGame() {
    if (this.gameState.gameActive) return;
    this.gameState.gameActive = true;
    this.gameState.wave = 1;
    this.gameState.zombies = {};
    this.gameState.players = this.players; // Reset players?
    
    // Reset player stats
    Object.values(this.players).forEach(p => {
      p.health = 100;
      p.isDead = false;
      p.x = (Math.random() - 0.5) * 10;
      p.z = (Math.random() - 0.5) * 10;
    });

    this.startWave(1);
    this.io.to(this.id).emit("game_started", this.gameState);
    
    this.interval = setInterval(() => this.gameLoop(), 1000 / 20); // 20 TPS
  }

  stopGame() {
    this.gameState.gameActive = false;
    if (this.interval) clearInterval(this.interval);
  }

  startWave(wave: number) {
    this.gameState.wave = wave;
    const baseZombies = 5;
    this.gameState.zombiesToSpawn = Math.floor(baseZombies * Math.pow(1.2, wave - 1));
    this.gameState.zombiesRemaining = this.gameState.zombiesToSpawn;
    this.io.to(this.id).emit("wave_start", { wave, count: this.gameState.zombiesToSpawn });
  }

  gameLoop() {
    if (!this.gameState.gameActive) return;

    const now = Date.now();

    // Spawning Logic
    if (this.gameState.zombiesToSpawn > 0 && now - this.gameState.lastZombieSpawnTime > 2000) {
      this.spawnZombie();
      this.gameState.lastZombieSpawnTime = now;
      this.gameState.zombiesToSpawn--;
    }

    // Zombie AI
    const playerIds = Object.keys(this.players).filter(id => !this.players[id].isDead);
    
    if (playerIds.length === 0 && Object.keys(this.players).length > 0) {
      // Game Over
      this.io.to(this.id).emit("game_over", { wave: this.gameState.wave });
      this.stopGame();
      return;
    }

    Object.values(this.gameState.zombies).forEach(zombie => {
      // Find nearest player
      let nearestDist = Infinity;
      let targetId = null;

      playerIds.forEach(pid => {
        const p = this.players[pid];
        const dx = p.x - zombie.x;
        const dz = p.z - zombie.z;
        const dist = Math.sqrt(dx*dx + dz*dz);
        if (dist < nearestDist) {
          nearestDist = dist;
          targetId = pid;
        }
      });

      if (targetId) {
        const target = this.players[targetId];
        const dx = target.x - zombie.x;
        const dz = target.z - zombie.z;
        const dist = Math.sqrt(dx*dx + dz*dz);
        
        // Move
        const speed = zombie.type === 'fast' ? 0.15 : (zombie.type === 'tank' ? 0.05 : 0.08);
        if (dist > 1) {
          zombie.x += (dx / dist) * speed;
          zombie.z += (dz / dist) * speed;
        } else {
          // Attack
          // Simple cooldown check could be added here
          if (Math.random() < 0.1) { // 10% chance per tick to hit when close
             target.health -= 10;
             this.io.to(this.id).emit("player_hit", { playerId: targetId, health: target.health });
             if (target.health <= 0) {
               target.isDead = true;
               this.io.to(this.id).emit("player_died", { playerId: targetId });
             }
          }
        }
      }
    });

    // Check wave clear
    if (this.gameState.zombiesToSpawn === 0 && Object.keys(this.gameState.zombies).length === 0) {
      this.startWave(this.gameState.wave + 1);
    }

    // Broadcast state
    this.io.to(this.id).emit("game_tick", {
      players: this.players,
      zombies: this.gameState.zombies,
      zombiesRemaining: Object.keys(this.gameState.zombies).length + this.gameState.zombiesToSpawn
    });
  }

  spawnZombie() {
    const id = uuidv4();
    const angle = Math.random() * Math.PI * 2;
    const radius = 20 + Math.random() * 10; // Spawn outside arena
    
    const types: Zombie['type'][] = ['normal', 'normal', 'normal', 'fast', 'tank'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    let health = 100;
    if (type === 'tank') health = 300;
    if (type === 'fast') health = 50;

    // Scale health by wave
    health *= Math.pow(1.1, this.gameState.wave - 1);

    this.gameState.zombies[id] = {
      id,
      x: Math.cos(angle) * radius,
      y: 1,
      z: Math.sin(angle) * radius,
      health,
      type,
      targetId: null
    };
  }

  handlePlayerInput(socketId: string, data: { x: number, y: number, z: number, rotation: number }) {
    if (!this.players[socketId] || this.players[socketId].isDead) return;
    this.players[socketId].x = data.x;
    this.players[socketId].y = data.y;
    this.players[socketId].z = data.z;
    this.players[socketId].rotation = data.rotation;
  }

  handleShoot(socketId: string, data: { origin: any, direction: any }) {
    // Simple hitscan logic
    // In a real game, we would raycast on server against zombie hitboxes
    // For this demo, we'll trust the client slightly but verify distance? 
    // Actually, let's do a simple distance check against all zombies for the ray
    
    // To keep it performant for this demo, we will accept "hit" events from client
    // BUT we verify if the zombie exists and is alive.
  }
  
  handleZombieHit(socketId: string, zombieId: string, damage: number) {
    const zombie = this.gameState.zombies[zombieId];
    if (zombie) {
      zombie.health -= damage;
      if (zombie.health <= 0) {
        delete this.gameState.zombies[zombieId];
        if (this.players[socketId]) {
            this.players[socketId].score += 10;
        }
        this.io.to(this.id).emit("zombie_death", { zombieId, killerId: socketId });
      } else {
         // Optional: emit hit effect
      }
    }
  }
}

export class RoomManager {
  io: Server;
  rooms: Record<string, Room> = {};

  constructor(io: Server) {
    this.io = io;
  }

  handleConnection(socket: Socket) {
    socket.on("create_room", (username: string) => {
      const roomId = Math.random().toString(36).substring(2, 8).toUpperCase();
      const room = new Room(roomId, this.io, socket.id);
      this.rooms[roomId] = room;
      room.addPlayer(socket, username);
      socket.emit("room_created", roomId);
    });

    socket.on("join_room", (data: { roomId: string, username: string }) => {
      const room = this.rooms[data.roomId];
      if (room) {
        room.addPlayer(socket, data.username);
        socket.emit("room_joined", data.roomId);
      } else {
        socket.emit("error", "Room not found");
      }
    });

    socket.on("start_game", () => {
      const roomId = this.getRoomId(socket);
      if (roomId && this.rooms[roomId].hostId === socket.id) {
        this.rooms[roomId].startGame();
      }
    });

    socket.on("player_input", (data) => {
      const roomId = this.getRoomId(socket);
      if (roomId) this.rooms[roomId].handlePlayerInput(socket.id, data);
    });

    socket.on("zombie_hit", (data) => {
        const roomId = this.getRoomId(socket);
        if (roomId) this.rooms[roomId].handleZombieHit(socket.id, data.zombieId, data.damage);
    });

    socket.on("disconnect", () => {
      const roomId = this.getRoomId(socket);
      if (roomId) {
        const isEmpty = this.rooms[roomId].removePlayer(socket.id);
        if (isEmpty) {
            delete this.rooms[roomId];
        }
      }
    });
  }

  getRoomId(socket: Socket): string | undefined {
    return Array.from(socket.rooms).find(r => r !== socket.id);
  }
}
