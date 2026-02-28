import * as THREE from 'three';
import { Socket } from 'socket.io-client';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export class GameEngine {
  container: HTMLElement;
  socket: Socket;
  setHudState: (state: any) => void;
  
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: PointerLockControls;
  
  players: Record<string, THREE.Group> = {};
  zombies: Record<string, THREE.Mesh> = {};
  bullets: THREE.Mesh[] = [];
  
  clock: THREE.Clock;
  animationId: number = 0;
  
  moveForward = false;
  moveBackward = false;
  moveLeft = false;
  moveRight = false;
  canJump = false;
  
  velocity = new THREE.Vector3();
  direction = new THREE.Vector3();
  
  ammo = 30;
  lastShotTime = 0;
  lastNetworkUpdate = 0;

  font: any = null;
  
  constructor(container: HTMLElement, socket: Socket, setHudState: any) {
    this.container = container;
    this.socket = socket;
    this.setHudState = setHudState;
    
    // Setup Three.js
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x111111);
    this.scene.fog = new THREE.Fog(0x111111, 0, 50);
    
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.y = 1.6; // Eye height
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    container.appendChild(this.renderer.domElement);

    // Load Font
    const loader = new FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
        this.font = font;
    });
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    this.scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 30;
    dirLight.shadow.camera.bottom = -30;
    dirLight.shadow.camera.left = -30;
    dirLight.shadow.camera.right = 30;
    this.scene.add(dirLight);
    
    const spotLight = new THREE.SpotLight(0xff0000, 5, 20, Math.PI/4, 0.5, 1);
    spotLight.position.set(0, 10, 0);
    spotLight.target.position.set(0, 0, 0);
    this.scene.add(spotLight);
    this.scene.add(spotLight.target);

    // Environment
    this.createEnvironment();
    
    // Controls
    // Use renderer.domElement for better event handling
    this.controls = new PointerLockControls(this.camera, this.renderer.domElement);
    this.scene.add(this.controls.getObject());
    
    this.clock = new THREE.Clock();
    
    // Bind events
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    
    window.addEventListener('resize', this.onWindowResize);
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
    document.addEventListener('mousedown', this.onMouseDown);
    
    // Lock pointer on click
    this.renderer.domElement.addEventListener('click', () => {
        this.controls.lock();
    });

    // Socket listeners
    this.socket.on('game_tick', (data) => this.handleGameTick(data));
    this.socket.on('player_hit', (data) => {
        if (data.playerId === this.socket.id) {
            // Flash red screen or shake camera
            this.camera.rotation.z += 0.1;
            setTimeout(() => this.camera.rotation.z -= 0.1, 100);
        }
    });
    this.socket.on('wave_start', (data) => {
        // Play sound?
    });
  }
  
  createEnvironment() {
      // Floor
      const floorGeometry = new THREE.PlaneGeometry(100, 100);
      const floorMaterial = new THREE.MeshStandardMaterial({ 
          color: 0x222222,
          roughness: 0.8,
          metalness: 0.2
      });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -Math.PI / 2;
      floor.receiveShadow = true;
      this.scene.add(floor);
      
      // Grid
      const grid = new THREE.GridHelper(100, 50, 0x444444, 0x222222);
      this.scene.add(grid);

      // Walls
      const wallMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
      const wallGeo = new THREE.BoxGeometry(100, 5, 1);
      
      const w1 = new THREE.Mesh(wallGeo, wallMat);
      w1.position.z = -50;
      w1.position.y = 2.5;
      this.scene.add(w1);

      const w2 = new THREE.Mesh(wallGeo, wallMat);
      w2.position.z = 50;
      w2.position.y = 2.5;
      this.scene.add(w2);

      const w3 = new THREE.Mesh(wallGeo, wallMat);
      w3.rotation.y = Math.PI/2;
      w3.position.x = -50;
      w3.position.y = 2.5;
      this.scene.add(w3);

      const w4 = new THREE.Mesh(wallGeo, wallMat);
      w4.rotation.y = Math.PI/2;
      w4.position.x = 50;
      w4.position.y = 2.5;
      this.scene.add(w4);
      
      // Random obstacles
      const boxGeo = new THREE.BoxGeometry(2, 2, 2);
      for(let i=0; i<10; i++) {
          const box = new THREE.Mesh(boxGeo, wallMat);
          box.position.x = (Math.random() - 0.5) * 60;
          box.position.z = (Math.random() - 0.5) * 60;
          box.position.y = 1;
          box.castShadow = true;
          box.receiveShadow = true;
          this.scene.add(box);
      }
  }

  init() {
      this.animate();
  }

  dispose() {
      cancelAnimationFrame(this.animationId);
      window.removeEventListener('resize', this.onWindowResize);
      document.removeEventListener('keydown', this.onKeyDown);
      document.removeEventListener('keyup', this.onKeyUp);
      document.removeEventListener('mousedown', this.onMouseDown);
      this.controls.unlock();
      this.container.innerHTML = '';
      this.socket.off('game_tick');
      this.socket.off('player_hit');
      this.socket.off('wave_start');
  }

  handleGameTick(data: any) {
      // Update HUD
      const myPlayer = data.players[this.socket.id];
      if (myPlayer) {
          this.setHudState(prev => ({
              ...prev,
              health: myPlayer.health,
              score: myPlayer.score,
              zombiesRemaining: data.zombiesRemaining
          }));
      }

      // Sync Players
      Object.keys(data.players).forEach(id => {
          if (id === this.socket.id) return; // Don't update self from server to avoid lag
          
          const pData = data.players[id];
          if (!this.players[id]) {
              // Create new player group
              const group = new THREE.Group();
              
              const geo = new THREE.BoxGeometry(1, 1.8, 1);
              const mat = new THREE.MeshStandardMaterial({ color: 0x0000ff });
              const mesh = new THREE.Mesh(geo, mat);
              mesh.castShadow = true;
              group.add(mesh);
              
              // Username label
              if (this.font && pData.username) {
                  const textGeo = new TextGeometry(pData.username, {
                      font: this.font,
                      size: 0.3,
                      height: 0.05,
                  });
                  const textMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
                  const textMesh = new THREE.Mesh(textGeo, textMat);
                  textMesh.position.set(-0.5, 2.2, 0);
                  group.add(textMesh);
              }

              this.scene.add(group);
              this.players[id] = group;
          }
          
          // Interpolate position (simple lerp for now)
          this.players[id].position.lerp(new THREE.Vector3(pData.x, pData.y, pData.z), 0.3);
          this.players[id].rotation.y = pData.rotation;
          
          // Make text look at camera
          if (this.players[id].children[1]) {
              this.players[id].children[1].lookAt(this.camera.position);
          }
          
          if (pData.isDead) {
              this.players[id].visible = false;
          } else {
              this.players[id].visible = true;
          }
      });
      
      // Remove disconnected players
      Object.keys(this.players).forEach(id => {
          if (!data.players[id]) {
              this.scene.remove(this.players[id]);
              delete this.players[id];
          }
      });

      // Sync Zombies
      const serverZombies = data.zombies || {};
      Object.keys(serverZombies).forEach(id => {
          const zData = serverZombies[id];
          if (!this.zombies[id]) {
              // Create zombie
              const geo = new THREE.BoxGeometry(1, zData.type === 'tank' ? 2.5 : 1.8, 1);
              const color = zData.type === 'fast' ? 0xffaa00 : (zData.type === 'tank' ? 0x550000 : 0x00ff00);
              const mat = new THREE.MeshStandardMaterial({ color });
              const mesh = new THREE.Mesh(geo, mat);
              mesh.castShadow = true;
              this.scene.add(mesh);
              this.zombies[id] = mesh;
          }
          
          this.zombies[id].position.lerp(new THREE.Vector3(zData.x, zData.y, zData.z), 0.3);
          this.zombies[id].lookAt(this.camera.position.x, 1, this.camera.position.z); // Look at player (billboard effect kinda)
      });

      // Remove dead zombies
      Object.keys(this.zombies).forEach(id => {
          if (!serverZombies[id]) {
              this.scene.remove(this.zombies[id]);
              delete this.zombies[id];
          }
      });
  }

  onKeyDown(event: KeyboardEvent) {
      switch (event.code) {
          case 'ArrowUp':
          case 'KeyW':
              this.moveForward = true;
              break;
          case 'ArrowLeft':
          case 'KeyA':
              this.moveLeft = true;
              break;
          case 'ArrowDown':
          case 'KeyS':
              this.moveBackward = true;
              break;
          case 'ArrowRight':
          case 'KeyD':
              this.moveRight = true;
              break;
          case 'Space':
              if (this.canJump === true) this.velocity.y += 15; // Jump force
              this.canJump = false;
              break;
          case 'KeyR':
              this.reload();
              break;
      }
  }

  onKeyUp(event: KeyboardEvent) {
      switch (event.code) {
          case 'ArrowUp':
          case 'KeyW':
              this.moveForward = false;
              break;
          case 'ArrowLeft':
          case 'KeyA':
              this.moveLeft = false;
              break;
          case 'ArrowDown':
          case 'KeyS':
              this.moveBackward = false;
              break;
          case 'ArrowRight':
          case 'KeyD':
              this.moveRight = false;
              break;
      }
  }
  
  onMouseDown(event: MouseEvent) {
      if (this.controls.isLocked) {
          this.shoot();
      } else {
          // Ensure we lock if clicked and not locked (backup)
          this.controls.lock();
      }
  }
  
  reload() {
      this.ammo = 30;
      this.setHudState(prev => ({ ...prev, ammo: 30 }));
  }
  
  shoot() {
      if (this.ammo <= 0) return;
      
      const now = Date.now();
      if (now - this.lastShotTime < 100) return; // Fire rate limit
      
      this.lastShotTime = now;
      this.ammo--;
      this.setHudState(prev => ({ ...prev, ammo: this.ammo }));
      
      // Raycast
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
      
      // Check intersections with zombies
      const zombieMeshes = Object.values(this.zombies);
      const intersects = raycaster.intersectObjects(zombieMeshes);
      
      if (intersects.length > 0) {
          const hitObject = intersects[0].object;
          // Find zombie ID
          const zombieId = Object.keys(this.zombies).find(key => this.zombies[key] === hitObject);
          if (zombieId) {
              this.socket.emit('zombie_hit', { zombieId, damage: 25 });
              
              // Visual feedback
              const originalColor = (hitObject as any).material.color.getHex();
              (hitObject as any).material.color.setHex(0xffffff);
              setTimeout(() => {
                  if (this.zombies[zombieId]) // Check if still exists
                    (hitObject as any).material.color.setHex(originalColor);
              }, 50);
          }
      }
      
      // Muzzle flash / Recoil
      this.camera.rotation.x += 0.02;
  }

  onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
      this.animationId = requestAnimationFrame(() => this.animate());
      
      // Cap delta to prevent huge jumps if tab was inactive
      const delta = Math.min(this.clock.getDelta(), 0.1);
      
      if (this.controls.isLocked) {
          // Movement Logic
          this.velocity.x -= this.velocity.x * 10.0 * delta;
          this.velocity.z -= this.velocity.z * 10.0 * delta;
          this.velocity.y -= 9.8 * 20.0 * delta; // Gravity (mass = 20)

          this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
          this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
          this.direction.normalize();

          if (this.moveForward || this.moveBackward) this.velocity.z -= this.direction.z * 400.0 * delta;
          if (this.moveLeft || this.moveRight) this.velocity.x -= this.direction.x * 400.0 * delta;

          this.controls.moveRight(-this.velocity.x * delta);
          this.controls.moveForward(-this.velocity.z * delta);
          
          this.controls.getObject().position.y += (this.velocity.y * delta);

          if (this.controls.getObject().position.y < 1.6) {
              this.velocity.y = 0;
              this.controls.getObject().position.y = 1.6;
              this.canJump = true;
          }
          
          // Recoil recovery - REMOVED because it forces camera pitch to 0, breaking mouse look
          // this.camera.rotation.x = THREE.MathUtils.lerp(this.camera.rotation.x, 0, 0.1);

          // Send position to server (Throttled)
          const now = Date.now();
          if (now - this.lastNetworkUpdate > 50) { // 20 updates per second
              this.lastNetworkUpdate = now;
              
              const direction = new THREE.Vector3();
              this.camera.getWorldDirection(direction);
              const yaw = Math.atan2(direction.x, direction.z);
              
              this.socket.emit('player_input', {
                  x: this.controls.getObject().position.x,
                  z: this.controls.getObject().position.z,
                  // Send feet position (camera is at +1.6)
                  y: this.controls.getObject().position.y - 1.6, 
                  rotation: yaw
              });
          }
      }
      
      this.renderer.render(this.scene, this.camera);
  }
}
