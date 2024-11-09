import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from 'gsap';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 30, 50);
controls.update();

const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(65, 65),
    new THREE.MeshBasicMaterial({ color: 0x6b8e23, side: THREE.DoubleSide })
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const building1 = new THREE.Mesh(
    new THREE.BoxGeometry(9, 8, 20),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
);
building1.position.set(8.25, 3, 20);
scene.add(building1);

const building2 = new THREE.Mesh(
    new THREE.BoxGeometry(9, 9, 18),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
);
building2.position.set(-8, 3, 21.5);
scene.add(building2);

const building3 = new THREE.Mesh(
    new THREE.BoxGeometry(9, 9, 20),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
);
building3.position.set(8.25, 3, -18.5);
scene.add(building3);

const building4 = new THREE.Mesh(
    new THREE.BoxGeometry(9, 9, 27),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
);
building4.position.set(-20, 3, -18.25);
scene.add(building4);

const mainRoad = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 60),
    new THREE.MeshBasicMaterial({ color: 0x333333, side: THREE.DoubleSide })
);
mainRoad.position.set(0, 0.01, 0);
mainRoad.rotation.x = -Math.PI / 2;
scene.add(mainRoad);

scene.add(new THREE.AmbientLight(0x404040, 1.5));

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, 20, 10);
scene.add(pointLight);

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
sphere.position.set(0, 1, 0);
scene.add(sphere);

gsap.timeline({ repeat: -1, yoyo: true }).to(sphere.position, {
    duration: 5,
    z: 25,
    ease: "power1.inOut"
});

const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
