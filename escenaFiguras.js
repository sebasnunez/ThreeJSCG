
const scene = new THREE.Scene();
//Camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );        
//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
        
//Cubo
const cube = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial( { color: 0xCB4335 } ) );
cube.rotation.x = 2;
cube.rotation.y = 2;
cube.position.x = 3;

//Esfera
const sphere = new THREE.Mesh( new THREE.SphereGeometry( 0.8, 32, 32 ),new THREE.MeshBasicMaterial( {color: 0xE67E22} ) );
sphere.position.x = 1;

//Cilindro
const cylinder = new THREE.Mesh( new THREE.CylinderGeometry( 0.5, 0.5, 1.5, 15 ), new THREE.MeshBasicMaterial( {color: 0x2980B9} ) );
cylinder.position.x = -3;
cylinder.rotation.z = 0.5;
cylinder.rotation.y = 2;

//Cono
const cone = new THREE.Mesh( new THREE.ConeGeometry( 0.5, 1.5, 15 ), new THREE.MeshBasicMaterial( {color: 0x2980B9} ) );
cone.position.x = -1
cone.rotation.x = 10;

//Añadir mesh a la escena
scene.add( cube, sphere, cylinder, cone);


camera.position.z = 5;

//Stats
var stats;
stats = new Stats();
stats.setMode(2); // 0: fps, 1: ms, 2memory
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "100px";
stats.domElement.style.top = "10px";
document.getElementById("myStats").appendChild(stats.domElement);

//Orbit Controls
var controls;
controls = new THREE.OrbitControls(camera, renderer.domElement);
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();
    stats.update();
}
animate();