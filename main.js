import * as THREE from 'https://unpkg.com/three/build/three.module.js'

const scene = new THREE.Scene();//Creating the scene
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);//Creating camera and defining aspect radio

const render = new THREE.WebGL1Renderer();

render.setPixelRatio(window.devicePixelRatio);
render.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild( render.domElement );
window.addEventListener( 'resize', onWindowResize, false );
// camara.position.setZ(30);
render.render(scene, camara);

var sol = new THREE.DirectionalLight(0xffffff , 1.5);
sol.position.set(-10, 8, 3).normalize();
scene.add(sol);

//Add the earth
const earth = new THREE.TextureLoader().load('https://jrueda.github.io/tierraGeo/images/earth.jpg');
const geoTierra = new THREE.SphereGeometry(13,32,32);
const material = new THREE.MeshPhongMaterial({map: earth});
const esfera = new THREE.Mesh(geoTierra, material);

//Add space
const spaceTexture = new THREE.TextureLoader().load('moon.jpg');
scene.background = spaceTexture;

// const material = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0033ff, specular: 0x555555, shininess: 30 } );
esfera.position.z = -45;
// esferaM.position.z = -45;
// esferaM.position.x = -20;
// esferaM.position.y = 15;
scene.add(esfera);

//Animating the cube
function animate(){
  requestAnimationFrame(animate);//Recursive
  esfera.rotation.y += 0.01;
  // esferaM.rotation.y += 0.005;
  render.render(scene, camara);
}

function onWindowResize() {
  camara.aspect = window.innerWidth / window.innerHeight;
  camara.updateProjectionMatrix();
  render.setSize( window.innerWidth, window.innerHeight );
  render.render(scene, camara);
}

animate();
onWindowResize();
