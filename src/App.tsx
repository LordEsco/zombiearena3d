import React, { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { GameEngine } from './game/GameEngine';

// Global socket instance
const socket: Socket = io();

export default function App() {
  const [gameState, setGameState] = useState<'menu' | 'lobby' | 'game'>('menu');
  const [roomId, setRoomId] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [players, setPlayers] = useState<any[]>([]);
  const [isHost, setIsHost] = useState(false);
  const [error, setError] = useState('');
  
  // Game HUD state
  const [hudState, setHudState] = useState({
      health: 100,
      wave: 1,
      zombiesRemaining: 0,
      ammo: 30,
      score: 0
  });

  const gameContainerRef = useRef<HTMLDivElement>(null);
  const gameEngineRef = useRef<GameEngine | null>(null);

  useEffect(() => {
    socket.on('room_created', (id) => {
      setRoomId(id);
      setIsHost(true);
      setGameState('lobby');
    });

    socket.on('room_joined', (id) => {
      setRoomId(id);
      setIsHost(false);
      setGameState('lobby');
    });

    socket.on('room_update', (data) => {
      setPlayers(Object.values(data.players));
      if (data.gameActive) {
          setGameState('game');
      }
    });

    socket.on('game_started', () => {
      setGameState('game');
    });

    socket.on('game_over', (data) => {
        alert(`GAME OVER! You survived ${data.wave} waves.`);
        setGameState('lobby');
    });

    socket.on('error', (msg) => {
        setError(msg);
        setTimeout(() => setError(''), 3000);
    });

    return () => {
      socket.off('room_created');
      socket.off('room_joined');
      socket.off('room_update');
      socket.off('game_started');
      socket.off('error');
    };
  }, []);

  // Initialize Game Engine when entering 'game' state
  useEffect(() => {
      if (gameState === 'game' && gameContainerRef.current && !gameEngineRef.current) {
          gameEngineRef.current = new GameEngine(gameContainerRef.current, socket, setHudState);
          gameEngineRef.current.init();
      }
      
      return () => {
          if (gameState !== 'game' && gameEngineRef.current) {
              gameEngineRef.current.dispose();
              gameEngineRef.current = null;
          }
      };
  }, [gameState]);

  const createRoom = () => {
    socket.emit('create_room');
  };

  const joinRoom = () => {
    if (joinCode.length === 6) {
      socket.emit('join_room', joinCode);
    } else {
        setError("Invalid code length");
    }
  };

  const startGame = () => {
    socket.emit('start_game');
  };

  return (
    <div className="w-full h-screen bg-zinc-900 text-white overflow-hidden select-none font-sans">
      {/* Error Toast */}
      {error && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-500 px-4 py-2 rounded shadow-lg z-50">
              {error}
          </div>
      )}

      {/* Main Menu */}
      {gameState === 'menu' && (
        <div className="flex flex-col items-center justify-center h-full space-y-8 bg-[url('https://picsum.photos/seed/zombie/1920/1080?blur=4')] bg-cover bg-center">
          <div className="bg-black/80 p-12 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl text-center">
            <h1 className="text-6xl font-bold mb-2 text-red-500 tracking-tighter uppercase">Zombie Arena 3D</h1>
            <p className="text-zinc-400 mb-8">Survive together. Die together.</p>
            
            <div className="space-y-4 w-64 mx-auto">
              <button 
                onClick={createRoom}
                className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-all transform hover:scale-105"
              >
                CREATE ROOM
              </button>
              
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="CODE" 
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-red-500 outline-none text-center tracking-widest font-mono"
                  maxLength={6}
                />
                <button 
                  onClick={joinRoom}
                  className="px-6 py-3 bg-zinc-700 hover:bg-zinc-600 rounded-lg font-bold transition-colors"
                >
                  JOIN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lobby */}
      {gameState === 'lobby' && (
        <div className="flex flex-col items-center justify-center h-full bg-zinc-900">
          <div className="w-full max-w-2xl bg-zinc-800 p-8 rounded-2xl border border-zinc-700 shadow-2xl">
            <div className="flex justify-between items-center mb-8 border-b border-zinc-700 pb-4">
              <h2 className="text-2xl font-bold">LOBBY</h2>
              <div className="flex items-center space-x-4">
                <span className="text-zinc-400">INVITE CODE:</span>
                <span className="font-mono text-xl bg-black px-3 py-1 rounded text-red-400 select-all cursor-pointer" onClick={() => navigator.clipboard.writeText(roomId)}>{roomId}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {players.map((p, i) => (
                <div key={p.id} className="flex items-center space-x-3 bg-zinc-700/50 p-3 rounded-lg border border-zinc-600">
                  <div className="w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <span>Player {p.id.substring(0, 4)}</span>
                  {p.id === socket.id && <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">YOU</span>}
                </div>
              ))}
              {[...Array(6 - players.length)].map((_, i) => (
                <div key={i} className="flex items-center justify-center bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/50 border-dashed text-zinc-600">
                  Waiting...
                </div>
              ))}
            </div>

            {isHost ? (
              <button 
                onClick={startGame}
                className="w-full py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-red-900/20"
              >
                START GAME
              </button>
            ) : (
              <div className="text-center text-zinc-500 animate-pulse">
                Waiting for host to start...
              </div>
            )}
          </div>
        </div>
      )}

      {/* Game Container */}
      <div 
        ref={gameContainerRef} 
        className={`absolute inset-0 z-0 ${gameState === 'game' ? 'block' : 'hidden'}`}
      />

      {/* In-Game HUD */}
      {gameState === 'game' && (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-8">
            {/* Top Bar */}
            <div className="flex justify-between items-start">
                <div className="bg-black/50 backdrop-blur px-6 py-3 rounded-xl border border-white/10">
                    <div className="text-sm text-zinc-400 uppercase tracking-widest">Wave</div>
                    <div className="text-4xl font-bold text-red-500">{hudState.wave}</div>
                </div>
                <div className="bg-black/50 backdrop-blur px-6 py-3 rounded-xl border border-white/10 text-right">
                    <div className="text-sm text-zinc-400 uppercase tracking-widest">Zombies</div>
                    <div className="text-4xl font-bold text-white">{hudState.zombiesRemaining}</div>
                </div>
            </div>

            {/* Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-1 h-1 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/30 rounded-full"></div>
            </div>

            {/* Bottom Bar */}
            <div className="flex justify-between items-end">
                <div className="flex items-end space-x-8">
                    <div className="bg-black/50 backdrop-blur p-6 rounded-xl border border-white/10 min-w-[200px]">
                        <div className="text-sm text-zinc-400 uppercase tracking-widest mb-1">Health</div>
                        <div className="h-4 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-red-500 transition-all duration-300" 
                                style={{ width: `${hudState.health}%` }}
                            />
                        </div>
                        <div className="mt-2 text-2xl font-bold">{Math.max(0, Math.round(hudState.health))}</div>
                    </div>
                    
                    <div className="bg-black/50 backdrop-blur p-4 rounded-xl border border-white/10">
                        <div className="text-sm text-zinc-400 uppercase tracking-widest">Score</div>
                        <div className="text-xl font-mono text-yellow-400">{hudState.score}</div>
                    </div>
                </div>

                <div className="bg-black/50 backdrop-blur p-6 rounded-xl border border-white/10 text-right">
                    <div className="text-sm text-zinc-400 uppercase tracking-widest">Ammo</div>
                    <div className="text-5xl font-bold font-mono">{hudState.ammo}<span className="text-2xl text-zinc-500">/∞</span></div>
                </div>
            </div>
            
            {/* Death Screen Overlay */}
            {hudState.health <= 0 && (
                <div className="absolute inset-0 bg-red-900/40 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-8xl font-black text-white mb-4 drop-shadow-xl">YOU DIED</h1>
                        <p className="text-2xl text-white/80">Spectating teammates...</p>
                    </div>
                </div>
            )}
        </div>
      )}
    </div>
  );
}
