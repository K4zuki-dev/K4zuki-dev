console.log("Test-before-Load")

const body = document.body

window.onbeforeunload = function () {
  window.scroll(0, 0, 0, 0)
}

body.style.overflowY = "hidden"


// Starting animation:

const animObject = document.getElementById("start")
const animObject1 = document.getElementById("start1")

const h1 = document.getElementById("start-text")
const h2 = document.getElementById("start-text1")
const h3 = document.getElementById("start-text2")

window.onload = function() {
  setTimeout(animStart, 3000)
  setTimeout(animStart1, 2900)
  setTimeout(removeAnim, 3000)
  setTimeout(show, 500, h1)
  setTimeout(show, 600, h2) 
  setTimeout(show, 700, h3) 
}

function animStart() {
  animObject.classList.add("animation-start1")
}

function animStart1() {
  animObject1.classList.add("animation-start1")
}

function removeAnim() {
  animObject1.addEventListener("animationend", function(){
    animObject1.remove()
  })

  animObject.addEventListener("animationend", function(){
    animObject.remove()
  })

  body.style.overflowY = "scroll"
  
  const title = document.getElementById("title")
  title.classList.add("active")
}


let textArray = []
textArray  = document.querySelectorAll(".hide")

textArray.forEach(function(x) {
  x.style.top = "3em"
})

function show(line) {
  line.classList.add("show")
  line.addEventListener("animationend", function() {
    line.style.top = "0em"
  })
}

body.onscroll = function() {
  const reveal = document.getElementsByClassName("not-active")
  

  Array.from(reveal).forEach(function(x, index) {
    const top = reveal[index].getBoundingClientRect().top

    if (top + 400 < window.innerHeight) {
      x.classList.add("active")
    }
  });
}


const windowHeight = window.innerHeight
title.style.height = windowHeight + "px"
title.style.fontSize = "3em"


console.log("test-before-THREE");


// THREE JS STUFF:

import * as THREE from './three';
import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js';

console.log(THREE, OrbitControls);


const scene = new THREE.Scene();
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

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#first"),
  antialias: true
});

const renderer1 = new THREE.WebGLRenderer({
  canvas: document.querySelector("#second"),
  antialias: true
});

const renderer2 = new THREE.WebGLRenderer({
  canvas: document.querySelector("#third"),
  antialias: true
})


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

  renderer2.setSize(width, height)
  camera2.aspect = width/height
  camera2.updateProjectionMatrix()
};


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera1.position.setZ(30)
camera2.position.setZ(30)

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347});
const torus = new THREE.Mesh(geometry, material);

const geometry1 = new THREE.TorusGeometry(10, 3, 16, 100);
const material1 = new THREE.MeshStandardMaterial({color: 0xFF6347});
const torus1 = new THREE.Mesh(geometry1, material1);

const geometry2 = new THREE.TorusGeometry(10, 3, 16, 100);
const material2 = new THREE.MeshStandardMaterial({color: 0xFF6347});
const torus2 = new THREE.Mesh(geometry2, material2);

const pointLight = new THREE.PointLight(0xffffff);
const pointLight1 = new THREE.PointLight(0xffffff);
const pointLight2 = new THREE.PointLight(0xffffff);

const lightHelper = new THREE.PointLightHelper(pointLight);
const lightHelper1 = new THREE.PointLightHelper(pointLight1)
const lightHelper2 = new THREE.PointLightHelper(pointLight2)

const controls = new OrbitControls(camera, renderer.domElement);
const controls1 = new OrbitControls(camera1, renderer1.domElement)
const controls2 = new OrbitControls(camera2, renderer2.domElement)

addScene(scene, lightHelper, pointLight, torus)
addScene(scene1, lightHelper1, pointLight1, torus1)
addScene(scene2, lightHelper2, pointLight2, torus2)

function addScene(scene, obj1, obj2, obj3) {
  scene.add(obj1)
  scene.add(obj2)
  scene.add(obj3)
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

renderer.setClearColor (0x757876, 1)
renderer1.setClearColor (0x757876, 1)
renderer2.setClearColor (0x757876, 1)

function animate() {
  if (bool) {
    torus.rotation.y += .005
    torus1.rotation.y -= .005
    torus2.rotation.y += .005
  }

  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  renderer1.render(scene1, camera1)
  renderer2.render(scene2, camera2)
}

animate()
resize()

console.log("test-after-THREE");
