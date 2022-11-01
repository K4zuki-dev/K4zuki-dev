import * as THREE from 'https://threejs.org/build/three.module.js'; 
import { PointLightHelper } from 'https://threejs.org/build/three.module.js';
import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from "./three/examples/jsm/loaders/GLTFLoader.js"

console.log(THREE, OrbitControls);


const scene = new THREE.Scene()
const scene1 = new THREE.Scene();
const scene2 = new THREE.Scene()
const scene3 = new THREE.Scene()
const scene4 = new THREE.Scene()
const scene5 = new THREE.Scene()
const scene6 = new THREE.Scene()
const scene7 = new THREE.Scene()

const contain = document.getElementById("getSize")

const div = document.getElementById("container")

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const camera3 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const camera4 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const camera5 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const camera6 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const camera7 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);


const first = document.querySelector("#first")
const second = document.querySelector("#second")
const third = document.querySelector("#third")
const fourth = document.querySelector("#fourth")
const fifth = document.querySelector("#fifth")
const sixth = document.querySelector("#sixth")
const seventh = document.querySelector("#seventh")
const eighth = document.querySelector("#eighth")
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
const loader3 = new GLTFLoader();
const loader4 = new GLTFLoader();
const loader5 = new GLTFLoader();
const loader6 = new GLTFLoader();
const loader7 = new GLTFLoader();



// Reichsbank

// loader.load("./3Dobj/Reichsbank/Reichsbank.gltf", function(gltf) {
//   model = gltf.scene

//   scene.add(gltf.scene)
//   render()
// })

// Führerbau am Königsplatz in München

loader1.load("./3Dobj/Führerbau München/Führerbau.gltf", function(gltf) {
  model1 = gltf.scene

  scene1.add(gltf.scene)
  render()
})

// Große Halle

loader4.load("./3Dobj/Große Halle/GroßeHalle.gltf", function(gltf) {
  model4 = gltf.scene

  scene4.add(gltf.scene)
  render()
})

// Zeppelin:

loader2.load("./3Dobj/zep/Zeppelin.gltf", function(gltf) {
  model2 = gltf.scene

  scene2.add(gltf.scene)
  render()
})


// Olympia Stadion

loader7.load("./3Dobj/OlympiaStadion/Olympia.gltf", function(gltf) {
  model7 = gltf.scene

  scene7.add(gltf.scene)
  render()
})



// render for the 3d Objects:

// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector("#first"),
//   antialias: true
// });

const renderer1 = new THREE.WebGLRenderer({
  canvas: document.querySelector("#second"),
  antialias: true
});

const renderer2 = new THREE.WebGLRenderer({
  canvas: document.querySelector("#third"),
  antialias: true
})





const renderer4 = new THREE.WebGLRenderer({
  canvas: document.querySelector("#fifth"),
  antialias: true
});

const renderer7 = new THREE.WebGLRenderer({
  canvas: document.querySelector("#eighth"),
  antialias: false
});



// Resizing function so that the proportions of the 3d Object to the canvas are correct

function resize() {
  requestAnimationFrame(resize);

  let width = contain.clientWidth;
  let height = contain.clientHeight;


  // renderer.setSize(width, height);
  // camera.aspect = width / height;
  // camera.updateProjectionMatrix();

  renderer1.setSize(width, height)
  camera1.aspect = width/height
  camera1.updateProjectionMatrix()

  renderer2.setSize(width, height)
  camera2.aspect = width/height
  camera2.updateProjectionMatrix()

  renderer4.setSize(width, height)
  camera4.aspect = width/height
  camera4.updateProjectionMatrix()

  renderer7.setSize(width, height)
  camera7.aspect = width/height
  camera7.updateProjectionMatrix()

}


// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);



// Setting Camera position:

function cameraPos(cam, z, y) {
  cam.position.setZ(z)
  cam.position.setY(y)
}


cameraPos(camera, 30, 20)
cameraPos(camera1, -100, 20)
cameraPos(camera2, -500, 20)
cameraPos(camera4, 400, 200)
cameraPos(camera7, 200, 100)


// Lights


// Light for first Obj:
const pointLight = new THREE.PointLight(0x828282);
const pointLight1 = new THREE.PointLight(0x828282);
const pointLight2 = new THREE.PointLight(0x828282);
const pointLight3 = new THREE.PointLight(0x828282);

pointLight.position.set(0, 100, 50)
pointLight1.position.set(0, 100, -50)
pointLight2.position.set(50, 100, 0)
pointLight3.position.set(-50, 100, 0)

// Light for second Obj:

const pointLight4 = new THREE.PointLight(0x828282);
const pointLight5 = new THREE.PointLight(0x828282);
const pointLight6 = new THREE.PointLight(0x828282);
const pointLight7 = new THREE.PointLight(0x828282);

pointLight4.position.set(0, 50, 350)
pointLight5.position.set(0, 50, -350)
pointLight6.position.set(350, 50, 0)
pointLight7.position.set(-350, 50, 0)

// Light for third Obj:

const pointLight9 = new THREE.PointLight(0x828282);
const pointLight10 = new THREE.PointLight(0x828282);
const pointLight11 = new THREE.PointLight(0x828282);
const pointLight12 = new THREE.PointLight(0x828282);

pointLight9.position.set(0, 50, 350)
pointLight10.position.set(0, 50, -350)
pointLight11.position.set(350, 50, 0)
pointLight12.position.set(-350, 50, 0)

// Light for fourth obj:


// Light for fith obj:

const pointLight16 = new THREE.PointLight(0x828282);
const pointLight17 = new THREE.PointLight(0x828282);
const pointLight18 = new THREE.PointLight(0x828282);
const pointLight19 = new THREE.PointLight(0x828282);
pointLight16.position.set(0, 400, 350)
pointLight17.position.set(0, 400, -350)
pointLight18.position.set(350, 400, 0)
pointLight19.position.set(-350, 400, 0)

// Light for sixth obj:

// Light for seventh obj:

// Light for eigth obj:

const pointLight28 = new THREE.PointLight(0x828282);
const pointLight29 = new THREE.PointLight(0x828282);
const pointLight30 = new THREE.PointLight(0x828282);
const pointLight31 = new THREE.PointLight(0x828282);
pointLight28.position.set(0, 400, 350)
pointLight29.position.set(0, 400, -350)
pointLight30.position.set(350, 400, 0)
pointLight31.position.set(-350, 400, 0)

// 


// const controls = new OrbitControls(camera, renderer.domElement);
const controls1 = new OrbitControls(camera1, renderer1.domElement)
const controls2 = new OrbitControls(camera2, renderer2.domElement)
//insert other controls here:

const controls4 = new OrbitControls(camera4, renderer4.domElement)
const controls7 = new OrbitControls(camera7, renderer7.domElement)

// Adding the lights to the scene
addScene(scene, pointLight, pointLight1, pointLight2, pointLight3)
addScene(scene1, pointLight4, pointLight5, pointLight6, pointLight7)
addScene(scene2, pointLight9, pointLight10, pointLight11, pointLight12)

addScene(scene4, pointLight16, pointLight17, pointLight18, pointLight19)
addScene(scene7, pointLight28, pointLight29, pointLight30, pointLight31)

function addScene(scene, light, light2, light3, light4) {
  scene.add(light)
  scene.add(light2)
  scene.add(light3)
  scene.add(light4)
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

// changeBool(first)
changeBool(second)
changeBool(third)
// changeBool(fourth)
changeBool(fifth)
changeBool(eighth)

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

    if(model4) {
      model4.rotation.y += 0.001
    }

    if(model2) {
      model2.rotation.y +=0.00001
    }

    if(model7) {
      model7.rotation.y +=0.0001
    }

  }

  requestAnimationFrame(render)
  // renderer.render(scene, camera)
  renderer1.render(scene1, camera1)
  renderer2.render(scene2, camera2)
  renderer4.render(scene4, camera4)
  renderer7.render(scene7, camera7)
  // renderer2.render(scene2, camera2)
}

render()
resize()

console.log("test-after-THREE");
