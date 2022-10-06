import * as THREE from "./three/build/three.module.js"

const  scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
    canvas: document.getElementById("bg")
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347});
const torus = new THREE.Mesh(geometry, material);

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(0, -0, 20)

const lightHelper = new THREE.PointLightHelper(pointLight)



scene.add(lightHelper)
scene.add(pointLight)
scene.add(torus)

function animate() {
  torus.rotation.y += 0.01

    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()
