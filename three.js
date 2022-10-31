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
const fourth = document.querySelector("#fourth")
const fifth = document.querySelector("#fifth")
const sixth = document.querySelector("#sixth")
const seventh = document.querySelector("#seventh")
const eighth = document.querySelector("#eigth")
const nineth = document.querySelector("#nineth")

var model
var model1
var model2
var model3
var model4
var model5
var model6
var model7
var model8
var model9

// GLTF Loaders:

const loader = new GLTFLoader();
const loader1 = new GLTFLoader();
const loader2 = new GLTFLoader();

loader.load("./3Dobj/Reichsbank/Reichsbank.gltf", function(gltf) {
  model = gltf.scene

  scene.add(gltf.scene)
  render()
})

loader1.load("./3Dobj/Reichsbank/Reichsbank.gltf", function(gltf) {
  model1 = gltf.scene

  scene1.add(gltf.scene)
  render()
})




// render for the 3d Objects:

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#first"),
  antialias: true
});

const renderer1 = new THREE.WebGLRenderer({
  canvas: document.querySelector("#second"),
  antialias: true
});

// const renderer2 = new THREE.WebGLRenderer({
//   canvas: document.querySelector("#third"),
//   antialias: true
// })


// Resizing function so that the proportions of the 3d Object to the canvas are correct

function resize() {
  requestAnimationFrame(resize);

  let width = contain.clientWidth;
  let height = contain.clientHeight;


  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer1.setSize(width, height)
  camera1.aspect = width/height
  camera1.updateProjectionMatrix()
}


// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);



// Setting Camera position:

function cameraPos(cam) {
  cam.position.setZ(30)
  cam.position.setY(20)
}

cameraPos(camera)
cameraPos(camera1)


// Lights


// Light for first Obj:
const pointLight = new THREE.PointLight(0xffffff);
const pointLight1 = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 30, 50)
pointLight1.position.set(0, 30, -50)

// Light for second Obj:

const pointLight2 = new THREE.PointLight(0xffffff);
const pointLight3 = new THREE.PointLight(0xffffff);
pointLight2.position.set(0, 30, 50)
pointLight3.position.set(0, 30, -50)

// Light for third Obj:

const pointLight4 = new THREE.PointLight(0xffffff);
const pointLight5 = new THREE.PointLight(0xffffff);
pointLight4.position.set(0, 30, 50)
pointLight5.position.set(0, 30, -50)

// Light for fourth obj:

const pointLight6 = new THREE.PointLight(0xffffff);
const pointLight7 = new THREE.PointLight(0xffffff);
pointLight6.position.set(0, 30, 50)
pointLight7.position.set(0, 30, -50)

// 

const controls = new OrbitControls(camera, renderer.domElement);
const controls1 = new OrbitControls(camera1, renderer1.domElement)
// const controls2 = new OrbitControls(camera, renderer2.domElement)


// Adding the lights to the scene
addScene(scene, pointLight, pointLight1)
addScene(scene1, pointLight2, pointLight3)

function addScene(scene, light, light2) {
  scene.add(light)
  scene.add(light2)
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

    if(model1) {
      model1.rotation.y += 0.001
    }

    if(model2) {
      model2.rotation.y += 0.001
    }

  }

  requestAnimationFrame(render)
  renderer.render(scene, camera)
  renderer1.render(scene1, camera1)
  // renderer2.render(scene2, camera2)
}

render()
resize()

console.log("test-after-THREE");
