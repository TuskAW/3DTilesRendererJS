import{k as p,n as y,m as dt,p as J,d as pt,i as gt,ag as mt}from"./three.module-CrM3Sdgj.js";const M=new dt,q=new p,vt={};function bt(o){const{x:t,y:i,z:e}=o;o.x=e,o.y=t,o.z=i}function At(o){return-(o-Math.PI/2)}function ct(o){return-o+Math.PI/2}function ft(o,t,i={}){return M.theta=t,M.phi=ct(o),q.setFromSpherical(M),M.setFromVector3(q),i.lat=At(M.phi),i.lon=M.theta,i}function Q(o,t="E",i="W"){const e=o<0?i:t;o=Math.abs(o);const s=~~o,n=(o-s)*60,r=~~n,h=~~((n-r)*60);return`${s}° ${r}' ${h}" ${e}`}function Vt(o,t,i=!1){const e=ft(o,t,vt);let s,n;return i?(s=`${(y.RAD2DEG*e.lat).toFixed(4)}°`,n=`${(y.RAD2DEG*e.lon).toFixed(4)}°`):(s=Q(y.RAD2DEG*e.lat,"N","S"),n=Q(y.RAD2DEG*e.lon,"E","W")),`${s} ${n}`}const tt=new dt,$=new p,A=new p,Y=new p,wt=new p,S=new J,_=new J,N=new pt,g=new mt,it=new p,et=new p,O=new p,T=new p,st=new gt,yt=1e-12,xt=.1,nt=0,rt=1,ot=2;class _t{constructor(t=1,i=1,e=1){this.radius=new p(t,i,e)}intersectRay(t,i){return S.makeScale(...this.radius).invert(),N.center.set(0,0,0),N.radius=1,st.copy(t).applyMatrix4(S),st.intersectSphere(N,i)?(S.makeScale(...this.radius),i.applyMatrix4(S),i):null}getEastNorthUpFrame(t,i,e){return this.getEastNorthUpAxes(t,i,it,et,O,T),e.makeBasis(it,et,O).setPosition(T)}getEastNorthUpAxes(t,i,e,s,n,r=T){this.getCartographicToPosition(t,i,0,r),this.getCartographicToNormal(t,i,n),e.set(-r.y,r.x,0).normalize(),s.crossVectors(n,e).normalize()}getNorthernTangent(t,i,e,s=wt){return console.log("Ellipsoid: getNorthernTangent has been deprecated. Use getEastNorthUpAxes instead."),this.getEastNorthUpAxes(t,i,s,e,O),s.multiplyScalar(-1),e}getAzElRollFromRotationMatrix(t,i,e,s,n=nt){return n===rt?(g.set(-Math.PI/2,0,0,"XYZ"),_.makeRotationFromEuler(g).premultiply(e)):n===ot?(g.set(-Math.PI/2,0,Math.PI,"XYZ"),_.makeRotationFromEuler(g).premultiply(e)):_.copy(e),this.getEastNorthUpFrame(t,i,S).invert(),_.premultiply(S),g.setFromRotationMatrix(_,"ZXY"),s.azimuth=-g.z,s.elevation=g.x,s.roll=g.y,s}getRotationMatrixFromAzElRoll(t,i,e,s,n,r,c=nt){return this.getEastNorthUpFrame(t,i,S),g.set(s,n,-e,"ZXY"),r.makeRotationFromEuler(g).premultiply(S).setPosition(0,0,0),c===rt?(g.set(Math.PI/2,0,0,"XYZ"),_.makeRotationFromEuler(g),r.multiply(_)):c===ot&&(g.set(-Math.PI/2,0,Math.PI,"XYZ"),_.makeRotationFromEuler(g),r.multiply(_)),r}getCartographicToPosition(t,i,e,s){this.getCartographicToNormal(t,i,$);const n=this.radius;A.copy($),A.x*=n.x**2,A.y*=n.y**2,A.z*=n.z**2;const r=Math.sqrt($.dot(A));return A.divideScalar(r),s.copy(A).addScaledVector($,e)}getPositionToCartographic(t,i){this.getPositionToSurfacePoint(t,A),this.getPositionToNormal(t,$);const e=Y.subVectors(t,A);return i.lon=Math.atan2($.y,$.x),i.lat=Math.asin($.z),i.height=Math.sign(e.dot(t))*e.length(),i}getCartographicToNormal(t,i,e){return tt.set(1,ct(t),i),e.setFromSpherical(tt).normalize(),bt(e),e}getPositionToNormal(t,i){const e=this.radius;return i.copy(t),i.x/=e.x**2,i.y/=e.y**2,i.z/=e.z**2,i.normalize(),i}getPositionToSurfacePoint(t,i){const e=this.radius,s=1/e.x**2,n=1/e.y**2,r=1/e.z**2,c=t.x*t.x*s,h=t.y*t.y*n,d=t.z*t.z*r,l=c+h+d,u=Math.sqrt(1/l),a=A.copy(t).multiplyScalar(u);if(l<xt)return isFinite(u)?i.copy(a):null;const w=Y.set(a.x*s*2,a.y*n*2,a.z*r*2);let v=(1-u)*t.length()/(.5*w.length()),k=0,f,L,m,b,E,B,R,H,W,Z,K;do{v-=k,m=1/(1+v*s),b=1/(1+v*n),E=1/(1+v*r),B=m*m,R=b*b,H=E*E,W=B*m,Z=R*b,K=H*E,f=c*B+h*R+d*H-1,L=c*W*s+h*Z*n+d*K*r;const ut=-2*L;k=f/ut}while(Math.abs(f)>yt);return i.set(t.x*m,t.y*b,t.z*E)}calculateHorizonDistance(t,i){const e=this.calculateEffectiveRadius(t);return Math.sqrt(2*e*i+i**2)}calculateEffectiveRadius(t){const i=this.radius.x,s=1-this.radius.z**2/i**2,n=t*y.DEG2RAD,r=Math.sin(n)**2;return i/Math.sqrt(1-s*r)}getPositionElevation(t){this.getPositionToSurfacePoint(t,A);const i=Y.subVectors(t,A);return Math.sign(i.dot(t))*i.length()}copy(t){return this.radius.copy(t.copy),this}clone(){return new this.constructor().copy(this)}}const C=Math.PI,I=C/2,z=new p,F=new p,D=new p,lt=new J;let P=0;const G=[];function Et(o=!1){return o?(G[P]||(G[P]=new p),P++,G[P-1]):new p}function at(){P=0}class It extends _t{constructor(t,i,e,s=-I,n=I,r=0,c=2*C,h=0,d=0){super(t,i,e),this.latStart=s,this.latEnd=n,this.lonStart=r,this.lonEnd=c,this.heightStart=h,this.heightEnd=d}_getPoints(t=!1){const{latStart:i,latEnd:e,lonStart:s,lonEnd:n,heightStart:r,heightEnd:c}=this,h=y.mapLinear(.5,0,1,i,e),d=y.mapLinear(.5,0,1,s,n),l=Math.floor(s/I)*I,u=[[-C/2,0],[C/2,0],[0,l],[0,l+C/2],[0,l+C],[0,l+3*C/2],[i,n],[e,n],[i,s],[e,s],[0,s],[0,n],[h,d],[i,d],[e,d],[h,s],[h,n]],a=[],w=u.length;for(let v=0;v<=1;v++){const k=y.mapLinear(v,0,1,r,c);for(let f=0,L=w;f<L;f++){const[m,b]=u[f];if(m>=i&&m<=e&&b>=s&&b<=n){const E=Et(t);a.push(E),this.getCartographicToPosition(m,b,k,E)}}}return a}getBoundingBox(t,i){at();const{latStart:e,latEnd:s,lonStart:n,lonEnd:r}=this;if(s-e<C/2){const d=y.mapLinear(.5,0,1,e,s),l=y.mapLinear(.5,0,1,n,r);this.getCartographicToNormal(d,l,D),F.set(0,0,1),z.crossVectors(F,D),F.crossVectors(z,D),i.makeBasis(z,F,D)}else z.set(1,0,0),F.set(0,1,0),D.set(0,0,1),i.makeBasis(z,F,D);lt.copy(i).invert();const h=this._getPoints(!0);for(let d=0,l=h.length;d<l;d++)h[d].applyMatrix4(lt);t.makeEmpty(),t.setFromPoints(h)}getBoundingSphere(t,i){at();const e=this._getPoints(!0);t.makeEmpty(),t.setFromPoints(e,i)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class x{constructor(t,i,e,s,n="div"){this.parent=t,this.object=i,this.property=e,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),x.nextNameID=x.nextNameID||0,this.$name.id="lil-gui-name-"+ ++x.nextNameID,this.$widget=document.createElement(n),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(e)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class $t extends x{constructor(t,i,e){super(t,i,e,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function j(o){let t,i;return(t=o.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!i&&"#"+i}const St={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:j,toHexString:j},V={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},Ct={isPrimitive:!1,match:Array.isArray,fromHexString(o,t,i=1){const e=V.fromHexString(o);t[0]=(e>>16&255)/255*i,t[1]=(e>>8&255)/255*i,t[2]=(255&e)/255*i},toHexString:([o,t,i],e=1)=>V.toHexString(o*(e=255/e)<<16^t*e<<8^i*e<<0)},kt={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,t,i=1){const e=V.fromHexString(o);t.r=(e>>16&255)/255*i,t.g=(e>>8&255)/255*i,t.b=(255&e)/255*i},toHexString:({r:o,g:t,b:i},e=1)=>V.toHexString(o*(e=255/e)<<16^t*e<<8^i*e<<0)},Lt=[St,V,Ct,kt];class Mt extends x{constructor(t,i,e,s){var n;super(t,i,e,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(n=this.initialValue,Lt.find(r=>r.match(n))),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=j(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class X extends x{constructor(t,i,e){super(t,i,e,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ft extends x{constructor(t,i,e,s,n,r){super(t,i,e,"number"),this._initInput(),this.min(s),this.max(n);const c=r!==void 0;this.step(c?r:this._getImplicitStep(),c),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=100*i+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=l=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+l),this.$input.value=this.getValue())};let i,e,s,n,r,c=!1;const h=l=>{if(c){const u=l.clientX-i,a=l.clientY-e;Math.abs(a)>5?(l.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&d()}if(!c){const u=l.clientY-s;r-=u*this._step*this._arrowKeyMultiplier(l),n+r>this._max?r=this._max-n:n+r<this._min&&(r=this._min-n),this._snapClampSetValue(n+r)}s=l.clientY},d=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",d)};this.$input.addEventListener("input",()=>{let l=parseFloat(this.$input.value);isNaN(l)||(this._stepExplicit&&(l=this._snap(l)),this.setValue(this._clamp(l)))}),this.$input.addEventListener("keydown",l=>{l.code==="Enter"&&this.$input.blur(),l.code==="ArrowUp"&&(l.preventDefault(),t(this._step*this._arrowKeyMultiplier(l))),l.code==="ArrowDown"&&(l.preventDefault(),t(this._step*this._arrowKeyMultiplier(l)*-1))}),this.$input.addEventListener("wheel",l=>{this._inputFocused&&(l.preventDefault(),t(this._step*this._normalizeMouseWheel(l)))},{passive:!1}),this.$input.addEventListener("mousedown",l=>{i=l.clientX,e=s=l.clientY,c=!0,n=this.getValue(),r=0,window.addEventListener("mousemove",h),window.addEventListener("mouseup",d)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=a=>{const w=this.$slider.getBoundingClientRect();let v=(k=a,f=w.left,L=w.right,m=this._min,b=this._max,(k-f)/(L-f)*(b-m)+m);var k,f,L,m,b;this._snapClampSetValue(v)},i=a=>{t(a.clientX)},e=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",e)};let s,n,r=!1;const c=a=>{a.preventDefault(),this._setDraggingStyle(!0),t(a.touches[0].clientX),r=!1},h=a=>{if(r){const w=a.touches[0].clientX-s,v=a.touches[0].clientY-n;Math.abs(w)>Math.abs(v)?c(a):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else a.preventDefault(),t(a.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},l=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",a=>{this._setDraggingStyle(!0),t(a.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",e)}),this.$slider.addEventListener("touchstart",a=>{a.touches.length>1||(this._hasScrollBar?(s=a.touches[0].clientX,n=a.touches[0].clientY,r=!0):c(a),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},{passive:!1}),this.$slider.addEventListener("wheel",a=>{if(Math.abs(a.deltaX)<Math.abs(a.deltaY)&&this._hasScrollBar)return;a.preventDefault();const w=this._normalizeMouseWheel(a)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(l,400)},{passive:!1})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+i,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:e}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,e=-t.wheelDelta/120,e*=this._stepExplicit?1:10),i+-e}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){const i=Math.round(t/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Dt extends x{constructor(t,i,e,s){super(t,i,e,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(n=>{const r=document.createElement("option");r.innerHTML=n,this.$select.appendChild(r)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.innerHTML=i===-1?t:this._names[i],this}}class zt extends x{constructor(t,i,e){super(t,i,e,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let ht=!1;class U{constructor({parent:t,autoPlace:i=t===void 0,container:e,width:s,title:n="Controls",injectStyles:r=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{h.code!=="Enter"&&h.code!=="Space"||(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),c&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!ht&&r&&(function(h){const d=document.createElement("style");d.innerHTML=h;const l=document.querySelector("head link[rel=stylesheet], head style");l?document.head.insertBefore(d,l):document.head.appendChild(d)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),ht=!0),e?e.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation())}add(t,i,e,s,n){if(Object(e)===e)return new Dt(this,t,i,e);const r=t[i];switch(typeof r){case"number":return new Ft(this,t,i,e,s,n);case"boolean":return new $t(this,t,i);case"string":return new zt(this,t,i);case"function":return new X(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,r)}addColor(t,i,e=1){return new Mt(this,t,i,e)}addFolder(t){return new U({parent:this,title:t})}load(t,i=!0){return t.controllers&&this.controllers.forEach(e=>{e instanceof X||e._name in t.controllers&&e.load(t.controllers[e._name])}),i&&t.folders&&this.folders.forEach(e=>{e._title in t.folders&&e.load(t.folders[e._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof X)){if(e._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${e._name}"`);i.controllers[e._name]=e.save()}}),t&&this.folders.forEach(e=>{if(e._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${e._title}"`);i.folders[e._title]=e.save()}),i}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const e=n=>{n.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",e))};this.$children.addEventListener("transitionend",e);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}const Bt=U;export{rt as C,_t as E,Bt as G,It as a,U as g,Vt as t};
