// Inicjalizacja podstawowych elementów Three.js
let scene, camera, renderer, cube;

function init() {
  // Utworzenie sceny
  scene = new THREE.Scene();

  // Ustawienie kamery (zmień parametry według potrzeb)
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Inicjalizacja renderera, który używa wskazanego canvas
  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('visualizer') });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Przykładowy obiekt – obracający się sześcian
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Obsługa zmiany rozmiaru okna, aby zachować responsywność
  window.addEventListener('resize', onWindowResize, false);

  animate();
}

function onWindowResize() {
  // Aktualizacja proporcji kamery i rozmiaru renderera
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  // Prosty obrót sześcianu
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// Uruchomienie inicjalizacji
init();
