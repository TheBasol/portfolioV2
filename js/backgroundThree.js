import * as THREE from "./libs/three.module.js";

import { TrackballControls } from "./libs/TrackballControls.js";

let clock = new THREE.Clock();

let containerThree = document.getElementById('background-video')

// Crear una escena
var scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(25,28,50)");

// Crear una cámara
var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 4000);
camera.position.z = 5;

// Crear un renderizador
var renderer = new THREE.WebGLRenderer();
renderer.setSize(containerThree.clientWidth, containerThree.clientHeight);


containerThree.appendChild(renderer.domElement);

window.addEventListener( 'resize', onWindowResize );


let controls = new TrackballControls(camera,renderer.domElement)
controls.rotateSpeed = 10

const curve = new THREE.CatmullRomCurve3( [new THREE.Vector3(405.70557835101727, 178.5824276177019, 124.58328509604334),
	new THREE.Vector3(186.73050240730475, -282.1397386308326, 98.91374132855152),
	new THREE.Vector3(-572.2051283388612, -119.26423255313972, 66.96546011361437),
	new THREE.Vector3(-383.785318791128, 491.1365363371675, 47.869296953772746),
	new THREE.Vector3(-19.383808777698505, 530.9947919873539, -1297.7039212512673),
	new THREE.Vector3(117.11213087567171, 241.5317627844811, 429.3050504649827),
	new THREE.Vector3(-286.98648468459714, 25.621249729508406, -243.79918678216478),
	new THREE.Vector3(-390.0459798597382, 327.75399251586106, 14.461238429670686),
	new THREE.Vector3(-85.9578091914093, 579.4090005237579, -158.7869394110315),
	new THREE.Vector3(577.3621643511611, 275.64657116941777, 475.65511772310816)]
);

const geometry = new THREE.TubeGeometry( curve, 100, 80, 30, true );
console.log(geometry.normals)
const colorGeometry = new THREE.Color("rgb(155,164,241)");
const material = new THREE.MeshBasicMaterial( { color: colorGeometry, wireframe: true} );
const tube = new THREE.Mesh( geometry, material );
scene.add( tube );

function updateCameraPosition(){
  const time = clock.getElapsedTime();
  const looptime = 60;
	const t = ( time % looptime ) / looptime;
  const t2 = ( (time + 0.1) % looptime) / looptime
	
  const pos = tube.geometry.parameters.path.getPointAt( t );
  const pos2 = tube.geometry.parameters.path.getPointAt( t2 );
	
  camera.position.copy(pos);
  camera.lookAt(pos2);
}

function render() {
    renderer.render(scene, camera);
}

// Función para animar la escena
function animate() {
  requestAnimationFrame(animate);
  controls.update()
  updateCameraPosition()
  render();
}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(containerThree.clientWidth, containerThree.clientHeight);

  render();
}

// Iniciar la animación
animate();
