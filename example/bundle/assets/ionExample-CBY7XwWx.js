import{S as f,$ as h,ad as A,W as x,a as T,d as y,k as l,Q as C}from"./three.module-CrM3Sdgj.js";import{G as I}from"./GLTFLoader-DesqJ6ah.js";import{D as R}from"./DRACOLoader-D_9vCzO5.js";import{g as k}from"./lil-gui.module.min-C0dNwVk_.js";import{E as z}from"./EnvironmentControls-CC2KExwZ.js";import{T as E}from"./TilesRenderer-DD_LqKmh.js";import{C as P}from"./CesiumIonAuthPlugin-DQczvI2H.js";import"./B3DMLoader-aPf5svSz.js";import"./readMagicBytes-Da5ueiou.js";import"./LoaderBase-CVSPpjX2.js";import"./PNTSLoader-BKmvYx0Z.js";import"./I3DMLoader-uk6OaXCg.js";import"./CMPTLoader-C0F-2Ze2.js";import"./GLTFExtensionLoader-Cf5SHTW2.js";import"./GoogleCloudAuthPlugin-Df8JamBV.js";let i,c,a,r,e;const v=localStorage.getItem("ionApiKey")??"put-your-api-key-here",s={ionAssetId:"40866",ionAccessToken:v,reload:u};S();w();function D(o,t){const n=new C,d=new l().crossVectors(o,t);return n.x=d.x,n.y=d.y,n.z=d.z,n.w=1+o.clone().dot(t),n.normalize(),n}function L(){e.fetchOptions.mode="cors";const o=new R;o.setDecoderPath("https://unpkg.com/three@0.153.0/examples/jsm/libs/draco/gltf/");const t=new I(e.manager);t.setDRACOLoader(o),e.manager.addHandler(/\.gltf$/,t),a.add(e.group)}function u(){e&&(a.remove(e.group),e.dispose(),e=null),localStorage.setItem("ionApiKey",s.ionAccessToken),e=new E,e.registerPlugin(new P({apiToken:s.ionAccessToken,assetId:s.ionAssetId})),e.addEventListener("load-tile-set",()=>{const o=new y;e.getBoundingSphere(o);const t=o.center.clone(),n=t.length(),d=t.normalize(),g=new l(0,1,0),p=D(d,g);e.group.quaternion.x=p.x,e.group.quaternion.y=p.y,e.group.quaternion.z=p.z,e.group.quaternion.w=p.w,e.group.position.y=-n}),L()}function S(){a=new f;const o=new h(new Uint8Array(64*64*4).fill(255),64,64);o.mapping=A,o.needsUpdate=!0,a.environment=o,r=new x({antialias:!0}),r.setClearColor(1383455),document.body.appendChild(r.domElement),r.domElement.tabIndex=1,i=new T(60,window.innerWidth/window.innerHeight,1,1e5),i.position.set(100,100,-100),i.lookAt(0,0,0),c=new z(a,i,r.domElement),c.adjustHeight=!1,c.minDistance=1,c.maxAltitude=Math.PI,u(),m(),window.addEventListener("resize",m,!1);const t=new k;t.width=300;const n=t.addFolder("Ion");n.add(s,"ionAssetId"),n.add(s,"ionAccessToken"),n.add(s,"reload"),n.open()}function m(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio)}function w(){requestAnimationFrame(w),e&&(c.update(),e.setCamera(i),e.setResolutionFromRenderer(i,r),i.updateMatrixWorld(),e.update(),r.render(a,i))}
