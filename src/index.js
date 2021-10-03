import './style.css';

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import { addWallLighting, addRoom } from './common';

let camera, scene, canvas, cameraControls, renderer

init()
animate()

function init() {
  scene = new THREE.Scene();
  canvas = document.querySelector("#canvas");
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500);
  camera.position.set( 0, 75, 160 );
  cameraControls = new OrbitControls( camera, canvas );
  cameraControls.target.set( 0, 40, 0 );
  cameraControls.maxDistance = 400;
  cameraControls.minDistance = 10;
  cameraControls.update();

  // Set up the renderer
  renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Add lighting to the scene
  addWallLighting(scene);

  addRoom(scene);
}

// Animate the scene
function animate() {
  renderer.render( scene, camera );

  requestAnimationFrame( animate );
};