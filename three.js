import * as THREE from 'https://threejs.org/build/three.module.js'; 
import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from "./three/examples/jsm/loaders/GLTFLoader.js"

console.log(THREE, OrbitControls);


const scene = new THREE.Scene()
const scene1 = new THREE.Scene();
const scene2 = new THREE.Scene()

const contain = document.getElementById("getSize")

const div = document.getElementById("container")

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const first = document.querySelector("#first")
const second = document.querySelector("#second")
const third = document.querySelector("#third")

var model

const loader = new GLTFLoader();

loader.load("./3Dobj/Reichsbank/Reichsbank.gltf", function(gltf) {
  model = gltf.scene

  scene.add(gltf.scene)
  render()
})

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#first"),
  antialias: true
});

// const renderer1 = new THREE.WebGLRenderer({
//   canvas: document.querySelector("#second"),
//   antialias: true
// });

// const renderer2 = new THREE.WebGLRenderer({
//   canvas: document.querySelector("#third"),
//   antialias: true
// })


function resize() {
  requestAnimationFrame(resize);

  let width = contain.clientWidth;
  let height = contain.clientHeight;


  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // renderer1.setSize(width, height)
  // camera1.aspect = width/height
  // camera1.updateProjectionMatrix()

  // renderer2.setSize(width, height)
  // camera2.aspect = width/height
  // camera2.updateProjectionMatrix()
}


// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);

// Setting Camera position

function cameraPos(cam) {
  cam.position.setZ(30)
  cam.position.setY(20)
}

cameraPos(camera)
cameraPos(camera1)
cameraPos(camera2)

const pointLight = new THREE.PointLight(0xffffff);
const pointLight1 = new THREE.PointLight(0xffffff);
const pointLight2 = new THREE.PointLight(0xffffff);

pointLight.position.set(0, 30, 50)

const lightHelper = new THREE.PointLightHelper(pointLight);
const lightHelper1 = new THREE.PointLightHelper(pointLight1)
const lightHelper2 = new THREE.PointLightHelper(pointLight2)

const controls = new OrbitControls(camera, renderer.domElement);
// const controls1 = new OrbitControls(camera1, renderer1.domElement)
// const controls2 = new OrbitControls(camera2, renderer2.domElement)

addScene(scene, lightHelper, pointLight)
addScene(scene1, lightHelper1, pointLight1 )
addScene(scene2, lightHelper2, pointLight2 )

function addScene(scene, obj1, obj2) {
  scene.add(obj1)
  scene.add(obj2)
}

let bool = true

function changeBool(obj) {
  obj.addEventListener("pointerenter", function() {
    bool = false
  })
  
  obj.addEventListener("pointerleave", function() {
    bool = true
  })
  
}

changeBool(first)
changeBool(second)
changeBool(third)

// renderer.setClearColor (0x757876, 1)
// renderer1.setClearColor (0x757876, 1)
// renderer2.setClearColor (0x757876, 1)

function render() {
  if (bool) {
    if(model) {
      model.rotation.y += 0.001
    }
  }

  requestAnimationFrame(render)
  renderer.render(scene, camera)
  // renderer1.render(scene1, camera1)
  // renderer2.render(scene2, camera2)
}

render()
resize()

console.log("test-after-THREE");
