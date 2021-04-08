const scene = new THREE.Scene();
//Camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );        
//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Sombrero
const Som1 = new THREE.Mesh( new THREE.BoxGeometry(1.5,0.3,1), new THREE.MeshBasicMaterial( { color: 0xD50005 } ) );
const Som2 = new THREE.Mesh( new THREE.BoxGeometry(2.7,0.3,1), new THREE.MeshBasicMaterial( { color: 0xD50005 } ) );
Som1.position.y = 3.5;
Som2.position.y = 3.2;
Som2.position.x = 0.3;
scene.add(Som1, Som2);

//Cabeza
const cab1 = new THREE.Mesh( new THREE.BoxGeometry(1.8,1.5,1), new THREE.MeshBasicMaterial( { color: 0xF1AD06 } ) );
const nar1 = new THREE.Mesh( new THREE.BoxGeometry(0.6,0.6,1), new THREE.MeshBasicMaterial( { color: 0xF1AD06 } ) );
const nar2 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0xF1AD06 } ) );
const ment = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0xF1AD06 } ) );
const ojo = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.6,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
cab1.position.y = 2.3;
cab1.position.x = 0.15;
nar1.position.y = 2.45;
nar1.position.x = 1.35;
nar2.position.y = 2.3;
nar2.position.x = 1.8;
ment.position.y = 1.7;
ment.position.x = 1.2;
ojo.position.y = 2.75;
ojo.position.x = 0.6;
scene.add(cab1, nar1, nar2, ment, ojo);

//Bigote, Cabello
const cabel1 = new THREE.Mesh( new THREE.BoxGeometry(0.9,0.9,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
const cabel2 = new THREE.Mesh( new THREE.BoxGeometry(0.6,0.9,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
const orej = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.6,1), new THREE.MeshBasicMaterial( { color: 0xF1AD06 } ) );
const cab3 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0xF1AD06 } ) );
const barb1 = new THREE.Mesh( new THREE.BoxGeometry(1.2,0.3,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
const barb2 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
cabel1.position.y = 2.6;
cabel1.position.x = -0.6;
cabel2.position.y = 2.3;
cabel2.position.x = -1.05;
orej.position.y = 2.45;
orej.position.x = -0.9;
cab3.position.y = 2.6;
cab3.position.x = -0.3;
barb1.position.y = 2;
barb1.position.x = 1.05;
barb2.position.y = 2.3;
barb2.position.x = 0.9;
scene.add(cabel1, cabel2, orej, cab3, barb1, barb2);

//Cuerpo

const cue1 = new THREE.Mesh( new THREE.BoxGeometry(1.8,1.2,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
const cue2 = new THREE.Mesh( new THREE.BoxGeometry(2.4,0.9,1), new THREE.MeshBasicMaterial( { color: 0xD50005 } ) );
const cue3 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.6,1), new THREE.MeshBasicMaterial( { color: 0xD50005 } ) );
const cue4 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0xD50005 } ) );
const cue5 = new THREE.Mesh( new THREE.BoxGeometry(0.6,0.3,1), new THREE.MeshBasicMaterial( { color: 0xD50005 } ) );
const bot1 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0xF1AD06 } ) );
const bot2 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0xF1AD06 } ) );
cue1.position.y = 0.95;
cue1.position.x = -0.15;
cue2.position.y = 0.5;
cue2.position.x = 0.15;
cue3.position.y = 1.25;
cue3.position.x = -0.3;
cue4.position.y = 1.1;
cue4.position.x = 0.6;
cue5.position.y = -0.1;
cue5.position.x = 0.15;
bot1.position.y = 0.5;
bot1.position.x = -0.3;
bot2.position.y = 0.5;
bot2.position.x = 0.6;
scene.add(cue1, cue2, cue3, cue4, cue5, bot1, bot2);

//Brazo izquierdo
const izq1 = new THREE.Mesh( new THREE.BoxGeometry(0.9,0.6,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
const izq2 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
const izq3 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
const manoi1 = new THREE.Mesh( new THREE.BoxGeometry(0.6,0.9,1), new THREE.MeshBasicMaterial( { color: 0xF1AD06 } ) );
const manoi2 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0xF1AD06 } ) );
izq1.position.y = 0.95;
izq1.position.x = 1.2;
izq2.position.y = 0.8;
izq2.position.x = 1.8;
izq3.position.y = 0.5;
izq3.position.x = 1.2;
manoi1.position.y = 0.2;
manoi1.position.x = 1.65;
manoi2.position.y = 0.2;
manoi2.position.x = 1.2;
scene.add(izq1, izq2, izq3, manoi1, manoi2);

//Brazo derecho
const der1 = new THREE.Mesh( new THREE.BoxGeometry(0.9,0.6,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
const der2 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
const der3 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
const manod1 = new THREE.Mesh( new THREE.BoxGeometry(0.6,0.9,1), new THREE.MeshBasicMaterial( { color: 0xF1AD06 } ) );
const manod2 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0xF1AD06 } ) );
der1.position.y = 0.95;
der1.position.x = -0.9;
der2.position.y = 0.8;
der2.position.x = -1.5;
der3.position.y = 0.5;
der3.position.x = -0.9;
manod1.position.y = 0.2;
manod1.position.x = -1.35;
manod2.position.y = 0.2;
manod2.position.x = -0.9;
scene.add(der1, der2, der3, manod1, manod2);

//Pierna Izquierda
const pierd = new THREE.Mesh( new THREE.BoxGeometry(0.9,0.6,1), new THREE.MeshBasicMaterial( { color: 0xD50005 } ) );
const pied1 = new THREE.Mesh( new THREE.BoxGeometry(0.9,0.6,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
const pied2 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
pierd.position.y = -0.25;
pierd.position.x = -0.6;
pied1.position.y = -0.85;
pied1.position.x = -0.9;
pied2.position.y = -1;
pied2.position.x = -1.5;
scene.add(pierd, pied1, pied2);

//Pierna Izquierda
const pieri = new THREE.Mesh( new THREE.BoxGeometry(0.9,0.6,1), new THREE.MeshBasicMaterial( { color: 0xD50005 } ) );
const piei1 = new THREE.Mesh( new THREE.BoxGeometry(0.9,0.6,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
const piei2 = new THREE.Mesh( new THREE.BoxGeometry(0.3,0.3,1), new THREE.MeshBasicMaterial( { color: 0x776100 } ) );
pieri.position.y = -0.25;
pieri.position.x = 0.9;
piei1.position.y = -0.85;
piei1.position.x = 1.2;
piei2.position.y = -1;
piei2.position.x = 1.8;
scene.add(pieri, piei1, piei2);

//Stats
var stats;
stats = new Stats();
stats.setMode(2); // 0: fps, 1: ms, 2memory
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "100px";
stats.domElement.style.top = "10px";
document.getElementById("myStats").appendChild(stats.domElement);

//Orbit Control
var controls;
controls = new THREE.OrbitControls(camera, renderer.domElement);

camera.position.z = 5;
    function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();
    stats.update();
}
animate();