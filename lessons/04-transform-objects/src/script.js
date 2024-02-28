import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Group
const group = new THREE.Group()
scene.add(group)

/**
 * Objects
 */
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 }),
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
)
group.add(cube2)
cube2.position.x = -0.5
cube2.scale.x = 0.25
cube2.scale.y = 2
cube2.scale.z = 2

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff }),
)
group.add(cube3)
cube3.position.x = 0.5
cube3.scale.x = 0.25
cube3.scale.y = 2
cube3.scale.z = 2

group.rotation.x = - Math.PI / 4
group.rotation.y = Math.PI / 8
group.rotation.reorder('YXZ')

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)