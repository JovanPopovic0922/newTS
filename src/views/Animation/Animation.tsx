import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const OrbitControls : any = require("three-orbitcontrols");

const basicLight = new THREE.DirectionalLight(0xefefff, 0.2);
const light2 = new THREE.RectAreaLight(0xffefef, 5, 100, 100);
const light3 = new THREE.RectAreaLight(0xffefef, 1.5, 40, 40);
const light4 = new THREE.SpotLight(0xffefef, 1);
const light5 = new THREE.SpotLight(0xffefef, 1);

// animation actions
let action1 : any;
let action2 : any;
let action3 : any;
let action4 : any;
let action5 : any;
let action6 : any;
let action7 : any;
let action8 : any;

export default function Animation(){

    const modelFile = "/glb/mainAnimation.glb";
    const [loading, setLoading] = useState(true);
    var model : any;
    const camera: any = useRef(null);
    const renderer: any = useRef(null);
    const mixer: any = useRef(null);
    const controls: any = useRef(null);
    let scene: any;
    let container: any;
    let prevTime: any = Date.now();
    let theta = 0;
    let width = 800;
    let height = 500;
    let light2x = 6;
    let light3Power = 0;
    let eyelightpower = 0;
    let animations : any ;

    useEffect(() => {

        setTimeout(() => {
                        console.log("here Model File URL:", renderer.current)
                renderer.current.setAnimationLoop(null);        // pause the animation

        }, 3000);

        if(typeof(modelFile) === "string"){
            Init();
            Animate();
        }
    });

    const Init = () => {
         theta = 0
         camera.current = null;
         renderer.current = null;
        mixer.current = null;
         scene = null;
        container = document.getElementById('model-fbx-container');
         container.innerHTML = "";
         width = container.offsetWidth;

         camera.current = new THREE.PerspectiveCamera(20, width / height, 1, 10000);
         camera.current.position.y = 0;
         camera.current.position.x = 50;
         camera.current.position.z = 0;
         camera.current.rotation.x = 0;
         camera.current.rotation.y = 0;
         camera.current.rotation.z = 0;

/// setting scene pros
        scene = new THREE.Scene();
        scene.background = new THREE.Color("#191919");
// // setting and adding lights
    //  basiclight
//         basicLight.position.set(110, 10, 10);
        basicLight.position.set(20, 5, 0);
        scene.add(basicLight);
    // light 2
        light2.rotation.set(30, 30, 0);
        light2.position.set(6, 0, 6);
//         light2.rotation.set(30, 30, 0);
//         light2.position.set(6, 0, 6);
        // light2.lookAt(5, 7, 0);
        light2.power = 100000;
        scene.add(light2);
    //  aboveLight
        light3.rotation.set(30, 0, 0);
        light3.position.set(0, 20, 0);
        light3.power = 2500;
        light3.rotation.set(30, 0, 0);
        light3.position.set(10, 7, 0);
        light3.power = 15000;
//          scene.add(light3);
     //eye lights    
         light4.position.set(-2.4, 11.6, 10);
         light4.target.position.x = 0;
         light4.target.position.y = 11.6;
         light4.target.position.z = 10;
         light4.angle = Math.PI / 2;
         light4.penumbra = 1;
         light4.decay = 2;
         light4.distance = 100;
         light4.intensity = 54;
         light4.power = 600;
//          scene.add(light4.target);
//          scene.add(light4);

         light5.position.set(2, 11.7, 10);
         light5.target.position.x = 0;
         light5.target.position.y = 10.6;
         light5.target.position.z = 100;
         light5.angle = Math.PI / 5;
         light5.penumbra = 1;
         light5.decay = 1;
         light5.distance = 4;
         light5.intensity = 54;
         light5.power = 500;
 
//          scene.add(light5.target);
//          scene.add(light5);
        lightControl();
       
         loadGlb();
         renderer.current = new THREE.WebGLRenderer();
         renderer.current.autoClear = false;
         renderer.current.setPixelRatio(window.devicePixelRatio);
         renderer.current.setSize(width, height);
         renderer.current.outputEncoding = THREE.sRGBEncoding;
         container.appendChild(renderer.current.domElement);
         controls.current = new OrbitControls(camera.current,renderer.current.domElement);
         controls.current.rotateSpeed = 1.0;
         controls.current.zoomSpeed = 1.2;
         controls.current.panSpeed = 0.8;
         controls.current.noZoom = true;
         controls.current.noPan = true;
         controls.current.staticMoving = true;
         controls.current.dynamicDampingFactor = 0.3;
//          controls.current.update();
     }
     const loadGlb = () => {
         const loaderGltf = new GLTFLoader();
         
         loaderGltf.load(modelFile, (gltf : any) => {
             model = gltf.scene; 
             model.children[10].visible = false;
             model.children[11].visible = false;
             model.children[12].visible = false;
             model.scale.set(22, 22, 22);
          
             scene.add(model);
             let skeleton: any = new THREE.SkeletonHelper(model);
             skeleton.visible = false;
             scene.add(skeleton);
             animations = gltf.animations;
             mixer.current = new THREE.AnimationMixer(model);
             action1 = mixer.current.clipAction(animations[0]); // comment this out
             action2 = mixer.current.clipAction(animations[1]); // comment this out
             action3 = mixer.current.clipAction(animations[2]); // comment this out
             action4 = mixer.current.clipAction(animations[3]); // comment this out
             action5 = mixer.current.clipAction(animations[4]); // comment this out
             action6 = mixer.current.clipAction(animations[5]); // comment this out
             action7 = mixer.current.clipAction(animations[6]); // comment this out
       
            action1.play(); // comment this out
            action2.play(); // comment this out
            action3.play(); // comment this out
            action4.play(); // comment this out
            action5.play(); // comment this out//

             Animate();
         },
         (xhr: any) => {
             console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
         },
         (error: any) => {
             console.log(error)
         })
     }
     const lightControl = () => {
         light2x = light2x - 0.1; 
         if(light2x > -3){
             light2.position.set(light2x, 0, 6);
             scene.add(light2);
             setTimeout(() => lightControl(), 60);
             return;
         } else {

             setTimeout(() => mainLinkAnimation(), 6000);
             setTimeout(()=> {
                action1.paused = true;
                action2.paused = true;
                action3.paused = true;
                action4.paused = true;
                action5.paused = true;
                
             }, 6000)
           
             // eyeLightControl();
             // addLight3();
         }
         return; 
     };

     const mainLinkAnimation = () => {
        model.children[10].visible = true;
        model.children[11].visible = true;
        model.children[12].visible = true;
        action6.play();
        action7.play();
        setTimeout(() => {
                action6.paused = true;
                action7.paused = true
        }, 9000);
     }
     // const addLight3 = () => {
     //     var timers : any;
     //     if( light3Power < 10000 ) {
     //         console.log(light3Power);
     //         timers = setTimeout(()=>{
     //             light3Power = light3Power + 300;
     //             light3.power = light3Power;
     //             addLight3();
     //         }, 60);
     //     }
     //     else{
     //         clearTimeout(timers);
     //         mixer.current = new THREE.AnimationMixer(model);
     //         let action: any = mixer.current.clipAction(animations[1]); // comment this out
     //         action.play(); // comment this out
     //         setTimeout(()=>{
     //             action.stop();
               
     //         }, 1100)
     //         Animate();
     //         return;
     //     }
     // }
// //    const eyeLightControl = () =>{
// //         var timer : any;
// //         eyelightpower = eyelightpower + 10;
// //         if(eyelightpower < 200) {
// //             light4.power = eyelightpower;
// //             light5.power= eyelightpower;
// //             timer = setTimeout(()=>{ eyeLightControl() }, 120);
// //         } else {
// //             clearTimeout(timer);
// //         }
// //    }
  
     const Animate = () => {
         requestAnimationFrame(Animate);
         controls.current.update();
         render();
     }
  
     const render = () => {
        theta += 0.1;
         if (mixer.current) {
             const time = Date.now();
             mixer.current.update((time - prevTime) * 0.001);
             prevTime = time;
         }
         if(renderer.current){
             //console.log(camera.current.layers.toggle);
             renderer.current.render(scene, camera.current);
         }
     }


    return (
         <div className="container">
             <div id="model-fbx-container"></div>
          </div>
)
}