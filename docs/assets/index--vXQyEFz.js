var wp=Object.defineProperty;var Tp=(n,e,t)=>e in n?wp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var lr=(n,e,t)=>Tp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Mp={name:"SPAIN",outline:[[-.95,.32],[-.88,.48],[-.55,.55],[-.18,.62],[.18,.58],[.52,.55],[.72,.38],[.78,.15],[.6,-.1],[.66,-.38],[.5,-.6],[.18,-.72],[-.2,-.78],[-.45,-.68],[-.72,-.52],[-.88,-.2],[-1,.02]]},Ap={name:"FRANCE",outline:[[-.9,.4],[-.45,.62],[.1,.85],[.62,.55],[.55,.05],[.7,-.5],[.15,-.8],[-.4,-.75],[-.6,-.2],[-.55,.15]]},Rp={name:"ITALY",outline:[[-.6,.6],[-.2,.85],[.25,.9],[.45,.68],[.2,.45],[.45,.1],[.72,-.3],[.85,-.55],[.6,-.52],[.45,-.7],[.52,-.95],[.25,-.82],[.28,-.4],[0,0],[-.25,.38]]},Cp={name:"GREAT BRITAIN",outline:[[-.15,.92],[.2,.75],[.05,.55],[.25,.4],[.15,.15],[.35,-.1],[.5,-.38],[.38,-.62],[.1,-.72],[-.28,-.65],[-.05,-.42],[-.32,-.2],[-.05,-.05],[-.25,.2],[-.15,.45],[-.42,.7]]},Pp={name:"JAPAN",outline:[[-.52,-.78],[-.3,-.62],[-.18,-.42],[-.05,-.18],[.05,.05],[.18,.28],[.38,.5],[.6,.68],[.82,.78],[.9,.62],[.7,.45],[.5,.25],[.35,.02],[.22,-.25],[.08,-.5],[-.1,-.72],[-.32,-.9]]},Ip={name:"BRAZIL",outline:[[-.5,.6],[0,.75],[.4,.5],[.75,.25],[.5,-.1],[.45,-.5],[.1,-.85],[-.15,-.6],[-.3,-.2],[-.7,0],[-.8,.35]]},Lp={name:"INDIA",outline:[[-.6,.55],[-.2,.8],[.4,.7],[.7,.4],[.45,.2],[.25,-.1],[.05,-.6],[-.05,-.95],[-.25,-.5],[-.5,0],[-.75,.3]]},Dp={name:"AUSTRALIA",outline:[[-.85,.3],[-.45,.55],[-.1,.4],[.15,.62],[.35,.25],[.75,.05],[.8,-.35],[.45,-.6],[.05,-.5],[-.4,-.6],[-.8,-.3]]},Up={name:"UNITED STATES",outline:[[-1.1,.45],[-.75,.52],[-.35,.55],[.1,.55],[.55,.5],[.88,.45],[.8,.22],[.72,.02],[.62,-.18],[.68,-.45],[.74,-.7],[.6,-.62],[.48,-.38],[.2,-.42],[-.05,-.45],[-.28,-.62],[-.38,-.45],[-.62,-.32],[-.85,-.22],[-1.05,-.05],[-1.15,.2]]},Np={name:"CHINA",outline:[[-.9,.2],[-.5,.6],[0,.8],[.5,.65],[.85,.3],[.6,-.1],[.7,-.45],[.2,-.7],[-.2,-.45],[-.6,-.3],[-1,-.05]]},Op={name:"SOVIET UNION",outline:[[-1.1,.1],[-.8,.5],[-.3,.65],[.2,.8],[.7,.7],[1.1,.5],[1,.05],[.6,-.2],[.2,-.5],[-.3,-.4],[-.7,-.5],[-1.05,-.25]]},kp={name:"THE REST OF THE WORLD",outline:Array.from({length:36},(n,e)=>{const t=e/36*Math.PI*2;return[Math.cos(t)*.92,Math.sin(t)*.92]})},Fp=[{pool:[Mp,Ap,Rp,Cp],stake:9e3,drain:14},{pool:[Pp,Ip,Lp,Dp],stake:16e3,drain:22},{pool:[Up,Np,Op],stake:42e3,drain:40},{pool:[kp],stake:325e3,drain:70}];function $c(n){return Fp.map(e=>{const t=e.pool[Math.floor(n()*e.pool.length)];return{name:t.name,stake:e.stake,drain:e.drain,outline:t.outline}})}function nr(n){return"$"+n.toLocaleString("en-US")}function Bp(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){const[a,o]=t[r],[l,c]=t[s];o>e!=c>e&&n<(l-a)*(e-o)/(c-o)+a&&(i=!i)}return i}const Da=new Set,Ln={x:0,y:0,fired:!1,moved:!1},Vd=[];function zp(){return Vd.splice(0)}let xo=null;function Hp(n,e){xo=n;let t=!1;const i=()=>{t||(t=!0,e())};window.addEventListener("keydown",r=>{Da.add(r.key.toLowerCase()),r.repeat||Vd.push(r.key.toLowerCase()),i()}),window.addEventListener("keyup",r=>Da.delete(r.key.toLowerCase())),window.addEventListener("mousemove",r=>{if(!xo)return;const s=xo.getBoundingClientRect();Ln.x=(r.clientX-s.left)/s.width*2-1,Ln.y=-((r.clientY-s.top)/s.height*2-1),Ln.moved=!0}),window.addEventListener("mousedown",()=>{Ln.fired=!0,i()}),window.addEventListener("blur",()=>Da.clear())}function Vp(){const n=Ln.fired;return Ln.fired=!1,n}function as(n){return Da.has(n)}const os=new Array(8).fill(!1),Mt={connected:!1,shieldDir:0,aimDX:0,aimDY:0,fire:!1,launch:!1,grip:!1};function bu(){var r;const n=((r=navigator.getGamepads)==null?void 0:r.call(navigator))??[];let e=null;for(const s of n)if(s&&s.connected){e=s;break}if(!e)return Mt.connected=!1,Mt.shieldDir=Mt.aimDX=Mt.aimDY=0,Mt.fire=Mt.launch=Mt.grip=!1,os.fill(!1),Mt;const t=s=>Math.abs(s)>.25?s:0,i=s=>!!e.buttons[s]&&(e.buttons[s].pressed||e.buttons[s].value>.5);Mt.connected=!0,Mt.shieldDir=Math.sign(t(e.axes[0]??0)),Mt.aimDX=t(e.axes[2]??0),Mt.aimDY=-t(e.axes[3]??0),Mt.fire=i(7)&&!os[7],Mt.launch=i(0)&&!os[0]||i(5)&&!os[5],Mt.grip=i(6)||i(4);for(let s=0;s<8;s++)os[s]=i(s);return Mt}function Eu(n,e){var i,r;const t=((i=navigator.getGamepads)==null?void 0:i.call(navigator))??[];for(const s of t){const a=s==null?void 0:s.vibrationActuator;(r=a==null?void 0:a.playEffect)==null||r.call(a,"dual-rumble",{duration:e,strongMagnitude:Math.min(1,n),weakMagnitude:Math.min(1,n*.7)}).catch(()=>{})}}const Gd=1.05,Wd=.78,ir={p:{x:0,y:-1.18},l:{x:0,y:1.18}},ja=.3,$d=.62,wu=1.15,jd=.085;function jc(n){return n==="p"?1:-1}function qd(n,e,t){const i=ir[n];return Math.atan2(e-i.x,(t-i.y)*jc(n))}function Gp(n,e,t=ja){const i=ir[n];return[i.x+Math.sin(e)*t,i.y+Math.cos(e)*t*jc(n)]}function Xd(n,e,t,i=!1){return{time:0,duration:45,outline:n.outline.map(([s,a])=>[s*Gd,a*Wd]),targets:[],missiles:[],beams:[],explosions:[],strikes:{p:0,l:0},ammo:{p:2,l:2},shield:{p:0,l:0},cooldown:{p:0,l:0},spawnIn:1.2,nextId:1,pvp:i,crackTimer:0,over:!1,loser:null,reason:null,events:[]}}function Wp(n,e){for(let t=0;t<30;t++){const i=(e()*2-1)*Gd,r=(e()*2-1)*Wd;if(Bp(i,r,n.outline)){n.targets.push({id:n.nextId++,x:i,y:r,age:0,ttl:4.2}),n.events.push("blip");return}}}function $p(n,e,t){if(n.ammo[e]<=0)return;n.ammo[e]--;const i=ir[e],r=ir[e==="p"?"l":"p"],s={x:(i.x+r.x)/2,y:(i.y+r.y)/2},a=(t()*2-1)*1.1;n.missiles.push({id:n.nextId++,owner:e,t:0,flight:5.5,x0:i.x,y0:i.y,cx:s.x+a,cy:s.y,x1:r.x,y1:r.y,x:i.x,y:i.y,trail:[]}),n.events.push("launch")}function jp(n,e,t){if(n.cooldown[e]>0)return;n.cooldown[e]=.35;let i=!1;for(let r=n.targets.length-1;r>=0;r--){const s=n.targets[r];if(Math.hypot(s.x-t.x,s.y-t.y)<jd*1.15){n.targets.splice(r,1),n.strikes[e]++,n.explosions.push({x:s.x,y:s.y,age:0,big:!1}),i=!0;break}}n.beams.push({side:e,x:t.x,y:t.y,life:.12,hit:i}),n.events.push(i?"zap":"miss")}function Tu(n,e,t,i,r){if(!n.over){n.events.length=0,n.time+=e;for(const s of["p","l"]){const a=t[s];n.cooldown[s]=Math.max(0,n.cooldown[s]-e),n.shield[s]=Math.max(-wu,Math.min(wu,n.shield[s]+a.shieldDir*2.4*e)),a.fireAt&&jp(n,s,a.fireAt),a.launch&&$p(n,s,r)}n.spawnIn-=e,n.spawnIn<=0&&n.targets.length<3&&(Wp(n,r),n.spawnIn=2.1+r()*.8);for(let s=n.targets.length-1;s>=0;s--)n.targets[s].age+=e,n.targets[s].age>n.targets[s].ttl&&n.targets.splice(s,1);for(let s=n.missiles.length-1;s>=0;s--){const a=n.missiles[s];a.t+=e/a.flight;const o=Math.min(1,a.t),l=1-o;a.x=l*l*a.x0+2*l*o*a.cx+o*o*a.x1,a.y=l*l*a.y0+2*l*o*a.cy+o*o*a.y1,a.trail.push([a.x,a.y]),a.trail.length>26&&a.trail.shift();const c=a.owner==="p"?"l":"p",u=ir[c],h=Math.hypot(a.x-u.x,a.y-u.y);if(h<ja+.05&&h>ja-.07){const d=qd(c,a.x,a.y);if(Math.abs(d-n.shield[c])<$d){n.missiles.splice(s,1),n.explosions.push({x:a.x,y:a.y,age:0,big:!0}),n.events.push("boom");continue}}if(h<.09){n.missiles.splice(s,1),n.explosions.push({x:u.x,y:u.y,age:0,big:!0}),n.events.push("boom"),n.over=!0,n.loser=c,n.reason="missile";return}}for(let s=n.beams.length-1;s>=0;s--)n.beams[s].life-=e,n.beams[s].life<=0&&n.beams.splice(s,1);for(let s=n.explosions.length-1;s>=0;s--)n.explosions[s].age+=e,n.explosions[s].age>.5&&n.explosions.splice(s,1);if(!n.pvp&&i===3&&n.strikes.p-n.strikes.l>=2){if(n.crackTimer+=e,n.crackTimer>6){n.over=!0,n.loser="l",n.reason="crack";return}}else i===3&&(n.crackTimer=Math.max(0,n.crackTimer-e*.5));n.time>=n.duration&&(n.over=!0,n.reason="time",n.loser=n.strikes.p>n.strikes.l?"l":"p")}}function co(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class Nl{constructor(e,t,i){lr(this,"nextFire",1.5);lr(this,"launchTimes");lr(this,"rng");lr(this,"roundIdx");lr(this,"side");this.side=e,this.rng=i,this.roundIdx=t,this.launchTimes=[9+i()*7,24+i()*10]}think(e){const t={shieldDir:0,fireAt:null,launch:!1},i=this.side,r=i==="p"?"l":"p",s=Math.max(.5,1.15-this.roundIdx*.18),a=.3+this.roundIdx*.16;if(e.time>this.nextFire){const l=e.targets.find(c=>c.age>s);if(l){const c=this.rng()<a?0:.13+this.rng()*.08,u=this.rng()*Math.PI*2;t.fireAt={x:l.x+Math.cos(u)*c,y:l.y+Math.sin(u)*c},this.nextFire=e.time+Math.max(.9,2.2-this.roundIdx*.35)+this.rng()*.5}}this.launchTimes.length&&e.time>this.launchTimes[0]&&e.ammo[i]>0&&(this.launchTimes.shift(),t.launch=!0);const o=e.missiles.filter(l=>l.owner===r);if(o.length){let l=o[0],c=l.t;for(const f of o)f.t>c&&(l=f,c=f.t);const h=qd(i,l.x,l.y)-e.shield[i],d=.32-this.roundIdx*.06;Math.abs(h)>d&&(t.shieldDir=Math.sign(h))}return t}}const Fr={intro:["I DESIGNED THIS GAME MYSELF. I HAVE YET TO MEET A WORTHY ADVERSARY.","YOU UNDERSTAND THE STAKES, MR. BOND. AND THE PRICE OF LOSING."],playerShock:["PAIN, MR. BOND, CONCENTRATES THE MIND WONDERFULLY.","GENERALS FEEL NOTHING WHEN THEIR SOLDIERS FALL. WE ARE NOT SO FORTUNATE.","YOU MAY RELEASE THE GRIPS AT ANY TIME. AND LOSE."],largoShock:["A LUCKY ROUND. IT CHANGES NOTHING.","INTERESTING. FEW MEN HAVE MADE ME FEEL ANYTHING AT ALL."],duel:["THE WORLD BELONGS TO THOSE WHO CAN HOLD ON.","YOUR HAND IS TREMBLING, MR. BOND.","MAGNIFICENT, IS IT NOT? I NEVER TIRE OF IT."],finalRound:["THEN LET US PLAY FOR THE ONLY STAKE THAT MATTERS."],crack:["...ENOUGH. ENOUGH!"]};function qa(n,e){return n[Math.floor(e()*n.length)]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qc="170",qp=0,Mu=1,Xp=2,Kd=1,Kp=2,qn=3,Ii=0,Ht=1,Qn=2,si=0,Br=1,Ol=2,Au=3,Ru=4,Yp=5,qi=100,Jp=101,Zp=102,Qp=103,em=104,tm=200,nm=201,im=202,rm=203,kl=204,Fl=205,sm=206,am=207,om=208,lm=209,cm=210,um=211,hm=212,dm=213,fm=214,Bl=0,zl=1,Hl=2,jr=3,Vl=4,Gl=5,Wl=6,$l=7,Yd=0,pm=1,mm=2,Ri=0,gm=1,_m=2,vm=3,ym=4,Sm=5,xm=6,bm=7,Jd=300,qr=301,Xr=302,jl=303,ql=304,uo=306,Xl=1e3,Yi=1001,Kl=1002,yn=1003,Em=1004,Js=1005,Dn=1006,bo=1007,Ji=1008,li=1009,Zd=1010,Qd=1011,Ps=1012,Xc=1013,rr=1014,ii=1015,ai=1016,Kc=1017,Yc=1018,Kr=1020,ef=35902,tf=1021,nf=1022,vn=1023,rf=1024,sf=1025,zr=1026,Yr=1027,af=1028,Jc=1029,of=1030,Zc=1031,Qc=1033,Ua=33776,Na=33777,Oa=33778,ka=33779,Yl=35840,Jl=35841,Zl=35842,Ql=35843,ec=36196,tc=37492,nc=37496,ic=37808,rc=37809,sc=37810,ac=37811,oc=37812,lc=37813,cc=37814,uc=37815,hc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,Fa=36492,_c=36494,vc=36495,lf=36283,yc=36284,Sc=36285,xc=36286,wm=3200,Tm=3201,Mm=0,Am=1,Ei="",en="srgb",Qr="srgb-linear",ho="linear",et="srgb",cr=7680,Cu=519,Rm=512,Cm=513,Pm=514,cf=515,Im=516,Lm=517,Dm=518,Um=519,Pu=35044,Nm=35048,Iu="300 es",ri=2e3,Xa=2001;class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eo=Math.PI/180,bc=180/Math.PI;function Vs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function Om(n,e){return(n%e+e)%e}function wo(n,e,t){return(1-t)*n+t*e}function ls(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,i,r,s,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],w=r[1],x=r[4],S=r[7],O=r[2],A=r[5],M=r[8];return s[0]=a*_+o*w+l*O,s[3]=a*m+o*x+l*A,s[6]=a*p+o*S+l*M,s[1]=c*_+u*w+h*O,s[4]=c*m+u*x+h*A,s[7]=c*p+u*S+h*M,s[2]=d*_+f*w+g*O,s[5]=d*m+f*x+g*A,s[8]=d*p+f*S+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Ne;function uf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function km(){const n=Ka("canvas");return n.style.display="block",n}const Lu={};function gs(n){n in Lu||(Lu[n]=!0,console.warn(n))}function Fm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Bm(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===et&&(n.r=oi(n.r),n.g=oi(n.g),n.b=oi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===et&&(n.r=Hr(n.r),n.g=Hr(n.g),n.b=Hr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ei?ho:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Du=[.64,.33,.3,.6,.15,.06],Uu=[.2126,.7152,.0722],Nu=[.3127,.329],Ou=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[Qr]:{primaries:Du,whitePoint:Nu,transfer:ho,toXYZ:Ou,fromXYZ:ku,luminanceCoefficients:Uu,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:Du,whitePoint:Nu,transfer:et,toXYZ:Ou,fromXYZ:ku,luminanceCoefficients:Uu,outputColorSpaceConfig:{drawingBufferColorSpace:en}}});let ur;class Hm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ur===void 0&&(ur=Ka("canvas")),ur.width=e.width,ur.height=e.height;const i=ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ka("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=oi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(oi(t[i]/255)*255):t[i]=oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vm=0;class hf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Mo(r[a].image)):s.push(Mo(r[a]))}else s=Mo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gm=0;class Vt extends es{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=Yi,r=Yi,s=Dn,a=Ji,o=vn,l=li,c=Vt.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Vs(),this.name="",this.source=new hf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xl:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xl:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Jd;Vt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(f+1)/2,O=(p+1)/2,A=(u+d)/4,M=(h+_)/4,C=(g+m)/4;return x>S&&x>O?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=M/i):S>O?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=C/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=M/s,r=C/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(d-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wm extends es{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Vt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Wm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class df extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $m extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const O=Math.sqrt(x),A=Math.atan2(O,p*w);m=Math.sin(m*A)/O,o=Math.sin(o*A)/O}const S=o*w;if(l=l*m+d*S,c=c*m+f*S,u=u*m+g*S,h=h*m+_*S,m===1-o){const O=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=O,c*=O,u*=O,h*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new N,Fu=new Gs;class Ws{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(s,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Qs.subVectors(this.max,cs),hr.subVectors(e.a,cs),dr.subVectors(e.b,cs),fr.subVectors(e.c,cs),fi.subVectors(dr,hr),pi.subVectors(fr,dr),Di.subVectors(hr,fr);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Di.z,Di.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Di.z,0,-Di.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Di.y,Di.x,0];return!Ro(t,hr,dr,fr,Qs)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,hr,dr,fr,Qs))?!1:(ea.crossVectors(fi,pi),t=[ea.x,ea.y,ea.z],Ro(t,hr,dr,fr,Qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new N,new N,new N,new N,new N,new N,new N,new N],an=new N,Zs=new Ws,hr=new N,dr=new N,fr=new N,fi=new N,pi=new N,Di=new N,cs=new N,Qs=new N,ea=new N,Ui=new N;function Ro(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ui.fromArray(n,s);const o=r.x*Math.abs(Ui.x)+r.y*Math.abs(Ui.y)+r.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const jm=new Ws,us=new N,Co=new N;class fo{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);const t=us.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(Co)),this.expandByPoint(us.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new N,Po=new N,ta=new N,mi=new N,Io=new N,na=new N,Lo=new N;class ff{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Po.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Po);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ta),o=mi.dot(this.direction),l=-mi.dot(ta),c=mi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Po).addScaledVector(ta,d),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,s){Io.subVectors(t,e),na.subVectors(i,e),Lo.crossVectors(Io,na);let a=this.direction.dot(Lo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(na.crossVectors(mi,na));if(l<0)return null;const c=o*this.direction.dot(Io.cross(mi));if(c<0||l+c>a)return null;const u=-o*mi.dot(Lo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,a,o,l,c,u,h,d,f,g,_,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,f,g,_,m)}set(e,t,i,r,s,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/pr.setFromMatrixColumn(e,0).length(),s=1/pr.setFromMatrixColumn(e,1).length(),a=1/pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qm,e,Xm)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),gi.crossVectors(i,$t),gi.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),gi.crossVectors(i,$t)),gi.normalize(),ia.crossVectors($t,gi),r[0]=gi.x,r[4]=ia.x,r[8]=$t.x,r[1]=gi.y,r[5]=ia.y,r[9]=$t.y,r[2]=gi.z,r[6]=ia.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],x=i[7],S=i[11],O=i[15],A=r[0],M=r[4],C=r[8],b=r[12],y=r[1],R=r[5],k=r[9],I=r[13],B=r[2],q=r[6],W=r[10],Y=r[14],V=r[3],re=r[7],ue=r[11],ge=r[15];return s[0]=a*A+o*y+l*B+c*V,s[4]=a*M+o*R+l*q+c*re,s[8]=a*C+o*k+l*W+c*ue,s[12]=a*b+o*I+l*Y+c*ge,s[1]=u*A+h*y+d*B+f*V,s[5]=u*M+h*R+d*q+f*re,s[9]=u*C+h*k+d*W+f*ue,s[13]=u*b+h*I+d*Y+f*ge,s[2]=g*A+_*y+m*B+p*V,s[6]=g*M+_*R+m*q+p*re,s[10]=g*C+_*k+m*W+p*ue,s[14]=g*b+_*I+m*Y+p*ge,s[3]=w*A+x*y+S*B+O*V,s[7]=w*M+x*R+S*q+O*re,s[11]=w*C+x*k+S*W+O*ue,s[15]=w*b+x*I+S*Y+O*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*f-i*l*f)+_*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*u-s*l*u)+m*(+t*c*h-t*o*f-s*a*h+i*a*f+s*o*u-i*c*u)+p*(-r*o*u-t*l*h+t*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,x=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,S=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,O=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,A=t*w+i*x+r*S+s*O;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return e[0]=w*M,e[1]=(_*d*s-h*m*s-_*r*f+i*m*f+h*r*p-i*d*p)*M,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*p+i*l*p)*M,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*f-i*l*f)*M,e[4]=x*M,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*M,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*M,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*f+t*l*f)*M,e[8]=S*M,e[9]=(g*h*s-u*_*s-g*i*f+t*_*f+u*i*p-t*h*p)*M,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*p+t*o*p)*M,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*f-t*o*f)*M,e[12]=O*M,e[13]=(u*_*r-g*h*r+g*i*d-t*_*d-u*i*m+t*h*m)*M,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*M,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*d+t*o*d)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,m=a*h,p=o*h,w=l*c,x=l*u,S=l*h,O=i.x,A=i.y,M=i.z;return r[0]=(1-(_+p))*O,r[1]=(f+S)*O,r[2]=(g-x)*O,r[3]=0,r[4]=(f-S)*A,r[5]=(1-(d+p))*A,r[6]=(m+w)*A,r[7]=0,r[8]=(g+x)*M,r[9]=(m-w)*M,r[10]=(1-(d+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=pr.set(r[0],r[1],r[2]).length();const a=pr.set(r[4],r[5],r[6]).length(),o=pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const c=1/s,u=1/a,h=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ri){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(o===ri)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Xa)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ri){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*c,f=(i+r)*u;let g,_;if(o===ri)g=(a+s)*h,_=-2*h;else if(o===Xa)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const pr=new N,on=new _t,qm=new N(0,0,0),Xm=new N(1,1,1),gi=new N,ia=new N,$t=new N,Bu=new _t,zu=new Gs;class ci{constructor(e=0,t=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zu.setFromEuler(this),this.setFromQuaternion(zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class pf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Km=0;const Hu=new N,mr=new Gs,Hn=new _t,ra=new N,hs=new N,Ym=new N,Jm=new Gs,Vu=new N(1,0,0),Gu=new N(0,1,0),Wu=new N(0,0,1),$u={type:"added"},Zm={type:"removed"},gr={type:"childadded",child:null},Do={type:"childremoved",child:null};class Gt extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new N,t=new ci,i=new Gs,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ne}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(Gu,e)}rotateZ(e){return this.rotateOnAxis(Wu,e)}translateOnAxis(e,t){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(Gu,e)}translateZ(e){return this.translateOnAxis(Wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ra.copy(e):ra.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(hs,ra,this.up):Hn.lookAt(ra,hs,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),mr.setFromRotationMatrix(Hn),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($u),gr.child=e,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm),Do.child=e,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($u),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new N(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new N,Vn=new N,Uo=new N,Gn=new N,_r=new N,vr=new N,ju=new N,No=new N,Oo=new N,ko=new N,Fo=new gt,Bo=new gt,zo=new gt;class mn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ln.subVectors(e,t),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ln.subVectors(r,t),Vn.subVectors(i,t),Uo.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(Vn),l=ln.dot(Uo),c=Vn.dot(Vn),u=Vn.dot(Uo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Fo.setScalar(0),Bo.setScalar(0),zo.setScalar(0),Fo.fromBufferAttribute(e,t),Bo.fromBufferAttribute(e,i),zo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fo,s.x),a.addScaledVector(Bo,s.y),a.addScaledVector(zo,s.z),a}static isFrontFacing(e,t,i,r){return ln.subVectors(i,t),Vn.subVectors(e,t),ln.cross(Vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),ln.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;_r.subVectors(r,i),vr.subVectors(s,i),No.subVectors(e,i);const l=_r.dot(No),c=vr.dot(No);if(l<=0&&c<=0)return t.copy(i);Oo.subVectors(e,r);const u=_r.dot(Oo),h=vr.dot(Oo);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(_r,a);ko.subVectors(e,s);const f=_r.dot(ko),g=vr.dot(ko);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(vr,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return ju.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(ju,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(_r,a).addScaledVector(vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=Om(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ho(a,s,e+1/3),this.g=Ho(a,s,e),this.b=Ho(a,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=en){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=mf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return qe.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Bt(Rt.r*255,0,255))*65536+Math.round(Bt(Rt.g*255,0,255))*256+Math.round(Bt(Rt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=en){qe.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(sa);const i=wo(_i.h,sa.h,t),r=wo(_i.s,sa.s,t),s=wo(_i.l,sa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new We;We.NAMES=mf;let Qm=0;class $s extends es{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Vs(),this.name="",this.blending=Br,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Fl,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Fl&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class eu extends $s{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new N,aa=new ze;class xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pu,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ls(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pu&&(e.usage=this.usage),e}}class gf extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _f extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bn extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let eg=0;const Jt=new _t,Vo=new Gt,yr=new N,jt=new Ws,ds=new Ws,bt=new N;class Nt extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uf(e)?_f:gf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bn(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(jt.min,ds.min),jt.expandByPoint(bt),bt.addVectors(jt.max,ds.max),jt.expandByPoint(bt)):(jt.expandByPoint(ds.min),jt.expandByPoint(ds.max))}jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bt.fromBufferAttribute(o,c),l&&(yr.fromBufferAttribute(e,c),bt.add(yr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new N,l[C]=new N;const c=new N,u=new N,h=new N,d=new ze,f=new ze,g=new ze,_=new N,m=new N;function p(C,b,y){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),o[C].add(_),o[b].add(_),o[y].add(_),l[C].add(m),l[b].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,b=w.length;C<b;++C){const y=w[C],R=y.start,k=y.count;for(let I=R,B=R+k;I<B;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new N,S=new N,O=new N,A=new N;function M(C){O.fromBufferAttribute(r,C),A.copy(O);const b=o[C];x.copy(b),x.sub(O.multiplyScalar(O.dot(b))).normalize(),S.crossVectors(A,b);const R=S.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,R)}for(let C=0,b=w.length;C<b;++C){const y=w[C],R=y.start,k=y.count;for(let I=R,B=R+k;I<B;I+=3)M(e.getX(I+0)),M(e.getX(I+1)),M(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new xn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qu=new _t,Ni=new ff,oa=new fo,Xu=new N,la=new N,ca=new N,ua=new N,Go=new N,ha=new N,Ku=new N,da=new N;class Un extends Gt{constructor(e=new Nt,t=new eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ha.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Go.fromBufferAttribute(h,e),a?ha.addScaledVector(Go,u):ha.addScaledVector(Go.sub(t),u))}t.add(ha)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),Ni.copy(e.ray).recast(e.near),!(oa.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(oa,Xu)===null||Ni.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(qu.copy(s).invert(),Ni.copy(e.ray).applyMatrix4(qu),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,O=x;S<O;S+=3){const A=o.getX(S),M=o.getX(S+1),C=o.getX(S+2);r=fa(this,p,e,i,c,u,h,A,M,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);r=fa(this,a,e,i,c,u,h,w,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,O=x;S<O;S+=3){const A=S,M=S+1,C=S+2;r=fa(this,p,e,i,c,u,h,A,M,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,x=m+1,S=m+2;r=fa(this,a,e,i,c,u,h,w,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function tg(n,e,t,i,r,s,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ii,o),l===null)return null;da.copy(o),da.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:n}}function fa(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,la),n.getVertexPosition(l,ca),n.getVertexPosition(c,ua);const u=tg(n,e,t,i,la,ca,ua,Ku);if(u){const h=new N;mn.getBarycoord(Ku,la,ca,ua,h),r&&(u.uv=mn.getInterpolatedAttribute(r,o,l,c,h,new ze)),s&&(u.uv1=mn.getInterpolatedAttribute(s,o,l,c,h,new ze)),a&&(u.normal=mn.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};mn.getNormal(la,ca,ua,d.normal),u.face=d,u.barycoord=h}return u}class js extends Nt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(h,2));function g(_,m,p,w,x,S,O,A,M,C,b){const y=S/M,R=O/C,k=S/2,I=O/2,B=A/2,q=M+1,W=C+1;let Y=0,V=0;const re=new N;for(let ue=0;ue<W;ue++){const ge=ue*R-I;for(let ke=0;ke<q;ke++){const Ye=ke*y-k;re[_]=Ye*w,re[m]=ge*x,re[p]=B,c.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=A>0?1:-1,u.push(re.x,re.y,re.z),h.push(ke/M),h.push(1-ue/C),Y+=1}}for(let ue=0;ue<C;ue++)for(let ge=0;ge<M;ge++){const ke=d+ge+q*ue,Ye=d+ge+q*(ue+1),$=d+(ge+1)+q*(ue+1),Z=d+(ge+1)+q*ue;l.push(ke,Ye,Z),l.push(Ye,$,Z),V+=6}o.addGroup(f,V,b),f+=V,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=Jr(n[t]);for(const r in i)e[r]=i[r]}return e}function ng(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Ya={clone:Jr,merge:Lt};var ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends $s{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ig,this.fragmentShader=rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yf extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new N,Yu=new ze,Ju=new ze;class dn extends yf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Yu,Ju),t.subVectors(Ju,Yu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Eo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Sr=-90,xr=1;class sg extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Sr,xr,e,t);r.layers=this.layers,this.add(r);const s=new dn(Sr,xr,e,t);s.layers=this.layers,this.add(s);const a=new dn(Sr,xr,e,t);a.layers=this.layers,this.add(a);const o=new dn(Sr,xr,e,t);o.layers=this.layers,this.add(o);const l=new dn(Sr,xr,e,t);l.layers=this.layers,this.add(l);const c=new dn(Sr,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sf extends Vt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ag extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new js(5,5,5),s=new zt({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:si});s.uniforms.tEquirect.value=t;const a=new Un(r,s),o=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Dn),new sg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Wo=new N,og=new N,lg=new Ne;class Gi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wo.subVectors(i,t).cross(og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lg.getNormalMatrix(e),r=this.coplanarPoint(Wo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new fo,pa=new N;class xf{constructor(e=new Gi,t=new Gi,i=new Gi,r=new Gi,s=new Gi,a=new Gi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],w=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-f,S-p).normalize(),i[1].setComponents(l+s,d+c,m+f,S+p).normalize(),i[2].setComponents(l+a,d+u,m+g,S+w).normalize(),i[3].setComponents(l-a,d-u,m-g,S-w).normalize(),i[4].setComponents(l-o,d-h,m-_,S-x).normalize(),t===ri)i[5].setComponents(l+o,d+h,m+_,S+x).normalize();else if(t===Xa)i[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(pa.x=r.normal.x>0?e.max.x:e.min.x,pa.y=r.normal.y>0?e.max.y:e.min.y,pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function cg(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class po extends Nt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*d-a;for(let x=0;x<c;x++){const S=x*h-s;g.push(S,-w,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const x=w+c*p,S=w+c*(p+1),O=w+1+c*(p+1),A=w+1+c*p;f.push(x,S,A),f.push(S,O,A)}this.setIndex(f),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(_,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.widthSegments,e.heightSegments)}}var ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ug=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ng=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,n_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,i_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,l_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,c_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,h_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,__=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,y_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,B_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,K_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,v0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,H0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:ug,alphahash_pars_fragment:hg,alphamap_fragment:dg,alphamap_pars_fragment:fg,alphatest_fragment:pg,alphatest_pars_fragment:mg,aomap_fragment:gg,aomap_pars_fragment:_g,batching_pars_vertex:vg,batching_vertex:yg,begin_vertex:Sg,beginnormal_vertex:xg,bsdfs:bg,iridescence_fragment:Eg,bumpmap_pars_fragment:wg,clipping_planes_fragment:Tg,clipping_planes_pars_fragment:Mg,clipping_planes_pars_vertex:Ag,clipping_planes_vertex:Rg,color_fragment:Cg,color_pars_fragment:Pg,color_pars_vertex:Ig,color_vertex:Lg,common:Dg,cube_uv_reflection_fragment:Ug,defaultnormal_vertex:Ng,displacementmap_pars_vertex:Og,displacementmap_vertex:kg,emissivemap_fragment:Fg,emissivemap_pars_fragment:Bg,colorspace_fragment:zg,colorspace_pars_fragment:Hg,envmap_fragment:Vg,envmap_common_pars_fragment:Gg,envmap_pars_fragment:Wg,envmap_pars_vertex:$g,envmap_physical_pars_fragment:n_,envmap_vertex:jg,fog_vertex:qg,fog_pars_vertex:Xg,fog_fragment:Kg,fog_pars_fragment:Yg,gradientmap_pars_fragment:Jg,lightmap_pars_fragment:Zg,lights_lambert_fragment:Qg,lights_lambert_pars_fragment:e_,lights_pars_begin:t_,lights_toon_fragment:i_,lights_toon_pars_fragment:r_,lights_phong_fragment:s_,lights_phong_pars_fragment:a_,lights_physical_fragment:o_,lights_physical_pars_fragment:l_,lights_fragment_begin:c_,lights_fragment_maps:u_,lights_fragment_end:h_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:p_,logdepthbuf_vertex:m_,map_fragment:g_,map_pars_fragment:__,map_particle_fragment:v_,map_particle_pars_fragment:y_,metalnessmap_fragment:S_,metalnessmap_pars_fragment:x_,morphinstance_vertex:b_,morphcolor_vertex:E_,morphnormal_vertex:w_,morphtarget_pars_vertex:T_,morphtarget_vertex:M_,normal_fragment_begin:A_,normal_fragment_maps:R_,normal_pars_fragment:C_,normal_pars_vertex:P_,normal_vertex:I_,normalmap_pars_fragment:L_,clearcoat_normal_fragment_begin:D_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:N_,iridescence_pars_fragment:O_,opaque_fragment:k_,packing:F_,premultiplied_alpha_fragment:B_,project_vertex:z_,dithering_fragment:H_,dithering_pars_fragment:V_,roughnessmap_fragment:G_,roughnessmap_pars_fragment:W_,shadowmap_pars_fragment:$_,shadowmap_pars_vertex:j_,shadowmap_vertex:q_,shadowmask_pars_fragment:X_,skinbase_vertex:K_,skinning_pars_vertex:Y_,skinning_vertex:J_,skinnormal_vertex:Z_,specularmap_fragment:Q_,specularmap_pars_fragment:e0,tonemapping_fragment:t0,tonemapping_pars_fragment:n0,transmission_fragment:i0,transmission_pars_fragment:r0,uv_pars_fragment:s0,uv_pars_vertex:a0,uv_vertex:o0,worldpos_vertex:l0,background_vert:c0,background_frag:u0,backgroundCube_vert:h0,backgroundCube_frag:d0,cube_vert:f0,cube_frag:p0,depth_vert:m0,depth_frag:g0,distanceRGBA_vert:_0,distanceRGBA_frag:v0,equirect_vert:y0,equirect_frag:S0,linedashed_vert:x0,linedashed_frag:b0,meshbasic_vert:E0,meshbasic_frag:w0,meshlambert_vert:T0,meshlambert_frag:M0,meshmatcap_vert:A0,meshmatcap_frag:R0,meshnormal_vert:C0,meshnormal_frag:P0,meshphong_vert:I0,meshphong_frag:L0,meshphysical_vert:D0,meshphysical_frag:U0,meshtoon_vert:N0,meshtoon_frag:O0,points_vert:k0,points_frag:F0,shadow_vert:B0,shadow_frag:z0,sprite_vert:H0,sprite_frag:V0},ie={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Rn={basic:{uniforms:Lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Lt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Lt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Lt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Lt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Lt([ie.points,ie.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Lt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Lt([ie.common,ie.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Lt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Lt([ie.sprite,ie.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Lt([ie.common,ie.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Lt([ie.lights,ie.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Rn.physical={uniforms:Lt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ma={r:0,b:0,g:0},ki=new ci,G0=new _t;function W0(n,e,t,i,r,s,a){const o=new We(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function _(w){let x=!1;const S=g(w);S===null?p(o,l):S&&S.isColor&&(p(S,1),x=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===uo)?(u===void 0&&(u=new Un(new js(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Jr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ki.copy(x.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(ki)),u.material.toneMapped=qe.getTransfer(S.colorSpace)!==et,(h!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Un(new po(2,2),new zt({name:"BackgroundMaterial",uniforms:Jr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=qe.getTransfer(S.colorSpace)!==et,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,x){w.getRGB(ma,vf(n)),i.buffers.color.setClear(ma.r,ma.g,ma.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(w,x=1){o.set(w),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:_,addToRenderList:m}}function $0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(y,R,k,I,B){let q=!1;const W=h(I,k,R);s!==W&&(s=W,c(s.object)),q=f(y,I,k,B),q&&g(y,I,k,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(y,R,k,I),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,R,k){const I=k.wireframe===!0;let B=i[y.id];B===void 0&&(B={},i[y.id]=B);let q=B[R.id];q===void 0&&(q={},B[R.id]=q);let W=q[I];return W===void 0&&(W=d(l()),q[I]=W),W}function d(y){const R=[],k=[],I=[];for(let B=0;B<t;B++)R[B]=0,k[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:I,object:y,attributes:{},index:null}}function f(y,R,k,I){const B=s.attributes,q=R.attributes;let W=0;const Y=k.getAttributes();for(const V in Y)if(Y[V].location>=0){const ue=B[V];let ge=q[V];if(ge===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;W++}return s.attributesNum!==W||s.index!==I}function g(y,R,k,I){const B={},q=R.attributes;let W=0;const Y=k.getAttributes();for(const V in Y)if(Y[V].location>=0){let ue=q[V];ue===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor));const ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),B[V]=ge,W++}s.attributes=B,s.attributesNum=W,s.index=I}function _(){const y=s.newAttributes;for(let R=0,k=y.length;R<k;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const k=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;k[y]=1,I[y]===0&&(n.enableVertexAttribArray(y),I[y]=1),B[y]!==R&&(n.vertexAttribDivisor(y,R),B[y]=R)}function w(){const y=s.newAttributes,R=s.enabledAttributes;for(let k=0,I=R.length;k<I;k++)R[k]!==y[k]&&(n.disableVertexAttribArray(k),R[k]=0)}function x(y,R,k,I,B,q,W){W===!0?n.vertexAttribIPointer(y,R,k,B,q):n.vertexAttribPointer(y,R,k,I,B,q)}function S(y,R,k,I){_();const B=I.attributes,q=k.getAttributes(),W=R.defaultAttributeValues;for(const Y in q){const V=q[Y];if(V.location>=0){let re=B[Y];if(re===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){const ue=re.normalized,ge=re.itemSize,ke=e.get(re);if(ke===void 0)continue;const Ye=ke.buffer,$=ke.type,Z=ke.bytesPerElement,me=$===n.INT||$===n.UNSIGNED_INT||re.gpuType===Xc;if(re.isInterleavedBufferAttribute){const te=re.data,Se=te.stride,Te=re.offset;if(te.isInstancedInterleavedBuffer){for(let Le=0;Le<V.locationSize;Le++)p(V.location+Le,te.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Le=0;Le<V.locationSize;Le++)m(V.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Le=0;Le<V.locationSize;Le++)x(V.location+Le,ge/V.locationSize,$,ue,Se*Z,(Te+ge/V.locationSize*Le)*Z,me)}else{if(re.isInstancedBufferAttribute){for(let te=0;te<V.locationSize;te++)p(V.location+te,re.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let te=0;te<V.locationSize;te++)m(V.location+te);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let te=0;te<V.locationSize;te++)x(V.location+te,ge/V.locationSize,$,ue,ge*Z,ge/V.locationSize*te*Z,me)}}else if(W!==void 0){const ue=W[Y];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(V.location,ue);break;case 3:n.vertexAttrib3fv(V.location,ue);break;case 4:n.vertexAttrib4fv(V.location,ue);break;default:n.vertexAttrib1fv(V.location,ue)}}}}w()}function O(){C();for(const y in i){const R=i[y];for(const k in R){const I=R[k];for(const B in I)u(I[B].object),delete I[B];delete R[k]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const R=i[y.id];for(const k in R){const I=R[k];for(const B in I)u(I[B].object),delete I[B];delete R[k]}delete i[y.id]}function M(y){for(const R in i){const k=i[R];if(k[y.id]===void 0)continue;const I=k[y.id];for(const B in I)u(I[B].object),delete I[B];delete k[y.id]}}function C(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:A,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function j0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function q0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(M){return!(M!==vn&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const C=M===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==li&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==ii&&!C)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:O,maxSamples:A}}function X0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Gi,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,x=w*4;let S=p.clippingState||null;l.value=S,S=u(g,d,x,f);for(let O=0;O!==x;++O)S[O]=t[O];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=f;x!==_;++x,S+=4)a.copy(h[x]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function K0(n){let e=new WeakMap;function t(a,o){return o===jl?a.mapping=qr:o===ql&&(a.mapping=Xr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===jl||o===ql)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ag(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class tu extends yf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Lr=4,Zu=[.125,.215,.35,.446,.526,.582],Xi=20,$o=new tu,Qu=new We;let jo=null,qo=0,Xo=0,Ko=!1;const Wi=(1+Math.sqrt(5))/2,br=1/Wi,eh=[new N(-Wi,br,0),new N(Wi,br,0),new N(-br,0,Wi),new N(br,0,Wi),new N(0,Wi,-br),new N(0,Wi,br),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){jo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jo,qo,Xo),this._renderer.xr.enabled=Ko,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ai,format:vn,colorSpace:Qr,depthBuffer:!1},r=nh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y0(s)),this._blurMaterial=J0(s,e,t)}return r}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,i,r){const o=new dn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Qu),u.toneMapping=Ri,u.autoClear=!1;const f=new eu({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new Un(new js,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Qu),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;ga(r,w*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qr||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Un(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ga(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,$o)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=eh[(r-s-1)%eh.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Un(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Xi;m>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const p=[];let w=0;for(let M=0;M<Xi;++M){const C=M/_,b=Math.exp(-C*C/2);p.push(b),M===0?w+=b:M<m&&(w+=2*b)}for(let M=0;M<p.length;M++)p[M]=p[M]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const S=this._sizeLods[r],O=3*S*(r>x-Lr?r-x+Lr:0),A=4*(this._cubeSize-S);ga(t,O,A,3*S,2*S),l.setRenderTarget(t),l.render(h,$o)}}function Y0(n){const e=[],t=[],i=[];let r=n;const s=n-Lr+1+Zu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Lr?l=Zu[a-n+Lr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),x=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let A=0;A<f;A++){const M=A%3*2/3-1,C=A>2?0:-1,b=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];w.set(b,_*g*A),x.set(d,m*g*A);const y=[A,A,A,A,A,A];S.set(y,p*g*A)}const O=new Nt;O.setAttribute("position",new xn(w,_)),O.setAttribute("uv",new xn(x,m)),O.setAttribute("faceIndex",new xn(S,p)),e.push(O),r>Lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nh(n,e,t){const i=new Sn(n,e,t);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function J0(n,e,t){const i=new Float32Array(Xi),r=new N(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ih(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function rh(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Z0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===jl||l===ql,u=l===qr||l===Xr;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new th(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new th(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Q0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&gs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ev(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let x=0,S=w.length;x<S;x+=3){const O=w[x+0],A=w[x+1],M=w[x+2];d.push(O,A,A,M,M,O)}}else if(g!==void 0){const w=g.array;_=g.version;for(let x=0,S=w.length/3-1;x<S;x+=3){const O=x+0,A=x+1,M=x+2;d.push(O,A,A,M,M,O)}}else return;const m=new(uf(d)?_f:gf)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function tv(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function nv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function iv(n,e,t){const i=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let O=o.attributes.position.count*S,A=1;O>e.maxTextureSize&&(A=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const M=new Float32Array(O*A*4*h),C=new df(M,O,A,h);C.type=ii,C.needsUpdate=!0;const b=S*4;for(let R=0;R<h;R++){const k=p[R],I=w[R],B=x[R],q=O*A*4*R;for(let W=0;W<k.count;W++){const Y=W*b;g===!0&&(r.fromBufferAttribute(k,W),M[q+Y+0]=r.x,M[q+Y+1]=r.y,M[q+Y+2]=r.z,M[q+Y+3]=0),_===!0&&(r.fromBufferAttribute(I,W),M[q+Y+4]=r.x,M[q+Y+5]=r.y,M[q+Y+6]=r.z,M[q+Y+7]=0),m===!0&&(r.fromBufferAttribute(B,W),M[q+Y+8]=r.x,M[q+Y+9]=r.y,M[q+Y+10]=r.z,M[q+Y+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:C,size:new ze(O,A)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function rv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Ef extends Vt{constructor(e,t,i,r,s,a,o,l,c,u=zr){if(u!==zr&&u!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zr&&(i=rr),i===void 0&&u===Yr&&(i=Kr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wf=new Vt,sh=new Ef(1,1),Tf=new df,Mf=new $m,Af=new Sf,ah=[],oh=[],lh=new Float32Array(16),ch=new Float32Array(9),uh=new Float32Array(4);function ts(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ah[r];if(s===void 0&&(s=new Float32Array(r),ah[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function mo(n,e){let t=oh[e];t===void 0&&(t=new Int32Array(e),oh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function cv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(St(t,i))return;uh.set(i),n.uniformMatrix2fv(this.addr,!1,uh),xt(t,i)}}function uv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(St(t,i))return;ch.set(i),n.uniformMatrix3fv(this.addr,!1,ch),xt(t,i)}}function hv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(St(t,i))return;lh.set(i),n.uniformMatrix4fv(this.addr,!1,lh),xt(t,i)}}function dv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function gv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function Sv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(sh.compareFunction=cf,s=sh):s=wf,t.setTexture2D(e||s,r)}function xv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Mf,r)}function bv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Af,r)}function Ev(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Tf,r)}function wv(n){switch(n){case 5126:return sv;case 35664:return av;case 35665:return ov;case 35666:return lv;case 35674:return cv;case 35675:return uv;case 35676:return hv;case 5124:case 35670:return dv;case 35667:case 35671:return fv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return _v;case 36295:return vv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return Ev}}function Tv(n,e){n.uniform1fv(this.addr,e)}function Mv(n,e){const t=ts(e,this.size,2);n.uniform2fv(this.addr,t)}function Av(n,e){const t=ts(e,this.size,3);n.uniform3fv(this.addr,t)}function Rv(n,e){const t=ts(e,this.size,4);n.uniform4fv(this.addr,t)}function Cv(n,e){const t=ts(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Pv(n,e){const t=ts(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Iv(n,e){const t=ts(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lv(n,e){n.uniform1iv(this.addr,e)}function Dv(n,e){n.uniform2iv(this.addr,e)}function Uv(n,e){n.uniform3iv(this.addr,e)}function Nv(n,e){n.uniform4iv(this.addr,e)}function Ov(n,e){n.uniform1uiv(this.addr,e)}function kv(n,e){n.uniform2uiv(this.addr,e)}function Fv(n,e){n.uniform3uiv(this.addr,e)}function Bv(n,e){n.uniform4uiv(this.addr,e)}function zv(n,e,t){const i=this.cache,r=e.length,s=mo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||wf,s[a])}function Hv(n,e,t){const i=this.cache,r=e.length,s=mo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Mf,s[a])}function Vv(n,e,t){const i=this.cache,r=e.length,s=mo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Af,s[a])}function Gv(n,e,t){const i=this.cache,r=e.length,s=mo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Tf,s[a])}function Wv(n){switch(n){case 5126:return Tv;case 35664:return Mv;case 35665:return Av;case 35666:return Rv;case 35674:return Cv;case 35675:return Pv;case 35676:return Iv;case 5124:case 35670:return Lv;case 35667:case 35671:return Dv;case 35668:case 35672:return Uv;case 35669:case 35673:return Nv;case 5125:return Ov;case 36294:return kv;case 36295:return Fv;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Gv}}class $v{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wv(t.type)}}class jv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wv(t.type)}}class qv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function hh(n,e){n.seq.push(e),n.map[e.id]=e}function Xv(n,e,t){const i=n.name,r=i.length;for(Yo.lastIndex=0;;){const s=Yo.exec(i),a=Yo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){hh(t,c===void 0?new $v(o,n,e):new jv(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new qv(o),hh(t,h)),t=h}}}class Ba{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Xv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function dh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Kv=37297;let Yv=0;function Jv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const fh=new Ne;function Zv(n){qe._getMatrix(fh,qe.workingColorSpace,n);const e=`mat3( ${fh.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case ho:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ph(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Jv(n.getShaderSource(e),a)}else return r}function Qv(n,e){const t=Zv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ey(n,e){let t;switch(e){case gm:t="Linear";break;case _m:t="Reinhard";break;case vm:t="Cineon";break;case ym:t="ACESFilmic";break;case xm:t="AgX";break;case bm:t="Neutral";break;case Sm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new N;function ty(){qe.getLuminanceCoefficients(_a);const n=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ny(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function iy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ry(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _s(n){return n!==""}function mh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(n){return n.replace(sy,oy)}const ay=new Map;function oy(n,e){let t=Be[e];if(t===void 0){const i=ay.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ec(t)}const ly=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(n){return n.replace(ly,cy)}function cy(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function hy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qr:case Xr:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function fy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yd:e="ENVMAP_BLENDING_MULTIPLY";break;case pm:e="ENVMAP_BLENDING_MIX";break;case mm:e="ENVMAP_BLENDING_ADD";break}return e}function py(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function my(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=uy(t),c=hy(t),u=dy(t),h=fy(t),d=py(t),f=ny(t),g=iy(s),_=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_s).join(`
`),p.length>0&&(p+=`
`)):(m=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),p=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Be.tonemapping_pars_fragment:"",t.toneMapping!==Ri?ey("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Qv("linearToOutputTexel",t.outputColorSpace),ty(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),a=Ec(a),a=mh(a,t),a=gh(a,t),o=Ec(o),o=mh(o,t),o=gh(o,t),a=_h(a),o=_h(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=w+m+a,S=w+p+o,O=dh(r,r.VERTEX_SHADER,x),A=dh(r,r.FRAGMENT_SHADER,S);r.attachShader(_,O),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(R){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(O).trim(),B=r.getShaderInfoLog(A).trim();let q=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,O,A);else{const Y=ph(r,O,"vertex"),V=ph(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+Y+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(I===""||B==="")&&(W=!1);W&&(R.diagnostics={runnable:q,programLog:k,vertexShader:{log:I,prefix:m},fragmentShader:{log:B,prefix:p}})}r.deleteShader(O),r.deleteShader(A),C=new Ba(r,_),b=ry(r,_)}let C;this.getUniforms=function(){return C===void 0&&M(this),C};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,Kv)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=A,this}let gy=0;class _y{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vy(e),t.set(e,i)),i}}class vy{constructor(e){this.id=gy++,this.code=e,this.usedTimes=0}}function yy(n,e,t,i,r,s,a){const o=new pf,l=new _y,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,R,k,I){const B=k.fog,q=I.geometry,W=b.isMeshStandardMaterial?k.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),V=Y&&Y.mapping===uo?Y.image.height:null,re=g[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ue=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ge=ue!==void 0?ue.length:0;let ke=0;q.morphAttributes.position!==void 0&&(ke=1),q.morphAttributes.normal!==void 0&&(ke=2),q.morphAttributes.color!==void 0&&(ke=3);let Ye,$,Z,me;if(re){const Qe=Rn[re];Ye=Qe.vertexShader,$=Qe.fragmentShader}else Ye=b.vertexShader,$=b.fragmentShader,l.update(b),Z=l.getVertexShaderID(b),me=l.getFragmentShaderID(b);const te=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Te=I.isInstancedMesh===!0,Le=I.isBatchedMesh===!0,ct=!!b.map,$e=!!b.matcap,pt=!!Y,U=!!b.aoMap,Kt=!!b.lightMap,He=!!b.bumpMap,Ve=!!b.normalMap,Me=!!b.displacementMap,st=!!b.emissiveMap,Ee=!!b.metalnessMap,T=!!b.roughnessMap,v=b.anisotropy>0,F=b.clearcoat>0,X=b.dispersion>0,J=b.iridescence>0,j=b.sheen>0,xe=b.transmission>0,ae=v&&!!b.anisotropyMap,he=F&&!!b.clearcoatMap,je=F&&!!b.clearcoatNormalMap,Q=F&&!!b.clearcoatRoughnessMap,fe=J&&!!b.iridescenceMap,Ae=J&&!!b.iridescenceThicknessMap,Re=j&&!!b.sheenColorMap,pe=j&&!!b.sheenRoughnessMap,Ge=!!b.specularMap,Fe=!!b.specularColorMap,nt=!!b.specularIntensityMap,P=xe&&!!b.transmissionMap,se=xe&&!!b.thicknessMap,G=!!b.gradientMap,K=!!b.alphaMap,ce=b.alphaTest>0,oe=!!b.alphaHash,De=!!b.extensions;let ht=Ri;b.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ht=n.toneMapping);const Tt={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:Ye,fragmentShader:$,defines:b.defines,customVertexShaderID:Z,customFragmentShaderID:me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Le,batchingColor:Le&&I._colorsTexture!==null,instancing:Te,instancingColor:Te&&I.instanceColor!==null,instancingMorph:Te&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Qr,alphaToCoverage:!!b.alphaToCoverage,map:ct,matcap:$e,envMap:pt,envMapMode:pt&&Y.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:Kt,bumpMap:He,normalMap:Ve,displacementMap:d&&Me,emissiveMap:st,normalMapObjectSpace:Ve&&b.normalMapType===Am,normalMapTangentSpace:Ve&&b.normalMapType===Mm,metalnessMap:Ee,roughnessMap:T,anisotropy:v,anisotropyMap:ae,clearcoat:F,clearcoatMap:he,clearcoatNormalMap:je,clearcoatRoughnessMap:Q,dispersion:X,iridescence:J,iridescenceMap:fe,iridescenceThicknessMap:Ae,sheen:j,sheenColorMap:Re,sheenRoughnessMap:pe,specularMap:Ge,specularColorMap:Fe,specularIntensityMap:nt,transmission:xe,transmissionMap:P,thicknessMap:se,gradientMap:G,opaque:b.transparent===!1&&b.blending===Br&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:ce,alphaHash:oe,combine:b.combine,mapUv:ct&&_(b.map.channel),aoMapUv:U&&_(b.aoMap.channel),lightMapUv:Kt&&_(b.lightMap.channel),bumpMapUv:He&&_(b.bumpMap.channel),normalMapUv:Ve&&_(b.normalMap.channel),displacementMapUv:Me&&_(b.displacementMap.channel),emissiveMapUv:st&&_(b.emissiveMap.channel),metalnessMapUv:Ee&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:ae&&_(b.anisotropyMap.channel),clearcoatMapUv:he&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(b.sheenRoughnessMap.channel),specularMapUv:Ge&&_(b.specularMap.channel),specularColorMapUv:Fe&&_(b.specularColorMap.channel),specularIntensityMapUv:nt&&_(b.specularIntensityMap.channel),transmissionMapUv:P&&_(b.transmissionMap.channel),thicknessMapUv:se&&_(b.thicknessMap.channel),alphaMapUv:K&&_(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ve||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!q.attributes.uv&&(ct||K),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Se,skinning:I.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ke,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:ct&&b.map.isVideoTexture===!0&&qe.getTransfer(b.map.colorSpace)===et,decodeVideoTextureEmissive:st&&b.emissiveMap.isVideoTexture===!0&&qe.getTransfer(b.emissiveMap.colorSpace)===et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qn,flipSided:b.side===Ht,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:De&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&b.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)y.push(R),y.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(w(y,b),x(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function w(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function x(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function S(b){const y=g[b.type];let R;if(y){const k=Rn[y];R=Ya.clone(k.uniforms)}else R=b.uniforms;return R}function O(b,y){let R;for(let k=0,I=u.length;k<I;k++){const B=u[k];if(B.cacheKey===y){R=B,++R.usedTimes;break}}return R===void 0&&(R=new my(n,y,b,s),u.push(R)),R}function A(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function M(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:O,releaseProgram:A,releaseShaderCache:M,programs:u,dispose:C}}function Sy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function xy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||xy),i.length>1&&i.sort(d||yh),r.length>1&&r.sort(d||yh)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function by(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Sh,n.set(i,[a])):r>=s.length?(a=new Sh,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ey(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new We};break;case"SpotLight":t={position:new N,direction:new N,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function wy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ty=0;function My(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ay(n){const e=new Ey,t=wy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new _t,a=new _t;function o(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,x=0,S=0,O=0,A=0,M=0;c.sort(My);for(let b=0,y=c.length;b<y;b++){const R=c[b],k=R.color,I=R.intensity,B=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=k.r*I,h+=k.g*I,d+=k.b*I;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],I);M++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,V=t.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=R.shadow.matrix,w++}i.directional[f]=W,f++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(k).multiplyScalar(I),W.distance=B,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[_]=W;const Y=R.shadow;if(R.map&&(i.spotLightMap[O]=R.map,O++,Y.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[_]=Y.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=q,S++}_++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(k).multiplyScalar(I),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=W,m++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const Y=R.shadow,V=t.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=R.shadow.matrix,x++}i.point[g]=W,g++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(I),W.groundColor.copy(R.groundColor).multiplyScalar(I),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==w||C.numPointShadows!==x||C.numSpotShadows!==S||C.numSpotMaps!==O||C.numLightProbes!==M)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+O-A,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=M,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=w,C.numPointShadows=x,C.numSpotShadows=S,C.numSpotMaps=O,C.numLightProbes=M,i.version=Ty++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const x=c[p];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function xh(n){const e=new Ay(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ry(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new xh(n),e.set(r,[o])):s>=a.length?(o=new xh(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Cy extends $s{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Py extends $s{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ly=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dy(n,e,t){let i=new xf;const r=new ze,s=new ze,a=new gt,o=new Cy({depthPacking:Tm}),l=new Py,c={},u=t.maxTextureSize,h={[Ii]:Ht,[Ht]:Ii,[Qn]:Qn},d=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Iy,fragmentShader:Ly}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Un(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kd;let p=this.type;this.render=function(A,M,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),k=n.state;k.setBlending(si),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const I=p!==qn&&this.type===qn,B=p===qn&&this.type!==qn;for(let q=0,W=A.length;q<W;q++){const Y=A[q],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const re=V.getFrameExtents();if(r.multiply(re),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,V.mapSize.y=s.y)),V.map===null||I===!0||B===!0){const ge=this.type!==qn?{minFilter:yn,magFilter:yn}:{};V.map!==null&&V.map.dispose(),V.map=new Sn(r.x,r.y,ge),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ue=V.getViewportCount();for(let ge=0;ge<ue;ge++){const ke=V.getViewport(ge);a.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),k.viewport(a),V.updateMatrices(Y,ge),i=V.getFrustum(),S(M,C,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===qn&&w(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,R)};function w(A,M){const C=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Sn(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(M,null,C,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(M,null,C,f,_,null)}function x(A,M,C,b){let y=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=C.isPointLight===!0?l:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const k=y.uuid,I=M.uuid;let B=c[k];B===void 0&&(B={},c[k]=B);let q=B[I];q===void 0&&(q=y.clone(),B[I]=q,M.addEventListener("dispose",O)),y=q}if(y.visible=M.visible,y.wireframe=M.wireframe,b===qn?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:h[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=n.properties.get(y);k.light=C}return y}function S(A,M,C,b,y){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===qn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const I=e.update(A),B=A.material;if(Array.isArray(B)){const q=I.groups;for(let W=0,Y=q.length;W<Y;W++){const V=q[W],re=B[V.materialIndex];if(re&&re.visible){const ue=x(A,re,b,y);A.onBeforeShadow(n,A,M,C,I,ue,V),n.renderBufferDirect(C,null,I,ue,A,V),A.onAfterShadow(n,A,M,C,I,ue,V)}}}else if(B.visible){const q=x(A,B,b,y);A.onBeforeShadow(n,A,M,C,I,q,null),n.renderBufferDirect(C,null,I,q,A,null),A.onAfterShadow(n,A,M,C,I,q,null)}}const k=A.children;for(let I=0,B=k.length;I<B;I++)S(k[I],M,C,b,y)}function O(A){A.target.removeEventListener("dispose",O);for(const C in c){const b=c[C],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const Uy={[Bl]:zl,[Hl]:Wl,[Vl]:$l,[jr]:Gl,[zl]:Bl,[Wl]:Hl,[$l]:Vl,[Gl]:jr};function Ny(n,e){function t(){let P=!1;const se=new gt;let G=null;const K=new gt(0,0,0,0);return{setMask:function(ce){G!==ce&&!P&&(n.colorMask(ce,ce,ce,ce),G=ce)},setLocked:function(ce){P=ce},setClear:function(ce,oe,De,ht,Tt){Tt===!0&&(ce*=ht,oe*=ht,De*=ht),se.set(ce,oe,De,ht),K.equals(se)===!1&&(n.clearColor(ce,oe,De,ht),K.copy(se))},reset:function(){P=!1,G=null,K.set(-1,0,0,0)}}}function i(){let P=!1,se=!1,G=null,K=null,ce=null;return{setReversed:function(oe){if(se!==oe){const De=e.get("EXT_clip_control");se?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const ht=ce;ce=null,this.setClear(ht)}se=oe},getReversed:function(){return se},setTest:function(oe){oe?te(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(oe){G!==oe&&!P&&(n.depthMask(oe),G=oe)},setFunc:function(oe){if(se&&(oe=Uy[oe]),K!==oe){switch(oe){case Bl:n.depthFunc(n.NEVER);break;case zl:n.depthFunc(n.ALWAYS);break;case Hl:n.depthFunc(n.LESS);break;case jr:n.depthFunc(n.LEQUAL);break;case Vl:n.depthFunc(n.EQUAL);break;case Gl:n.depthFunc(n.GEQUAL);break;case Wl:n.depthFunc(n.GREATER);break;case $l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=oe}},setLocked:function(oe){P=oe},setClear:function(oe){ce!==oe&&(se&&(oe=1-oe),n.clearDepth(oe),ce=oe)},reset:function(){P=!1,G=null,K=null,ce=null,se=!1}}}function r(){let P=!1,se=null,G=null,K=null,ce=null,oe=null,De=null,ht=null,Tt=null;return{setTest:function(Qe){P||(Qe?te(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(Qe){se!==Qe&&!P&&(n.stencilMask(Qe),se=Qe)},setFunc:function(Qe,rn,kn){(G!==Qe||K!==rn||ce!==kn)&&(n.stencilFunc(Qe,rn,kn),G=Qe,K=rn,ce=kn)},setOp:function(Qe,rn,kn){(oe!==Qe||De!==rn||ht!==kn)&&(n.stencilOp(Qe,rn,kn),oe=Qe,De=rn,ht=kn)},setLocked:function(Qe){P=Qe},setClear:function(Qe){Tt!==Qe&&(n.clearStencil(Qe),Tt=Qe)},reset:function(){P=!1,se=null,G=null,K=null,ce=null,oe=null,De=null,ht=null,Tt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,x=null,S=null,O=null,A=null,M=new We(0,0,0),C=0,b=!1,y=null,R=null,k=null,I=null,B=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Y>=2);let re=null,ue={};const ge=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),Ye=new gt().fromArray(ge),$=new gt().fromArray(ke);function Z(P,se,G,K){const ce=new Uint8Array(4),oe=n.createTexture();n.bindTexture(P,oe),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<G;De++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(se+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return oe}const me={};me[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(jr),He(!1),Ve(Mu),te(n.CULL_FACE),U(si);function te(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function Se(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function Te(P,se){return h[P]!==se?(n.bindFramebuffer(P,se),h[P]=se,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=se),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Le(P,se){let G=f,K=!1;if(P){G=d.get(se),G===void 0&&(G=[],d.set(se,G));const ce=P.textures;if(G.length!==ce.length||G[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,De=ce.length;oe<De;oe++)G[oe]=n.COLOR_ATTACHMENT0+oe;G.length=ce.length,K=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,K=!0);K&&n.drawBuffers(G)}function ct(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const $e={[qi]:n.FUNC_ADD,[Jp]:n.FUNC_SUBTRACT,[Zp]:n.FUNC_REVERSE_SUBTRACT};$e[Qp]=n.MIN,$e[em]=n.MAX;const pt={[tm]:n.ZERO,[nm]:n.ONE,[im]:n.SRC_COLOR,[kl]:n.SRC_ALPHA,[cm]:n.SRC_ALPHA_SATURATE,[om]:n.DST_COLOR,[sm]:n.DST_ALPHA,[rm]:n.ONE_MINUS_SRC_COLOR,[Fl]:n.ONE_MINUS_SRC_ALPHA,[lm]:n.ONE_MINUS_DST_COLOR,[am]:n.ONE_MINUS_DST_ALPHA,[um]:n.CONSTANT_COLOR,[hm]:n.ONE_MINUS_CONSTANT_COLOR,[dm]:n.CONSTANT_ALPHA,[fm]:n.ONE_MINUS_CONSTANT_ALPHA};function U(P,se,G,K,ce,oe,De,ht,Tt,Qe){if(P===si){_===!0&&(Se(n.BLEND),_=!1);return}if(_===!1&&(te(n.BLEND),_=!0),P!==Yp){if(P!==m||Qe!==b){if((p!==qi||S!==qi)&&(n.blendEquation(n.FUNC_ADD),p=qi,S=qi),Qe)switch(P){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFunc(n.ONE,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ru:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,x=null,O=null,A=null,M.set(0,0,0),C=0,m=P,b=Qe}return}ce=ce||se,oe=oe||G,De=De||K,(se!==p||ce!==S)&&(n.blendEquationSeparate($e[se],$e[ce]),p=se,S=ce),(G!==w||K!==x||oe!==O||De!==A)&&(n.blendFuncSeparate(pt[G],pt[K],pt[oe],pt[De]),w=G,x=K,O=oe,A=De),(ht.equals(M)===!1||Tt!==C)&&(n.blendColor(ht.r,ht.g,ht.b,Tt),M.copy(ht),C=Tt),m=P,b=!1}function Kt(P,se){P.side===Qn?Se(n.CULL_FACE):te(n.CULL_FACE);let G=P.side===Ht;se&&(G=!G),He(G),P.blending===Br&&P.transparent===!1?U(si):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const K=P.stencilWrite;o.setTest(K),K&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),st(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){y!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),y=P)}function Ve(P){P!==qp?(te(n.CULL_FACE),P!==R&&(P===Mu?n.cullFace(n.BACK):P===Xp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),R=P}function Me(P){P!==k&&(W&&n.lineWidth(P),k=P)}function st(P,se,G){P?(te(n.POLYGON_OFFSET_FILL),(I!==se||B!==G)&&(n.polygonOffset(se,G),I=se,B=G)):Se(n.POLYGON_OFFSET_FILL)}function Ee(P){P?te(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function T(P){P===void 0&&(P=n.TEXTURE0+q-1),re!==P&&(n.activeTexture(P),re=P)}function v(P,se,G){G===void 0&&(re===null?G=n.TEXTURE0+q-1:G=re);let K=ue[G];K===void 0&&(K={type:void 0,texture:void 0},ue[G]=K),(K.type!==P||K.texture!==se)&&(re!==G&&(n.activeTexture(G),re=G),n.bindTexture(P,se||me[P]),K.type=P,K.texture=se)}function F(){const P=ue[re];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){Ye.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Ye.copy(P))}function pe(P){$.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),$.copy(P))}function Ge(P,se){let G=c.get(se);G===void 0&&(G=new WeakMap,c.set(se,G));let K=G.get(P);K===void 0&&(K=n.getUniformBlockIndex(se,P.name),G.set(P,K))}function Fe(P,se){const K=c.get(se).get(P);l.get(se)!==K&&(n.uniformBlockBinding(se,K,P.__bindingPointIndex),l.set(se,K))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,ue={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,x=null,S=null,O=null,A=null,M=new We(0,0,0),C=0,b=!1,y=null,R=null,k=null,I=null,B=null,Ye.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:Se,bindFramebuffer:Te,drawBuffers:Le,useProgram:ct,setBlending:U,setMaterial:Kt,setFlipSided:He,setCullFace:Ve,setLineWidth:Me,setPolygonOffset:st,setScissorTest:Ee,activeTexture:T,bindTexture:v,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:J,texImage2D:fe,texImage3D:Ae,updateUBOMapping:Ge,uniformBlockBinding:Fe,texStorage2D:je,texStorage3D:Q,texSubImage2D:j,texSubImage3D:xe,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Re,viewport:pe,reset:nt}}function bh(n,e,t,i){const r=Oy(i);switch(t){case tf:return n*e;case rf:return n*e;case sf:return n*e*2;case af:return n*e/r.components*r.byteLength;case Jc:return n*e/r.components*r.byteLength;case of:return n*e*2/r.components*r.byteLength;case Zc:return n*e*2/r.components*r.byteLength;case nf:return n*e*3/r.components*r.byteLength;case vn:return n*e*4/r.components*r.byteLength;case Qc:return n*e*4/r.components*r.byteLength;case Ua:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oa:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jl:case Ql:return Math.max(n,16)*Math.max(e,8)/4;case Yl:case Zl:return Math.max(n,8)*Math.max(e,8)/2;case ec:case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fa:case _c:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lf:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sc:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Oy(n){switch(n){case li:case Zd:return{byteLength:1,components:1};case Ps:case Qd:case ai:return{byteLength:2,components:1};case Kc:case Yc:return{byteLength:2,components:4};case rr:case Xc:case ii:return{byteLength:4,components:1};case ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ky(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):Ka("canvas")}function _(T,v,F){let X=1;const J=Ee(T);if((J.width>F||J.height>F)&&(X=F/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(X*J.width),xe=Math.floor(X*J.height);h===void 0&&(h=g(j,xe));const ae=v?g(j,xe):h;return ae.width=j,ae.height=xe,ae.getContext("2d").drawImage(T,0,0,j,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+xe+")."),ae}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(T,v,F,X,J=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=v;if(v===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),v===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RG8UI),F===n.UNSIGNED_SHORT&&(j=n.RG16UI),F===n.UNSIGNED_INT&&(j=n.RG32UI),F===n.BYTE&&(j=n.RG8I),F===n.SHORT&&(j=n.RG16I),F===n.INT&&(j=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGB8UI),F===n.UNSIGNED_SHORT&&(j=n.RGB16UI),F===n.UNSIGNED_INT&&(j=n.RGB32UI),F===n.BYTE&&(j=n.RGB8I),F===n.SHORT&&(j=n.RGB16I),F===n.INT&&(j=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),F===n.UNSIGNED_INT&&(j=n.RGBA32UI),F===n.BYTE&&(j=n.RGBA8I),F===n.SHORT&&(j=n.RGBA16I),F===n.INT&&(j=n.RGBA32I)),v===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),v===n.RGBA){const xe=J?ho:qe.getTransfer(X);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=xe===et?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(T,v){let F;return T?v===null||v===rr||v===Kr?F=n.DEPTH24_STENCIL8:v===ii?F=n.DEPTH32F_STENCIL8:v===Ps&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===rr||v===Kr?F=n.DEPTH_COMPONENT24:v===ii?F=n.DEPTH_COMPONENT32F:v===Ps&&(F=n.DEPTH_COMPONENT16),F}function O(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==yn&&T.minFilter!==Dn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),C(v),v.isVideoTexture&&u.delete(v)}function M(T){const v=T.target;v.removeEventListener("dispose",M),y(v)}function C(T){const v=i.get(T);if(v.__webglInit===void 0)return;const F=T.source,X=d.get(F);if(X){const J=X[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(T),Object.keys(X).length===0&&d.delete(F)}i.remove(T)}function b(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const F=T.source,X=d.get(F);delete X[v.__cacheKey],a.memory.textures--}function y(T){const v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let J=0;J<v.__webglFramebuffer[X].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[X][J]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=T.textures;for(let X=0,J=F.length;X<J;X++){const j=i.get(F[X]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(F[X])}i.remove(T)}let R=0;function k(){R=0}function I(){const T=R;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T}function B(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function q(T,v){const F=i.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,T,v);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function W(T,v){const F=i.get(T);if(T.version>0&&F.__version!==T.version){$(F,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function Y(T,v){const F=i.get(T);if(T.version>0&&F.__version!==T.version){$(F,T,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function V(T,v){const F=i.get(T);if(T.version>0&&F.__version!==T.version){Z(F,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const re={[Xl]:n.REPEAT,[Yi]:n.CLAMP_TO_EDGE,[Kl]:n.MIRRORED_REPEAT},ue={[yn]:n.NEAREST,[Em]:n.NEAREST_MIPMAP_NEAREST,[Js]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[bo]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},ge={[Rm]:n.NEVER,[Um]:n.ALWAYS,[Cm]:n.LESS,[cf]:n.LEQUAL,[Pm]:n.EQUAL,[Dm]:n.GEQUAL,[Im]:n.GREATER,[Lm]:n.NOTEQUAL};function ke(T,v){if(v.type===ii&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Dn||v.magFilter===bo||v.magFilter===Js||v.magFilter===Ji||v.minFilter===Dn||v.minFilter===bo||v.minFilter===Js||v.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,re[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,re[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,re[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ue[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===yn||v.minFilter!==Js&&v.minFilter!==Ji||v.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ye(T,v){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const X=v.source;let J=d.get(X);J===void 0&&(J={},d.set(X,J));const j=B(v);if(j!==T.__cacheKey){J[j]===void 0&&(J[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[j].usedTimes++;const xe=J[T.__cacheKey];xe!==void 0&&(J[T.__cacheKey].usedTimes--,xe.usedTimes===0&&b(v)),T.__cacheKey=j,T.__webglTexture=J[j].texture}return F}function $(T,v,F){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);const J=Ye(T,v),j=v.source;t.bindTexture(X,T.__webglTexture,n.TEXTURE0+F);const xe=i.get(j);if(j.version!==xe.__version||J===!0){t.activeTexture(n.TEXTURE0+F);const ae=qe.getPrimaries(qe.workingColorSpace),he=v.colorSpace===Ei?null:qe.getPrimaries(v.colorSpace),je=v.colorSpace===Ei||ae===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Q=_(v.image,!1,r.maxTextureSize);Q=st(v,Q);const fe=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type);let Re=x(v.internalFormat,fe,Ae,v.colorSpace,v.isVideoTexture);ke(X,v);let pe;const Ge=v.mipmaps,Fe=v.isVideoTexture!==!0,nt=xe.__version===void 0||J===!0,P=j.dataReady,se=O(v,Q);if(v.isDepthTexture)Re=S(v.format===Yr,v.type),nt&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Re,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Re,Q.width,Q.height,0,fe,Ae,null));else if(v.isDataTexture)if(Ge.length>0){Fe&&nt&&t.texStorage2D(n.TEXTURE_2D,se,Re,Ge[0].width,Ge[0].height);for(let G=0,K=Ge.length;G<K;G++)pe=Ge[G],Fe?P&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,G,Re,pe.width,pe.height,0,fe,Ae,pe.data);v.generateMipmaps=!1}else Fe?(nt&&t.texStorage2D(n.TEXTURE_2D,se,Re,Q.width,Q.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,fe,Ae,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Re,Q.width,Q.height,0,fe,Ae,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Re,Ge[0].width,Ge[0].height,Q.depth);for(let G=0,K=Ge.length;G<K;G++)if(pe=Ge[G],v.format!==vn)if(fe!==null)if(Fe){if(P)if(v.layerUpdates.size>0){const ce=bh(pe.width,pe.height,v.format,v.type);for(const oe of v.layerUpdates){const De=pe.data.subarray(oe*ce/pe.data.BYTES_PER_ELEMENT,(oe+1)*ce/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,oe,pe.width,pe.height,1,fe,De)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,Q.depth,fe,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,Re,pe.width,pe.height,Q.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,pe.width,pe.height,Q.depth,fe,Ae,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,Re,pe.width,pe.height,Q.depth,0,fe,Ae,pe.data)}else{Fe&&nt&&t.texStorage2D(n.TEXTURE_2D,se,Re,Ge[0].width,Ge[0].height);for(let G=0,K=Ge.length;G<K;G++)pe=Ge[G],v.format!==vn?fe!==null?Fe?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,G,Re,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?P&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,pe.width,pe.height,fe,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,G,Re,pe.width,pe.height,0,fe,Ae,pe.data)}else if(v.isDataArrayTexture)if(Fe){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Re,Q.width,Q.height,Q.depth),P)if(v.layerUpdates.size>0){const G=bh(Q.width,Q.height,v.format,v.type);for(const K of v.layerUpdates){const ce=Q.data.subarray(K*G/Q.data.BYTES_PER_ELEMENT,(K+1)*G/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,fe,Ae,ce)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,Ae,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,Q.width,Q.height,Q.depth,0,fe,Ae,Q.data);else if(v.isData3DTexture)Fe?(nt&&t.texStorage3D(n.TEXTURE_3D,se,Re,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,Ae,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Re,Q.width,Q.height,Q.depth,0,fe,Ae,Q.data);else if(v.isFramebufferTexture){if(nt)if(Fe)t.texStorage2D(n.TEXTURE_2D,se,Re,Q.width,Q.height);else{let G=Q.width,K=Q.height;for(let ce=0;ce<se;ce++)t.texImage2D(n.TEXTURE_2D,ce,Re,G,K,0,fe,Ae,null),G>>=1,K>>=1}}else if(Ge.length>0){if(Fe&&nt){const G=Ee(Ge[0]);t.texStorage2D(n.TEXTURE_2D,se,Re,G.width,G.height)}for(let G=0,K=Ge.length;G<K;G++)pe=Ge[G],Fe?P&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,fe,Ae,pe):t.texImage2D(n.TEXTURE_2D,G,Re,fe,Ae,pe);v.generateMipmaps=!1}else if(Fe){if(nt){const G=Ee(Q);t.texStorage2D(n.TEXTURE_2D,se,Re,G.width,G.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Ae,Q)}else t.texImage2D(n.TEXTURE_2D,0,Re,fe,Ae,Q);m(v)&&p(X),xe.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Z(T,v,F){if(v.image.length!==6)return;const X=Ye(T,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const j=i.get(J);if(J.version!==j.__version||X===!0){t.activeTexture(n.TEXTURE0+F);const xe=qe.getPrimaries(qe.workingColorSpace),ae=v.colorSpace===Ei?null:qe.getPrimaries(v.colorSpace),he=v.colorSpace===Ei||xe===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const je=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!je&&!Q?fe[K]=_(v.image[K],!0,r.maxCubemapSize):fe[K]=Q?v.image[K].image:v.image[K],fe[K]=st(v,fe[K]);const Ae=fe[0],Re=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),Ge=x(v.internalFormat,Re,pe,v.colorSpace),Fe=v.isVideoTexture!==!0,nt=j.__version===void 0||X===!0,P=J.dataReady;let se=O(v,Ae);ke(n.TEXTURE_CUBE_MAP,v);let G;if(je){Fe&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Ge,Ae.width,Ae.height);for(let K=0;K<6;K++){G=fe[K].mipmaps;for(let ce=0;ce<G.length;ce++){const oe=G[ce];v.format!==vn?Re!==null?Fe?P&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,oe.width,oe.height,Re,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Ge,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,oe.width,oe.height,Re,pe,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Ge,oe.width,oe.height,0,Re,pe,oe.data)}}}else{if(G=v.mipmaps,Fe&&nt){G.length>0&&se++;const K=Ee(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Ge,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,Re,pe,fe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,fe[K].width,fe[K].height,0,Re,pe,fe[K].data);for(let ce=0;ce<G.length;ce++){const De=G[ce].image[K].image;Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,De.width,De.height,Re,pe,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Ge,De.width,De.height,0,Re,pe,De.data)}}else{Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,pe,fe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,Re,pe,fe[K]);for(let ce=0;ce<G.length;ce++){const oe=G[ce];Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Re,pe,oe.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Ge,Re,pe,oe.image[K])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),j.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function me(T,v,F,X,J,j){const xe=s.convert(F.format,F.colorSpace),ae=s.convert(F.type),he=x(F.internalFormat,xe,ae,F.colorSpace),je=i.get(v),Q=i.get(F);if(Q.__renderTarget=v,!je.__hasExternalTextures){const fe=Math.max(1,v.width>>j),Ae=Math.max(1,v.height>>j);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,j,he,fe,Ae,v.depth,0,xe,ae,null):t.texImage2D(J,j,he,fe,Ae,0,xe,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,J,Q.__webglTexture,0,He(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,J,Q.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(T,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){const X=v.depthTexture,J=X&&X.isDepthTexture?X.type:null,j=S(v.stencilBuffer,J),xe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=He(v);Ve(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,j,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,j,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,T)}else{const X=v.textures;for(let J=0;J<X.length;J++){const j=X[J],xe=s.convert(j.format,j.colorSpace),ae=s.convert(j.type),he=x(j.internalFormat,xe,ae,j.colorSpace),je=He(v);F&&Ve(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,he,v.width,v.height):Ve(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,he,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,he,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const J=X.__webglTexture,j=He(v);if(v.depthTexture.format===zr)Ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===Yr)Ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Te(T){const v=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=X}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Se(v.__webglFramebuffer,T)}else if(F){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),te(v.__webglDepthbuffer[X],T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),te(v.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(T,v,F){const X=i.get(T);v!==void 0&&me(X.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Te(T)}function ct(T){const v=T.texture,F=i.get(T),X=i.get(v);T.addEventListener("dispose",M);const J=T.textures,j=T.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,a.memory.textures++),j){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let he=0;he<v.mipmaps.length;he++)F.__webglFramebuffer[ae][he]=n.createFramebuffer()}else F.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)F.__webglFramebuffer[ae]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xe)for(let ae=0,he=J.length;ae<he;ae++){const je=i.get(J[ae]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Ve(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const he=J[ae];F.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ae]);const je=s.convert(he.format,he.colorSpace),Q=s.convert(he.type),fe=x(he.internalFormat,je,Q,he.colorSpace,T.isXRRenderTarget===!0),Ae=He(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,fe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,F.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),te(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ke(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)me(F.__webglFramebuffer[ae][he],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else me(F.__webglFramebuffer[ae],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ae=0,he=J.length;ae<he;ae++){const je=J[ae],Q=i.get(je);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),ke(n.TEXTURE_2D,je),me(F.__webglFramebuffer,T,je,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(je)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,X.__webglTexture),ke(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)me(F.__webglFramebuffer[he],T,v,n.COLOR_ATTACHMENT0,ae,he);else me(F.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,ae,0);m(v)&&p(ae),t.unbindTexture()}T.depthBuffer&&Te(T)}function $e(T){const v=T.textures;for(let F=0,X=v.length;F<X;F++){const J=v[F];if(m(J)){const j=w(T),xe=i.get(J).__webglTexture;t.bindTexture(j,xe),p(j),t.unbindTexture()}}}const pt=[],U=[];function Kt(T){if(T.samples>0){if(Ve(T)===!1){const v=T.textures,F=T.width,X=T.height;let J=n.COLOR_BUFFER_BIT;const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(T),ae=v.length>1;if(ae)for(let he=0;he<v.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let he=0;he<v.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[he]);const je=i.get(v[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,F,X,0,0,F,X,J,n.NEAREST),l===!0&&(pt.length=0,U.length=0,pt.push(n.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.resolveDepthBuffer===!1&&(pt.push(j),U.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let he=0;he<v.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,xe.__webglColorRenderbuffer[he]);const je=i.get(v[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function He(T){return Math.min(r.maxSamples,T.samples)}function Ve(T){const v=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Me(T){const v=a.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function st(T,v){const F=T.colorSpace,X=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Qr&&F!==Ei&&(qe.getTransfer(F)===et?(X!==vn||J!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Ee(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Le,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ve}function Fy(n,e){function t(i,r=Ei){let s;const a=qe.getTransfer(r);if(i===li)return n.UNSIGNED_BYTE;if(i===Kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ef)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zd)return n.BYTE;if(i===Qd)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===Xc)return n.INT;if(i===rr)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===ai)return n.HALF_FLOAT;if(i===tf)return n.ALPHA;if(i===nf)return n.RGB;if(i===vn)return n.RGBA;if(i===rf)return n.LUMINANCE;if(i===sf)return n.LUMINANCE_ALPHA;if(i===zr)return n.DEPTH_COMPONENT;if(i===Yr)return n.DEPTH_STENCIL;if(i===af)return n.RED;if(i===Jc)return n.RED_INTEGER;if(i===of)return n.RG;if(i===Zc)return n.RG_INTEGER;if(i===Qc)return n.RGBA_INTEGER;if(i===Ua||i===Na||i===Oa||i===ka)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yl||i===Jl||i===Zl||i===Ql)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ql)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ec||i===tc||i===nc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ec||i===tc)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nc)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ic||i===rc||i===sc||i===ac||i===oc||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ic)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rc)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sc)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oc)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lc)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cc)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hc)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fc)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pc)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fa||i===_c||i===vc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fa)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_c)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lf||i===yc||i===Sc||i===xc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class By extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class In extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zy={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new In;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Vt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zt({vertexShader:Hy,fragmentShader:Vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wy extends es{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new Gy,m=t.getContextAttributes();let p=null,w=null;const x=[],S=[],O=new ze;let A=null;const M=new dn;M.viewport=new gt;const C=new dn;C.viewport=new gt;const b=[M,C],y=new By;let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=x[$];return Z===void 0&&(Z=new Jo,x[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=x[$];return Z===void 0&&(Z=new Jo,x[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=x[$];return Z===void 0&&(Z=new Jo,x[$]=Z),Z.getHandSpace()};function I($){const Z=S.indexOf($.inputSource);if(Z===-1)return;const me=x[Z];me!==void 0&&(me.update($.inputSource,$.frame,c||a),me.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",q);for(let $=0;$<x.length;$++){const Z=S[$];Z!==null&&(S[$]=null,x[$].disconnect(Z))}R=null,k=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,w=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",B),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Sn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,me=null,te=null;m.depth&&(te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?Yr:zr,me=m.stencil?Kr:rr);const Se={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Sn(d.textureWidth,d.textureHeight,{format:vn,type:li,depthTexture:new Ef(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q($){for(let Z=0;Z<$.removed.length;Z++){const me=$.removed[Z],te=S.indexOf(me);te>=0&&(S[te]=null,x[te].disconnect(me))}for(let Z=0;Z<$.added.length;Z++){const me=$.added[Z];let te=S.indexOf(me);if(te===-1){for(let Te=0;Te<x.length;Te++)if(Te>=S.length){S.push(me),te=Te;break}else if(S[Te]===null){S[Te]=me,te=Te;break}if(te===-1)break}const Se=x[te];Se&&Se.connect(me)}}const W=new N,Y=new N;function V($,Z,me){W.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(me.matrixWorld);const te=W.distanceTo(Y),Se=Z.projectionMatrix.elements,Te=me.projectionMatrix.elements,Le=Se[14]/(Se[10]-1),ct=Se[14]/(Se[10]+1),$e=(Se[9]+1)/Se[5],pt=(Se[9]-1)/Se[5],U=(Se[8]-1)/Se[0],Kt=(Te[8]+1)/Te[0],He=Le*U,Ve=Le*Kt,Me=te/(-U+Kt),st=Me*-U;if(Z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(st),$.translateZ(Me),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Se[10]===-1)$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Ee=Le+Me,T=ct+Me,v=He-st,F=Ve+(te-st),X=$e*ct/T*Ee,J=pt*ct/T*Ee;$.projectionMatrix.makePerspective(v,F,X,J,Ee,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function re($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let Z=$.near,me=$.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(me=_.depthFar)),y.near=C.near=M.near=Z,y.far=C.far=M.far=me,(R!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,k=y.far),M.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,y.layers.mask=M.layers.mask|C.layers.mask;const te=$.parent,Se=y.cameras;re(y,te);for(let Te=0;Te<Se.length;Te++)re(Se[Te],te);Se.length===2?V(y,M,C):y.projectionMatrix.copy(M.projectionMatrix),ue($,y,te)};function ue($,Z,me){me===null?$.matrix.copy(Z.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(Z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=bc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ge=null;function ke($,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let te=!1;me.length!==y.cameras.length&&(y.cameras.length=0,te=!0);for(let Te=0;Te<me.length;Te++){const Le=me[Te];let ct=null;if(f!==null)ct=f.getViewport(Le);else{const pt=h.getViewSubImage(d,Le);ct=pt.viewport,Te===0&&(e.setRenderTargetTextures(w,pt.colorTexture,d.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(w))}let $e=b[Te];$e===void 0&&($e=new dn,$e.layers.enable(Te),$e.viewport=new gt,b[Te]=$e),$e.matrix.fromArray(Le.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Le.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ct.x,ct.y,ct.width,ct.height),Te===0&&(y.matrix.copy($e.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),te===!0&&y.cameras.push($e)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const Te=h.getDepthInformation(me[0]);Te&&Te.isValid&&Te.texture&&_.init(e,Te,r.renderState)}}for(let me=0;me<x.length;me++){const te=S[me],Se=x[me];te!==null&&Se!==void 0&&Se.update(te,Z,c||a)}ge&&ge($,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ye=new bf;Ye.setAnimationLoop(ke),this.setAnimationLoop=function($){ge=$},this.dispose=function(){}}}const Fi=new ci,$y=new _t;function jy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),x=w.envMap,S=w.envMapRotation;x&&(m.envMap.value=x,Fi.copy(S),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(Fi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qy(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,x){const S=x.program;i.uniformBlockBinding(w,S)}function c(w,x){let S=r[w.id];S===void 0&&(g(w),S=u(w),r[w.id]=S,w.addEventListener("dispose",m));const O=x.program;i.updateUBOMapping(w,O);const A=e.render.frame;s[w.id]!==A&&(d(w),s[w.id]=A)}function u(w){const x=h();w.__bindingPointIndex=x;const S=n.createBuffer(),O=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,O,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const x=r[w.id],S=w.uniforms,O=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,M=S.length;A<M;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let b=0,y=C.length;b<y;b++){const R=C[b];if(f(R,A,b,O)===!0){const k=R.__offset,I=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let q=0;q<I.length;q++){const W=I[q],Y=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,k+B,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,B),B+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,x,S,O){const A=w.value,M=x+"_"+S;if(O[M]===void 0)return typeof A=="number"||typeof A=="boolean"?O[M]=A:O[M]=A.clone(),!0;{const C=O[M];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return O[M]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(w){const x=w.uniforms;let S=0;const O=16;for(let M=0,C=x.length;M<C;M++){const b=Array.isArray(x[M])?x[M]:[x[M]];for(let y=0,R=b.length;y<R;y++){const k=b[y],I=Array.isArray(k.value)?k.value:[k.value];for(let B=0,q=I.length;B<q;B++){const W=I[B],Y=_(W),V=S%O,re=V%Y.boundary,ue=V+re;S+=re,ue!==0&&O-ue<Y.storage&&(S+=O-ue),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Y.storage}}}const A=S%O;return A>0&&(S+=O-A),w.__size=S,w.__cache={},this}function _(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Xy{constructor(e={}){const{canvas:t=km(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=Ri,this.toneMappingExposure=1;const S=this;let O=!1,A=0,M=0,C=null,b=-1,y=null;const R=new gt,k=new gt;let I=null;const B=new We(0);let q=0,W=t.width,Y=t.height,V=1,re=null,ue=null;const ge=new gt(0,0,W,Y),ke=new gt(0,0,W,Y);let Ye=!1;const $=new xf;let Z=!1,me=!1;const te=new _t,Se=new _t,Te=new N,Le=new gt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function pt(){return C===null?V:1}let U=i;function Kt(E,L){return t.getContext(E,L)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qc}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",oe,!1),U===null){const L="webgl2";if(U=Kt(L,E),U===null)throw Kt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let He,Ve,Me,st,Ee,T,v,F,X,J,j,xe,ae,he,je,Q,fe,Ae,Re,pe,Ge,Fe,nt,P;function se(){He=new Q0(U),He.init(),Fe=new Fy(U,He),Ve=new q0(U,He,e,Fe),Me=new Ny(U,He),Ve.reverseDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),st=new nv(U),Ee=new Sy,T=new ky(U,He,Me,Ee,Ve,Fe,st),v=new K0(S),F=new Z0(S),X=new cg(U),nt=new $0(U,X),J=new ev(U,X,st,nt),j=new rv(U,J,X,st),Re=new iv(U,Ve,T),Q=new X0(Ee),xe=new yy(S,v,F,He,Ve,nt,Q),ae=new jy(S,Ee),he=new by,je=new Ry(He),Ae=new W0(S,v,F,Me,j,f,l),fe=new Dy(S,j,Ve),P=new qy(U,st,Ve,Me),pe=new j0(U,He,st),Ge=new tv(U,He,st),st.programs=xe.programs,S.capabilities=Ve,S.extensions=He,S.properties=Ee,S.renderLists=he,S.shadowMap=fe,S.state=Me,S.info=st}se();const G=new Wy(S,U);this.xr=G,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(W,Y,!1))},this.getSize=function(E){return E.set(W,Y)},this.setSize=function(E,L,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,Y=L,t.width=Math.floor(E*V),t.height=Math.floor(L*V),z===!0&&(t.style.width=E+"px",t.style.height=L+"px"),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(W*V,Y*V).floor()},this.setDrawingBufferSize=function(E,L,z){W=E,Y=L,V=z,t.width=Math.floor(E*z),t.height=Math.floor(L*z),this.setViewport(0,0,E,L)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(ge)},this.setViewport=function(E,L,z,H){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,L,z,H),Me.viewport(R.copy(ge).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(ke)},this.setScissor=function(E,L,z,H){E.isVector4?ke.set(E.x,E.y,E.z,E.w):ke.set(E,L,z,H),Me.scissor(k.copy(ke).multiplyScalar(V).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(E){Me.setScissorTest(Ye=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(E=!0,L=!0,z=!0){let H=0;if(E){let D=!1;if(C!==null){const ee=C.texture.format;D=ee===Qc||ee===Zc||ee===Jc}if(D){const ee=C.texture.type,le=ee===li||ee===rr||ee===Ps||ee===Kr||ee===Kc||ee===Yc,_e=Ae.getClearColor(),ve=Ae.getClearAlpha(),Ce=_e.r,Ue=_e.g,ye=_e.b;le?(g[0]=Ce,g[1]=Ue,g[2]=ye,g[3]=ve,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ce,_[1]=Ue,_[2]=ye,_[3]=ve,U.clearBufferiv(U.COLOR,0,_))}else H|=U.COLOR_BUFFER_BIT}L&&(H|=U.DEPTH_BUFFER_BIT),z&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),he.dispose(),je.dispose(),Ee.dispose(),v.dispose(),F.dispose(),j.dispose(),nt.dispose(),P.dispose(),xe.dispose(),G.dispose(),G.removeEventListener("sessionstart",pu),G.removeEventListener("sessionend",mu),Li.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const E=st.autoReset,L=fe.enabled,z=fe.autoUpdate,H=fe.needsUpdate,D=fe.type;se(),st.autoReset=E,fe.enabled=L,fe.autoUpdate=z,fe.needsUpdate=H,fe.type=D}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function De(E){const L=E.target;L.removeEventListener("dispose",De),ht(L)}function ht(E){Tt(E),Ee.remove(E)}function Tt(E){const L=Ee.get(E).programs;L!==void 0&&(L.forEach(function(z){xe.releaseProgram(z)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,z,H,D,ee){L===null&&(L=ct);const le=D.isMesh&&D.matrixWorld.determinant()<0,_e=xp(E,L,z,H,D);Me.setMaterial(H,le);let ve=z.index,Ce=1;if(H.wireframe===!0){if(ve=J.getWireframeAttribute(z),ve===void 0)return;Ce=2}const Ue=z.drawRange,ye=z.attributes.position;let Xe=Ue.start*Ce,it=(Ue.start+Ue.count)*Ce;ee!==null&&(Xe=Math.max(Xe,ee.start*Ce),it=Math.min(it,(ee.start+ee.count)*Ce)),ve!==null?(Xe=Math.max(Xe,0),it=Math.min(it,ve.count)):ye!=null&&(Xe=Math.max(Xe,0),it=Math.min(it,ye.count));const at=it-Xe;if(at<0||at===1/0)return;nt.setup(D,H,_e,z,ve);let Ot,Je=pe;if(ve!==null&&(Ot=X.get(ve),Je=Ge,Je.setIndex(Ot)),D.isMesh)H.wireframe===!0?(Me.setLineWidth(H.wireframeLinewidth*pt()),Je.setMode(U.LINES)):Je.setMode(U.TRIANGLES);else if(D.isLine){let be=H.linewidth;be===void 0&&(be=1),Me.setLineWidth(be*pt()),D.isLineSegments?Je.setMode(U.LINES):D.isLineLoop?Je.setMode(U.LINE_LOOP):Je.setMode(U.LINE_STRIP)}else D.isPoints?Je.setMode(U.POINTS):D.isSprite&&Je.setMode(U.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Je.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Je.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const be=D._multiDrawStarts,Fn=D._multiDrawCounts,Ze=D._multiDrawCount,sn=ve?X.get(ve).bytesPerElement:1,or=Ee.get(H).currentProgram.getUniforms();for(let Wt=0;Wt<Ze;Wt++)or.setValue(U,"_gl_DrawID",Wt),Je.render(be[Wt]/sn,Fn[Wt])}else if(D.isInstancedMesh)Je.renderInstances(Xe,at,D.count);else if(z.isInstancedBufferGeometry){const be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Fn=Math.min(z.instanceCount,be);Je.renderInstances(Xe,at,Fn)}else Je.render(Xe,at)};function Qe(E,L,z){E.transparent===!0&&E.side===Qn&&E.forceSinglePass===!1?(E.side=Ht,E.needsUpdate=!0,Ys(E,L,z),E.side=Ii,E.needsUpdate=!0,Ys(E,L,z),E.side=Qn):Ys(E,L,z)}this.compile=function(E,L,z=null){z===null&&(z=E),p=je.get(z),p.init(L),x.push(p),z.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),E!==z&&E.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const H=new Set;return E.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const ee=D.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const _e=ee[le];Qe(_e,z,D),H.add(_e)}else Qe(ee,z,D),H.add(ee)}),x.pop(),p=null,H},this.compileAsync=function(E,L,z=null){const H=this.compile(E,L,z);return new Promise(D=>{function ee(){if(H.forEach(function(le){Ee.get(le).currentProgram.isReady()&&H.delete(le)}),H.size===0){D(E);return}setTimeout(ee,10)}He.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let rn=null;function kn(E){rn&&rn(E)}function pu(){Li.stop()}function mu(){Li.start()}const Li=new bf;Li.setAnimationLoop(kn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(E){rn=E,G.setAnimationLoop(E),E===null?Li.stop():Li.start()},G.addEventListener("sessionstart",pu),G.addEventListener("sessionend",mu),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(L),L=G.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,L,C),p=je.get(E,x.length),p.init(L),x.push(p),Se.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),$.setFromProjectionMatrix(Se),me=this.localClippingEnabled,Z=Q.init(this.clippingPlanes,me),m=he.get(E,w.length),m.init(),w.push(m),G.enabled===!0&&G.isPresenting===!0){const ee=S.xr.getDepthSensingMesh();ee!==null&&So(ee,L,-1/0,S.sortObjects)}So(E,L,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(re,ue),$e=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,$e&&Ae.addToRenderList(m,E),this.info.render.frame++,Z===!0&&Q.beginShadows();const z=p.state.shadowsArray;fe.render(z,E,L),Z===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,D=m.transmissive;if(p.setupLights(),L.isArrayCamera){const ee=L.cameras;if(D.length>0)for(let le=0,_e=ee.length;le<_e;le++){const ve=ee[le];_u(H,D,E,ve)}$e&&Ae.render(E);for(let le=0,_e=ee.length;le<_e;le++){const ve=ee[le];gu(m,E,ve,ve.viewport)}}else D.length>0&&_u(H,D,E,L),$e&&Ae.render(E),gu(m,E,L);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(S,E,L),nt.resetDefaultState(),b=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],Z===!0&&Q.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function So(E,L,z,H){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){H&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);const le=j.update(E),_e=E.material;_e.visible&&m.push(E,le,_e,z,Le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const le=j.update(E),_e=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Le.copy(le.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(_e)){const ve=le.groups;for(let Ce=0,Ue=ve.length;Ce<Ue;Ce++){const ye=ve[Ce],Xe=_e[ye.materialIndex];Xe&&Xe.visible&&m.push(E,le,Xe,z,Le.z,ye)}}else _e.visible&&m.push(E,le,_e,z,Le.z,null)}}const ee=E.children;for(let le=0,_e=ee.length;le<_e;le++)So(ee[le],L,z,H)}function gu(E,L,z,H){const D=E.opaque,ee=E.transmissive,le=E.transparent;p.setupLightsView(z),Z===!0&&Q.setGlobalState(S.clippingPlanes,z),H&&Me.viewport(R.copy(H)),D.length>0&&Ks(D,L,z),ee.length>0&&Ks(ee,L,z),le.length>0&&Ks(le,L,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function _u(E,L,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Sn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?ai:li,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ee=p.state.transmissionRenderTarget[H.id],le=H.viewport||R;ee.setSize(le.z,le.w);const _e=S.getRenderTarget();S.setRenderTarget(ee),S.getClearColor(B),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),$e&&Ae.render(z);const ve=S.toneMapping;S.toneMapping=Ri;const Ce=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Z===!0&&Q.setGlobalState(S.clippingPlanes,H),Ks(E,z,H),T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ye=0,Xe=L.length;ye<Xe;ye++){const it=L[ye],at=it.object,Ot=it.geometry,Je=it.material,be=it.group;if(Je.side===Qn&&at.layers.test(H.layers)){const Fn=Je.side;Je.side=Ht,Je.needsUpdate=!0,vu(at,z,H,Ot,Je,be),Je.side=Fn,Je.needsUpdate=!0,Ue=!0}}Ue===!0&&(T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee))}S.setRenderTarget(_e),S.setClearColor(B,q),Ce!==void 0&&(H.viewport=Ce),S.toneMapping=ve}function Ks(E,L,z){const H=L.isScene===!0?L.overrideMaterial:null;for(let D=0,ee=E.length;D<ee;D++){const le=E[D],_e=le.object,ve=le.geometry,Ce=H===null?le.material:H,Ue=le.group;_e.layers.test(z.layers)&&vu(_e,L,z,ve,Ce,Ue)}}function vu(E,L,z,H,D,ee){E.onBeforeRender(S,L,z,H,D,ee),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),D.onBeforeRender(S,L,z,H,E,ee),D.transparent===!0&&D.side===Qn&&D.forceSinglePass===!1?(D.side=Ht,D.needsUpdate=!0,S.renderBufferDirect(z,L,H,D,E,ee),D.side=Ii,D.needsUpdate=!0,S.renderBufferDirect(z,L,H,D,E,ee),D.side=Qn):S.renderBufferDirect(z,L,H,D,E,ee),E.onAfterRender(S,L,z,H,D,ee)}function Ys(E,L,z){L.isScene!==!0&&(L=ct);const H=Ee.get(E),D=p.state.lights,ee=p.state.shadowsArray,le=D.state.version,_e=xe.getParameters(E,D.state,ee,L,z),ve=xe.getProgramCacheKey(_e);let Ce=H.programs;H.environment=E.isMeshStandardMaterial?L.environment:null,H.fog=L.fog,H.envMap=(E.isMeshStandardMaterial?F:v).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",De),Ce=new Map,H.programs=Ce);let Ue=Ce.get(ve);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===le)return Su(E,_e),Ue}else _e.uniforms=xe.getUniforms(E),E.onBeforeCompile(_e,S),Ue=xe.acquireProgram(_e,ve),Ce.set(ve,Ue),H.uniforms=_e.uniforms;const ye=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=Q.uniform),Su(E,_e),H.needsLights=Ep(E),H.lightsStateVersion=le,H.needsLights&&(ye.ambientLightColor.value=D.state.ambient,ye.lightProbe.value=D.state.probe,ye.directionalLights.value=D.state.directional,ye.directionalLightShadows.value=D.state.directionalShadow,ye.spotLights.value=D.state.spot,ye.spotLightShadows.value=D.state.spotShadow,ye.rectAreaLights.value=D.state.rectArea,ye.ltc_1.value=D.state.rectAreaLTC1,ye.ltc_2.value=D.state.rectAreaLTC2,ye.pointLights.value=D.state.point,ye.pointLightShadows.value=D.state.pointShadow,ye.hemisphereLights.value=D.state.hemi,ye.directionalShadowMap.value=D.state.directionalShadowMap,ye.directionalShadowMatrix.value=D.state.directionalShadowMatrix,ye.spotShadowMap.value=D.state.spotShadowMap,ye.spotLightMatrix.value=D.state.spotLightMatrix,ye.spotLightMap.value=D.state.spotLightMap,ye.pointShadowMap.value=D.state.pointShadowMap,ye.pointShadowMatrix.value=D.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function yu(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=Ba.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function Su(E,L){const z=Ee.get(E);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function xp(E,L,z,H,D){L.isScene!==!0&&(L=ct),T.resetTextureUnits();const ee=L.fog,le=H.isMeshStandardMaterial?L.environment:null,_e=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Qr,ve=(H.isMeshStandardMaterial?F:v).get(H.envMap||le),Ce=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!z.morphAttributes.position,Xe=!!z.morphAttributes.normal,it=!!z.morphAttributes.color;let at=Ri;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(at=S.toneMapping);const Ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Je=Ot!==void 0?Ot.length:0,be=Ee.get(H),Fn=p.state.lights;if(Z===!0&&(me===!0||E!==y)){const Yt=E===y&&H.id===b;Q.setState(H,E,Yt)}let Ze=!1;H.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Fn.state.version||be.outputColorSpace!==_e||D.isBatchedMesh&&be.batching===!1||!D.isBatchedMesh&&be.batching===!0||D.isBatchedMesh&&be.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&be.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&be.instancing===!1||!D.isInstancedMesh&&be.instancing===!0||D.isSkinnedMesh&&be.skinning===!1||!D.isSkinnedMesh&&be.skinning===!0||D.isInstancedMesh&&be.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&be.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&be.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&be.instancingMorph===!1&&D.morphTexture!==null||be.envMap!==ve||H.fog===!0&&be.fog!==ee||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Q.numPlanes||be.numIntersection!==Q.numIntersection)||be.vertexAlphas!==Ce||be.vertexTangents!==Ue||be.morphTargets!==ye||be.morphNormals!==Xe||be.morphColors!==it||be.toneMapping!==at||be.morphTargetsCount!==Je)&&(Ze=!0):(Ze=!0,be.__version=H.version);let sn=be.currentProgram;Ze===!0&&(sn=Ys(H,L,D));let or=!1,Wt=!1,rs=!1;const ot=sn.getUniforms(),Tn=be.uniforms;if(Me.useProgram(sn.program)&&(or=!0,Wt=!0,rs=!0),H.id!==b&&(b=H.id,Wt=!0),or||y!==E){Me.buffers.depth.getReversed()?(te.copy(E.projectionMatrix),Bm(te),zm(te),ot.setValue(U,"projectionMatrix",te)):ot.setValue(U,"projectionMatrix",E.projectionMatrix),ot.setValue(U,"viewMatrix",E.matrixWorldInverse);const hi=ot.map.cameraPosition;hi!==void 0&&hi.setValue(U,Te.setFromMatrixPosition(E.matrixWorld)),Ve.logarithmicDepthBuffer&&ot.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ot.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Wt=!0,rs=!0)}if(D.isSkinnedMesh){ot.setOptional(U,D,"bindMatrix"),ot.setOptional(U,D,"bindMatrixInverse");const Yt=D.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),ot.setValue(U,"boneTexture",Yt.boneTexture,T))}D.isBatchedMesh&&(ot.setOptional(U,D,"batchingTexture"),ot.setValue(U,"batchingTexture",D._matricesTexture,T),ot.setOptional(U,D,"batchingIdTexture"),ot.setValue(U,"batchingIdTexture",D._indirectTexture,T),ot.setOptional(U,D,"batchingColorTexture"),D._colorsTexture!==null&&ot.setValue(U,"batchingColorTexture",D._colorsTexture,T));const ss=z.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&Re.update(D,z,sn),(Wt||be.receiveShadow!==D.receiveShadow)&&(be.receiveShadow=D.receiveShadow,ot.setValue(U,"receiveShadow",D.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Tn.envMap.value=ve,Tn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&L.environment!==null&&(Tn.envMapIntensity.value=L.environmentIntensity),Wt&&(ot.setValue(U,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&bp(Tn,rs),ee&&H.fog===!0&&ae.refreshFogUniforms(Tn,ee),ae.refreshMaterialUniforms(Tn,H,V,Y,p.state.transmissionRenderTarget[E.id]),Ba.upload(U,yu(be),Tn,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ba.upload(U,yu(be),Tn,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ot.setValue(U,"center",D.center),ot.setValue(U,"modelViewMatrix",D.modelViewMatrix),ot.setValue(U,"normalMatrix",D.normalMatrix),ot.setValue(U,"modelMatrix",D.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Yt=H.uniformsGroups;for(let hi=0,di=Yt.length;hi<di;hi++){const xu=Yt[hi];P.update(xu,sn),P.bind(xu,sn)}}return sn}function bp(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function Ep(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,L,z){Ee.get(E.texture).__webglTexture=L,Ee.get(E.depthTexture).__webglTexture=z;const H=Ee.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,L){const z=Ee.get(E);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,z=0){C=E,A=L,M=z;let H=!0,D=null,ee=!1,le=!1;if(E){const ve=Ee.get(E);if(ve.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(ve.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(ve.__hasExternalTextures)T.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ye=E.depthTexture;if(ve.__boundDepthTexture!==ye){if(ye!==null&&Ee.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(le=!0);const Ue=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[L])?D=Ue[L][z]:D=Ue[L],ee=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?D=Ee.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?D=Ue[z]:D=Ue,R.copy(E.viewport),k.copy(E.scissor),I=E.scissorTest}else R.copy(ge).multiplyScalar(V).floor(),k.copy(ke).multiplyScalar(V).floor(),I=Ye;if(Me.bindFramebuffer(U.FRAMEBUFFER,D)&&H&&Me.drawBuffers(E,D),Me.viewport(R),Me.scissor(k),Me.setScissorTest(I),ee){const ve=Ee.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve.__webglTexture,z)}else if(le){const ve=Ee.get(E.texture),Ce=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ve.__webglTexture,z||0,Ce)}b=-1},this.readRenderTargetPixels=function(E,L,z,H,D,ee,le){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(_e=_e[le]),_e){Me.bindFramebuffer(U.FRAMEBUFFER,_e);try{const ve=E.texture,Ce=ve.format,Ue=ve.type;if(!Ve.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-H&&z>=0&&z<=E.height-D&&U.readPixels(L,z,H,D,Fe.convert(Ce),Fe.convert(Ue),ee)}finally{const ve=C!==null?Ee.get(C).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(E,L,z,H,D,ee,le){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(_e=_e[le]),_e){const ve=E.texture,Ce=ve.format,Ue=ve.type;if(!Ve.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=E.width-H&&z>=0&&z<=E.height-D){Me.bindFramebuffer(U.FRAMEBUFFER,_e);const ye=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.bufferData(U.PIXEL_PACK_BUFFER,ee.byteLength,U.STREAM_READ),U.readPixels(L,z,H,D,Fe.convert(Ce),Fe.convert(Ue),0);const Xe=C!==null?Ee.get(C).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,Xe);const it=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Fm(U,it,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ee),U.deleteBuffer(ye),U.deleteSync(it),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,L=null,z=0){E.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-z),D=Math.floor(E.image.width*H),ee=Math.floor(E.image.height*H),le=L!==null?L.x:0,_e=L!==null?L.y:0;T.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,le,_e,D,ee),Me.unbindTexture()},this.copyTextureToTexture=function(E,L,z=null,H=null,D=0){E.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],L=arguments[2],D=arguments[3]||0,z=null);let ee,le,_e,ve,Ce,Ue,ye,Xe,it;const at=E.isCompressedTexture?E.mipmaps[D]:E.image;z!==null?(ee=z.max.x-z.min.x,le=z.max.y-z.min.y,_e=z.isBox3?z.max.z-z.min.z:1,ve=z.min.x,Ce=z.min.y,Ue=z.isBox3?z.min.z:0):(ee=at.width,le=at.height,_e=at.depth||1,ve=0,Ce=0,Ue=0),H!==null?(ye=H.x,Xe=H.y,it=H.z):(ye=0,Xe=0,it=0);const Ot=Fe.convert(L.format),Je=Fe.convert(L.type);let be;L.isData3DTexture?(T.setTexture3D(L,0),be=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),be=U.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),be=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const Fn=U.getParameter(U.UNPACK_ROW_LENGTH),Ze=U.getParameter(U.UNPACK_IMAGE_HEIGHT),sn=U.getParameter(U.UNPACK_SKIP_PIXELS),or=U.getParameter(U.UNPACK_SKIP_ROWS),Wt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,at.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ve),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ce),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ue);const rs=E.isDataArrayTexture||E.isData3DTexture,ot=L.isDataArrayTexture||L.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Tn=Ee.get(E),ss=Ee.get(L),Yt=Ee.get(Tn.__renderTarget),hi=Ee.get(ss.__renderTarget);Me.bindFramebuffer(U.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let di=0;di<_e;di++)rs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(E).__webglTexture,D,Ue+di),E.isDepthTexture?(ot&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(L).__webglTexture,D,it+di),U.blitFramebuffer(ve,Ce,ee,le,ye,Xe,ee,le,U.DEPTH_BUFFER_BIT,U.NEAREST)):ot?U.copyTexSubImage3D(be,D,ye,Xe,it+di,ve,Ce,ee,le):U.copyTexSubImage2D(be,D,ye,Xe,it+di,ve,Ce,ee,le);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ot?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(be,D,ye,Xe,it,ee,le,_e,Ot,Je,at.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(be,D,ye,Xe,it,ee,le,_e,Ot,at.data):U.texSubImage3D(be,D,ye,Xe,it,ee,le,_e,Ot,Je,at):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,D,ye,Xe,ee,le,Ot,Je,at.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,D,ye,Xe,at.width,at.height,Ot,at.data):U.texSubImage2D(U.TEXTURE_2D,D,ye,Xe,ee,le,Ot,Je,at);U.pixelStorei(U.UNPACK_ROW_LENGTH,Fn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ze),U.pixelStorei(U.UNPACK_SKIP_PIXELS,sn),U.pixelStorei(U.UNPACK_SKIP_ROWS,or),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Wt),D===0&&L.generateMipmaps&&U.generateMipmap(be),Me.unbindTexture()},this.copyTextureToTexture3D=function(E,L,z=null,H=null,D=0){return E.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,E=arguments[2],L=arguments[3],D=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,L,z,H,D)},this.initRenderTarget=function(E){Ee.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){A=0,M=0,C=null,Me.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class Ky extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ei extends $s{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ja=new N,Za=new N,Eh=new _t,fs=new ff,va=new fo,Zo=new N,wh=new N;class Vr extends Gt{constructor(e=new Nt,t=new ei){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ja.fromBufferAttribute(t,r-1),Za.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ja.distanceTo(Za);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),va.radius+=s,e.ray.intersectsSphere(va)===!1)return;Eh.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Eh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),w=u.getX(_+1),x=ya(this,e,fs,l,p,w);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=ya(this,e,fs,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=ya(this,e,fs,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=ya(this,e,fs,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ya(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Ja.fromBufferAttribute(a,r),Za.fromBufferAttribute(a,s),t.distanceSqToSegment(Ja,Za,Zo,wh)>i)return;Zo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Zo);if(!(l<e.near||l>e.far))return{distance:l,point:wh.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Th=new N,Mh=new N;class wc extends Vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Th.fromBufferAttribute(t,r),Mh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Th.distanceTo(Mh);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zi extends Vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ah();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ah(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);const Rf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class qs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Jy=new tu(-1,1,1,-1,0,1);class Zy extends Nt{constructor(){super(),this.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bn([0,2,0,0,2,0],2))}}const Qy=new Zy;class Cf{constructor(e){this._mesh=new Un(Qy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Pf extends qs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ya.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Cf(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Rh extends qs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class eS extends qs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class tS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ze);this._width=i.width,this._height=i.height,t=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ai}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pf(Rf),this.copyPass.material.blending=si,this.clock=new Yy}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Rh!==void 0&&(a instanceof Rh?i=!0:a instanceof eS&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class nS extends qs{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const iS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Zr extends qs{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ze(e.x,e.y):new ze(256,256),this.clearColor=new We(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(s,a,{type:ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Sn(s,a,{type:ai});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Sn(s,a,{type:ai});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=iS;this.highPassUniforms=Ya.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ze(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Rf;this.copyUniforms=Ya.clone(u.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ol,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new We,this.oldClearAlpha=1,this.basic=new eu,this.fsQuad=new Cf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ze(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ze(.5,.5)},direction:{value:new ze(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Zr.BlurDirectionX=new ze(1,0);Zr.BlurDirectionY=new ze(0,1);const ti={p:3073791,l:16738847,amber:16765514,grid:928834,white:16777215},Dr=1.6,Sa={targets:4,missiles:4,beams:6,explosions:8},If=26,Lf=17;let tr,xa,nn,Ur,Is,Gr,ni,Ki,Jn,vs=0,Tc=0,za=1.5,ys=null;const wt={p:new ei({color:ti.p}),l:new ei({color:ti.l}),amber:new ei({color:ti.amber}),white:new ei({color:ti.white}),grid:new ei({color:ti.grid})},lt={targets:[],missiles:[],beams:[],explosions:[],shields:{},reticle:null};function rS(n){return 1-Math.pow(1-n,3)}function iu(n){ys=n}const sS={uniforms:{tDiffuse:{value:null},time:{value:0},res:{value:new ze(1024,768)}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform vec2 res;
    varying vec2 vUv;
    void main() {
      vec2 c = vUv - 0.5;
      float r2 = dot(c, c);
      vec2 uv = 0.5 + c * (1.0 + 0.07 * r2);
      if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
      vec3 col;
      col.r = texture2D(tDiffuse, uv + vec2(0.0009, 0.0)).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - vec2(0.0009, 0.0)).b;
      col *= 0.9 + 0.1 * sin(uv.y * res.y * 3.14159 + time * 8.0);
      col *= 1.0 - 0.55 * r2 * 1.6;
      gl_FragColor = vec4(col, 1.0);
    }
  `};function Qo(n,e,t=!1,i=0){const r=n.map(([o,l])=>new N(o,l,i)),s=new Nt().setFromPoints(r),a=new ei({color:e});return t?new Zi(s,a):new Vr(s,a)}function Es(n){const e=[];for(let t=0;t<n;t++){const i=t/n*Math.PI*2;e.push(new N(Math.cos(i),Math.sin(i),0))}return new Nt().setFromPoints(e)}function el(n){const e=new xn(new Float32Array(n*3),3);e.setUsage(Nm);const t=new Nt;return t.setAttribute("position",e),{geo:t,pos:e}}function aS(n){const e=Es(32),t=Es(12);for(let c=0;c<Sa.targets;c++){const u=new Zi(e,wt.white),h=new Zi(t,wt.amber);for(const d of[u,h])d.visible=!1,d.frustumCulled=!1,n.add(d);lt.targets.push({ring:u,inner:h})}const i=.035,r=new Nt().setFromPoints([new N(-i,-i,0),new N(i,i,0),new N(-i,i,0),new N(i,-i,0)]);for(let c=0;c<Sa.missiles;c++){const u=new wc(r,wt.white),h=el(If),d=new Vr(h.geo,wt.p);for(const f of[u,d])f.visible=!1,f.frustumCulled=!1,n.add(f);lt.missiles.push({head:u,trail:d,trailPos:h.pos})}for(let c=0;c<Sa.beams;c++){const u=el(2),h=new Vr(u.geo,wt.white);h.visible=!1,h.frustumCulled=!1,n.add(h),lt.beams.push({line:h,pos:u.pos})}for(let c=0;c<Sa.explosions;c++){const u=new Zi(e,wt.white);u.visible=!1,u.frustumCulled=!1,n.add(u),lt.explosions.push(u)}for(const c of["p","l"]){const u=el(Lf),h=new Vr(u.geo,c==="p"?wt.p:wt.l);h.visible=!1,h.frustumCulled=!1,n.add(h),lt.shields[c]={line:h,pos:u.pos}}const s=new In,a=.05,o=new Zi(Es(16),wt.p);o.scale.setScalar(a);const l=new wc(new Nt().setFromPoints([new N(-a*1.8,0,0),new N(-a*.6,0,0),new N(a*.6,0,0),new N(a*1.8,0,0),new N(0,-a*1.8,0),new N(0,-a*.6,0),new N(0,a*.6,0),new N(0,a*1.8,0)]),wt.p);s.add(o,l),s.visible=!1;for(const c of[o,l])c.frustumCulled=!1;n.add(s),lt.reticle=s}function oS(n){tr=new Xy({canvas:n,antialias:!0}),tr.setPixelRatio(Math.min(1.5,window.devicePixelRatio)),xa=new Ky,xa.background=new We(66314),nn=new tu(-1,1,1,-1,.1,10),nn.position.z=5,Ur=new tS(tr),Ur.addPass(new nS(xa,nn));const e=new Zr(new ze(1024,768),1.15,.55,0);Ur.addPass(e),Is=new Pf(sS),Ur.addPass(Is),Gr=new In,ni=new In,Ki=new In;const t=new In;ni.add(Ki,t),xa.add(Gr,ni),aS(t),Jn=new In;const i=.85;for(let r=-60;r<=60;r+=30){const s=r*Math.PI/180,a=new Zi(Es(48),new ei({color:ti.amber,transparent:!0,opacity:.65}));a.scale.setScalar(i*Math.cos(s)),a.rotation.x=Math.PI/2,a.position.y=i*Math.sin(s),Jn.add(a)}for(let r=0;r<9;r++){const s=new Zi(Es(48),new ei({color:ti.l,transparent:!0,opacity:.5}));s.scale.setScalar(i),s.rotation.y=r/9*Math.PI,Jn.add(s)}Jn.rotation.z=.28,Jn.position.y=-.08,Gr.add(Jn),Mc(),window.addEventListener("resize",Mc)}function Mc(){const n=tr.domElement,e=n.clientWidth||800,t=n.clientHeight||533;za=e/t,tr.setSize(e,t,!1),Ur.setSize(e,t),nn.left=-Dr*za,nn.right=Dr*za,nn.top=Dr,nn.bottom=-Dr,nn.updateProjectionMatrix(),Is.uniforms.res.value.set(e,t)}function lS(n,e){return{x:n*Dr*za,y:e*Dr}}function Nr(n){Gr.visible=n,ni.visible=!n}function cS(n){var e,t;for(const i of[...n.children]){n.remove(i);const r=i;(e=r.geometry)==null||e.dispose(),(t=r.material)==null||t.dispose()}}function Df(n){cS(Ki);const e=[],t=1.25,i=.95,r=.21;for(let a=-t;a<=t+.001;a+=r)e.push(new N(a,-i,-.01),new N(a,i,-.01));for(let a=-i;a<=i+.001;a+=r)e.push(new N(-t,a,-.01),new N(t,a,-.01));const s=new Nt().setFromPoints(e);Ki.add(new wc(s,wt.grid)),Ki.add(Qo(n,ti.amber,!0,.01));for(const a of["p","l"]){const o=ir[a],l=jc(a),c=ti[a];Ki.add(Qo([[o.x-.1,o.y-.05*l],[o.x,o.y+.07*l],[o.x+.1,o.y-.05*l]],c,!1,.02)),Ki.add(Qo([[o.x-.16,o.y-.08*l],[o.x+.16,o.y-.08*l]],c,!1,.02))}}function uS(n,e,t){if(Is.uniforms.time.value+=t,ys!==null){Gr.visible=ys<.62,Jn.scale.setScalar(1+ys*2.2),ni.visible=!0;const i=rS(Math.min(1,ys*1.25));ni.scale.setScalar(.18+.82*i)}else ni.visible&&(ni.scale.setScalar(1),Jn.scale.setScalar(1));if(Gr.visible&&(Jn.rotation.y+=t*.45),n&&ni.visible){for(let i=0;i<lt.targets.length;i++){const r=lt.targets[i],s=n.targets[i];if(r.ring.visible=r.inner.visible=!!s,s){const a=jd*(1+.18*Math.sin(s.age*7));r.ring.position.set(s.x,s.y,.02),r.ring.scale.setScalar(a),r.inner.position.set(s.x,s.y,.02),r.inner.scale.setScalar(a*.45)}}for(const i of["p","l"]){const r=lt.shields[i];r.line.visible=!0;for(let s=0;s<Lf;s++){const a=n.shield[i]+(s-8)/8*$d,[o,l]=Gp(i,a,ja);r.pos.setXYZ(s,o,l,.03)}r.pos.needsUpdate=!0}for(let i=0;i<lt.missiles.length;i++){const r=lt.missiles[i],s=n.missiles[i];if(r.head.visible=r.trail.visible=!!s,s){r.head.position.set(s.x,s.y,.04),r.trail.material=s.owner==="p"?wt.p:wt.l;const a=Math.min(s.trail.length,If);for(let o=0;o<a;o++)r.trailPos.setXYZ(o,s.trail[o][0],s.trail[o][1],.02);r.trail.geometry.setDrawRange(0,a),r.trailPos.needsUpdate=!0}}for(let i=0;i<lt.beams.length;i++){const r=lt.beams[i],s=n.beams[i];if(r.line.visible=!!s,s){const a=ir[s.side];r.line.material=s.hit?wt.white:s.side==="p"?wt.p:wt.l,r.pos.setXYZ(0,a.x,a.y,.05),r.pos.setXYZ(1,s.x,s.y,.05),r.pos.needsUpdate=!0}}for(let i=0;i<lt.explosions.length;i++){const r=lt.explosions[i],s=n.explosions[i];r.visible=!!s,s&&(r.material=s.big?wt.l:wt.white,r.position.set(s.x,s.y,.02),r.scale.setScalar((s.big?.3:.14)*(s.age/.5)+.02))}lt.reticle&&(lt.reticle.visible=!!e,e&&lt.reticle.position.set(e.x,e.y,.05))}else{lt.reticle&&(lt.reticle.visible=!1);for(const i of["p","l"])lt.shields[i].line.visible=!1;for(const i of lt.targets)i.ring.visible=i.inner.visible=!1;for(const i of lt.missiles)i.head.visible=i.trail.visible=!1;for(const i of lt.beams)i.line.visible=!1;for(const i of lt.explosions)i.visible=!1}vs>0?(vs-=t,nn.position.x=(Math.random()*2-1)*Tc*vs,nn.position.y=(Math.random()*2-1)*Tc*vs):(nn.position.x=0,nn.position.y=0),document.hidden||Ur.render()}function Ch(n,e=.6){Tc=n,vs=e}function Uf(n){Is.enabled=n}function hS(){return{geometries:tr.info.memory.geometries,textures:tr.info.memory.textures}}let tt=null,En=null,Qa=[],ws=null,eo=null,ru=!1;function su(){if(tt)return;tt=new AudioContext;const n=tt.createDynamicsCompressor();n.threshold.value=-20,n.knee.value=12,n.ratio.value=6,n.attack.value=.003,n.release.value=.2,En=tt.createGain(),En.gain.value=ru?0:.35,En.connect(n).connect(tt.destination),eo=tt.createBuffer(1,tt.sampleRate,tt.sampleRate);const e=eo.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}function au(n,e,t,i,r){if(!tt||!En||!eo)return;const s=tt.currentTime,a=tt.createBufferSource();a.buffer=eo;const o=tt.createBiquadFilter();o.type=e,o.frequency.setValueAtTime(t,s),r&&o.frequency.exponentialRampToValueAtTime(r,s+n);const l=tt.createGain();l.gain.setValueAtTime(1e-4,s),l.gain.linearRampToValueAtTime(i,s+.008),l.gain.exponentialRampToValueAtTime(1e-4,s+n),a.connect(o).connect(l).connect(En),a.start(s,Math.random()*.5,n+.05)}function Nf(n){if(ru=n,En&&(En.gain.value=n?0:.35),n)try{speechSynthesis.cancel()}catch{}}function Dt(n,e,t,i,r,s){if(!tt||!En)return;const a=tt.currentTime,o=tt.createOscillator(),l=tt.createGain();o.type=e,o.frequency.setValueAtTime(n,a),r!==void 0&&o.frequency.exponentialRampToValueAtTime(Math.max(20,r),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.linearRampToValueAtTime(i,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+t);let c=o;if(s){const u=tt.createBiquadFilter();u.type="lowpass",u.frequency.value=s,o.connect(u),c=u}c.connect(l),l.connect(En),o.start(a),o.stop(a+t+.05)}const xi={blip:()=>Dt(660,"triangle",.06,.07),zap:()=>Dt(1400,"triangle",.13,.11,180),miss:()=>Dt(220,"triangle",.09,.05,110),launch:()=>Dt(110,"triangle",.7,.16,38),boom:()=>au(.42,"lowpass",500,.4,120),win:()=>{Dt(523,"triangle",.14,.1),setTimeout(()=>Dt(659,"triangle",.14,.1),140),setTimeout(()=>Dt(784,"triangle",.3,.1),280)},tick:()=>Dt(980,"triangle",.05,.06),warn:()=>{Dt(520,"triangle",.1,.09),setTimeout(()=>Dt(520,"triangle",.1,.09),130)}};function dS(){au(.03,"highpass",6e3,.03)}const fS=[0,0,7,0,3,0,5,-2];let Ha=null;function pS(n){if(ou(),!tt)return;const e=110*Math.pow(2,n/12),t=6e4/(96+n*10)/2;let i=0;Ha=window.setInterval(()=>{const r=fS[i%8];Dt(e*Math.pow(2,r/12),"triangle",.18,.09,void 0,700),i%2===1&&dS(),i++},t)}function ou(){Ha!==null&&window.clearInterval(Ha),Ha=null}const mS=[{root:0,minor:!0},{root:-4,minor:!1},{root:-7,minor:!0},{root:-5,minor:!1}];let Ts=null;function gS(){if(Ts!==null||!tt)return;const n=6e4/92/4;let e=0;Ts=window.setInterval(()=>{const t=Math.floor(e/16),i=mS[Math.floor(t/2)],r=110*Math.pow(2,i.root/12),s=e%16;(s===0||s===8)&&Dt(95,"sine",.13,.16,38),s%4===2&&au(.03,"highpass",7e3,.018),s%2===0&&Dt(r*Math.pow(2,(s===12?12:0)/12),"triangle",.17,.08,void 0,500);const o=(i.minor?[0,3,7,12]:[0,4,7,12])[s%4]+(s%8>=4?12:0);Dt(r*4*Math.pow(2,o/12),"triangle",.11,.032,void 0,2400),e=(e+1)%128},n)}function _S(){Ts!==null&&window.clearInterval(Ts),Ts=null}function vS(n){if(lu(),!tt||!En)return;const e=tt.currentTime,t=55*Math.pow(2,n/12),i=tt.createBiquadFilter();i.type="lowpass",i.frequency.value=130;const r=tt.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.05,e+.8),i.connect(r).connect(En);for(const o of[1,1.004]){const l=tt.createOscillator();l.type="triangle",l.frequency.value=t*o,l.connect(i),l.start(e),Qa.push(l)}const s=tt.createOscillator(),a=tt.createGain();s.frequency.value=.09,a.gain.value=35,s.connect(a).connect(i.frequency),s.start(e),Qa.push(s)}function lu(){for(const n of Qa)try{n.stop()}catch{}Qa=[]}function yS(){if(ws!==null)return;let n=!0;const e=()=>{Dt(n?620:440,"triangle",.16,.09),n=!n};e(),ws=window.setInterval(e,250)}function Of(){ws!==null&&window.clearInterval(ws),ws=null}function SS(n){if(!ru)try{const e=new SpeechSynthesisUtterance(n);e.rate=.88,e.pitch=.7,e.volume=.75,speechSynthesis.speak(e)}catch{}}const xS={p:0,l:0},bS={p:!1,l:!1};function kf(n){return performance.now()-xS[n]<12e3}function Ff(n){return bS[n]}function go(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function ES(n,e,t,i){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(u){try{c(i.next(u))}catch(h){a(h)}}function l(u){try{c(i.throw(u))}catch(h){a(h)}}function c(u){u.done?s(u.value):r(u.value).then(o,l)}c((i=i.apply(n,e||[])).next())})}const wS=n=>n?(...e)=>n(...e):(...e)=>fetch(...e);class cu extends Error{constructor(e,t="FunctionsError",i){super(e),this.name=t,this.context=i}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class TS extends cu{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Ph extends cu{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class Ih extends cu{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Ac;(function(n){n.Any="any",n.ApNortheast1="ap-northeast-1",n.ApNortheast2="ap-northeast-2",n.ApSouth1="ap-south-1",n.ApSoutheast1="ap-southeast-1",n.ApSoutheast2="ap-southeast-2",n.CaCentral1="ca-central-1",n.EuCentral1="eu-central-1",n.EuWest1="eu-west-1",n.EuWest2="eu-west-2",n.EuWest3="eu-west-3",n.SaEast1="sa-east-1",n.UsEast1="us-east-1",n.UsWest1="us-west-1",n.UsWest2="us-west-2"})(Ac||(Ac={}));class MS{constructor(e,{headers:t={},customFetch:i,region:r=Ac.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=wS(i)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return ES(this,arguments,void 0,function*(t,i={}){var r;let s,a;try{const{headers:o,method:l,body:c,signal:u,timeout:h}=i;let d={},{region:f}=i;f||(f=this.region);const g=new URL(`${this.url}/${t}`);f&&f!=="any"&&(d["x-region"]=f,g.searchParams.set("forceFunctionRegion",f));let _;c&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)?typeof Blob<"u"&&c instanceof Blob||c instanceof ArrayBuffer?(d["Content-Type"]="application/octet-stream",_=c):typeof c=="string"?(d["Content-Type"]="text/plain",_=c):typeof FormData<"u"&&c instanceof FormData?_=c:(d["Content-Type"]="application/json",_=JSON.stringify(c)):c&&typeof c!="string"&&!(typeof Blob<"u"&&c instanceof Blob)&&!(c instanceof ArrayBuffer)&&!(typeof FormData<"u"&&c instanceof FormData)?_=JSON.stringify(c):_=c;let m=u;h&&(a=new AbortController,s=setTimeout(()=>a.abort(),h),u?(m=a.signal,u.addEventListener("abort",()=>a.abort())):m=a.signal);const p=yield this.fetch(g.toString(),{method:l||"POST",headers:Object.assign(Object.assign(Object.assign({},d),this.headers),o),body:_,signal:m}).catch(O=>{throw new TS(O)}),w=p.headers.get("x-relay-error");if(w&&w==="true")throw new Ph(p);if(!p.ok)throw new Ih(p);let x=((r=p.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim(),S;return x==="application/json"?S=yield p.json():x==="application/octet-stream"||x==="application/pdf"?S=yield p.blob():x==="text/event-stream"?S=p:x==="multipart/form-data"?S=yield p.formData():S=yield p.text(),{data:S,error:null,response:p}}catch(o){return{data:null,error:o,response:o instanceof Ih||o instanceof Ph?o.context:void 0}}finally{s&&clearTimeout(s)}})}}const Bf=3,Lh=n=>Math.min(1e3*2**n,3e4),AS=[520,503],zf=["GET","HEAD","OPTIONS"];var Dh=class extends Error{constructor(n){super(n.message),this.name="PostgrestError",this.details=n.details,this.hint=n.hint,this.code=n.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function Uh(n,e){return new Promise(t=>{if(e!=null&&e.aborted){t();return}const i=setTimeout(()=>{e==null||e.removeEventListener("abort",r),t()},n);function r(){clearTimeout(i),t()}e==null||e.addEventListener("abort",r)})}function RS(n,e,t,i){return!(!i||t>=Bf||!zf.includes(n)||!AS.includes(e))}var CS=class{constructor(n){var e,t,i,r,s;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=n.method,this.url=n.url,this.headers=new Headers(n.headers),this.schema=n.schema,this.body=n.body,this.shouldThrowOnError=(e=n.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=n.signal,this.isMaybeSingle=(t=n.isMaybeSingle)!==null&&t!==void 0?t:!1,this.shouldStripNulls=(i=n.shouldStripNulls)!==null&&i!==void 0?i:!1,this.urlLengthLimit=(r=n.urlLengthLimit)!==null&&r!==void 0?r:8e3,this.retryEnabled=(s=n.retry)!==null&&s!==void 0?s:!0,n.fetch?this.fetch=n.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(n,e){return this.headers=new Headers(this.headers),this.headers.set(n,e),this}retry(n){return this.retryEnabled=n,this}then(n,e){var t=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const a=this.headers.get("Accept");a==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!a||a==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const i=this.fetch;let s=(async()=>{let a=0;for(;;){const c={};t.headers.forEach((h,d)=>{c[d]=h}),a>0&&(c["X-Retry-Count"]=String(a));let u;try{u=await i(t.url.toString(),{method:t.method,headers:c,body:JSON.stringify(t.body,(h,d)=>typeof d=="bigint"?d.toString():d),signal:t.signal})}catch(h){if((h==null?void 0:h.name)==="AbortError"||(h==null?void 0:h.code)==="ABORT_ERR"||!zf.includes(t.method))throw h;if(t.retryEnabled&&a<Bf){const d=Lh(a);a++,await Uh(d,t.signal);continue}throw h}if(RS(t.method,u.status,a,t.retryEnabled)){var o,l;const h=(o=(l=u.headers)===null||l===void 0?void 0:l.get("Retry-After"))!==null&&o!==void 0?o:null,d=h!==null?Math.max(0,parseInt(h,10)||0)*1e3:Lh(a);await u.text(),a++,await Uh(d,t.signal);continue}return await t.processResponse(u)}})();return this.shouldThrowOnError||(s=s.catch(a=>{var o;let l="",c="",u="";const h=a==null?void 0:a.cause;if(h){var d,f,g,_;const w=(d=h==null?void 0:h.message)!==null&&d!==void 0?d:"",x=(f=h==null?void 0:h.code)!==null&&f!==void 0?f:"";l=`${(g=a==null?void 0:a.name)!==null&&g!==void 0?g:"FetchError"}: ${a==null?void 0:a.message}`,l+=`

Caused by: ${(_=h==null?void 0:h.name)!==null&&_!==void 0?_:"Error"}: ${w}`,x&&(l+=` (${x})`),h!=null&&h.stack&&(l+=`
${h.stack}`)}else{var m;l=(m=a==null?void 0:a.stack)!==null&&m!==void 0?m:""}const p=this.url.toString().length;return(a==null?void 0:a.name)==="AbortError"||(a==null?void 0:a.code)==="ABORT_ERR"?(u="",c="Request was aborted (timeout or manual cancellation)",p>this.urlLengthLimit&&(c+=`. Note: Your request URL is ${p} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((h==null?void 0:h.name)==="HeadersOverflowError"||(h==null?void 0:h.code)==="UND_ERR_HEADERS_OVERFLOW")&&(u="",c="HTTP headers exceeded server limits (typically 16KB)",p>this.urlLengthLimit&&(c+=`. Your request URL is ${p} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(o=a==null?void 0:a.name)!==null&&o!==void 0?o:"FetchError"}: ${a==null?void 0:a.message}`,details:l,hint:c,code:u},data:null,count:null,status:0,statusText:""}})),s.then(n,e)}async processResponse(n){var e=this;let t=null,i=null,r=null,s=n.status,a=n.statusText;if(n.ok){var o,l;if(e.method!=="HEAD"){var c;const d=await n.text();if(d!=="")if(e.headers.get("Accept")==="text/csv")i=d;else if(e.headers.get("Accept")&&(!((c=e.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text")))i=d;else try{i=JSON.parse(d)}catch{if(t={message:d},i=null,e.shouldThrowOnError)throw new Dh({message:d,details:"",hint:"",code:""})}}const u=(o=e.headers.get("Prefer"))===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),h=(l=n.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");u&&h&&h.length>1&&(r=parseInt(h[1])),e.isMaybeSingle&&Array.isArray(i)&&(i.length>1?(t={code:"PGRST116",details:`Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},i=null,r=null,s=406,a="Not Acceptable"):i.length===1?i=i[0]:i=null)}else{const u=await n.text();try{t=JSON.parse(u),Array.isArray(t)&&n.status===404&&(i=[],t=null,s=200,a="OK")}catch{n.status===404&&u===""?(s=204,a="No Content"):t={message:u}}if(t&&e.shouldThrowOnError)throw new Dh(t)}return{success:t===null,error:t,data:i,count:r,status:s,statusText:a}}returns(){return this}overrideTypes(){return this}},PS=class extends CS{throwOnError(){return super.throwOnError()}select(n){let e=!1;const t=(n??"*").split("").map(i=>/\s/.test(i)&&!e?"":(i==='"'&&(e=!e),i)).join("");return this.url.searchParams.set("select",t),this.headers.append("Prefer","return=representation"),this}order(n,{ascending:e=!0,nullsFirst:t,foreignTable:i,referencedTable:r=i}={}){const s=r?`${r}.order`:"order",a=this.url.searchParams.get(s);return this.url.searchParams.set(s,`${a?`${a},`:""}${n}.${e?"asc":"desc"}${t===void 0?"":t?".nullsfirst":".nullslast"}`),this}limit(n,{foreignTable:e,referencedTable:t=e}={}){const i=typeof t>"u"?"limit":`${t}.limit`;return this.url.searchParams.set(i,`${n}`),this}range(n,e,{foreignTable:t,referencedTable:i=t}={}){const r=typeof i>"u"?"offset":`${i}.offset`,s=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(r,`${n}`),this.url.searchParams.set(s,`${e-n+1}`),this}abortSignal(n){return this.signal=n,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:n=!1,verbose:e=!1,settings:t=!1,buffers:i=!1,wal:r=!1,format:s="text"}={}){var a;const o=[n?"analyze":null,e?"verbose":null,t?"settings":null,i?"buffers":null,r?"wal":null].filter(Boolean).join("|"),l=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${s}; for="${l}"; options=${o};`),s==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(n){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${n}`),this}};const Nh=new RegExp("[,()]");var Rr=class extends PS{throwOnError(){return super.throwOnError()}eq(n,e){return this.url.searchParams.append(n,`eq.${e}`),this}neq(n,e){return this.url.searchParams.append(n,`neq.${e}`),this}gt(n,e){return this.url.searchParams.append(n,`gt.${e}`),this}gte(n,e){return this.url.searchParams.append(n,`gte.${e}`),this}lt(n,e){return this.url.searchParams.append(n,`lt.${e}`),this}lte(n,e){return this.url.searchParams.append(n,`lte.${e}`),this}like(n,e){return this.url.searchParams.append(n,`like.${e}`),this}likeAllOf(n,e){return this.url.searchParams.append(n,`like(all).{${e.join(",")}}`),this}likeAnyOf(n,e){return this.url.searchParams.append(n,`like(any).{${e.join(",")}}`),this}ilike(n,e){return this.url.searchParams.append(n,`ilike.${e}`),this}ilikeAllOf(n,e){return this.url.searchParams.append(n,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(n,e){return this.url.searchParams.append(n,`ilike(any).{${e.join(",")}}`),this}regexMatch(n,e){return this.url.searchParams.append(n,`match.${e}`),this}regexIMatch(n,e){return this.url.searchParams.append(n,`imatch.${e}`),this}is(n,e){return this.url.searchParams.append(n,`is.${e}`),this}isDistinct(n,e){return this.url.searchParams.append(n,`isdistinct.${e}`),this}in(n,e){const t=Array.from(new Set(e)).map(i=>typeof i=="string"&&Nh.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(n,`in.(${t})`),this}notIn(n,e){const t=Array.from(new Set(e)).map(i=>typeof i=="string"&&Nh.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(n,`not.in.(${t})`),this}contains(n,e){return typeof e=="string"?this.url.searchParams.append(n,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(n,`cs.{${e.join(",")}}`):this.url.searchParams.append(n,`cs.${JSON.stringify(e)}`),this}containedBy(n,e){return typeof e=="string"?this.url.searchParams.append(n,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(n,`cd.{${e.join(",")}}`):this.url.searchParams.append(n,`cd.${JSON.stringify(e)}`),this}rangeGt(n,e){return this.url.searchParams.append(n,`sr.${e}`),this}rangeGte(n,e){return this.url.searchParams.append(n,`nxl.${e}`),this}rangeLt(n,e){return this.url.searchParams.append(n,`sl.${e}`),this}rangeLte(n,e){return this.url.searchParams.append(n,`nxr.${e}`),this}rangeAdjacent(n,e){return this.url.searchParams.append(n,`adj.${e}`),this}overlaps(n,e){return typeof e=="string"?this.url.searchParams.append(n,`ov.${e}`):this.url.searchParams.append(n,`ov.{${e.join(",")}}`),this}textSearch(n,e,{config:t,type:i}={}){let r="";i==="plain"?r="pl":i==="phrase"?r="ph":i==="websearch"&&(r="w");const s=t===void 0?"":`(${t})`;return this.url.searchParams.append(n,`${r}fts${s}.${e}`),this}match(n){return Object.entries(n).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(n,e,t){return this.url.searchParams.append(n,`not.${e}.${t}`),this}or(n,{foreignTable:e,referencedTable:t=e}={}){const i=t?`${t}.or`:"or";return this.url.searchParams.append(i,`(${n})`),this}filter(n,e,t){return this.url.searchParams.append(n,`${e}.${t}`),this}},IS=class{constructor(n,{headers:e={},schema:t,fetch:i,urlLengthLimit:r=8e3,retry:s}){this.url=n,this.headers=new Headers(e),this.schema=t,this.fetch=i,this.urlLengthLimit=r,this.retry=s}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(n,e){const{head:t=!1,count:i}=e??{},r=t?"HEAD":"GET";let s=!1;const a=(n??"*").split("").map(c=>/\s/.test(c)&&!s?"":(c==='"'&&(s=!s),c)).join(""),{url:o,headers:l}=this.cloneRequestState();return o.searchParams.set("select",a),i&&l.append("Prefer",`count=${i}`),new Rr({method:r,url:o,headers:l,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(n,{count:e,defaultToNull:t=!0}={}){var i;const r="POST",{url:s,headers:a}=this.cloneRequestState();if(e&&a.append("Prefer",`count=${e}`),t||a.append("Prefer","missing=default"),Array.isArray(n)){const o=n.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);s.searchParams.set("columns",l.join(","))}}return new Rr({method:r,url:s,headers:a,schema:this.schema,body:n,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(n,{onConflict:e,ignoreDuplicates:t=!1,count:i,defaultToNull:r=!0}={}){var s;const a="POST",{url:o,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${t?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),i&&l.append("Prefer",`count=${i}`),r||l.append("Prefer","missing=default"),Array.isArray(n)){const c=n.reduce((u,h)=>u.concat(Object.keys(h)),[]);if(c.length>0){const u=[...new Set(c)].map(h=>`"${h}"`);o.searchParams.set("columns",u.join(","))}}return new Rr({method:a,url:o,headers:l,schema:this.schema,body:n,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(n,{count:e}={}){var t;const i="PATCH",{url:r,headers:s}=this.cloneRequestState();return e&&s.append("Prefer",`count=${e}`),new Rr({method:i,url:r,headers:s,schema:this.schema,body:n,fetch:(t=this.fetch)!==null&&t!==void 0?t:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:n}={}){var e;const t="DELETE",{url:i,headers:r}=this.cloneRequestState();return n&&r.append("Prefer",`count=${n}`),new Rr({method:t,url:i,headers:r,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Ls(n){"@babel/helpers - typeof";return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ls(n)}function LS(n,e){if(Ls(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(Ls(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function DS(n){var e=LS(n,"string");return Ls(e)=="symbol"?e:e+""}function US(n,e,t){return(e=DS(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Oh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function ba(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Oh(Object(t),!0).forEach(function(i){US(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Oh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var NS=class Hf{constructor(e,{headers:t={},schema:i,fetch:r,timeout:s,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=i,this.urlLengthLimit=a;const l=r??globalThis.fetch;s!==void 0&&s>0?this.fetch=(c,u)=>{const h=new AbortController,d=setTimeout(()=>h.abort(),s),f=u==null?void 0:u.signal;if(f){if(f.aborted)return clearTimeout(d),l(c,u);const g=()=>{clearTimeout(d),h.abort()};return f.addEventListener("abort",g,{once:!0}),l(c,ba(ba({},u),{},{signal:h.signal})).finally(()=>{clearTimeout(d),f.removeEventListener("abort",g)})}return l(c,ba(ba({},u),{},{signal:h.signal})).finally(()=>clearTimeout(d))}:this.fetch=l,this.retry=o}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new IS(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new Hf(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,t={},{head:i=!1,get:r=!1,count:s}={}){var a;let o;const l=new URL(`${this.url}/rpc/${e}`);let c;const u=f=>f!==null&&typeof f=="object"&&(!Array.isArray(f)||f.some(u)),h=i&&Object.values(t).some(u);h?(o="POST",c=t):i||r?(o=i?"HEAD":"GET",Object.entries(t).filter(([f,g])=>g!==void 0).map(([f,g])=>[f,Array.isArray(g)?`{${g.join(",")}}`:`${g}`]).forEach(([f,g])=>{l.searchParams.append(f,g)})):(o="POST",c=t);const d=new Headers(this.headers);return h?d.set("Prefer",s?`count=${s},return=minimal`:"return=minimal"):s&&d.set("Prefer",`count=${s}`),new Rr({method:o,url:l,headers:d,schema:this.schemaName,body:c,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class OS{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const t=globalThis;if(typeof globalThis<"u"&&typeof t.WebSocket<"u")return{type:"native",wsConstructor:t.WebSocket};const i=typeof global<"u"?global:void 0;if(i&&typeof i.WebSocket<"u")return{type:"native",wsConstructor:i.WebSocket};if(typeof globalThis<"u"&&typeof t.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&t.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const r=globalThis.process;if(r){const s=r.versions;if(s&&s.node){const a=s.node,o=parseInt(a.replace(/^v/,"").split(".")[0]);return o>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${o} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${o} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(t+=`

Suggested solution: ${e.workaround}`),new Error(t)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const kS="2.108.1",FS=`realtime-js/${kS}`,BS="1.0.0",Vf="2.0.0",zS=Vf,HS=1e4,VS=100,wi={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Gf={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Rc={connecting:"connecting",closing:"closing",closed:"closed"};class GS{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return t(this._binaryEncodeUserBroadcastPush(e));let i=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(i))}_binaryEncodeUserBroadcastPush(e){var t;return this._isArrayBuffer((t=e.payload)===null||t===void 0?void 0:t.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var t,i;const r=(i=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&i!==void 0?i:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,r)}_encodeJsonUserBroadcastPush(e){var t,i;const r=(i=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&i!==void 0?i:{},a=new TextEncoder().encode(JSON.stringify(r)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,t,i){var r,s;const a=e.topic,o=(r=e.ref)!==null&&r!==void 0?r:"",l=(s=e.join_ref)!==null&&s!==void 0?s:"",c=e.payload.event,u=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},h=Object.keys(u).length===0?"":JSON.stringify(u);if(l.length>255)throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`ref length ${o.length} exceeds maximum of 255`);if(a.length>255)throw new Error(`topic length ${a.length} exceeds maximum of 255`);if(c.length>255)throw new Error(`userEvent length ${c.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`metadata length ${h.length} exceeds maximum of 255`);const d=this.USER_BROADCAST_PUSH_META_LENGTH+l.length+o.length+a.length+c.length+h.length,f=new ArrayBuffer(this.HEADER_LENGTH+d);let g=new DataView(f),_=0;g.setUint8(_++,this.KINDS.userBroadcastPush),g.setUint8(_++,l.length),g.setUint8(_++,o.length),g.setUint8(_++,a.length),g.setUint8(_++,c.length),g.setUint8(_++,h.length),g.setUint8(_++,t),Array.from(l,p=>g.setUint8(_++,p.charCodeAt(0))),Array.from(o,p=>g.setUint8(_++,p.charCodeAt(0))),Array.from(a,p=>g.setUint8(_++,p.charCodeAt(0))),Array.from(c,p=>g.setUint8(_++,p.charCodeAt(0))),Array.from(h,p=>g.setUint8(_++,p.charCodeAt(0)));var m=new Uint8Array(f.byteLength+i.byteLength);return m.set(new Uint8Array(f),0),m.set(new Uint8Array(i),f.byteLength),m.buffer}decode(e,t){if(this._isArrayBuffer(e)){let i=this._binaryDecode(e);return t(i)}if(typeof e=="string"){const i=JSON.parse(e),[r,s,a,o,l]=i;return t({join_ref:r,ref:s,topic:a,event:o,payload:l})}return t({})}_binaryDecode(e){const t=new DataView(e),i=t.getUint8(0),r=new TextDecoder;switch(i){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,i){const r=t.getUint8(1),s=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4);let l=this.HEADER_LENGTH+4;const c=i.decode(e.slice(l,l+r));l=l+r;const u=i.decode(e.slice(l,l+s));l=l+s;const h=i.decode(e.slice(l,l+a));l=l+a;const d=e.slice(l,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(i.decode(d)):d,g={type:this.BROADCAST_EVENT,event:u,payload:f};return a>0&&(g.meta=JSON.parse(h)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:g}}_isArrayBuffer(e){var t;return e instanceof ArrayBuffer||((t=e==null?void 0:e.constructor)===null||t===void 0?void 0:t.name)==="ArrayBuffer"}_pick(e,t){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([i])=>t.includes(i)))}}var rt;(function(n){n.abstime="abstime",n.bool="bool",n.date="date",n.daterange="daterange",n.float4="float4",n.float8="float8",n.int2="int2",n.int4="int4",n.int4range="int4range",n.int8="int8",n.int8range="int8range",n.json="json",n.jsonb="jsonb",n.money="money",n.numeric="numeric",n.oid="oid",n.reltime="reltime",n.text="text",n.time="time",n.timestamp="timestamp",n.timestamptz="timestamptz",n.timetz="timetz",n.tsrange="tsrange",n.tstzrange="tstzrange"})(rt||(rt={}));const kh=(n,e,t={})=>{var i;const r=(i=t.skipTypes)!==null&&i!==void 0?i:[];return e?Object.keys(e).reduce((s,a)=>(s[a]=WS(a,n,e,r),s),{}):{}},WS=(n,e,t,i)=>{const r=e.find(o=>o.name===n),s=r==null?void 0:r.type,a=t[n];return s&&!i.includes(s)?Wf(s,a):Cc(a)},Wf=(n,e)=>{if(n.charAt(0)==="_"){const t=n.slice(1,n.length);return XS(e,t)}switch(n){case rt.bool:return $S(e);case rt.float4:case rt.float8:case rt.int2:case rt.int4:case rt.int8:case rt.numeric:case rt.oid:return jS(e);case rt.json:case rt.jsonb:return qS(e);case rt.timestamp:return KS(e);case rt.abstime:case rt.date:case rt.daterange:case rt.int4range:case rt.int8range:case rt.money:case rt.reltime:case rt.text:case rt.time:case rt.timestamptz:case rt.timetz:case rt.tsrange:case rt.tstzrange:return Cc(e);default:return Cc(e)}},Cc=n=>n,$S=n=>{switch(n){case"t":return!0;case"f":return!1;default:return n}},jS=n=>{if(typeof n=="string"){const e=parseFloat(n);if(!Number.isNaN(e))return e}return n},qS=n=>{if(typeof n=="string")try{return JSON.parse(n)}catch{return n}return n},XS=(n,e)=>{if(typeof n!="string")return n;const t=n.length-1,i=n[t];if(n[0]==="{"&&i==="}"){let s;const a=n.slice(1,t);try{s=JSON.parse("["+a+"]")}catch{s=a?a.split(","):[]}return s.map(o=>Wf(e,o))}return n},KS=n=>typeof n=="string"?n.replace(" ","T"):n,$f=n=>{const e=new URL(n);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Ms=n=>typeof n=="function"?n:function(){return n},YS=typeof self<"u"?self:null,Cr=typeof window<"u"?window:null,An=YS||Cr||globalThis,JS="2.0.0",ZS=1e4,QS=1e3,Cn={connecting:0,open:1,closing:2,closed:3},Ft={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Xn={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Pc={longpoll:"longpoll",websocket:"websocket"},ex={complete:4},Ic="base64url.bearer.phx.",Ea=class{constructor(n,e,t,i){this.channel=n,this.event=e,this.payload=t||function(){return{}},this.receivedResp=null,this.timeout=i,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(n){this.timeout=n,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(n,e){return this.hasReceived(n)&&e(this.receivedResp.response),this.recHooks.push({status:n,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:n,response:e,_ref:t}){this.recHooks.filter(i=>i.status===n).forEach(i=>i.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,n=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=n,this.matchReceive(n)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(n){return this.receivedResp&&this.receivedResp.status===n}trigger(n,e){this.channel.trigger(this.refEvent,{status:n,response:e})}},jf=class{constructor(n,e){this.callback=n,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},tx=class{constructor(n,e,t){this.state=Ft.closed,this.topic=n,this.params=Ms(e||{}),this.socket=t,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Ea(this,Xn.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new jf(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=Ft.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this.joinPush.receive("error",i=>{this.state=Ft.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=Ft.closed,this.socket.remove(this)}),this.onError(i=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.isJoining()&&this.joinPush.reset(),this.state=Ft.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new Ea(this,Xn.leave,Ms({}),this.timeout).send(),this.state=Ft.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Xn.reply,(i,r)=>{this.trigger(this.replyEventName(r),i)})}join(n=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=n,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(n=>n.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Ft.closed,this.bindings=[]}onClose(n){this.on(Xn.close,n)}onError(n){return this.on(Xn.error,e=>n(e))}on(n,e){let t=this.bindingRef++;return this.bindings.push({event:n,ref:t,callback:e}),t}off(n,e){this.bindings=this.bindings.filter(t=>!(t.event===n&&(typeof e>"u"||e===t.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(n,e,t=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${n}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let i=new Ea(this,n,function(){return e},t);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}leave(n=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=Ft.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(Xn.close,"leave")},t=new Ea(this,Xn.leave,Ms({}),n);return t.receive("ok",()=>e()).receive("timeout",()=>e()),t.send(),this.canPush()||t.trigger("ok",{}),t}onMessage(n,e,t){return e}filterBindings(n,e,t){return!0}isMember(n,e,t,i){return this.topic!==n?!1:i&&i!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:n,event:e,payload:t,joinRef:i}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(n=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=Ft.joining,this.joinPush.resend(n))}trigger(n,e,t,i){let r=this.onMessage(n,e,t,i);if(e&&!r)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let s=this.bindings.filter(a=>a.event===n&&this.filterBindings(a,e,t));for(let a=0;a<s.length;a++)s[a].callback(r,t,i||this.joinRef())}replyEventName(n){return`chan_reply_${n}`}isClosed(){return this.state===Ft.closed}isErrored(){return this.state===Ft.errored}isJoined(){return this.state===Ft.joined}isJoining(){return this.state===Ft.joining}isLeaving(){return this.state===Ft.leaving}},to=class{static request(n,e,t,i,r,s,a){if(An.XDomainRequest){let o=new An.XDomainRequest;return this.xdomainRequest(o,n,e,i,r,s,a)}else if(An.XMLHttpRequest){let o=new An.XMLHttpRequest;return this.xhrRequest(o,n,e,t,i,r,s,a)}else{if(An.fetch&&An.AbortController)return this.fetchRequest(n,e,t,i,r,s,a);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(n,e,t,i,r,s,a){let o={method:n,headers:t,body:i},l=null;return r&&(l=new AbortController,setTimeout(()=>l.abort(),r),o.signal=l.signal),An.fetch(e,o).then(c=>c.text()).then(c=>this.parseJSON(c)).then(c=>a&&a(c)).catch(c=>{c.name==="AbortError"&&s?s():a&&a(null)}),l}static xdomainRequest(n,e,t,i,r,s,a){return n.timeout=r,n.open(e,t),n.onload=()=>{let o=this.parseJSON(n.responseText);a&&a(o)},s&&(n.ontimeout=s),n.onprogress=()=>{},n.send(i),n}static xhrRequest(n,e,t,i,r,s,a,o){n.open(e,t,!0),n.timeout=s;for(let[l,c]of Object.entries(i))n.setRequestHeader(l,c);return n.onerror=()=>o&&o(null),n.onreadystatechange=()=>{if(n.readyState===ex.complete&&o){let l=this.parseJSON(n.responseText);o(l)}},a&&(n.ontimeout=a),n.send(r),n}static parseJSON(n){if(!n||n==="")return null;try{return JSON.parse(n)}catch{return console&&console.log("failed to parse JSON response",n),null}}static serialize(n,e){let t=[];for(var i in n){if(!Object.prototype.hasOwnProperty.call(n,i))continue;let r=e?`${e}[${i}]`:i,s=n[i];typeof s=="object"?t.push(this.serialize(s,r)):t.push(encodeURIComponent(r)+"="+encodeURIComponent(s))}return t.join("&")}static appendParams(n,e){if(Object.keys(e).length===0)return n;let t=n.match(/\?/)?"&":"?";return`${n}${t}${this.serialize(e)}`}},nx=n=>{let e="",t=new Uint8Array(n),i=t.byteLength;for(let r=0;r<i;r++)e+=String.fromCharCode(t[r]);return btoa(e)},Er=class{constructor(n,e){e&&e.length===2&&e[1].startsWith(Ic)&&(this.authToken=atob(e[1].slice(Ic.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(n),this.readyState=Cn.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(n){return n.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Pc.websocket),"$1/"+Pc.longpoll)}endpointURL(){return to.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(n,e,t){this.close(n,e,t),this.readyState=Cn.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===Cn.open||this.readyState===Cn.connecting}poll(){const n={Accept:"application/json"};this.authToken&&(n["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",n,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:i,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=i}else t=0;switch(t){case 200:r.forEach(s=>{setTimeout(()=>this.onmessage({data:s}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Cn.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${t}`)}})}send(n){typeof n!="string"&&(n=nx(n)),this.currentBatch?this.currentBatch.push(n):this.awaitingBatchAck?this.batchBuffer.push(n):(this.currentBatch=[n],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(n){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},n.join(`
`),()=>this.onerror("timeout"),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(n,e,t){for(let r of this.reqs)r.abort();this.readyState=Cn.closed;let i=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:n,reason:e,wasClean:t});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",i)):this.onclose(i)}ajax(n,e,t,i,r){let s,a=()=>{this.reqs.delete(s),i()};s=to.request(n,this.endpointURL(),e,t,this.timeout,a,o=>{this.reqs.delete(s),this.isActive()&&r(o)}),this.reqs.add(s)}},ix=class Ss{constructor(e,t={}){let i=t.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(i.state,r=>{let{onJoin:s,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Ss.syncState(this.state,r,s,a),this.pendingDiffs.forEach(l=>{this.state=Ss.syncDiff(this.state,l,s,a)}),this.pendingDiffs=[],o()}),this.channel.on(i.diff,r=>{let{onJoin:s,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(r):(this.state=Ss.syncDiff(this.state,r,s,a),o())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Ss.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,i,r){let s=this.clone(e),a={},o={};return this.map(s,(l,c)=>{t[l]||(o[l]=c)}),this.map(t,(l,c)=>{let u=s[l];if(u){let h=c.metas.map(_=>_.phx_ref),d=u.metas.map(_=>_.phx_ref),f=c.metas.filter(_=>d.indexOf(_.phx_ref)<0),g=u.metas.filter(_=>h.indexOf(_.phx_ref)<0);f.length>0&&(a[l]=c,a[l].metas=f),g.length>0&&(o[l]=this.clone(u),o[l].metas=g)}else a[l]=c}),this.syncDiff(s,{joins:a,leaves:o},i,r)}static syncDiff(e,t,i,r){let{joins:s,leaves:a}=this.clone(t);return i||(i=function(){}),r||(r=function(){}),this.map(s,(o,l)=>{let c=e[o];if(e[o]=this.clone(l),c){let u=e[o].metas.map(d=>d.phx_ref),h=c.metas.filter(d=>u.indexOf(d.phx_ref)<0);e[o].metas.unshift(...h)}i(o,c,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;let u=l.metas.map(h=>h.phx_ref);c.metas=c.metas.filter(h=>u.indexOf(h.phx_ref)<0),r(o,c,l),c.metas.length===0&&delete e[o]}),e}static list(e,t){return t||(t=function(i,r){return r}),this.map(e,(i,r)=>t(i,r))}static map(e,t){return Object.getOwnPropertyNames(e).map(i=>t(i,e[i]))}static clone(e){return JSON.parse(JSON.stringify(e))}},wa={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(n,e){if(n.payload.constructor===ArrayBuffer)return e(this.binaryEncode(n));{let t=[n.join_ref,n.ref,n.topic,n.event,n.payload];return e(JSON.stringify(t))}},decode(n,e){if(n.constructor===ArrayBuffer)return e(this.binaryDecode(n));{let[t,i,r,s,a]=JSON.parse(n);return e({join_ref:t,ref:i,topic:r,event:s,payload:a})}},binaryEncode(n){let{join_ref:e,ref:t,event:i,topic:r,payload:s}=n,a=this.META_LENGTH+e.length+t.length+r.length+i.length,o=new ArrayBuffer(this.HEADER_LENGTH+a),l=new DataView(o),c=0;l.setUint8(c++,this.KINDS.push),l.setUint8(c++,e.length),l.setUint8(c++,t.length),l.setUint8(c++,r.length),l.setUint8(c++,i.length),Array.from(e,h=>l.setUint8(c++,h.charCodeAt(0))),Array.from(t,h=>l.setUint8(c++,h.charCodeAt(0))),Array.from(r,h=>l.setUint8(c++,h.charCodeAt(0))),Array.from(i,h=>l.setUint8(c++,h.charCodeAt(0)));var u=new Uint8Array(o.byteLength+s.byteLength);return u.set(new Uint8Array(o),0),u.set(new Uint8Array(s),o.byteLength),u.buffer},binaryDecode(n){let e=new DataView(n),t=e.getUint8(0),i=new TextDecoder;switch(t){case this.KINDS.push:return this.decodePush(n,e,i);case this.KINDS.reply:return this.decodeReply(n,e,i);case this.KINDS.broadcast:return this.decodeBroadcast(n,e,i)}},decodePush(n,e,t){let i=e.getUint8(1),r=e.getUint8(2),s=e.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,o=t.decode(n.slice(a,a+i));a=a+i;let l=t.decode(n.slice(a,a+r));a=a+r;let c=t.decode(n.slice(a,a+s));a=a+s;let u=n.slice(a,n.byteLength);return{join_ref:o,ref:null,topic:l,event:c,payload:u}},decodeReply(n,e,t){let i=e.getUint8(1),r=e.getUint8(2),s=e.getUint8(3),a=e.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,l=t.decode(n.slice(o,o+i));o=o+i;let c=t.decode(n.slice(o,o+r));o=o+r;let u=t.decode(n.slice(o,o+s));o=o+s;let h=t.decode(n.slice(o,o+a));o=o+a;let d=n.slice(o,n.byteLength),f={status:h,response:d};return{join_ref:l,ref:c,topic:u,event:Xn.reply,payload:f}},decodeBroadcast(n,e,t){let i=e.getUint8(1),r=e.getUint8(2),s=this.HEADER_LENGTH+2,a=t.decode(n.slice(s,s+i));s=s+i;let o=t.decode(n.slice(s,s+r));s=s+r;let l=n.slice(s,n.byteLength);return{join_ref:null,ref:null,topic:a,event:o,payload:l}}},rx=class{constructor(n,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||ZS,this.transport=e.transport||An.WebSocket||Er,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let t=null;try{t=An&&An.sessionStorage}catch{}this.sessionStore=e.sessionStorage||t,this.establishedConnections=0,this.defaultEncoder=wa.encode.bind(wa),this.defaultDecoder=wa.decode.bind(wa),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==Er?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let i=null;Cr&&Cr.addEventListener&&(Cr.addEventListener("pagehide",r=>{this.conn&&(this.disconnect(),i=this.connectClock)}),Cr.addEventListener("pageshow",r=>{i===this.connectClock&&(i=null,this.connect())}),Cr.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=r=>e.rejoinAfterMs?e.rejoinAfterMs(r):[1e3,2e3,5e3][r-1]||1e4,this.reconnectAfterMs=r=>e.reconnectAfterMs?e.reconnectAfterMs(r):[10,50,100,150,200,250,500,1e3,2e3][r-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(r,s,a)=>{console.log(`${r}: ${s}`,a)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Ms(e.params||{}),this.endPoint=`${n}/${Pc.websocket}`,this.vsn=e.vsn||JS,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new jf(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken}getLongPollTransport(){return Er}replaceTransport(n){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=n}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let n=to.appendParams(to.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return n.charAt(0)!=="/"?n:n.charAt(1)==="/"?`${this.protocol()}:${n}`:`${this.protocol()}://${location.host}${n}`}disconnect(n,e,t){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,n&&n()},e,t)}connect(n){n&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Ms(n)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==Er?this.connectWithFallback(Er,this.longPollFallbackMs):this.transportConnect())}log(n,e,t){this.logger&&this.logger(n,e,t)}hasLogger(){return this.logger!==null}onOpen(n){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,n]),e}onClose(n){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,n]),e}onError(n){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,n]),e}onMessage(n){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,n]),e}onHeartbeat(n){this.heartbeatCallback=n}ping(n){if(!this.isConnected())return!1;let e=this.makeRef(),t=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let i=this.onMessage(r=>{r.ref===e&&(this.off([i]),n(Date.now()-t))});return!0}transportName(n){switch(n){case Er:return"LongPoll";default:return n.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let n;this.authToken&&(n=["phoenix",`${Ic}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),n),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(n){return this.sessionStore&&this.sessionStore.getItem(n)}storeSession(n,e){this.sessionStore&&this.sessionStore.setItem(n,e)}connectWithFallback(n,e=2500){clearTimeout(this.fallbackTimer);let t=!1,i=!0,r,s,a=this.transportName(n),o=l=>{this.log("transport",`falling back to ${a}...`,l),this.off([r,s]),i=!1,this.replaceTransport(n),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o("memorized");this.fallbackTimer=setTimeout(o,e),s=this.onError(l=>{this.log("transport","error",l),i&&!t&&(clearTimeout(this.fallbackTimer),o(l))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(t=!0,!i){let l=this.transportName(n);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${l}`,"true"),this.log("transport",`established ${l} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,e),this.ping(l=>{this.log("transport","connected to primary after",l),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(n){this.log("error","error in heartbeat callback",n)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),QS,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(n,e,t){if(!this.conn)return n&&n();const i=this.conn;this.waitForBufferDone(i,()=>{e?i.close(e,t||""):i.close(),this.waitForSocketClosed(i,()=>{this.conn===i&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),n&&n()})})}waitForBufferDone(n,e,t=1){if(t===5||!n.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(n,e,t+1)},150*t)}waitForSocketClosed(n,e,t=1){if(t===5||n.readyState===Cn.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(n,e,t+1)},150*t)}onConnClose(n){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",n),this.triggerChanError(n),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",n)}onConnError(n){this.hasLogger()&&this.log("transport","error",n);let e=this.transport,t=this.establishedConnections;this.triggerStateCallbacks("error",n,e,t),(e===this.transport||t>0)&&this.triggerChanError(n)}triggerChanError(n){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(Xn.error,n)})}connectionState(){switch(this.conn&&this.conn.readyState){case Cn.connecting:return"connecting";case Cn.open:return"open";case Cn.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(n){this.off(n.stateChangeRefs),this.channels=this.channels.filter(e=>e!==n)}off(n){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([t])=>n.indexOf(t)===-1)}channel(n,e={}){let t=new tx(n,e,this);return this.channels.push(t),t}push(n){if(this.hasLogger()){let{topic:e,event:t,payload:i,ref:r,join_ref:s}=n;this.log("push",`${e} ${t} (${s}, ${r})`,i)}this.isConnected()?this.encode(n,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(n,e=>this.conn.send(e)))}makeRef(){let n=this.ref+1;return n===this.ref?this.ref=0:this.ref=n,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(n){this.log("error","error in heartbeat callback",n)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(n){this.log("error","error in heartbeat callback",n)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(n=>n()),this.sendBuffer=[])}onConnMessage(n){this.decode(n.data,e=>{let{topic:t,event:i,payload:r,ref:s,join_ref:a}=e;if(s&&s===this.pendingHeartbeatRef){const o=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status==="ok"?"ok":"error",o)}catch(l){this.log("error","error in heartbeat callback",l)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${r.status||""} ${t} ${i} ${s&&"("+s+")"||""}`.trim(),r);for(let o=0;o<this.channels.length;o++){const l=this.channels[o];l.isMember(t,i,r,a)&&l.trigger(i,r,s,a)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(n,...e){try{this.stateChangeCallbacks[n].forEach(([t,i])=>{try{i(...e)}catch(r){this.log("error",`error in ${n} callback`,r)}})}catch(t){this.log("error",`error triggering ${n} callbacks`,t)}}leaveOpenTopic(n){let e=this.channels.find(t=>t.topic===n&&(t.isJoined()||t.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${n}"`),e.leave())}};class As{constructor(e,t){const i=ax(t);this.presence=new ix(e.getChannel(),i),this.presence.onJoin((r,s,a)=>{const o=As.onJoinPayload(r,s,a);e.getChannel().trigger("presence",o)}),this.presence.onLeave((r,s,a)=>{const o=As.onLeavePayload(r,s,a);e.getChannel().trigger("presence",o)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return As.transformState(this.presence.state)}static transformState(e){return e=sx(e),Object.getOwnPropertyNames(e).reduce((t,i)=>{const r=e[i];return t[i]=Va(r),t},{})}static onJoinPayload(e,t,i){const r=Fh(t),s=Va(i);return{event:"join",key:e,currentPresences:r,newPresences:s}}static onLeavePayload(e,t,i){const r=Fh(t),s=Va(i);return{event:"leave",key:e,currentPresences:r,leftPresences:s}}}function Va(n){return n.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function sx(n){return JSON.parse(JSON.stringify(n))}function ax(n){return(n==null?void 0:n.events)&&{events:n.events}}function Fh(n){return n!=null&&n.metas?Va(n):[]}var Bh;(function(n){n.SYNC="sync",n.JOIN="join",n.LEAVE="leave"})(Bh||(Bh={}));class ox{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new As(this.channel.channelAdapter,t)}}function lx(n){if(n instanceof Error)return n;if(typeof n=="string")return new Error(n);if(n&&typeof n=="object"){const e=n;if(typeof e.code=="number"){const t=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${t}`,{cause:n})}return new Error("channel error: transport failure",{cause:n})}return new Error("channel error: connection lost")}class cx{constructor(e,t,i){const r=ux(i);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,i){let r;try{r=this.channel.push(e,t,i)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>VS){const s=this.channel.pushBuffer.shift();s.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${s.event}`,s.payload())}return r}updateJoinPayload(e){const t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===wi.joined}isJoined(){return this.state===wi.joined}isJoining(){return this.state===wi.joining}isClosed(){return this.state===wi.closed}isLeaving(){return this.state===wi.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function ux(n){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},n.config)}}var zh;(function(n){n.ALL="*",n.INSERT="INSERT",n.UPDATE="UPDATE",n.DELETE="DELETE"})(zh||(zh={}));var Or;(function(n){n.BROADCAST="broadcast",n.PRESENCE="presence",n.POSTGRES_CHANGES="postgres_changes",n.SYSTEM="system"})(Or||(Or={}));var Kn;(function(n){n.SUBSCRIBED="SUBSCRIBED",n.TIMED_OUT="TIMED_OUT",n.CLOSED="CLOSED",n.CHANNEL_ERROR="CHANNEL_ERROR"})(Kn||(Kn={}));class Rs{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},i){var r,s;if(this.topic=e,this.params=t,this.socket=i,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.channelAdapter=new cx(this.socket.socketAdapter,e,this.params),this.presence=new ox(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=$f(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((s=(r=this.params.config)===null||r===void 0?void 0:r.broadcast)===null||s===void 0)&&s.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){var i,r,s;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(r=(i=this.bindings.postgres_changes)===null||i===void 0?void 0:i.map(f=>f.filter))!==null&&r!==void 0?r:[],u=!!this.bindings[Or.PRESENCE]&&this.bindings[Or.PRESENCE].length>0||((s=this.params.config.presence)===null||s===void 0?void 0:s.enabled)===!0,h={},d={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:u}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(h.access_token=this.socket.accessTokenValue),this._onError(f=>{e==null||e(Kn.CHANNEL_ERROR,lx(f))}),this._onClose(()=>e==null?void 0:e(Kn.CLOSED)),this.updateJoinPayload(Object.assign({config:d},h)),this._updateFilterMessage(),this.channelAdapter.subscribe(t).receive("ok",async({postgres_changes:f})=>{if(this.socket._isManualToken()||this.socket.setAuth(),f===void 0){e==null||e(Kn.SUBSCRIBED);return}this._updatePostgresBindings(f,e)}).receive("error",f=>{this.state=wi.errored;const g=Object.values(f).join(", ")||"error";e==null||e(Kn.CHANNEL_ERROR,new Error(g,{cause:f}))}).receive("timeout",()=>{e==null||e(Kn.TIMED_OUT)})}return this}_updatePostgresBindings(e,t){var i;const r=this.bindings.postgres_changes,s=(i=r==null?void 0:r.length)!==null&&i!==void 0?i:0,a=[];for(let o=0;o<s;o++){const l=r[o],{filter:{event:c,schema:u,table:h,filter:d}}=l,f=e&&e[o];if(f&&f.event===c&&Rs.isFilterValueEqual(f.schema,u)&&Rs.isFilterValueEqual(f.table,h)&&Rs.isFilterValueEqual(f.filter,d))a.push(Object.assign(Object.assign({},l),{id:f.id}));else{this.unsubscribe(),this.state=wi.errored,t==null||t(Kn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=a,this.state!=wi.errored&&t&&t(Kn.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,i){const r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),s=e===Or.PRESENCE||e===Or.POSTGRES_CHANGES;if(r&&s)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,i)}async httpSend(e,t,i={}){var r;if(t==null)return Promise.reject(new Error("Payload is required for httpSend()"));const s=t instanceof ArrayBuffer||ArrayBuffer.isView(t),a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":s?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o=new URL(this.broadcastEndpointURL);o.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&o.searchParams.set("private","true");const l={method:"POST",headers:a,body:s?t:JSON.stringify(t)},c=await this._fetchWithTimeout(o.toString(),l,(r=i.timeout)!==null&&r!==void 0?r:this.timeout);if(c.status===202)return{success:!0};let u=c.statusText;try{const h=await c.json();u=h.error||h.message||u}catch{}return Promise.reject(new Error(u))}async send(e,t={}){var i,r;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:s,payload:a}=e,o={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(o.Authorization=`Bearer ${this.socket.accessTokenValue}`);const l={method:"POST",headers:o,body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(i=t.timeout)!==null&&i!==void 0?i:this.timeout);return await((r=c.body)===null||r===void 0?void 0:r.cancel()),c.ok?"ok":"error"}catch(c){return c instanceof Error&&c.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var a,o,l;const c=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&s("ok"),c.receive("ok",()=>s("ok")),c.receive("error",()=>s("error")),c.receive("timeout",()=>s("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>t("ok")).receive("timeout",()=>t("timed out")).receive("error",()=>t("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,i){const r=new AbortController,s=setTimeout(()=>r.abort(),i),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(s),a}_on(e,t,i){const r=e.toLocaleLowerCase(),s=this.channelAdapter.on(e,i),a={type:r,filter:t,callback:i,ref:s};return this.bindings[r]?this.bindings[r].push(a):this.bindings[r]=[a],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,i)=>{var r,s,a,o,l,c,u;const h=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(h,i))return!1;const d=(r=this.bindings[h])===null||r===void 0?void 0:r.find(f=>f.ref===e.ref);if(!d)return!0;if(["broadcast","presence","postgres_changes"].includes(h))if("id"in d){const f=d.id,g=(s=d.filter)===null||s===void 0?void 0:s.event;return f&&((a=t.ids)===null||a===void 0?void 0:a.includes(f))&&(g==="*"||(g==null?void 0:g.toLocaleLowerCase())===((o=t.data)===null||o===void 0?void 0:o.type.toLocaleLowerCase()))}else{const f=(c=(l=d==null?void 0:d.filter)===null||l===void 0?void 0:l.event)===null||c===void 0?void 0:c.toLocaleLowerCase();return f==="*"||f===((u=t==null?void 0:t.event)===null||u===void 0?void 0:u.toLocaleLowerCase())}else return d.type.toLocaleLowerCase()===h})}_notThisChannelEvent(e,t){const{close:i,error:r,leave:s,join:a}=Gf;return t&&[i,r,s,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,i)=>{if(typeof t=="object"&&"ids"in t){const r=t.data,{schema:s,table:a,commit_timestamp:o,type:l,errors:c}=r;return Object.assign(Object.assign({},{schema:s,table:a,commit_timestamp:o,eventType:l,new:{},old:{},errors:c}),this._getPayloadRecords(r))}return t})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const t in e.bindings)for(const i of e.bindings[t])this._on(i.type,i.filter,i.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=kh(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=kh(e.columns,e.old_record)),t}}class hx{constructor(e,t){this.socket=new rx(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,i,r=1e4){return new Promise(s=>{setTimeout(()=>s("timeout"),r),this.socket.disconnect(()=>{e(),s("ok")},t,i)})}push(e){this.socket.push(e)}log(e,t,i){this.socket.log(e,t,i)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Rc.connecting}isDisconnecting(){return this.socket.connectionState()==Rc.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Hh={HEARTBEAT_INTERVAL:25e3},dx=[1e3,2e3,5e3,1e4],fx=1e4;function px(){const n=new Map;return{get length(){return n.size},clear(){n.clear()},getItem(e){return n.has(e)?n.get(e):null},key(e){var t;return(t=Array.from(n.keys())[e])!==null&&t!==void 0?t:null},removeItem(e){n.delete(e)},setItem(e,t){n.set(e,String(t))}}}function mx(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return px()}const gx=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class _x{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){var i;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new GS,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=s=>s?(...a)=>s(...a):(...a)=>fetch(...a),!(!((i=t==null?void 0:t.params)===null||i===void 0)&&i.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=t.params.apikey;const r=this._initializeOptions(t);this.socketAdapter=new hx(e,r),this.httpEndpoint=$f(e),this.fetch=this._resolveFetch(t==null?void 0:t.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const t=e.message;throw t.includes("Node.js")?new Error(`${t}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return t==="ok"&&e.teardown(),t}async removeAllChannels(){const e=this.channels.map(async i=>{const r=await i.unsubscribe();return i.teardown(),r}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,i){this.socketAdapter.log(e,t,i)}connectionState(){return this.socketAdapter.connectionState()||Rc.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){const i=`realtime:${e}`,r=this.getChannels().find(s=>s.topic===i);if(r)return r;{const s=new Rs(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(s),s}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let t,i=!1;if(e)t=e,i=!0;else if(this.accessToken)try{t=await this.accessToken()}catch(r){this.log("error","Error fetching access token from callback",r),t=this.accessTokenValue}else t=this.accessTokenValue;i?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(r=>{const s={access_token:t,version:FS};t&&r.updateJoinPayload(s),r.joinedOnce&&r.channelAdapter.isJoined()&&r.channelAdapter.push(Gf.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(t=>{this.log("error",`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(t=>{this.log("error","error waiting for auth on connect",t)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,i)=>{t=="sent"&&this._setAuthSafely(),e&&e(t,i)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{const i=new Blob([gx],{type:"application/javascript"});t=URL.createObjectURL(i)}return t}_initializeOptions(e){var t,i,r,s,a,o,l,c,u,h,d,f;this.worker=(t=e==null?void 0:e.worker)!==null&&t!==void 0?t:!1,this.accessToken=(i=e==null?void 0:e.accessToken)!==null&&i!==void 0?i:null;const g={};g.timeout=(r=e==null?void 0:e.timeout)!==null&&r!==void 0?r:HS,g.heartbeatIntervalMs=(s=e==null?void 0:e.heartbeatIntervalMs)!==null&&s!==void 0?s:Hh.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(a=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&a!==void 0?a:2*((o=e==null?void 0:e.heartbeatIntervalMs)!==null&&o!==void 0?o:Hh.HEARTBEAT_INTERVAL),g.transport=(l=e==null?void 0:e.transport)!==null&&l!==void 0?l:OS.getWebSocketConstructor(),g.params=e==null?void 0:e.params,g.logger=e==null?void 0:e.logger,g.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),g.sessionStorage=(c=e==null?void 0:e.sessionStorage)!==null&&c!==void 0?c:mx(),g.reconnectAfterMs=(u=e==null?void 0:e.reconnectAfterMs)!==null&&u!==void 0?u:(w=>dx[w-1]||fx);let _,m;const p=(h=e==null?void 0:e.vsn)!==null&&h!==void 0?h:zS;switch(p){case BS:_=(w,x)=>x(JSON.stringify(w)),m=(w,x)=>x(JSON.parse(w));break;case Vf:_=this.serializer.encode.bind(this.serializer),m=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${g.vsn}`)}if(g.vsn=p,g.encode=(d=e==null?void 0:e.encode)!==null&&d!==void 0?d:_,g.decode=(f=e==null?void 0:e.decode)!==null&&f!==void 0?f:m,g.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,g.params=Object.assign(Object.assign({},g.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,g.autoSendHeartbeat=!this.worker}return g}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var Ds=class extends Error{constructor(n,e){var t;super(n),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((t=e.icebergType)==null?void 0:t.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function vx(n,e,t){const i=new URL(e,n);if(t)for(const[r,s]of Object.entries(t))s!==void 0&&i.searchParams.set(r,s);return i.toString()}async function yx(n){return!n||n.type==="none"?{}:n.type==="bearer"?{Authorization:`Bearer ${n.token}`}:n.type==="header"?{[n.name]:n.value}:n.type==="custom"?await n.getHeaders():{}}function Sx(n){const e=n.fetchImpl??globalThis.fetch;return{async request({method:t,path:i,query:r,body:s,headers:a}){const o=vx(n.baseUrl,i,r),l=await yx(n.auth),c=await e(o,{method:t,headers:{...s?{"Content-Type":"application/json"}:{},...l,...a},body:s?JSON.stringify(s):void 0}),u=await c.text(),h=(c.headers.get("content-type")||"").includes("application/json"),d=h&&u?JSON.parse(u):u;if(!c.ok){const f=h?d:void 0,g=f==null?void 0:f.error;throw new Ds((g==null?void 0:g.message)??`Request failed with status ${c.status}`,{status:c.status,icebergType:g==null?void 0:g.type,icebergCode:g==null?void 0:g.code,details:f})}return{status:c.status,headers:c.headers,data:d}}}}function Ta(n){return n.join("")}var xx=class{constructor(n,e=""){this.client=n,this.prefix=e}async listNamespaces(n){const e=n?{parent:Ta(n.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(i=>({namespace:i}))}async createNamespace(n,e){const t={namespace:n.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:t})).data}async dropNamespace(n){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Ta(n.namespace)}`})}async loadNamespaceMetadata(n){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Ta(n.namespace)}`})).data.properties}}async namespaceExists(n){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Ta(n.namespace)}`}),!0}catch(e){if(e instanceof Ds&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(n,e){try{return await this.createNamespace(n,e)}catch(t){if(t instanceof Ds&&t.status===409)return;throw t}}};function wr(n){return n.join("")}var bx=class{constructor(n,e="",t){this.client=n,this.prefix=e,this.accessDelegation=t}async listTables(n){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${wr(n.namespace)}/tables`})).data.identifiers}async createTable(n,e){const t={};return this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${wr(n.namespace)}/tables`,body:e,headers:t})).data.metadata}async updateTable(n,e){const t=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${wr(n.namespace)}/tables/${n.name}`,body:e});return{"metadata-location":t.data["metadata-location"],metadata:t.data.metadata}}async dropTable(n,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${wr(n.namespace)}/tables/${n.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(n){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${wr(n.namespace)}/tables/${n.name}`,headers:e})).data.metadata}async tableExists(n){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${wr(n.namespace)}/tables/${n.name}`,headers:e}),!0}catch(t){if(t instanceof Ds&&t.status===404)return!1;throw t}}async createTableIfNotExists(n,e){try{return await this.createTable(n,e)}catch(t){if(t instanceof Ds&&t.status===409)return await this.loadTable({namespace:n.namespace,name:e.name});throw t}}},Ex=class{constructor(n){var i;let e="v1";n.catalogName&&(e+=`/${n.catalogName}`);const t=n.baseUrl.endsWith("/")?n.baseUrl:`${n.baseUrl}/`;this.client=Sx({baseUrl:t,auth:n.auth,fetchImpl:n.fetch}),this.accessDelegation=(i=n.accessDelegation)==null?void 0:i.join(","),this.namespaceOps=new xx(this.client,e),this.tableOps=new bx(this.client,e,this.accessDelegation)}async listNamespaces(n){return this.namespaceOps.listNamespaces(n)}async createNamespace(n,e){return this.namespaceOps.createNamespace(n,e)}async dropNamespace(n){await this.namespaceOps.dropNamespace(n)}async loadNamespaceMetadata(n){return this.namespaceOps.loadNamespaceMetadata(n)}async listTables(n){return this.tableOps.listTables(n)}async createTable(n,e){return this.tableOps.createTable(n,e)}async updateTable(n,e){return this.tableOps.updateTable(n,e)}async dropTable(n,e){await this.tableOps.dropTable(n,e)}async loadTable(n){return this.tableOps.loadTable(n)}async namespaceExists(n){return this.namespaceOps.namespaceExists(n)}async tableExists(n){return this.tableOps.tableExists(n)}async createNamespaceIfNotExists(n,e){return this.namespaceOps.createNamespaceIfNotExists(n,e)}async createTableIfNotExists(n,e){return this.tableOps.createTableIfNotExists(n,e)}};function Us(n){"@babel/helpers - typeof";return Us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Us(n)}function wx(n,e){if(Us(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(Us(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Tx(n){var e=wx(n,"string");return Us(e)=="symbol"?e:e+""}function Mx(n,e,t){return(e=Tx(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Vh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function we(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Vh(Object(t),!0).forEach(function(i){Mx(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Vh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var _o=class extends Error{constructor(n,e="storage",t,i){super(n),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=t,this.statusCode=i}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function vo(n){return typeof n=="object"&&n!==null&&"__isStorageError"in n}var Lc=class extends _o{constructor(n,e,t,i="storage"){super(n,i,e,t),this.name=i==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=t}toJSON(){return we({},super.toJSON())}},qf=class extends _o{constructor(n,e,t="storage"){super(n,t),this.name=t==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function no(n,e,t){const i=we({},n),r=e.toLowerCase();for(const s of Object.keys(i))s.toLowerCase()===r&&delete i[s];return i[r]=t,i}function Ax(n){const e={};for(const[t,i]of Object.entries(n))e[t.toLowerCase()]=i;return e}const Rx=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),Cx=n=>{if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Dc=n=>{if(Array.isArray(n))return n.map(t=>Dc(t));if(typeof n=="function"||n!==Object(n))return n;const e={};return Object.entries(n).forEach(([t,i])=>{const r=t.replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace(/[-_]/g,""));e[r]=Dc(i)}),e},Px=n=>!n||typeof n!="string"||n.length===0||n.length>100||n.trim()!==n||n.includes("/")||n.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(n),Gh=n=>{if(typeof n=="object"&&n!==null){const e=n;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const t=e.error;if(typeof t.message=="string")return t.message}}return JSON.stringify(n)},Ix=async(n,e,t,i)=>{if(n!==null&&typeof n=="object"&&"json"in n&&typeof n.json=="function"){const r=n;let s=parseInt(String(r.status),10);Number.isFinite(s)||(s=500),r.json().then(a=>{const o=(a==null?void 0:a.statusCode)||(a==null?void 0:a.code)||s+"";e(new Lc(Gh(a),s,o,i))}).catch(()=>{const a=s+"";e(new Lc(r.statusText||`HTTP ${s} error`,s,a,i))})}else e(new qf(Gh(n),n,i))},Lx=(n,e,t,i)=>{const r={method:n,headers:(e==null?void 0:e.headers)||{}};if(n==="GET"||n==="HEAD"||!i)return we(we({},r),t);if(Cx(i)){var s;const a=(e==null?void 0:e.headers)||{};let o;for(const[l,c]of Object.entries(a))l.toLowerCase()==="content-type"&&(o=c);r.headers=no(a,"Content-Type",(s=o)!==null&&s!==void 0?s:"application/json"),r.body=JSON.stringify(i)}else r.body=i;return e!=null&&e.duplex&&(r.duplex=e.duplex),we(we({},r),t)};async function ps(n,e,t,i,r,s,a){return new Promise((o,l)=>{n(t,Lx(e,i,r,s)).then(c=>{if(!c.ok)throw c;if(i!=null&&i.noResolveJson)return c;if(a==="vectors"){const u=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!u||!u.includes("application/json"))return{}}return c.json()}).then(c=>o(c)).catch(c=>Ix(c,l,i,a))})}function Xf(n="storage"){return{get:async(e,t,i,r)=>ps(e,"GET",t,i,r,void 0,n),post:async(e,t,i,r,s)=>ps(e,"POST",t,r,s,i,n),put:async(e,t,i,r,s)=>ps(e,"PUT",t,r,s,i,n),head:async(e,t,i,r)=>ps(e,"HEAD",t,we(we({},i),{},{noResolveJson:!0}),r,void 0,n),remove:async(e,t,i,r,s)=>ps(e,"DELETE",t,r,s,i,n)}}const Dx=Xf("storage"),{get:Ns,post:hn,put:Uc,head:Ux,remove:uu}=Dx,Xt=Xf("vectors");var ns=class{constructor(n,e={},t,i="storage"){this.shouldThrowOnError=!1,this.url=n,this.headers=Ax(e),this.fetch=Rx(t),this.namespace=i}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(n,e){return this.headers=no(this.headers,n,e),this}async handleOperation(n){var e=this;try{return{data:await n(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(vo(t))return{data:null,error:t};throw t}}};let Kf;Kf=Symbol.toStringTag;var Nx=class{constructor(n,e){this.downloadFn=n,this.shouldThrowOnError=e,this[Kf]="StreamDownloadBuilder",this.promise=null}then(n,e){return this.getPromise().then(n,e)}catch(n){return this.getPromise().catch(n)}finally(n){return this.getPromise().finally(n)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var n=this;try{return{data:(await n.downloadFn()).body,error:null}}catch(e){if(n.shouldThrowOnError)throw e;if(vo(e))return{data:null,error:e};throw e}}};let Yf;Yf=Symbol.toStringTag;var Ox=class{constructor(n,e){this.downloadFn=n,this.shouldThrowOnError=e,this[Yf]="BlobDownloadBuilder",this.promise=null}asStream(){return new Nx(this.downloadFn,this.shouldThrowOnError)}then(n,e){return this.getPromise().then(n,e)}catch(n){return this.getPromise().catch(n)}finally(n){return this.getPromise().finally(n)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var n=this;try{return{data:await(await n.downloadFn()).blob(),error:null}}catch(e){if(n.shouldThrowOnError)throw e;if(vo(e))return{data:null,error:e};throw e}}};const kx={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Wh={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var Fx=class extends ns{constructor(n,e={},t,i){super(n,e,i,"storage"),this.bucketId=t}async uploadOrUpdate(n,e,t,i){var r=this;return r.handleOperation(async()=>{let s;const a=we(we({},Wh),i);let o=we(we({},r.headers),n==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;if(typeof Blob<"u"&&t instanceof Blob?(s=new FormData,s.append("cacheControl",a.cacheControl),l&&s.append("metadata",r.encodeMetadata(l)),s.append("",t)):typeof FormData<"u"&&t instanceof FormData?(s=t,s.has("cacheControl")||s.append("cacheControl",a.cacheControl),l&&!s.has("metadata")&&s.append("metadata",r.encodeMetadata(l))):(s=t,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=r.toBase64(r.encodeMetadata(l))),(typeof ReadableStream<"u"&&s instanceof ReadableStream||s&&typeof s=="object"&&"pipe"in s&&typeof s.pipe=="function")&&!a.duplex&&(a.duplex="half")),i!=null&&i.headers)for(const[d,f]of Object.entries(i.headers))o=no(o,d,f);const c=r._removeEmptyFolders(e),u=r._getFinalPath(c),h=await(n=="PUT"?Uc:hn)(r.fetch,`${r.url}/object/${u}`,s,we({headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{}));return{path:c,id:h.Id,fullPath:h.Key}})}async upload(n,e,t){return this.uploadOrUpdate("POST",n,e,t)}async uploadToSignedUrl(n,e,t,i){var r=this;const s=r._removeEmptyFolders(n),a=r._getFinalPath(s),o=new URL(r.url+`/object/upload/sign/${a}`);return o.searchParams.set("token",e),r.handleOperation(async()=>{let l;const c=we(we({},Wh),i);let u=we(we({},r.headers),{"x-upsert":String(c.upsert)});const h=c.metadata;if(typeof Blob<"u"&&t instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),h&&l.append("metadata",r.encodeMetadata(h)),l.append("",t)):typeof FormData<"u"&&t instanceof FormData?(l=t,l.has("cacheControl")||l.append("cacheControl",c.cacheControl),h&&!l.has("metadata")&&l.append("metadata",r.encodeMetadata(h))):(l=t,u["cache-control"]=`max-age=${c.cacheControl}`,u["content-type"]=c.contentType,h&&(u["x-metadata"]=r.toBase64(r.encodeMetadata(h))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!c.duplex&&(c.duplex="half")),i!=null&&i.headers)for(const[d,f]of Object.entries(i.headers))u=no(u,d,f);return{path:s,fullPath:(await Uc(r.fetch,o.toString(),l,we({headers:u},c!=null&&c.duplex?{duplex:c.duplex}:{}))).Key}})}async createSignedUploadUrl(n,e){var t=this;return t.handleOperation(async()=>{let i=t._getFinalPath(n);const r=we({},t.headers);e!=null&&e.upsert&&(r["x-upsert"]="true");const s=await hn(t.fetch,`${t.url}/object/upload/sign/${i}`,{},{headers:r}),a=new URL(t.url+s.url),o=a.searchParams.get("token");if(!o)throw new _o("No token returned by API");return{signedUrl:a.toString(),path:n,token:o}})}async update(n,e,t){return this.uploadOrUpdate("PUT",n,e,t)}async move(n,e,t){var i=this;return i.handleOperation(async()=>await hn(i.fetch,`${i.url}/object/move`,{bucketId:i.bucketId,sourceKey:n,destinationKey:e,destinationBucket:t==null?void 0:t.destinationBucket},{headers:i.headers}))}async copy(n,e,t){var i=this;return i.handleOperation(async()=>({path:(await hn(i.fetch,`${i.url}/object/copy`,{bucketId:i.bucketId,sourceKey:n,destinationKey:e,destinationBucket:t==null?void 0:t.destinationBucket},{headers:i.headers})).Key}))}async createSignedUrl(n,e,t){var i=this;return i.handleOperation(async()=>{let r=i._getFinalPath(n);const s=typeof(t==null?void 0:t.transform)=="object"&&t.transform!==null&&Object.keys(t.transform).length>0;let a=await hn(i.fetch,`${i.url}/object/sign/${r}`,we({expiresIn:e},s?{transform:t.transform}:{}),{headers:i.headers});const o=new URLSearchParams;t!=null&&t.download&&o.set("download",t.download===!0?"":t.download),(t==null?void 0:t.cacheNonce)!=null&&o.set("cacheNonce",String(t.cacheNonce));const l=o.toString();return{signedUrl:encodeURI(`${i.url}${a.signedURL}${l?`&${l}`:""}`)}})}async createSignedUrls(n,e,t){var i=this;return i.handleOperation(async()=>{const r=await hn(i.fetch,`${i.url}/object/sign/${i.bucketId}`,{expiresIn:e,paths:n},{headers:i.headers}),s=new URLSearchParams;t!=null&&t.download&&s.set("download",t.download===!0?"":t.download),(t==null?void 0:t.cacheNonce)!=null&&s.set("cacheNonce",String(t.cacheNonce));const a=s.toString();return r.map(o=>we(we({},o),{},{signedUrl:o.signedURL?encodeURI(`${i.url}${o.signedURL}${a?`&${a}`:""}`):null}))})}download(n,e,t){const i=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",r=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(r,e.transform),(e==null?void 0:e.cacheNonce)!=null&&r.set("cacheNonce",String(e.cacheNonce));const s=r.toString(),a=this._getFinalPath(n),o=()=>Ns(this.fetch,`${this.url}/${i}/${a}${s?`?${s}`:""}`,{headers:this.headers,noResolveJson:!0},t);return new Ox(o,this.shouldThrowOnError)}async info(n){var e=this;const t=e._getFinalPath(n);return e.handleOperation(async()=>Dc(await Ns(e.fetch,`${e.url}/object/info/${t}`,{headers:e.headers})))}async exists(n){var e=this;const t=e._getFinalPath(n);try{return await Ux(e.fetch,`${e.url}/object/${t}`,{headers:e.headers}),{data:!0,error:null}}catch(r){if(e.shouldThrowOnError)throw r;if(vo(r)){var i;const s=r instanceof Lc?r.status:r instanceof qf?(i=r.originalError)===null||i===void 0?void 0:i.status:void 0;if(s!==void 0&&[400,404].includes(s))return{data:!1,error:r}}throw r}}getPublicUrl(n,e){const t=this._getFinalPath(n),i=new URLSearchParams;e!=null&&e.download&&i.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(i,e.transform),(e==null?void 0:e.cacheNonce)!=null&&i.set("cacheNonce",String(e.cacheNonce));const r=i.toString(),s=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${s}/public/${t}`)+(r?`?${r}`:"")}}}async remove(n){var e=this;return e.handleOperation(async()=>await uu(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:n},{headers:e.headers}))}async list(n,e,t){var i=this;return i.handleOperation(async()=>{const r=we(we(we({},kx),e),{},{prefix:n||""});return await hn(i.fetch,`${i.url}/object/list/${i.bucketId}`,r,{headers:i.headers},t)})}async listV2(n,e){var t=this;return t.handleOperation(async()=>{const i=we({},n);return await hn(t.fetch,`${t.url}/object/list-v2/${t.bucketId}`,i,{headers:t.headers},e)})}encodeMetadata(n){return JSON.stringify(n)}toBase64(n){return typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n)}_getFinalPath(n){return`${this.bucketId}/${n.replace(/^\/+/,"")}`}_removeEmptyFolders(n){return n.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(n,e){return e.width&&n.set("width",e.width.toString()),e.height&&n.set("height",e.height.toString()),e.resize&&n.set("resize",e.resize),e.format&&n.set("format",e.format),e.quality&&n.set("quality",e.quality.toString()),n}};const Bx="2.108.1",Xs={"X-Client-Info":`storage-js/${Bx}`};var zx=class extends ns{constructor(n,e={},t,i){const r=new URL(n);i!=null&&i.useNewHostname&&/supabase\.(co|in|red)$/.test(r.hostname)&&!r.hostname.includes("storage.supabase.")&&(r.hostname=r.hostname.replace("supabase.","storage.supabase."));const s=r.href.replace(/\/$/,""),a=we(we({},Xs),e);super(s,a,t,"storage")}async listBuckets(n){var e=this;return e.handleOperation(async()=>{const t=e.listBucketOptionsToQueryString(n);return await Ns(e.fetch,`${e.url}/bucket${t}`,{headers:e.headers})})}async getBucket(n){var e=this;return e.handleOperation(async()=>await Ns(e.fetch,`${e.url}/bucket/${n}`,{headers:e.headers}))}async createBucket(n,e={public:!1}){var t=this;return t.handleOperation(async()=>await hn(t.fetch,`${t.url}/bucket`,{id:n,name:n,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:t.headers}))}async updateBucket(n,e){var t=this;return t.handleOperation(async()=>await Uc(t.fetch,`${t.url}/bucket/${n}`,{id:n,name:n,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:t.headers}))}async emptyBucket(n){var e=this;return e.handleOperation(async()=>await hn(e.fetch,`${e.url}/bucket/${n}/empty`,{},{headers:e.headers}))}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await uu(e.fetch,`${e.url}/bucket/${n}`,{},{headers:e.headers}))}listBucketOptionsToQueryString(n){const e={};return n&&("limit"in n&&(e.limit=String(n.limit)),"offset"in n&&(e.offset=String(n.offset)),n.search&&(e.search=n.search),n.sortColumn&&(e.sortColumn=n.sortColumn),n.sortOrder&&(e.sortOrder=n.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},Hx=class extends ns{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=we(we({},Xs),e);super(i,r,t,"storage")}async createBucket(n){var e=this;return e.handleOperation(async()=>await hn(e.fetch,`${e.url}/bucket`,{name:n},{headers:e.headers}))}async listBuckets(n){var e=this;return e.handleOperation(async()=>{const t=new URLSearchParams;(n==null?void 0:n.limit)!==void 0&&t.set("limit",n.limit.toString()),(n==null?void 0:n.offset)!==void 0&&t.set("offset",n.offset.toString()),n!=null&&n.sortColumn&&t.set("sortColumn",n.sortColumn),n!=null&&n.sortOrder&&t.set("sortOrder",n.sortOrder),n!=null&&n.search&&t.set("search",n.search);const i=t.toString(),r=i?`${e.url}/bucket?${i}`:`${e.url}/bucket`;return await Ns(e.fetch,r,{headers:e.headers})})}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await uu(e.fetch,`${e.url}/bucket/${n}`,{},{headers:e.headers}))}from(n){var e=this;if(!Px(n))throw new _o("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const t=new Ex({baseUrl:this.url,catalogName:n,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),i=this.shouldThrowOnError;return new Proxy(t,{get(r,s){const a=r[s];return typeof a!="function"?a:async(...o)=>{try{return{data:await a.apply(r,o),error:null}}catch(l){if(i)throw l;return{data:null,error:l}}}}})}},Vx=class extends ns{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=we(we({},Xs),{},{"Content-Type":"application/json"},e);super(i,r,t,"vectors")}async createIndex(n){var e=this;return e.handleOperation(async()=>await Xt.post(e.fetch,`${e.url}/CreateIndex`,n,{headers:e.headers})||{})}async getIndex(n,e){var t=this;return t.handleOperation(async()=>await Xt.post(t.fetch,`${t.url}/GetIndex`,{vectorBucketName:n,indexName:e},{headers:t.headers}))}async listIndexes(n){var e=this;return e.handleOperation(async()=>await Xt.post(e.fetch,`${e.url}/ListIndexes`,n,{headers:e.headers}))}async deleteIndex(n,e){var t=this;return t.handleOperation(async()=>await Xt.post(t.fetch,`${t.url}/DeleteIndex`,{vectorBucketName:n,indexName:e},{headers:t.headers})||{})}},Gx=class extends ns{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=we(we({},Xs),{},{"Content-Type":"application/json"},e);super(i,r,t,"vectors")}async putVectors(n){var e=this;if(n.vectors.length<1||n.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Xt.post(e.fetch,`${e.url}/PutVectors`,n,{headers:e.headers})||{})}async getVectors(n){var e=this;return e.handleOperation(async()=>await Xt.post(e.fetch,`${e.url}/GetVectors`,n,{headers:e.headers}))}async listVectors(n){var e=this;if(n.segmentCount!==void 0){if(n.segmentCount<1||n.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(n.segmentIndex!==void 0&&(n.segmentIndex<0||n.segmentIndex>=n.segmentCount))throw new Error(`segmentIndex must be between 0 and ${n.segmentCount-1}`)}return e.handleOperation(async()=>await Xt.post(e.fetch,`${e.url}/ListVectors`,n,{headers:e.headers}))}async queryVectors(n){var e=this;return e.handleOperation(async()=>await Xt.post(e.fetch,`${e.url}/QueryVectors`,n,{headers:e.headers}))}async deleteVectors(n){var e=this;if(n.keys.length<1||n.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Xt.post(e.fetch,`${e.url}/DeleteVectors`,n,{headers:e.headers})||{})}},Wx=class extends ns{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=we(we({},Xs),{},{"Content-Type":"application/json"},e);super(i,r,t,"vectors")}async createBucket(n){var e=this;return e.handleOperation(async()=>await Xt.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:n},{headers:e.headers})||{})}async getBucket(n){var e=this;return e.handleOperation(async()=>await Xt.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:n},{headers:e.headers}))}async listBuckets(n={}){var e=this;return e.handleOperation(async()=>await Xt.post(e.fetch,`${e.url}/ListVectorBuckets`,n,{headers:e.headers}))}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await Xt.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:n},{headers:e.headers})||{})}},$x=class extends Wx{constructor(n,e={}){super(n,e.headers||{},e.fetch)}from(n){return new jx(this.url,this.headers,n,this.fetch)}async createBucket(n){var e=()=>super.createBucket,t=this;return e().call(t,n)}async getBucket(n){var e=()=>super.getBucket,t=this;return e().call(t,n)}async listBuckets(n={}){var e=()=>super.listBuckets,t=this;return e().call(t,n)}async deleteBucket(n){var e=()=>super.deleteBucket,t=this;return e().call(t,n)}},jx=class extends Vx{constructor(n,e,t,i){super(n,e,i),this.vectorBucketName=t}async createIndex(n){var e=()=>super.createIndex,t=this;return e().call(t,we(we({},n),{},{vectorBucketName:t.vectorBucketName}))}async listIndexes(n={}){var e=()=>super.listIndexes,t=this;return e().call(t,we(we({},n),{},{vectorBucketName:t.vectorBucketName}))}async getIndex(n){var e=()=>super.getIndex,t=this;return e().call(t,t.vectorBucketName,n)}async deleteIndex(n){var e=()=>super.deleteIndex,t=this;return e().call(t,t.vectorBucketName,n)}index(n){return new qx(this.url,this.headers,this.vectorBucketName,n,this.fetch)}},qx=class extends Gx{constructor(n,e,t,i,r){super(n,e,r),this.vectorBucketName=t,this.indexName=i}async putVectors(n){var e=()=>super.putVectors,t=this;return e().call(t,we(we({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async getVectors(n){var e=()=>super.getVectors,t=this;return e().call(t,we(we({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async listVectors(n={}){var e=()=>super.listVectors,t=this;return e().call(t,we(we({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async queryVectors(n){var e=()=>super.queryVectors,t=this;return e().call(t,we(we({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async deleteVectors(n){var e=()=>super.deleteVectors,t=this;return e().call(t,we(we({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}},Xx=class extends zx{constructor(n,e={},t,i){super(n,e,t,i)}from(n){return new Fx(this.url,this.headers,n,this.fetch)}get vectors(){return new $x(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new Hx(this.url+"/iceberg",this.headers,this.fetch)}};const Jf="2.108.1",bi=30*1e3,xs=3,tl=xs*bi,Kx="http://localhost:9999",Yx="supabase.auth.token",Jx={"X-Client-Info":`gotrue-js/${Jf}`},Nc="X-Supabase-Api-Version",Zf={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Zx=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Qx=600*1e3;class Os extends Error{constructor(e,t,i){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=i}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function ne(n){return typeof n=="object"&&n!==null&&"__isAuthError"in n}class eb extends Os{constructor(e,t,i){super(e,t,i),this.name="AuthApiError",this.status=t,this.code=i}}function tb(n){return ne(n)&&n.name==="AuthApiError"}class gn extends Os{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class On extends Os{constructor(e,t,i,r){super(e,i,r),this.name=t,this.status=i}}class Et extends On{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Ma(n){return ne(n)&&n.name==="AuthSessionMissingError"}class Tr extends On{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Aa extends On{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Ra extends On{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function nb(n){return ne(n)&&n.name==="AuthImplicitGrantRedirectError"}class $h extends On{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class ib extends On{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Oc extends On{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function nl(n){return ne(n)&&n.name==="AuthRetryableFetchError"}class jh extends On{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function rb(n){return ne(n)&&n.name==="AuthRefreshDiscardedError"}class qh extends On{constructor(e,t,i){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=i}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class io extends On{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const ro="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Xh=` 	
\r=`.split(""),sb=(()=>{const n=new Array(128);for(let e=0;e<n.length;e+=1)n[e]=-1;for(let e=0;e<Xh.length;e+=1)n[Xh[e].charCodeAt(0)]=-2;for(let e=0;e<ro.length;e+=1)n[ro[e].charCodeAt(0)]=e;return n})();function Kh(n,e,t){if(n!==null)for(e.queue=e.queue<<8|n,e.queuedBits+=8;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;t(ro[i]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;t(ro[i]),e.queuedBits-=6}}function Qf(n,e,t){const i=sb[n];if(i>-1)for(e.queue=e.queue<<6|i,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(i===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`)}}function Yh(n){const e=[],t=a=>{e.push(String.fromCodePoint(a))},i={utf8seq:0,codepoint:0},r={queue:0,queuedBits:0},s=a=>{lb(a,i,t)};for(let a=0;a<n.length;a+=1)Qf(n.charCodeAt(a),r,s);return e.join("")}function ab(n,e){if(n<=127){e(n);return}else if(n<=2047){e(192|n>>6),e(128|n&63);return}else if(n<=65535){e(224|n>>12),e(128|n>>6&63),e(128|n&63);return}else if(n<=1114111){e(240|n>>18),e(128|n>>12&63),e(128|n>>6&63),e(128|n&63);return}throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`)}function ob(n,e){for(let t=0;t<n.length;t+=1){let i=n.charCodeAt(t);if(i>55295&&i<=56319){const r=(i-55296)*1024&65535;i=(n.charCodeAt(t+1)-56320&65535|r)+65536,t+=1}ab(i,e)}}function lb(n,e,t){if(e.utf8seq===0){if(n<=127){t(n);return}for(let i=1;i<6;i+=1)if((n>>7-i&1)===0){e.utf8seq=i;break}if(e.utf8seq===2)e.codepoint=n&31;else if(e.utf8seq===3)e.codepoint=n&15;else if(e.utf8seq===4)e.codepoint=n&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(n<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|n&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function Wr(n){const e=[],t={queue:0,queuedBits:0},i=r=>{e.push(r)};for(let r=0;r<n.length;r+=1)Qf(n.charCodeAt(r),t,i);return new Uint8Array(e)}function cb(n){const e=[];return ob(n,t=>e.push(t)),new Uint8Array(e)}function Qi(n){const e=[],t={queue:0,queuedBits:0},i=r=>{e.push(r)};return n.forEach(r=>Kh(r,t,i)),Kh(null,t,i),e.join("")}function ub(n){return Math.round(Date.now()/1e3)+n}function hb(){return Symbol("auth-callback")}const Ct=()=>typeof window<"u"&&typeof document<"u",Bi={tested:!1,writable:!1},ep=()=>{if(!Ct())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Bi.tested)return Bi.writable;const n=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(n,n),globalThis.localStorage.removeItem(n),Bi.tested=!0,Bi.writable=!0}catch{Bi.tested=!0,Bi.writable=!1}return Bi.writable};function db(n){const e={},t=new URL(n);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((r,s)=>{e[s]=r})}catch{}return t.searchParams.forEach((i,r)=>{e[r]=i}),e}const tp=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),fb=n=>typeof n=="object"&&n!==null&&"status"in n&&"ok"in n&&"json"in n&&typeof n.json=="function",Pr=async(n,e,t)=>{await n.setItem(e,JSON.stringify(t))},Wn=async(n,e)=>{const t=await n.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return null}},mt=async(n,e)=>{await n.removeItem(e)};class yo{constructor(){this.promise=new yo.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}yo.promiseConstructor=Promise;function Ca(n){const e=n.split(".");if(e.length!==3)throw new io("Invalid JWT structure");for(let i=0;i<e.length;i++)if(!Zx.test(e[i]))throw new io("JWT not in base64url format");return{header:JSON.parse(Yh(e[0])),payload:JSON.parse(Yh(e[1])),signature:Wr(e[2]),raw:{header:e[0],payload:e[1]}}}async function pb(n){return await new Promise(e=>{setTimeout(()=>e(null),n)})}function mb(n,e){return new Promise((i,r)=>{(async()=>{for(let s=0;s<1/0;s++)try{const a=await n(s);if(!e(s,null,a)){i(a);return}}catch(a){if(!e(s,a)){r(a);return}}})()})}function gb(n){return("0"+n.toString(16)).substr(-2)}function _b(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",i=t.length;let r="";for(let s=0;s<56;s++)r+=t.charAt(Math.floor(Math.random()*i));return r}return crypto.getRandomValues(e),Array.from(e,gb).join("")}async function vb(n){const t=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",t),r=new Uint8Array(i);return Array.from(r).map(s=>String.fromCharCode(s)).join("")}async function yb(n){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),n;const t=await vb(n);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function zi(n,e,t=!1){const i=_b();let r=i;t&&(r+="/recovery"),await Pr(n,`${e}-code-verifier`,r);const s=await yb(i);return[s,i===s?"plain":"s256"]}const Sb=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function xb(n){const e=n.headers.get(Nc);if(!e||!e.match(Sb))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function bb(n){if(!n)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(n<=e)throw new Error("JWT has expired")}function Eb(n){switch(n){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const wb=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function $n(n){if(!wb.test(n))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function un(n){if(!n.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function il(){const n={};return new Proxy(n,{get:(e,t)=>{if(t==="__isUserNotAvailableProxy")return!0;if(typeof t=="symbol"){const i=t.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Tb(n,e){return new Proxy(n,{get:(t,i,r)=>{if(i==="__isInsecureUserWarningProxy")return!0;if(typeof i=="symbol"){const s=i.toString();if(s==="Symbol(Symbol.toPrimitive)"||s==="Symbol(Symbol.toStringTag)"||s==="Symbol(util.inspect.custom)"||s==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(t,i,r)}return!e.value&&typeof i=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(t,i,r)}})}function Jh(n){return JSON.parse(JSON.stringify(n))}const $i=n=>{if(typeof n=="object"&&n!==null){const e=n;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(n)},Mb=[502,503,504,520,521,522,523,524,530];async function Zh(n){var e;if(!fb(n))throw new Oc($i(n),0);if(Mb.includes(n.status))throw new Oc($i(n),n.status);let t;try{t=await n.json()}catch(s){throw new gn($i(s),s)}let i;const r=xb(n);if(r&&r.getTime()>=Zf["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?i=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(i=t.error_code),i){if(i==="weak_password")throw new qh($i(t),n.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(i==="session_not_found")throw new Et}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((s,a)=>s&&typeof a=="string",!0))throw new qh($i(t),n.status,t.weak_password.reasons);throw new eb($i(t),n.status||500,i)}const Ab=(n,e,t,i)=>{const r={method:n,headers:(e==null?void 0:e.headers)||{}};return n==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),r.body=JSON.stringify(i),Object.assign(Object.assign({},r),t))};async function de(n,e,t,i){var r;const s=Object.assign({},i==null?void 0:i.headers);s[Nc]||(s[Nc]=Zf["2024-01-01"].name),i!=null&&i.jwt&&(s.Authorization=`Bearer ${i.jwt}`);const a=(r=i==null?void 0:i.query)!==null&&r!==void 0?r:{};i!=null&&i.redirectTo&&(a.redirect_to=i.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await Rb(n,e,t+o,{headers:s,noResolveJson:i==null?void 0:i.noResolveJson},{},i==null?void 0:i.body);return i!=null&&i.xform?i==null?void 0:i.xform(l):{data:Object.assign({},l),error:null}}async function Rb(n,e,t,i,r,s){const a=Ab(e,i,r,s);let o;try{o=await n(t,Object.assign({},a))}catch(l){throw console.error(l),new Oc($i(l),0)}if(o.ok||await Zh(o),i!=null&&i.noResolveJson)return o;try{return await o.json()}catch(l){await Zh(l)}}function Zt(n){var e;let t=null;Ib(n)&&(t=Object.assign({},n),n.expires_at||(t.expires_at=ub(n.expires_in)));const i=(e=n.user)!==null&&e!==void 0?e:typeof(n==null?void 0:n.id)=="string"?n:null;return{data:{session:t,user:i},error:null}}function Qh(n){const e=Zt(n);return!e.error&&n.weak_password&&typeof n.weak_password=="object"&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.message&&typeof n.weak_password.message=="string"&&n.weak_password.reasons.reduce((t,i)=>t&&typeof i=="string",!0)&&(e.data.weak_password=n.weak_password),e}function Ti(n){var e;return{data:{user:(e=n.user)!==null&&e!==void 0?e:n},error:null}}function Cb(n){return{data:n,error:null}}function Pb(n){const{action_link:e,email_otp:t,hashed_token:i,redirect_to:r,verification_type:s}=n,a=go(n,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:t,hashed_token:i,redirect_to:r,verification_type:s},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function ed(n){return n}function Ib(n){return!!n.access_token&&!!n.refresh_token&&!!n.expires_in}const rl=["global","local","others"];class Lb{constructor({url:e="",headers:t={},fetch:i,experimental:r}){this.url=e,this.headers=t,this.fetch=tp(i),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=rl[0]){if(rl.indexOf(t)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${rl.join(", ")}`);try{return await de(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(i){if(ne(i))return{data:null,error:i};throw i}}async inviteUserByEmail(e,t={}){try{return await de(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:Ti})}catch(i){if(ne(i))return{data:{user:null},error:i};throw i}}async generateLink(e){try{const{options:t}=e,i=go(e,["options"]),r=Object.assign(Object.assign({},i),t);return"newEmail"in i&&(r.new_email=i==null?void 0:i.newEmail,delete r.newEmail),await de(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:Pb,redirectTo:t==null?void 0:t.redirectTo})}catch(t){if(ne(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await de(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Ti})}catch(t){if(ne(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,i,r,s,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await de(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&i!==void 0?i:"",per_page:(s=(r=e==null?void 0:e.perPage)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:""},xform:ed});if(u.error)throw u.error;const h=await u.json(),d=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(g=>{const _=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),m=JSON.parse(g.split(";")[1].split("=")[1]);c[`${m}Page`]=_}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(ne(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){$n(e);try{return await de(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Ti})}catch(t){if(ne(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){$n(e);try{return await de(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:Ti})}catch(i){if(ne(i))return{data:{user:null},error:i};throw i}}async deleteUser(e,t=!1){$n(e);try{return await de(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:Ti})}catch(i){if(ne(i))return{data:{user:null},error:i};throw i}}async _listFactors(e){$n(e.userId);try{const{data:t,error:i}=await de(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:r=>({data:{factors:r},error:null})});return{data:t,error:i}}catch(t){if(ne(t))return{data:null,error:t};throw t}}async _deleteFactor(e){$n(e.userId),$n(e.id);try{return{data:await de(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(ne(t))return{data:null,error:t};throw t}}async _listOAuthClients(e){var t,i,r,s,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await de(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&i!==void 0?i:"",per_page:(s=(r=e==null?void 0:e.perPage)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:""},xform:ed});if(u.error)throw u.error;const h=await u.json(),d=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(g=>{const _=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),m=JSON.parse(g.split(";")[1].split("=")[1]);c[`${m}Page`]=_}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(ne(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await de(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ne(t))return{data:null,error:t};throw t}}async _getOAuthClient(e){try{return await de(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ne(t))return{data:null,error:t};throw t}}async _updateOAuthClient(e,t){try{return await de(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _deleteOAuthClient(e){try{return await de(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(ne(t))return{data:null,error:t};throw t}}async _regenerateOAuthClientSecret(e){try{return await de(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ne(t))return{data:null,error:t};throw t}}async _listCustomProviders(e){try{const t={};return e!=null&&e.type&&(t.type=e.type),await de(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:i=>{var r;return{data:{providers:(r=i==null?void 0:i.providers)!==null&&r!==void 0?r:[]},error:null}}})}catch(t){if(ne(t))return{data:{providers:[]},error:t};throw t}}async _createCustomProvider(e){try{return await de(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ne(t))return{data:null,error:t};throw t}}async _getCustomProvider(e){try{return await de(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ne(t))return{data:null,error:t};throw t}}async _updateCustomProvider(e,t){try{return await de(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _deleteCustomProvider(e){try{return await de(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(ne(t))return{data:null,error:t};throw t}}async _adminListPasskeys(e){un(this.experimental),$n(e.userId);try{return await de(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ne(t))return{data:null,error:t};throw t}}async _adminDeletePasskey(e){un(this.experimental),$n(e.userId),$n(e.passkeyId);try{return await de(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(ne(t))return{data:null,error:t};throw t}}}function td(n={}){return{getItem:e=>n[e]||null,setItem:(e,t)=>{n[e]=t},removeItem:e=>{delete n[e]}}}globalThis&&ep()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class Db extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function Ub(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function np(n){if(!/^0x[a-fA-F0-9]{40}$/.test(n))throw new Error(`@supabase/auth-js: Address "${n}" is invalid.`);return n.toLowerCase()}function Nb(n){return parseInt(n,16)}function Ob(n){const e=new TextEncoder().encode(n);return"0x"+Array.from(e,i=>i.toString(16).padStart(2,"0")).join("")}function kb(n){var e;const{chainId:t,domain:i,expirationTime:r,issuedAt:s=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:u,uri:h,version:d}=n;{if(!Number.isInteger(t))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!i)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!h)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(d!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(!((e=n.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${n.statement}`)}const f=np(n.address),g=u?`${u}://${i}`:i,_=n.statement?`${n.statement}
`:"",m=`${g} wants you to sign in with your Ethereum account:
${f}

${_}`;let p=`URI: ${h}
Version: ${d}
Chain ID: ${t}${a?`
Nonce: ${a}`:""}
Issued At: ${s.toISOString()}`;if(r&&(p+=`
Expiration Time: ${r.toISOString()}`),o&&(p+=`
Not Before: ${o.toISOString()}`),l&&(p+=`
Request ID: ${l}`),c){let w=`
Resources:`;for(const x of c){if(!x||typeof x!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${x}`);w+=`
- ${x}`}p+=w}return`${m}
${p}`}class yt extends Error{constructor({message:e,code:t,cause:i,name:r}){var s;super(e,{cause:i}),this.__isWebAuthnError=!0,this.name=(s=r??(i instanceof Error?i.name:void 0))!==null&&s!==void 0?s:"Unknown Error",this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class so extends yt{constructor(e,t){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t,message:e}),this.name="WebAuthnUnknownError",this.originalError=t}}function Fb({error:n,options:e}){var t,i,r;const{publicKey:s}=e;if(!s)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(e.signal instanceof AbortSignal)return new yt({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else if(n.name==="ConstraintError"){if(((t=s.authenticatorSelection)===null||t===void 0?void 0:t.requireResidentKey)===!0)return new yt({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:n});if(e.mediation==="conditional"&&((i=s.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new yt({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:n});if(((r=s.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new yt({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:n})}else{if(n.name==="InvalidStateError")return new yt({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:n});if(n.name==="NotAllowedError")return new yt({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="NotSupportedError")return s.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new yt({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:n}):new yt({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:n});if(n.name==="SecurityError"){const a=window.location.hostname;if(ip(a)){if(s.rp.id!==a)return new yt({message:`The RP ID "${s.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new yt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="TypeError"){if(s.user.id.byteLength<1||s.user.id.byteLength>64)return new yt({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:n})}else if(n.name==="UnknownError")return new yt({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new yt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}function Bb({error:n,options:e}){const{publicKey:t}=e;if(!t)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(e.signal instanceof AbortSignal)return new yt({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else{if(n.name==="NotAllowedError")return new yt({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="SecurityError"){const i=window.location.hostname;if(ip(i)){if(t.rpId!==i)return new yt({message:`The RP ID "${t.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new yt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="UnknownError")return new yt({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new yt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}class zb{createNewAbortSignal(){if(this.controller){const t=new Error("Cancelling existing WebAuthn API call for new one");t.name="AbortError",this.controller.abort(t)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const kc=new zb;function nd(n){if(!n)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(n);const{challenge:e,user:t,excludeCredentials:i}=n,r=go(n,["challenge","user","excludeCredentials"]),s=Wr(e).buffer,a=Object.assign(Object.assign({},t),{id:Wr(t.id).buffer}),o=Object.assign(Object.assign({},r),{challenge:s,user:a});if(i&&i.length>0){o.excludeCredentials=new Array(i.length);for(let l=0;l<i.length;l++){const c=i[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:Wr(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function id(n){if(!n)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(n);const{challenge:e,allowCredentials:t}=n,i=go(n,["challenge","allowCredentials"]),r=Wr(e).buffer,s=Object.assign(Object.assign({},i),{challenge:r});if(t&&t.length>0){s.allowCredentials=new Array(t.length);for(let a=0;a<t.length;a++){const o=t[a];s.allowCredentials[a]=Object.assign(Object.assign({},o),{id:Wr(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return s}function rd(n){var e;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const t=n;return{id:n.id,rawId:n.id,response:{attestationObject:Qi(new Uint8Array(n.response.attestationObject)),clientDataJSON:Qi(new Uint8Array(n.response.clientDataJSON))},type:"public-key",clientExtensionResults:n.getClientExtensionResults(),authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function sd(n){var e;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const t=n,i=n.getClientExtensionResults(),r=n.response;return{id:n.id,rawId:n.id,response:{authenticatorData:Qi(new Uint8Array(r.authenticatorData)),clientDataJSON:Qi(new Uint8Array(r.clientDataJSON)),signature:Qi(new Uint8Array(r.signature)),userHandle:r.userHandle?Qi(new Uint8Array(r.userHandle)):void 0},type:"public-key",clientExtensionResults:i,authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function ip(n){return n==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(n)}function ao(){var n,e;return!!(Ct()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((n=navigator==null?void 0:navigator.credentials)===null||n===void 0?void 0:n.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function rp(n){try{const e=await navigator.credentials.create(n);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new so("Browser returned unexpected credential type",e)}:{data:null,error:new so("Empty credential response",e)}}catch(e){return{data:null,error:Fb({error:e,options:n})}}}async function sp(n){try{const e=await navigator.credentials.get(n);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new so("Browser returned unexpected credential type",e)}:{data:null,error:new so("Empty credential response",e)}}catch(e){return{data:null,error:Bb({error:e,options:n})}}}const Hb={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Vb={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function oo(...n){const e=r=>r!==null&&typeof r=="object"&&!Array.isArray(r),t=r=>r instanceof ArrayBuffer||ArrayBuffer.isView(r),i={};for(const r of n)if(r)for(const s in r){const a=r[s];if(a!==void 0)if(Array.isArray(a))i[s]=a;else if(t(a))i[s]=a;else if(e(a)){const o=i[s];e(o)?i[s]=oo(o,a):i[s]=oo(a)}else i[s]=a}return i}function Gb(n,e){return oo(Hb,n,e||{})}function Wb(n,e){return oo(Vb,n,e||{})}class $b{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:t,friendlyName:i,signal:r},s){var a;try{const{data:o,error:l}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!o)return{data:null,error:l};const c=r??kc.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:u}=o.webauthn.credential_options.publicKey;if(!u.name){const h=i;if(h)u.name=`${u.id}:${h}`;else{const f=(await this.client.getUser()).data.user,g=((a=f==null?void 0:f.user_metadata)===null||a===void 0?void 0:a.name)||(f==null?void 0:f.email)||(f==null?void 0:f.id)||"User";u.name=`${u.id}:${g}`}}u.displayName||(u.displayName=u.name)}switch(o.webauthn.type){case"create":{const u=Gb(o.webauthn.credential_options.publicKey,s==null?void 0:s.create),{data:h,error:d}=await rp({publicKey:u,signal:c});return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:d}}case"request":{const u=Wb(o.webauthn.credential_options.publicKey,s==null?void 0:s.request),{data:h,error:d}=await sp(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:u,signal:c}));return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:d}}}}catch(o){return ne(o)?{data:null,error:o}:{data:null,error:new gn("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:t,webauthn:i}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:i})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},s){if(!t)return{data:null,error:new Os("rpId is required for WebAuthn authentication")};try{if(!ao())return{data:null,error:new gn("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:i},signal:r},{request:s});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:t,rpOrigins:i,credential_response:l.credential_response}})}catch(a){return ne(a)?{data:null,error:a}:{data:null,error:new gn("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},s){if(!t)return{data:null,error:new Os("rpId is required for WebAuthn registration")};try{if(!ao())return{data:null,error:new gn("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(u=>{var h;return(h=u.data)===null||h===void 0?void 0:h.all.find(d=>d.factor_type==="webauthn"&&d.friendly_name===e&&d.status!=="unverified")}).then(u=>u?this.client.mfa.unenroll({factorId:u==null?void 0:u.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:i},signal:r},{create:s});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:t,rpOrigins:i,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return ne(a)?{data:null,error:a}:{data:null,error:new gn("Unexpected error in register",a)}}}}Ub();const jb={url:Kx,storageKey:Yx,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Jx,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},Mr={};class ks{get jwks(){var e,t;return(t=(e=Mr[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){Mr[this.storageKey]=Object.assign(Object.assign({},Mr[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=Mr[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){Mr[this.storageKey]=Object.assign(Object.assign({},Mr[this.storageKey]),{cachedAt:e})}constructor(e){var t,i,r;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const s=Object.assign(Object.assign({},jb),e);if(this.storageKey=s.storageKey,this.instanceID=(t=ks.nextInstanceID[this.storageKey])!==null&&t!==void 0?t:0,ks.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.instanceID>0&&Ct()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=s.persistSession,this.autoRefreshToken=s.autoRefreshToken,this.experimental=(i=s.experimental)!==null&&i!==void 0?i:{},this.admin=new Lb({url:s.url,headers:s.headers,fetch:s.fetch,experimental:this.experimental}),this.url=s.url,this.headers=s.headers,this.fetch=tp(s.fetch),this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,this.throwOnError=s.throwOnError,this.lockAcquireTimeout=s.lockAcquireTimeout,s.lock!=null&&(this.lock=s.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new $b(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(s.storage?this.storage=s.storage:ep()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=td(this.memoryStorage)),s.userStorage&&(this.userStorage=s.userStorage)):(this.memoryStorage={},this.storage=td(this.memoryStorage)),Ct()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(r=this.broadcastChannel)===null||r===void 0||r.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a);try{await this._notifyAllSubscribers(a.data.event,a.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}s.skipAutoInitialize||this.initialize().catch(a=>{this._debug("#initialize()","error",a)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Jf}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var e;try{let t={},i="none";if(Ct()&&(t=db(window.location.href),this._isImplicitGrantCallback(t)?i="implicit":await this._isPKCECallback(t)&&(i="pkce")),Ct()&&this.detectSessionInUrl&&i!=="none"){const{data:r,error:s}=await this._getSessionFromURL(t,i);if(s){if(this._debug("#_initialize()","error detecting session from URL",s),nb(s)){const l=(e=s.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:s}}return{error:s}}const{session:a,redirectType:o}=r;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return ne(t)?this._returnResult({error:t}):this._returnResult({error:new gn("Unexpected error during initialization",t)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,i,r;try{const s=await de(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(i=(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.captchaToken}},xform:Zt}),{data:a,error:o}=s;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(s){if(ne(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signUp(e){var t,i,r;try{let s;if("email"in e){const{email:u,password:h,options:d}=e;let f=null,g=null;this.flowType==="pkce"&&([f,g]=await zi(this.storage,this.storageKey)),s=await de(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:d==null?void 0:d.emailRedirectTo,body:{email:u,password:h,data:(t=d==null?void 0:d.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken},code_challenge:f,code_challenge_method:g},xform:Zt})}else if("phone"in e){const{phone:u,password:h,options:d}=e;s=await de(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:h,data:(i=d==null?void 0:d.data)!==null&&i!==void 0?i:{},channel:(r=d==null?void 0:d.channel)!==null&&r!==void 0?r:"sms",gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken}},xform:Zt})}else throw new Aa("You must provide either an email or phone number and a password");const{data:a,error:o}=s;if(o||!a)return await mt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(s){if(await mt(this.storage,`${this.storageKey}-code-verifier`),ne(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithPassword(e){try{let t;if("email"in e){const{email:s,password:a,options:o}=e;t=await de(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Qh})}else if("phone"in e){const{phone:s,password:a,options:o}=e;t=await de(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Qh})}else throw new Aa("You must provide either an email or phone number and a password");const{data:i,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!i||!i.session||!i.user){const s=new Tr;return this._returnResult({data:{user:null,session:null},error:s})}return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),this._returnResult({data:Object.assign({user:i.user,session:i.session},i.weak_password?{weakPassword:i.weak_password}:null),error:r})}catch(t){if(ne(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOAuth(e){var t,i,r,s;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(i=e.options)===null||i===void 0?void 0:i.scopes,queryParams:(r=e.options)===null||r===void 0?void 0:r.queryParams,skipBrowserRedirect:(s=e.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){const{chain:t}=e;switch(t){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){var t,i,r,s,a,o,l,c,u,h,d;let f,g;if("message"in e)f=e.message,g=e.signature;else{const{chain:_,wallet:m,statement:p,options:w}=e;let x;if(Ct())if(typeof m=="object")x=m;else{const b=window;if("ethereum"in b&&typeof b.ethereum=="object"&&"request"in b.ethereum&&typeof b.ethereum.request=="function")x=b.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof m!="object"||!(w!=null&&w.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");x=m}const S=new URL((t=w==null?void 0:w.url)!==null&&t!==void 0?t:window.location.href),O=await x.request({method:"eth_requestAccounts"}).then(b=>b).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!O||O.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const A=np(O[0]);let M=(i=w==null?void 0:w.signInWithEthereum)===null||i===void 0?void 0:i.chainId;if(!M){const b=await x.request({method:"eth_chainId"});M=Nb(b)}const C={domain:S.host,address:A,statement:p,uri:S.href,version:"1",chainId:M,nonce:(r=w==null?void 0:w.signInWithEthereum)===null||r===void 0?void 0:r.nonce,issuedAt:(a=(s=w==null?void 0:w.signInWithEthereum)===null||s===void 0?void 0:s.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=w==null?void 0:w.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=w==null?void 0:w.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=w==null?void 0:w.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(u=w==null?void 0:w.signInWithEthereum)===null||u===void 0?void 0:u.resources};f=kb(C),g=await x.request({method:"personal_sign",params:[Ob(f),A]})}try{const{data:_,error:m}=await de(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:f,signature:g},!((h=e.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(d=e.options)===null||d===void 0?void 0:d.captchaToken}}:null),xform:Zt});if(m)throw m;if(!_||!_.session||!_.user){const p=new Tr;return this._returnResult({data:{user:null,session:null},error:p})}return _.session&&(await this._saveSession(_.session),await this._notifyAllSubscribers("SIGNED_IN",_.session)),this._returnResult({data:Object.assign({},_),error:m})}catch(_){if(ne(_))return this._returnResult({data:{user:null,session:null},error:_});throw _}}async signInWithSolana(e){var t,i,r,s,a,o,l,c,u,h,d,f;let g,_;if("message"in e)g=e.message,_=e.signature;else{const{chain:m,wallet:p,statement:w,options:x}=e;let S;if(Ct())if(typeof p=="object")S=p;else{const A=window;if("solana"in A&&typeof A.solana=="object"&&("signIn"in A.solana&&typeof A.solana.signIn=="function"||"signMessage"in A.solana&&typeof A.solana.signMessage=="function"))S=A.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof p!="object"||!(x!=null&&x.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");S=p}const O=new URL((t=x==null?void 0:x.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in S&&S.signIn){const A=await S.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},x==null?void 0:x.signInWithSolana),{version:"1",domain:O.host,uri:O.href}),w?{statement:w}:null));let M;if(Array.isArray(A)&&A[0]&&typeof A[0]=="object")M=A[0];else if(A&&typeof A=="object"&&"signedMessage"in A&&"signature"in A)M=A;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in M&&"signature"in M&&(typeof M.signedMessage=="string"||M.signedMessage instanceof Uint8Array)&&M.signature instanceof Uint8Array)g=typeof M.signedMessage=="string"?M.signedMessage:new TextDecoder().decode(M.signedMessage),_=M.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in S)||typeof S.signMessage!="function"||!("publicKey"in S)||typeof S!="object"||!S.publicKey||!("toBase58"in S.publicKey)||typeof S.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");g=[`${O.host} wants you to sign in with your Solana account:`,S.publicKey.toBase58(),...w?["",w,""]:[""],"Version: 1",`URI: ${O.href}`,`Issued At: ${(r=(i=x==null?void 0:x.signInWithSolana)===null||i===void 0?void 0:i.issuedAt)!==null&&r!==void 0?r:new Date().toISOString()}`,...!((s=x==null?void 0:x.signInWithSolana)===null||s===void 0)&&s.notBefore?[`Not Before: ${x.signInWithSolana.notBefore}`]:[],...!((a=x==null?void 0:x.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${x.signInWithSolana.expirationTime}`]:[],...!((o=x==null?void 0:x.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${x.signInWithSolana.chainId}`]:[],...!((l=x==null?void 0:x.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${x.signInWithSolana.nonce}`]:[],...!((c=x==null?void 0:x.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${x.signInWithSolana.requestId}`]:[],...!((h=(u=x==null?void 0:x.signInWithSolana)===null||u===void 0?void 0:u.resources)===null||h===void 0)&&h.length?["Resources",...x.signInWithSolana.resources.map(M=>`- ${M}`)]:[]].join(`
`);const A=await S.signMessage(new TextEncoder().encode(g),"utf8");if(!A||!(A instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");_=A}}try{const{data:m,error:p}=await de(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:g,signature:Qi(_)},!((d=e.options)===null||d===void 0)&&d.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:Zt});if(p)throw p;if(!m||!m.session||!m.user){const w=new Tr;return this._returnResult({data:{user:null,session:null},error:w})}return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),this._returnResult({data:Object.assign({},m),error:p})}catch(m){if(ne(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async _exchangeCodeForSession(e){const t=await Wn(this.storage,`${this.storageKey}-code-verifier`),[i,r]=(t??"").split("/");try{if(!i&&this.flowType==="pkce")throw new ib;const{data:s,error:a}=await de(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:i},xform:Zt});if(await mt(this.storage,`${this.storageKey}-code-verifier`),a)throw a;if(!s||!s.session||!s.user){const o=new Tr;return this._returnResult({data:{user:null,session:null,redirectType:null},error:o})}return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers(r==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",s.session)),this._returnResult({data:Object.assign(Object.assign({},s),{redirectType:r??null}),error:a})}catch(s){if(await mt(this.storage,`${this.storageKey}-code-verifier`),ne(s))return this._returnResult({data:{user:null,session:null,redirectType:null},error:s});throw s}}async signInWithIdToken(e){try{const{options:t,provider:i,token:r,access_token:s,nonce:a}=e,o=await de(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:i,id_token:r,access_token:s,nonce:a,gotrue_meta_security:{captcha_token:t==null?void 0:t.captchaToken}},xform:Zt}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const u=new Tr;return this._returnResult({data:{user:null,session:null},error:u})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(t){if(ne(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOtp(e){var t,i,r,s,a;try{if("email"in e){const{email:o,options:l}=e;let c=null,u=null;this.flowType==="pkce"&&([c,u]=await zi(this.storage,this.storageKey));const{error:h}=await de(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(t=l==null?void 0:l.data)!==null&&t!==void 0?t:{},create_user:(i=l==null?void 0:l.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:c,code_challenge_method:u},redirectTo:l==null?void 0:l.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:h})}if("phone"in e){const{phone:o,options:l}=e,{data:c,error:u}=await de(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(r=l==null?void 0:l.data)!==null&&r!==void 0?r:{},create_user:(s=l==null?void 0:l.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(a=l==null?void 0:l.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:u})}throw new Aa("You must provide either an email or phone number.")}catch(o){if(await mt(this.storage,`${this.storageKey}-code-verifier`),ne(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async verifyOtp(e){var t,i;try{let r,s;"options"in e&&(r=(t=e.options)===null||t===void 0?void 0:t.redirectTo,s=(i=e.options)===null||i===void 0?void 0:i.captchaToken);const{data:a,error:o}=await de(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:s}}),redirectTo:r,xform:Zt});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(r){if(ne(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithSSO(e){var t,i,r,s,a;try{let o=null,l=null;this.flowType==="pkce"&&([o,l]=await zi(this.storage,this.storageKey));const c=await de(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(i=(t=e.options)===null||t===void 0?void 0:t.redirectTo)!==null&&i!==void 0?i:void 0}),!((r=e==null?void 0:e.options)===null||r===void 0)&&r.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:Cb});return!((s=c.data)===null||s===void 0)&&s.url&&Ct()&&!(!((a=e.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(await mt(this.storage,`${this.storageKey}-code-verifier`),ne(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;if(i)throw i;if(!t)throw new Et;const{error:r}=await de(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(ne(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const t=`${this.url}/resend`;if("email"in e){const{email:i,type:r,options:s}=e;let a=null,o=null;this.flowType==="pkce"&&([a,o]=await zi(this.storage,this.storageKey));const{error:l}=await de(this.fetch,"POST",t,{headers:this.headers,body:{email:i,type:r,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken},code_challenge:a,code_challenge_method:o},redirectTo:s==null?void 0:s.emailRedirectTo});return l&&await mt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:l})}else if("phone"in e){const{phone:i,type:r,options:s}=e,{data:a,error:o}=await de(this.fetch,"POST",t,{headers:this.headers,body:{phone:i,type:r,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a==null?void 0:a.message_id},error:o})}throw new Aa("You must provide either an email or phone number and a type")}catch(t){if(await mt(this.storage,`${this.storageKey}-code-verifier`),ne(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const i=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),r=(async()=>(await i,await t()))();return this.pendingInLock.push((async()=>{try{await r}catch{}})()),r}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const i=t();for(this.pendingInLock.push((async()=>{try{await i}catch{}})()),await i;this.pendingInLock.length;){const r=[...this.pendingInLock];await Promise.all(r),this.pendingInLock.splice(0,r.length)}return await i}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await Wn(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const i=e.expires_at?e.expires_at*1e3-Date.now()<tl:!1;if(this._debug("#__loadSession()",`session has${i?"":" not"} expired`,"expires_at",e.expires_at),!i){if(this.userStorage){const a=await Wn(this.userStorage,this.storageKey+"-user");a!=null&&a.user?e.user=a.user:e.user=il()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=Tb(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:r,error:s}=await this._callRefreshToken(e.refresh_token);return s?this._returnResult({data:{session:null},error:s}):this._returnResult({data:{session:r},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return this.lock!=null?t=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):t=await this._getUser(),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await de(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Ti}):await this._useSession(async t=>{var i,r,s;const{data:a,error:o}=t;if(o)throw o;return!(!((i=a.session)===null||i===void 0)&&i.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Et}:await de(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(s=(r=a.session)===null||r===void 0?void 0:r.access_token)!==null&&s!==void 0?s:void 0,xform:Ti})})}catch(t){if(ne(t))return Ma(t)&&(await this._removeSession(),await mt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:t});throw t}}async updateUser(e,t={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t)):await this._updateUser(e,t)}async _updateUser(e,t={}){try{return await this._useSession(async i=>{const{data:r,error:s}=i;if(s)throw s;if(!r.session)throw new Et;const a=r.session;let o=null,l=null;this.flowType==="pkce"&&e.email!=null&&([o,l]=await zi(this.storage,this.storageKey));const{data:c,error:u}=await de(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:t==null?void 0:t.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:l}),jwt:a.access_token,xform:Ti});if(u)throw u;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),this._returnResult({data:{user:a.user},error:null})})}catch(i){if(await mt(this.storage,`${this.storageKey}-code-verifier`),ne(i))return this._returnResult({data:{user:null},error:i});throw i}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new Et;const t=Date.now()/1e3;let i=t,r=!0,s=null;const{payload:a}=Ca(e.access_token);if(a.exp&&(i=a.exp,r=i<=t),r){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};s=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});s={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:i-t,expires_at:i},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return this._returnResult({data:{user:s.user,session:s},error:null})}catch(t){if(ne(t))return this._returnResult({data:{session:null,user:null},error:t});throw t}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async t=>{var i;if(!e){const{data:a,error:o}=t;if(o)throw o;e=(i=a.session)!==null&&i!==void 0?i:void 0}if(!(e!=null&&e.refresh_token))throw new Et;const{data:r,error:s}=await this._callRefreshToken(e.refresh_token);return s?this._returnResult({data:{user:null,session:null},error:s}):r?this._returnResult({data:{user:r.user,session:r},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(t){if(ne(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async _getSessionFromURL(e,t){var i;try{if(!Ct())throw new Ra("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Ra(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new $h("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Ra("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new $h("No code detected.");const{data:x,error:S}=await this._exchangeCodeForSession(e.code);if(S)throw S;const O=new URL(window.location.href);return O.searchParams.delete("code"),window.history.replaceState(window.history.state,"",O.toString()),{data:{session:x.session,redirectType:(i=x.redirectType)!==null&&i!==void 0?i:null},error:null}}const{provider_token:r,provider_refresh_token:s,access_token:a,refresh_token:o,expires_in:l,expires_at:c,token_type:u}=e;if(!a||!l||!o||!u)throw new Ra("No session defined in URL");const h=Math.round(Date.now()/1e3),d=parseInt(l);let f=h+d;c&&(f=parseInt(c));const g=f-h;g*1e3<=bi&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${d}s`);const _=f-d;h-_>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",_,f,h):h-_<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",_,f,h);const{data:m,error:p}=await this._getUser(a);if(p)throw p;const w={provider_token:r,provider_refresh_token:s,access_token:a,expires_in:d,expires_at:f,refresh_token:o,token_type:u,user:m.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:w,redirectType:e.type},error:null})}catch(r){if(ne(r))return this._returnResult({data:{session:null,redirectType:null},error:r});throw r}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){const t=await Wn(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var i;const{data:r,error:s}=t;if(s&&!Ma(s))return this._returnResult({error:s});const a=(i=r.session)===null||i===void 0?void 0:i.access_token;if(a){const{error:o}=await this.admin.signOut(a,e);if(o&&!(tb(o)&&(o.status===404||o.status===401||o.status===403)||Ma(o)))return this._returnResult({error:o})}return e!=="others"&&(await this._removeSession(),await mt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const t=hb(),i={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,i),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)}):await this._emitInitialSession(t)))(),{data:{subscription:i}}}async _emitInitialSession(e){return await this._useSession(async t=>{var i,r;try{const{data:{session:s},error:a}=t;if(a)throw a;await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",e,"session",s)}catch(s){await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",s),Ma(s)?console.warn(s):console.error(s)}})}async resetPasswordForEmail(e,t={}){let i=null,r=null;this.flowType==="pkce"&&([i,r]=await zi(this.storage,this.storageKey,!0));try{return await de(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:i,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(s){if(await mt(this.storage,`${this.storageKey}-code-verifier`),ne(s))return this._returnResult({data:null,error:s});throw s}}async getUserIdentities(){var e;try{const{data:t,error:i}=await this.getUser();if(i)throw i;return this._returnResult({data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(t){if(ne(t))return this._returnResult({data:null,error:t});throw t}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var t;try{const{data:i,error:r}=await this._useSession(async s=>{var a,o,l,c,u;const{data:h,error:d}=s;if(d)throw d;const f=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await de(this.fetch,"GET",f,{headers:this.headers,jwt:(u=(c=h.session)===null||c===void 0?void 0:c.access_token)!==null&&u!==void 0?u:void 0})});if(r)throw r;return Ct()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(i==null?void 0:i.url),this._returnResult({data:{provider:e.provider,url:i==null?void 0:i.url},error:null})}catch(i){if(ne(i))return this._returnResult({data:{provider:e.provider,url:null},error:i});throw i}}async linkIdentityIdToken(e){return await this._useSession(async t=>{var i;try{const{error:r,data:{session:s}}=t;if(r)throw r;const{options:a,provider:o,token:l,access_token:c,nonce:u}=e,h=await de(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(i=s==null?void 0:s.access_token)!==null&&i!==void 0?i:void 0,body:{provider:o,id_token:l,access_token:c,nonce:u,link_identity:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Zt}),{data:d,error:f}=h;return f?this._returnResult({data:{user:null,session:null},error:f}):!d||!d.session||!d.user?this._returnResult({data:{user:null,session:null},error:new Tr}):(d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("USER_UPDATED",d.session)),this._returnResult({data:d,error:f}))}catch(r){if(await mt(this.storage,`${this.storageKey}-code-verifier`),ne(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{var i,r;const{data:s,error:a}=t;if(a)throw a;return await de(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(r=(i=s.session)===null||i===void 0?void 0:i.access_token)!==null&&r!==void 0?r:void 0})})}catch(t){if(ne(t))return this._returnResult({data:null,error:t});throw t}}async _refreshAccessToken(e){const t="#_refreshAccessToken()";this._debug(t,"begin");try{const i=Date.now();return await mb(async r=>(r>0&&await pb(200*Math.pow(2,r-1)),this._debug(t,"refreshing attempt",r),await de(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:Zt})),(r,s)=>{const a=200*Math.pow(2,r);return s&&nl(s)&&Date.now()+a-i<bi})}catch(i){if(this._debug(t,"error",i),ne(i))return this._returnResult({data:{session:null,user:null},error:i});throw i}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const i=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",i),Ct()&&!t.skipBrowserRedirect&&window.location.assign(i),{data:{provider:e,url:i},error:null}}async _recoverAndRefresh(){var e,t;const i="#_recoverAndRefresh()";this._debug(i,"begin");try{const r=await Wn(this.storage,this.storageKey);if(r&&this.userStorage){let a=await Wn(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:r.user},await Pr(this.userStorage,this.storageKey+"-user",a)),r.user=(e=a==null?void 0:a.user)!==null&&e!==void 0?e:il()}else if(r&&!r.user&&!r.user){const a=await Wn(this.storage,this.storageKey+"-user");a&&(a!=null&&a.user)?(r.user=a.user,await mt(this.storage,this.storageKey+"-user"),await Pr(this.storage,this.storageKey,r)):r.user=il()}if(this._debug(i,"session from storage",r),!this._isValidSession(r)){this._debug(i,"session is not valid"),r!==null&&await this._removeSession();return}const s=((t=r.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<tl;if(this._debug(i,`session has${s?"":" not"} expired with margin of ${tl}s`),s){if(this.autoRefreshToken&&r.refresh_token){const{error:a}=await this._callRefreshToken(r.refresh_token);a&&(rb(a)?this._debug(i,"refresh discarded by commit guard",a):(this._debug(i,"refresh failed",a),nl(a)||(this._debug(i,"refresh failed with a non-retryable error, removing the session",a),await this._removeSession())))}}else if(r.user&&r.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(r.access_token);!o&&(a!=null&&a.user)?(r.user=a.user,await this._saveSession(r),await this._notifyAllSubscribers("SIGNED_IN",r)):this._debug(i,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(i,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(i,"error",r),console.error(r);return}finally{this._debug(i,"end")}}async _callRefreshToken(e){var t,i;if(!e)throw new Et;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const r="#_callRefreshToken()";this._debug(r,"begin");try{this.refreshingDeferred=new yo;const s=await Wn(this.storage,this.storageKey),{data:a,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!a.session)throw new Et;const l=await Wn(this.storage,this.storageKey);if(s!==null&&(l===null||l.refresh_token!==s.refresh_token)){this._debug(r,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:l?"replaced":"cleared"});const d={data:null,error:new jh};return this.refreshingDeferred.resolve(d),d}const u=this._sessionRemovalEpoch;if(await this._saveSession(a.session),this._sessionRemovalEpoch!==u){this._debug(r,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await mt(this.storage,this.storageKey),this.userStorage&&await mt(this.userStorage,this.storageKey+"-user");const d={data:null,error:new jh};return this.refreshingDeferred.resolve(d),d}await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const h={data:a.session,error:null};return this.refreshingDeferred.resolve(h),h}catch(s){if(this._debug(r,"error",s),ne(s)){const a={data:null,error:s};return nl(s)||await this._removeSession(),(t=this.refreshingDeferred)===null||t===void 0||t.resolve(a),a}throw(i=this.refreshingDeferred)===null||i===void 0||i.reject(s),s}finally{this.refreshingDeferred=null,this._debug(r,"end")}}async _notifyAllSubscribers(e,t,i=!0){const r=`#_notifyAllSubscribers(${e})`;this._debug(r,"begin",t,`broadcast = ${i}`);try{this.broadcastChannel&&i&&this.broadcastChannel.postMessage({event:e,session:t});const s=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,t)}catch(l){s.push(l)}});if(await Promise.all(a),s.length>0){for(let o=0;o<s.length;o+=1)console.error(s[o]);throw s[0]}}finally{this._debug(r,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await mt(this.storage,`${this.storageKey}-code-verifier`);const t=Object.assign({},e),i=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!i&&t.user&&await Pr(this.userStorage,this.storageKey+"-user",{user:t.user});const r=Object.assign({},t);delete r.user;const s=Jh(r);await Pr(this.storage,this.storageKey,s)}else{const r=Jh(t);await Pr(this.storage,this.storageKey,r)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.suppressGetSessionWarning=!1,await mt(this.storage,this.storageKey),await mt(this.storage,this.storageKey+"-code-verifier"),await mt(this.storage,this.storageKey+"-user"),this.userStorage&&await mt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Ct()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),bi);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:i}}=t;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/bi);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${bi}ms, refresh threshold is ${xs} ticks`),r<=xs&&await this._callRefreshToken(i.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof Db)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async t=>{const{data:{session:i}}=t;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/bi);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${bi}ms, refresh threshold is ${xs} ticks`),r<=xs&&await this._callRefreshToken(i.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Ct()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;if(this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(t,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,i){const r=[`provider=${encodeURIComponent(t)}`];if(i!=null&&i.redirectTo&&r.push(`redirect_to=${encodeURIComponent(i.redirectTo)}`),i!=null&&i.scopes&&r.push(`scopes=${encodeURIComponent(i.scopes)}`),this.flowType==="pkce"){const[s,a]=await zi(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(a)}`});r.push(o.toString())}if(i!=null&&i.queryParams){const s=new URLSearchParams(i.queryParams);r.push(s.toString())}return i!=null&&i.skipBrowserRedirect&&r.push(`skip_http_redirect=${i.skipBrowserRedirect}`),`${e}?${r.join("&")}`}async _unenroll(e){try{return await this._useSession(async t=>{var i;const{data:r,error:s}=t;return s?this._returnResult({data:null,error:s}):await de(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token})})}catch(t){if(ne(t))return this._returnResult({data:null,error:t});throw t}}async _enroll(e){try{return await this._useSession(async t=>{var i,r;const{data:s,error:a}=t;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await de(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(i=s==null?void 0:s.session)===null||i===void 0?void 0:i.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((r=l==null?void 0:l.totp)===null||r===void 0)&&r.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(t){if(ne(t))return this._returnResult({data:null,error:t});throw t}}async _verify(e){const t=async()=>{try{return await this._useSession(async i=>{var r;const{data:s,error:a}=i;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?rd(e.webauthn.credential_response):sd(e.webauthn.credential_response)})}:{code:e.code}),{data:l,error:c}=await de(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:o,headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token});return c?this._returnResult({data:null,error:c}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+l.expires_in},l)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",l),this._returnResult({data:l,error:c}))})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challenge(e){const t=async()=>{try{return await this._useSession(async i=>{var r;const{data:s,error:a}=i;if(a)return this._returnResult({data:null,error:a});const o=await de(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token});if(o.error)return o;const{data:l}=o;if(l.type!=="webauthn")return{data:l,error:null};switch(l.webauthn.type){case"create":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:nd(l.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:id(l.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challengeAndVerify(e){const{data:t,error:i}=await this._challenge({factorId:e.factorId});return i?this._returnResult({data:null,error:i}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){var e;const{data:{user:t},error:i}=await this.getUser();if(i)return{data:null,error:i};const r={all:[],phone:[],totp:[],webauthn:[]};for(const s of(e=t==null?void 0:t.factors)!==null&&e!==void 0?e:[])r.all.push(s),s.status==="verified"&&r[s.factor_type].push(s);return{data:r,error:null}}async _getAuthenticatorAssuranceLevel(e){var t,i,r,s;if(e)try{const{payload:f}=Ca(e);let g=null;f.aal&&(g=f.aal);let _=g;const{data:{user:m},error:p}=await this.getUser(e);if(p)return this._returnResult({data:null,error:p});((i=(t=m==null?void 0:m.factors)===null||t===void 0?void 0:t.filter(S=>S.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(_="aal2");const x=f.amr||[];return{data:{currentLevel:g,nextLevel:_,currentAuthenticationMethods:x},error:null}}catch(f){if(ne(f))return this._returnResult({data:null,error:f});throw f}const{data:{session:a},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=Ca(a.access_token);let c=null;l.aal&&(c=l.aal);let u=c;((s=(r=a.user.factors)===null||r===void 0?void 0:r.filter(f=>f.status==="verified"))!==null&&s!==void 0?s:[]).length>0&&(u="aal2");const d=l.amr||[];return{data:{currentLevel:c,nextLevel:u,currentAuthenticationMethods:d},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;return r?this._returnResult({data:null,error:r}):i?await de(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:i.access_token,xform:s=>({data:s,error:null})}):this._returnResult({data:null,error:new Et})})}catch(t){if(ne(t))return this._returnResult({data:null,error:t});throw t}}async _approveAuthorization(e,t){try{return await this._useSession(async i=>{const{data:{session:r},error:s}=i;if(s)return this._returnResult({data:null,error:s});if(!r)return this._returnResult({data:null,error:new Et});const a=await de(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&Ct()&&!(t!=null&&t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async _denyAuthorization(e,t){try{return await this._useSession(async i=>{const{data:{session:r},error:s}=i;if(s)return this._returnResult({data:null,error:s});if(!r)return this._returnResult({data:null,error:new Et});const a=await de(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&Ct()&&!(t!=null&&t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;return i?this._returnResult({data:null,error:i}):t?await de(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:r=>({data:r,error:null})}):this._returnResult({data:null,error:new Et})})}catch(e){if(ne(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;return r?this._returnResult({data:null,error:r}):i?(await de(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:i.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new Et})})}catch(t){if(ne(t))return this._returnResult({data:null,error:t});throw t}}async fetchJwk(e,t={keys:[]}){let i=t.keys.find(o=>o.kid===e);if(i)return i;const r=Date.now();if(i=this.jwks.keys.find(o=>o.kid===e),i&&this.jwks_cached_at+Qx>r)return i;const{data:s,error:a}=await de(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!s.keys||s.keys.length===0||(this.jwks=s,this.jwks_cached_at=r,i=s.keys.find(o=>o.kid===e),!i)?null:i}async getClaims(e,t={}){try{let i=e;if(!i){const{data:f,error:g}=await this.getSession();if(g||!f.session)return this._returnResult({data:null,error:g});i=f.session.access_token}const{header:r,payload:s,signature:a,raw:{header:o,payload:l}}=Ca(i);if(!(t!=null&&t.allowExpired))try{bb(s.exp)}catch(f){throw new io(f instanceof Error?f.message:"JWT validation failed")}const c=!r.alg||r.alg.startsWith("HS")||!r.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(r.kid,t!=null&&t.keys?{keys:t.keys}:t==null?void 0:t.jwks);if(!c){const{error:f}=await this.getUser(i);if(f)throw f;return{data:{claims:s,header:r,signature:a},error:null}}const u=Eb(r.alg),h=await crypto.subtle.importKey("jwk",c,u,!0,["verify"]);if(!await crypto.subtle.verify(u,h,a,cb(`${o}.${l}`)))throw new io("Invalid JWT signature");return{data:{claims:s,header:r,signature:a},error:null}}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async signInWithPasskey(e){var t,i,r;un(this.experimental);try{if(!ao())return this._returnResult({data:null,error:new gn("Browser does not support WebAuthn",null)});const{data:s,error:a}=await this._startPasskeyAuthentication({options:{captchaToken:(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.captchaToken}});if(a||!s)return this._returnResult({data:null,error:a});const o=id(s.options),l=(r=(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.signal)!==null&&r!==void 0?r:kc.createNewAbortSignal(),{data:c,error:u}=await sp({publicKey:o,signal:l});if(u||!c)return this._returnResult({data:null,error:u??new gn("WebAuthn ceremony failed",null)});const h=sd(c);return this._verifyPasskeyAuthentication({challengeId:s.challenge_id,credential:h})}catch(s){if(ne(s))return this._returnResult({data:null,error:s});throw s}}async registerPasskey(e){var t,i;un(this.experimental);try{if(!ao())return this._returnResult({data:null,error:new gn("Browser does not support WebAuthn",null)});const{data:r,error:s}=await this._startPasskeyRegistration();if(s||!r)return this._returnResult({data:null,error:s});const a=nd(r.options),o=(i=(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.signal)!==null&&i!==void 0?i:kc.createNewAbortSignal(),{data:l,error:c}=await rp({publicKey:a,signal:o});if(c||!l)return this._returnResult({data:null,error:c??new gn("WebAuthn ceremony failed",null)});const u=rd(l);return this._verifyPasskeyRegistration({challengeId:r.challenge_id,credential:u})}catch(r){if(ne(r))return this._returnResult({data:null,error:r});throw r}}async _startPasskeyRegistration(){un(this.experimental);try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!t)return this._returnResult({data:null,error:new Et});const{data:r,error:s}=await de(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return s?this._returnResult({data:null,error:s}):this._returnResult({data:r,error:null})})}catch(e){if(ne(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){un(this.experimental);try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new Et});const{data:s,error:a}=await de(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:i.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:s,error:null})})}catch(t){if(ne(t))return this._returnResult({data:null,error:t});throw t}}async _startPasskeyAuthentication(e){var t;un(this.experimental);try{const{data:i,error:r}=await de(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.captchaToken}}});return r?this._returnResult({data:null,error:r}):this._returnResult({data:i,error:null})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async _verifyPasskeyAuthentication(e){un(this.experimental);try{const{data:t,error:i}=await de(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:Zt});return i?this._returnResult({data:null,error:i}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),this._returnResult({data:t,error:null}))}catch(t){if(ne(t))return this._returnResult({data:null,error:t});throw t}}async _listPasskeys(){un(this.experimental);try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!t)return this._returnResult({data:null,error:new Et});const{data:r,error:s}=await de(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:a=>({data:a,error:null})});return s?this._returnResult({data:null,error:s}):this._returnResult({data:r,error:null})})}catch(e){if(ne(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){un(this.experimental);try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new Et});const{data:s,error:a}=await de(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:s,error:null})})}catch(t){if(ne(t))return this._returnResult({data:null,error:t});throw t}}async _deletePasskey(e){un(this.experimental);try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new Et});const{error:s}=await de(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,noResolveJson:!0});return s?this._returnResult({data:null,error:s}):this._returnResult({data:null,error:null})})}catch(t){if(ne(t))return this._returnResult({data:null,error:t});throw t}}}ks.nextInstanceID={};const qb=ks,Xb="2.108.1";let bs="",lo;if(typeof Deno<"u"){var sl;bs="deno",lo=(sl=Deno.version)===null||sl===void 0?void 0:sl.deno}else if(typeof document<"u")bs="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")bs="react-native";else{var al;bs="node",lo=typeof process<"u"?(al=process.version)===null||al===void 0?void 0:al.replace(/^v/,""):void 0}const ap=[`runtime=${bs}`];lo&&ap.push(`runtime-version=${lo}`);const Kb={"X-Client-Info":`supabase-js/${Xb}; ${ap.join("; ")}`},Yb={headers:Kb},Jb={schema:"public"},Zb={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Qb={},eE={enabled:!1,respectSamplingDecision:!0};function tE(n,e,t,i){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(u){try{c(i.next(u))}catch(h){a(h)}}function l(u){try{c(i.throw(u))}catch(h){a(h)}}function c(u){u.done?s(u.value):r(u.value).then(o,l)}c((i=i.apply(n,[])).next())})}let ol=null;const nE="@opentelemetry/api";function iE(){return ol===null&&(ol=import(nE).catch(()=>null)),ol}function rE(){return tE(this,void 0,void 0,function*(){try{const n=yield iE();if(!n||!n.propagation||!n.context)return null;const e={};n.propagation.inject(n.context.active(),e);const t=e.traceparent;return t?{traceparent:t,tracestate:e.tracestate,baggage:e.baggage}:null}catch{return null}})}function sE(n){if(!n||typeof n!="string")return null;const e=n.split("-");if(e.length!==4)return null;const[t,i,r,s]=e;if(t.length!==2||i.length!==32||r.length!==16||s.length!==2)return null;const a=/^[0-9a-f]+$/i;return!a.test(t)||!a.test(i)||!a.test(r)||!a.test(s)||i==="00000000000000000000000000000000"||r==="0000000000000000"?null:{version:t,traceId:i,parentId:r,traceFlags:s,isSampled:(parseInt(s,16)&1)===1}}function aE(n,e){if(!n||!e||e.length===0)return!1;let t;if(n instanceof URL)t=n;else try{t=new URL(n)}catch{return!1}for(const i of e)try{if(typeof i=="string"){if(oE(t.hostname,i))return!0}else if(i instanceof RegExp){if(i.test(t.hostname))return!0}else if(typeof i=="function"&&i(t))return!0}catch{continue}return!1}function oE(n,e){if(e===n)return!0;if(e.startsWith("*.")){const t=e.slice(2);if(n.endsWith(t)&&(n===t||n.endsWith("."+t)))return!0}return!1}function lE(n){const e=[];try{const t=new URL(n);e.push(t.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function Fs(n){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fs(n)}function cE(n,e){if(Fs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(Fs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function uE(n){var e=cE(n,"string");return Fs(e)=="symbol"?e:e+""}function hE(n,e,t){return(e=uE(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ad(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function ft(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ad(Object(t),!0).forEach(function(i){hE(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ad(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}const dE=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),fE=()=>Headers,pE=(n,e,t,i,r)=>{const s=dE(i),a=fE(),o=(r==null?void 0:r.enabled)===!0,l=(r==null?void 0:r.respectSamplingDecision)!==!1,c=o?lE(e):null;return async(u,h)=>{var d;const f=(d=await t())!==null&&d!==void 0?d:n;let g=new a(h==null?void 0:h.headers);if(g.has("apikey")||g.set("apikey",n),g.has("Authorization")||g.set("Authorization",`Bearer ${f}`),c){const _=await mE(u,c,l);_&&(_.traceparent&&!g.has("traceparent")&&g.set("traceparent",_.traceparent),_.tracestate&&!g.has("tracestate")&&g.set("tracestate",_.tracestate),_.baggage&&!g.has("baggage")&&g.set("baggage",_.baggage))}return s(u,ft(ft({},h),{},{headers:g}))}};async function mE(n,e,t){if(!aE(typeof n=="string"||n instanceof URL?n:n.url,e))return null;const i=await rE();if(!i||!i.traceparent)return null;if(t){const r=sE(i.traceparent);if(r&&!r.isSampled)return null}return i}function od(n){return typeof n=="boolean"?{enabled:n}:n}function gE(n){return n.endsWith("/")?n:n+"/"}function _E(n,e){var t,i,r,s,a,o;const{db:l,auth:c,realtime:u,global:h}=n,{db:d,auth:f,realtime:g,global:_}=e,m=od(n.tracePropagation),p=od(e.tracePropagation),w={db:ft(ft({},d),l),auth:ft(ft({},f),c),realtime:ft(ft({},g),u),storage:{},global:ft(ft(ft({},_),h),{},{headers:ft(ft({},(t=_==null?void 0:_.headers)!==null&&t!==void 0?t:{}),(i=h==null?void 0:h.headers)!==null&&i!==void 0?i:{})}),tracePropagation:{enabled:(r=(s=m==null?void 0:m.enabled)!==null&&s!==void 0?s:p==null?void 0:p.enabled)!==null&&r!==void 0?r:!1,respectSamplingDecision:(a=(o=m==null?void 0:m.respectSamplingDecision)!==null&&o!==void 0?o:p==null?void 0:p.respectSamplingDecision)!==null&&a!==void 0?a:!0},accessToken:async()=>""};return n.accessToken?w.accessToken=n.accessToken:delete w.accessToken,w}function vE(n){const e=n==null?void 0:n.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(gE(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var yE=class extends qb{constructor(n){super(n)}},SE=class{constructor(n,e,t){var i,r;this.supabaseUrl=n,this.supabaseKey=e;const s=vE(n);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",s),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",s),this.storageUrl=new URL("storage/v1",s),this.functionsUrl=new URL("functions/v1",s);const a=`sb-${s.hostname.split(".")[0]}-auth-token`,o={db:Jb,realtime:Qb,auth:ft(ft({},Zb),{},{storageKey:a}),global:Yb,tracePropagation:eE},l=_E(t??{},o);if(this.settings=l,this.storageKey=(i=l.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(r=l.global.headers)!==null&&r!==void 0?r:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(u,h)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=pE(e,n,this._getAccessToken.bind(this),l.global.fetch,l.tracePropagation),this.realtime=this._initRealtimeClient(ft({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(u=>this.realtime.setAuth(u)).catch(u=>console.warn("Failed to set initial Realtime auth token:",u)),this.rest=new NS(new URL("rest/v1",s).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch,timeout:l.db.timeout,urlLengthLimit:l.db.urlLengthLimit}),this.storage=new Xx(this.storageUrl.href,this.headers,this.fetch,t==null?void 0:t.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new MS(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(n){return this.rest.from(n)}schema(n){return this.rest.schema(n)}rpc(n,e={},t={head:!1,get:!1,count:void 0}){return this.rest.rpc(n,e,t)}channel(n,e={config:{}}){return this.realtime.channel(n,e)}getChannels(){return this.realtime.getChannels()}removeChannel(n){return this.realtime.removeChannel(n)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var n=this,e,t;if(n.accessToken)return await n.accessToken();const{data:i}=await n.auth.getSession();return(e=(t=i.session)===null||t===void 0?void 0:t.access_token)!==null&&e!==void 0?e:n.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:n,persistSession:e,detectSessionInUrl:t,storage:i,userStorage:r,storageKey:s,flowType:a,lock:o,debug:l,throwOnError:c,experimental:u,lockAcquireTimeout:h,skipAutoInitialize:d},f,g){const _={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new yE({url:this.authUrl.href,headers:ft(ft({},_),f),storageKey:s,autoRefreshToken:n,persistSession:e,detectSessionInUrl:t,storage:i,userStorage:r,flowType:a,lock:o,debug:l,throwOnError:c,experimental:u,fetch:g,lockAcquireTimeout:h,skipAutoInitialize:d,hasCustomAuthorizationHeader:Object.keys(this.headers).some(m=>m.toLowerCase()==="authorization")})}_initRealtimeClient(n){return new _x(this.realtimeUrl.href,ft(ft({},n),{},{params:ft(ft({},{apikey:this.supabaseKey}),n==null?void 0:n.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,e)=>{this._handleTokenChanged(n,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(n,e,t){(n==="TOKEN_REFRESHED"||n==="SIGNED_IN")&&this.changedAccessToken!==t?(this.changedAccessToken=t,this.realtime.setAuth(t)):n==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const xE=(n,e,t)=>new SE(n,e,t);function bE(){if(typeof window<"u")return!1;const n=globalThis.process;if(!n)return!1;const e=n.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=18:!1}bE()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const EE="https://yyagvtvjvywanhtpggdd.supabase.co",wE="sb_publishable_Sm_4-p4gfhFloH4klWE1MA_NcSrkDtl";let Ga=null,Bs=null,Ci=null,hu=!1;function TE(){Bs=xE(EE,wE,{realtime:{params:{eventsPerSecond:80}}}),window.addEventListener("beforeunload",()=>fn({t:"mp-bye"}))}function ME(n){Ga=n}function ld(n){Bs&&(op(),Ci=Bs.channel(`dom-${n}`,{config:{broadcast:{self:!1}}}),Ci.on("broadcast",{event:"mp"},e=>{const t=e.payload;t&&typeof t.t=="string"&&t.t.startsWith("mp-")&&(Ga==null||Ga(t))}),Ci.subscribe(e=>{hu=e==="SUBSCRIBED"}))}function Wa(){op()}function op(){Ci&&Bs&&Bs.removeChannel(Ci),Ci=null,hu=!1}function fn(n){Ci&&hu&&Ci.send({type:"broadcast",event:"mp",payload:n})}function AE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ar={},ll,cd;function RE(){return cd||(cd=1,ll=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),ll}var cl={},yi={},ud;function sr(){if(ud)return yi;ud=1;let n;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return yi.getSymbolSize=function(i){if(!i)throw new Error('"version" cannot be null or undefined');if(i<1||i>40)throw new Error('"version" should be in range from 1 to 40');return i*4+17},yi.getSymbolTotalCodewords=function(i){return e[i]},yi.getBCHDigit=function(t){let i=0;for(;t!==0;)i++,t>>>=1;return i},yi.setToSJISFunction=function(i){if(typeof i!="function")throw new Error('"toSJISFunc" is not a valid function.');n=i},yi.isKanjiModeEnabled=function(){return typeof n<"u"},yi.toSJIS=function(i){return n(i)},yi}var ul={},hd;function du(){return hd||(hd=1,(function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}n.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},n.from=function(i,r){if(n.isValid(i))return i;try{return e(i)}catch{return r}}})(ul)),ul}var hl,dd;function CE(){if(dd)return hl;dd=1;function n(){this.buffer=[],this.length=0}return n.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},hl=n,hl}var dl,fd;function PE(){if(fd)return dl;fd=1;function n(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return n.prototype.set=function(e,t,i,r){const s=e*this.size+t;this.data[s]=i,r&&(this.reservedBit[s]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},dl=n,dl}var fl={},pd;function IE(){return pd||(pd=1,(function(n){const e=sr().getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,s=e(i),a=s===145?26:Math.ceil((s-13)/(2*r-2))*2,o=[s-7];for(let l=1;l<r-1;l++)o[l]=o[l-1]-a;return o.push(6),o.reverse()},n.getPositions=function(i){const r=[],s=n.getRowColCoords(i),a=s.length;for(let o=0;o<a;o++)for(let l=0;l<a;l++)o===0&&l===0||o===0&&l===a-1||o===a-1&&l===0||r.push([s[o],s[l]]);return r}})(fl)),fl}var pl={},md;function LE(){if(md)return pl;md=1;const n=sr().getSymbolSize,e=7;return pl.getPositions=function(i){const r=n(i);return[[0,0],[r-e,0],[0,r-e]]},pl}var ml={},gd;function DE(){return gd||(gd=1,(function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},n.from=function(r){return n.isValid(r)?parseInt(r,10):void 0},n.getPenaltyN1=function(r){const s=r.size;let a=0,o=0,l=0,c=null,u=null;for(let h=0;h<s;h++){o=l=0,c=u=null;for(let d=0;d<s;d++){let f=r.get(h,d);f===c?o++:(o>=5&&(a+=e.N1+(o-5)),c=f,o=1),f=r.get(d,h),f===u?l++:(l>=5&&(a+=e.N1+(l-5)),u=f,l=1)}o>=5&&(a+=e.N1+(o-5)),l>=5&&(a+=e.N1+(l-5))}return a},n.getPenaltyN2=function(r){const s=r.size;let a=0;for(let o=0;o<s-1;o++)for(let l=0;l<s-1;l++){const c=r.get(o,l)+r.get(o,l+1)+r.get(o+1,l)+r.get(o+1,l+1);(c===4||c===0)&&a++}return a*e.N2},n.getPenaltyN3=function(r){const s=r.size;let a=0,o=0,l=0;for(let c=0;c<s;c++){o=l=0;for(let u=0;u<s;u++)o=o<<1&2047|r.get(c,u),u>=10&&(o===1488||o===93)&&a++,l=l<<1&2047|r.get(u,c),u>=10&&(l===1488||l===93)&&a++}return a*e.N3},n.getPenaltyN4=function(r){let s=0;const a=r.data.length;for(let l=0;l<a;l++)s+=r.data[l];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function t(i,r,s){switch(i){case n.Patterns.PATTERN000:return(r+s)%2===0;case n.Patterns.PATTERN001:return r%2===0;case n.Patterns.PATTERN010:return s%3===0;case n.Patterns.PATTERN011:return(r+s)%3===0;case n.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(s/3))%2===0;case n.Patterns.PATTERN101:return r*s%2+r*s%3===0;case n.Patterns.PATTERN110:return(r*s%2+r*s%3)%2===0;case n.Patterns.PATTERN111:return(r*s%3+(r+s)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(r,s){const a=s.size;for(let o=0;o<a;o++)for(let l=0;l<a;l++)s.isReserved(l,o)||s.xor(l,o,t(r,l,o))},n.getBestMask=function(r,s){const a=Object.keys(n.Patterns).length;let o=0,l=1/0;for(let c=0;c<a;c++){s(c),n.applyMask(c,r);const u=n.getPenaltyN1(r)+n.getPenaltyN2(r)+n.getPenaltyN3(r)+n.getPenaltyN4(r);n.applyMask(c,r),u<l&&(l=u,o=c)}return o}})(ml)),ml}var Pa={},_d;function lp(){if(_d)return Pa;_d=1;const n=du(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Pa.getBlocksCount=function(r,s){switch(s){case n.L:return e[(r-1)*4+0];case n.M:return e[(r-1)*4+1];case n.Q:return e[(r-1)*4+2];case n.H:return e[(r-1)*4+3];default:return}},Pa.getTotalCodewordsCount=function(r,s){switch(s){case n.L:return t[(r-1)*4+0];case n.M:return t[(r-1)*4+1];case n.Q:return t[(r-1)*4+2];case n.H:return t[(r-1)*4+3];default:return}},Pa}var gl={},ms={},vd;function UE(){if(vd)return ms;vd=1;const n=new Uint8Array(512),e=new Uint8Array(256);return(function(){let i=1;for(let r=0;r<255;r++)n[r]=i,e[i]=r,i<<=1,i&256&&(i^=285);for(let r=255;r<512;r++)n[r]=n[r-255]})(),ms.log=function(i){if(i<1)throw new Error("log("+i+")");return e[i]},ms.exp=function(i){return n[i]},ms.mul=function(i,r){return i===0||r===0?0:n[e[i]+e[r]]},ms}var yd;function NE(){return yd||(yd=1,(function(n){const e=UE();n.mul=function(i,r){const s=new Uint8Array(i.length+r.length-1);for(let a=0;a<i.length;a++)for(let o=0;o<r.length;o++)s[a+o]^=e.mul(i[a],r[o]);return s},n.mod=function(i,r){let s=new Uint8Array(i);for(;s.length-r.length>=0;){const a=s[0];for(let l=0;l<r.length;l++)s[l]^=e.mul(r[l],a);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},n.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let s=0;s<i;s++)r=n.mul(r,new Uint8Array([1,e.exp(s)]));return r}})(gl)),gl}var _l,Sd;function OE(){if(Sd)return _l;Sd=1;const n=NE();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(i){this.degree=i,this.genPoly=n.generateECPolynomial(this.degree)},e.prototype.encode=function(i){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(i.length+this.degree);r.set(i);const s=n.mod(r,this.genPoly),a=this.degree-s.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(s,a),o}return s},_l=e,_l}var vl={},yl={},Sl={},xd;function cp(){return xd||(xd=1,Sl.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Sl}var Mn={},bd;function up(){if(bd)return Mn;bd=1;const n="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;Mn.KANJI=new RegExp(t,"g"),Mn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Mn.BYTE=new RegExp(i,"g"),Mn.NUMERIC=new RegExp(n,"g"),Mn.ALPHANUMERIC=new RegExp(e,"g");const r=new RegExp("^"+t+"$"),s=new RegExp("^"+n+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Mn.testKanji=function(l){return r.test(l)},Mn.testNumeric=function(l){return s.test(l)},Mn.testAlphanumeric=function(l){return a.test(l)},Mn}var Ed;function ar(){return Ed||(Ed=1,(function(n){const e=cp(),t=up();n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},n.getBestModeForData=function(s){return t.testNumeric(s)?n.NUMERIC:t.testAlphanumeric(s)?n.ALPHANUMERIC:t.testKanji(s)?n.KANJI:n.BYTE},n.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},n.isValid=function(s){return s&&s.bit&&s.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+r)}}n.from=function(s,a){if(n.isValid(s))return s;try{return i(s)}catch{return a}}})(yl)),yl}var wd;function kE(){return wd||(wd=1,(function(n){const e=sr(),t=lp(),i=du(),r=ar(),s=cp(),a=7973,o=e.getBCHDigit(a);function l(d,f,g){for(let _=1;_<=40;_++)if(f<=n.getCapacity(_,g,d))return _}function c(d,f){return r.getCharCountIndicator(d,f)+4}function u(d,f){let g=0;return d.forEach(function(_){const m=c(_.mode,f);g+=m+_.getBitsLength()}),g}function h(d,f){for(let g=1;g<=40;g++)if(u(d,g)<=n.getCapacity(g,f,r.MIXED))return g}n.from=function(f,g){return s.isValid(f)?parseInt(f,10):g},n.getCapacity=function(f,g,_){if(!s.isValid(f))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=r.BYTE);const m=e.getSymbolTotalCodewords(f),p=t.getTotalCodewordsCount(f,g),w=(m-p)*8;if(_===r.MIXED)return w;const x=w-c(_,f);switch(_){case r.NUMERIC:return Math.floor(x/10*3);case r.ALPHANUMERIC:return Math.floor(x/11*2);case r.KANJI:return Math.floor(x/13);case r.BYTE:default:return Math.floor(x/8)}},n.getBestVersionForData=function(f,g){let _;const m=i.from(g,i.M);if(Array.isArray(f)){if(f.length>1)return h(f,m);if(f.length===0)return 1;_=f[0]}else _=f;return l(_.mode,_.getLength(),m)},n.getEncodedBits=function(f){if(!s.isValid(f)||f<7)throw new Error("Invalid QR Code version");let g=f<<12;for(;e.getBCHDigit(g)-o>=0;)g^=a<<e.getBCHDigit(g)-o;return f<<12|g}})(vl)),vl}var xl={},Td;function FE(){if(Td)return xl;Td=1;const n=sr(),e=1335,t=21522,i=n.getBCHDigit(e);return xl.getEncodedBits=function(s,a){const o=s.bit<<3|a;let l=o<<10;for(;n.getBCHDigit(l)-i>=0;)l^=e<<n.getBCHDigit(l)-i;return(o<<10|l)^t},xl}var bl={},El,Md;function BE(){if(Md)return El;Md=1;const n=ar();function e(t){this.mode=n.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(i){return 10*Math.floor(i/3)+(i%3?i%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(i){let r,s,a;for(r=0;r+3<=this.data.length;r+=3)s=this.data.substr(r,3),a=parseInt(s,10),i.put(a,10);const o=this.data.length-r;o>0&&(s=this.data.substr(r),a=parseInt(s,10),i.put(a,o*3+1))},El=e,El}var wl,Ad;function zE(){if(Ad)return wl;Ad=1;const n=ar(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(i){this.mode=n.ALPHANUMERIC,this.data=i}return t.getBitsLength=function(r){return 11*Math.floor(r/2)+6*(r%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let s;for(s=0;s+2<=this.data.length;s+=2){let a=e.indexOf(this.data[s])*45;a+=e.indexOf(this.data[s+1]),r.put(a,11)}this.data.length%2&&r.put(e.indexOf(this.data[s]),6)},wl=t,wl}var Tl,Rd;function HE(){if(Rd)return Tl;Rd=1;const n=ar();function e(t){this.mode=n.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(i){return i*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let i=0,r=this.data.length;i<r;i++)t.put(this.data[i],8)},Tl=e,Tl}var Ml,Cd;function VE(){if(Cd)return Ml;Cd=1;const n=ar(),e=sr();function t(i){this.mode=n.KANJI,this.data=i}return t.getBitsLength=function(r){return r*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let r;for(r=0;r<this.data.length;r++){let s=e.toSJIS(this.data[r]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[r]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),i.put(s,13)}},Ml=t,Ml}var Al={exports:{}},Pd;function GE(){return Pd||(Pd=1,(function(n){var e={single_source_shortest_paths:function(t,i,r){var s={},a={};a[i]=0;var o=e.PriorityQueue.make();o.push(i,0);for(var l,c,u,h,d,f,g,_,m;!o.empty();){l=o.pop(),c=l.value,h=l.cost,d=t[c]||{};for(u in d)d.hasOwnProperty(u)&&(f=d[u],g=h+f,_=a[u],m=typeof a[u]>"u",(m||_>g)&&(a[u]=g,o.push(u,g),s[u]=c))}if(typeof r<"u"&&typeof a[r]>"u"){var p=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(p)}return s},extract_shortest_path_from_predecessor_list:function(t,i){for(var r=[],s=i;s;)r.push(s),t[s],s=t[s];return r.reverse(),r},find_path:function(t,i,r){var s=e.single_source_shortest_paths(t,i,r);return e.extract_shortest_path_from_predecessor_list(s,r)},PriorityQueue:{make:function(t){var i=e.PriorityQueue,r={},s;t=t||{};for(s in i)i.hasOwnProperty(s)&&(r[s]=i[s]);return r.queue=[],r.sorter=t.sorter||i.default_sorter,r},default_sorter:function(t,i){return t.cost-i.cost},push:function(t,i){var r={value:t,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e})(Al)),Al.exports}var Id;function WE(){return Id||(Id=1,(function(n){const e=ar(),t=BE(),i=zE(),r=HE(),s=VE(),a=up(),o=sr(),l=GE();function c(p){return unescape(encodeURIComponent(p)).length}function u(p,w,x){const S=[];let O;for(;(O=p.exec(x))!==null;)S.push({data:O[0],index:O.index,mode:w,length:O[0].length});return S}function h(p){const w=u(a.NUMERIC,e.NUMERIC,p),x=u(a.ALPHANUMERIC,e.ALPHANUMERIC,p);let S,O;return o.isKanjiModeEnabled()?(S=u(a.BYTE,e.BYTE,p),O=u(a.KANJI,e.KANJI,p)):(S=u(a.BYTE_KANJI,e.BYTE,p),O=[]),w.concat(x,S,O).sort(function(M,C){return M.index-C.index}).map(function(M){return{data:M.data,mode:M.mode,length:M.length}})}function d(p,w){switch(w){case e.NUMERIC:return t.getBitsLength(p);case e.ALPHANUMERIC:return i.getBitsLength(p);case e.KANJI:return s.getBitsLength(p);case e.BYTE:return r.getBitsLength(p)}}function f(p){return p.reduce(function(w,x){const S=w.length-1>=0?w[w.length-1]:null;return S&&S.mode===x.mode?(w[w.length-1].data+=x.data,w):(w.push(x),w)},[])}function g(p){const w=[];for(let x=0;x<p.length;x++){const S=p[x];switch(S.mode){case e.NUMERIC:w.push([S,{data:S.data,mode:e.ALPHANUMERIC,length:S.length},{data:S.data,mode:e.BYTE,length:S.length}]);break;case e.ALPHANUMERIC:w.push([S,{data:S.data,mode:e.BYTE,length:S.length}]);break;case e.KANJI:w.push([S,{data:S.data,mode:e.BYTE,length:c(S.data)}]);break;case e.BYTE:w.push([{data:S.data,mode:e.BYTE,length:c(S.data)}])}}return w}function _(p,w){const x={},S={start:{}};let O=["start"];for(let A=0;A<p.length;A++){const M=p[A],C=[];for(let b=0;b<M.length;b++){const y=M[b],R=""+A+b;C.push(R),x[R]={node:y,lastCount:0},S[R]={};for(let k=0;k<O.length;k++){const I=O[k];x[I]&&x[I].node.mode===y.mode?(S[I][R]=d(x[I].lastCount+y.length,y.mode)-d(x[I].lastCount,y.mode),x[I].lastCount+=y.length):(x[I]&&(x[I].lastCount=y.length),S[I][R]=d(y.length,y.mode)+4+e.getCharCountIndicator(y.mode,w))}}O=C}for(let A=0;A<O.length;A++)S[O[A]].end=0;return{map:S,table:x}}function m(p,w){let x;const S=e.getBestModeForData(p);if(x=e.from(w,S),x!==e.BYTE&&x.bit<S.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(x)+`.
 Suggested mode is: `+e.toString(S));switch(x===e.KANJI&&!o.isKanjiModeEnabled()&&(x=e.BYTE),x){case e.NUMERIC:return new t(p);case e.ALPHANUMERIC:return new i(p);case e.KANJI:return new s(p);case e.BYTE:return new r(p)}}n.fromArray=function(w){return w.reduce(function(x,S){return typeof S=="string"?x.push(m(S,null)):S.data&&x.push(m(S.data,S.mode)),x},[])},n.fromString=function(w,x){const S=h(w,o.isKanjiModeEnabled()),O=g(S),A=_(O,x),M=l.find_path(A.map,"start","end"),C=[];for(let b=1;b<M.length-1;b++)C.push(A.table[M[b]].node);return n.fromArray(f(C))},n.rawSplit=function(w){return n.fromArray(h(w,o.isKanjiModeEnabled()))}})(bl)),bl}var Ld;function $E(){if(Ld)return cl;Ld=1;const n=sr(),e=du(),t=CE(),i=PE(),r=IE(),s=LE(),a=DE(),o=lp(),l=OE(),c=kE(),u=FE(),h=ar(),d=WE();function f(A,M){const C=A.size,b=s.getPositions(M);for(let y=0;y<b.length;y++){const R=b[y][0],k=b[y][1];for(let I=-1;I<=7;I++)if(!(R+I<=-1||C<=R+I))for(let B=-1;B<=7;B++)k+B<=-1||C<=k+B||(I>=0&&I<=6&&(B===0||B===6)||B>=0&&B<=6&&(I===0||I===6)||I>=2&&I<=4&&B>=2&&B<=4?A.set(R+I,k+B,!0,!0):A.set(R+I,k+B,!1,!0))}}function g(A){const M=A.size;for(let C=8;C<M-8;C++){const b=C%2===0;A.set(C,6,b,!0),A.set(6,C,b,!0)}}function _(A,M){const C=r.getPositions(M);for(let b=0;b<C.length;b++){const y=C[b][0],R=C[b][1];for(let k=-2;k<=2;k++)for(let I=-2;I<=2;I++)k===-2||k===2||I===-2||I===2||k===0&&I===0?A.set(y+k,R+I,!0,!0):A.set(y+k,R+I,!1,!0)}}function m(A,M){const C=A.size,b=c.getEncodedBits(M);let y,R,k;for(let I=0;I<18;I++)y=Math.floor(I/3),R=I%3+C-8-3,k=(b>>I&1)===1,A.set(y,R,k,!0),A.set(R,y,k,!0)}function p(A,M,C){const b=A.size,y=u.getEncodedBits(M,C);let R,k;for(R=0;R<15;R++)k=(y>>R&1)===1,R<6?A.set(R,8,k,!0):R<8?A.set(R+1,8,k,!0):A.set(b-15+R,8,k,!0),R<8?A.set(8,b-R-1,k,!0):R<9?A.set(8,15-R-1+1,k,!0):A.set(8,15-R-1,k,!0);A.set(b-8,8,1,!0)}function w(A,M){const C=A.size;let b=-1,y=C-1,R=7,k=0;for(let I=C-1;I>0;I-=2)for(I===6&&I--;;){for(let B=0;B<2;B++)if(!A.isReserved(y,I-B)){let q=!1;k<M.length&&(q=(M[k]>>>R&1)===1),A.set(y,I-B,q),R--,R===-1&&(k++,R=7)}if(y+=b,y<0||C<=y){y-=b,b=-b;break}}}function x(A,M,C){const b=new t;C.forEach(function(B){b.put(B.mode.bit,4),b.put(B.getLength(),h.getCharCountIndicator(B.mode,A)),B.write(b)});const y=n.getSymbolTotalCodewords(A),R=o.getTotalCodewordsCount(A,M),k=(y-R)*8;for(b.getLengthInBits()+4<=k&&b.put(0,4);b.getLengthInBits()%8!==0;)b.putBit(0);const I=(k-b.getLengthInBits())/8;for(let B=0;B<I;B++)b.put(B%2?17:236,8);return S(b,A,M)}function S(A,M,C){const b=n.getSymbolTotalCodewords(M),y=o.getTotalCodewordsCount(M,C),R=b-y,k=o.getBlocksCount(M,C),I=b%k,B=k-I,q=Math.floor(b/k),W=Math.floor(R/k),Y=W+1,V=q-W,re=new l(V);let ue=0;const ge=new Array(k),ke=new Array(k);let Ye=0;const $=new Uint8Array(A.buffer);for(let Te=0;Te<k;Te++){const Le=Te<B?W:Y;ge[Te]=$.slice(ue,ue+Le),ke[Te]=re.encode(ge[Te]),ue+=Le,Ye=Math.max(Ye,Le)}const Z=new Uint8Array(b);let me=0,te,Se;for(te=0;te<Ye;te++)for(Se=0;Se<k;Se++)te<ge[Se].length&&(Z[me++]=ge[Se][te]);for(te=0;te<V;te++)for(Se=0;Se<k;Se++)Z[me++]=ke[Se][te];return Z}function O(A,M,C,b){let y;if(Array.isArray(A))y=d.fromArray(A);else if(typeof A=="string"){let q=M;if(!q){const W=d.rawSplit(A);q=c.getBestVersionForData(W,C)}y=d.fromString(A,q||40)}else throw new Error("Invalid data");const R=c.getBestVersionForData(y,C);if(!R)throw new Error("The amount of data is too big to be stored in a QR Code");if(!M)M=R;else if(M<R)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+R+`.
`);const k=x(M,C,y),I=n.getSymbolSize(M),B=new i(I);return f(B,M),g(B),_(B,M),p(B,C,0),M>=7&&m(B,M),w(B,k),isNaN(b)&&(b=a.getBestMask(B,p.bind(null,B,C))),a.applyMask(b,B),p(B,C,b),{modules:B,version:M,errorCorrectionLevel:C,maskPattern:b,segments:y}}return cl.create=function(M,C){if(typeof M>"u"||M==="")throw new Error("No input text");let b=e.M,y,R;return typeof C<"u"&&(b=e.from(C.errorCorrectionLevel,e.M),y=c.from(C.version),R=a.from(C.maskPattern),C.toSJISFunc&&n.setToSJISFunction(C.toSJISFunc)),O(M,y,b,R)},cl}var Rl={},Cl={},Dd;function hp(){return Dd||(Dd=1,(function(n){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let i=t.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+t);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(s){return[s,s]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,s=i.width&&i.width>=21?i.width:void 0,a=i.scale||4;return{width:s,scale:s?4:a,margin:r,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},n.getImageWidth=function(i,r){const s=n.getScale(i,r);return Math.floor((i+r.margin*2)*s)},n.qrToImageData=function(i,r,s){const a=r.modules.size,o=r.modules.data,l=n.getScale(a,s),c=Math.floor((a+s.margin*2)*l),u=s.margin*l,h=[s.color.light,s.color.dark];for(let d=0;d<c;d++)for(let f=0;f<c;f++){let g=(d*c+f)*4,_=s.color.light;if(d>=u&&f>=u&&d<c-u&&f<c-u){const m=Math.floor((d-u)/l),p=Math.floor((f-u)/l);_=h[o[m*a+p]?1:0]}i[g++]=_.r,i[g++]=_.g,i[g++]=_.b,i[g]=_.a}}})(Cl)),Cl}var Ud;function jE(){return Ud||(Ud=1,(function(n){const e=hp();function t(r,s,a){r.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(s,a,o){let l=o,c=a;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),a||(c=i()),l=e.getOptions(l);const u=e.getImageWidth(s.modules.size,l),h=c.getContext("2d"),d=h.createImageData(u,u);return e.qrToImageData(d.data,s,l),t(h,c,u),h.putImageData(d,0,0),c},n.renderToDataURL=function(s,a,o){let l=o;typeof l>"u"&&(!a||!a.getContext)&&(l=a,a=void 0),l||(l={});const c=n.render(s,a,l),u=l.type||"image/png",h=l.rendererOpts||{};return c.toDataURL(u,h.quality)}})(Rl)),Rl}var Pl={},Nd;function qE(){if(Nd)return Pl;Nd=1;const n=hp();function e(r,s){const a=r.a/255,o=s+'="'+r.hex+'"';return a<1?o+" "+s+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(r,s,a){let o=r+s;return typeof a<"u"&&(o+=" "+a),o}function i(r,s,a){let o="",l=0,c=!1,u=0;for(let h=0;h<r.length;h++){const d=Math.floor(h%s),f=Math.floor(h/s);!d&&!c&&(c=!0),r[h]?(u++,h>0&&d>0&&r[h-1]||(o+=c?t("M",d+a,.5+f+a):t("m",l,0),l=0,c=!1),d+1<s&&r[h+1]||(o+=t("h",u),u=0)):l++}return o}return Pl.render=function(s,a,o){const l=n.getOptions(a),c=s.modules.size,u=s.modules.data,h=c+l.margin*2,d=l.color.light.a?"<path "+e(l.color.light,"fill")+' d="M0 0h'+h+"v"+h+'H0z"/>':"",f="<path "+e(l.color.dark,"stroke")+' d="'+i(u,c,l.margin)+'"/>',g='viewBox="0 0 '+h+" "+h+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+g+' shape-rendering="crispEdges">'+d+f+`</svg>
`;return typeof o=="function"&&o(null,m),m},Pl}var Od;function XE(){if(Od)return Ar;Od=1;const n=RE(),e=$E(),t=jE(),i=qE();function r(s,a,o,l,c){const u=[].slice.call(arguments,1),h=u.length,d=typeof u[h-1]=="function";if(!d&&!n())throw new Error("Callback required as last argument");if(d){if(h<2)throw new Error("Too few arguments provided");h===2?(c=o,o=a,a=l=void 0):h===3&&(a.getContext&&typeof c>"u"?(c=l,l=void 0):(c=l,l=o,o=a,a=void 0))}else{if(h<1)throw new Error("Too few arguments provided");return h===1?(o=a,a=l=void 0):h===2&&!a.getContext&&(l=o,o=a,a=void 0),new Promise(function(f,g){try{const _=e.create(o,l);f(s(_,a,l))}catch(_){g(_)}})}try{const f=e.create(o,l);c(null,s(f,a,l))}catch(f){c(f)}}return Ar.create=e.create,Ar.toCanvas=r.bind(null,t.render),Ar.toDataURL=r.bind(null,t.renderToDataURL),Ar.toString=r.bind(null,function(s,a,o){return i.render(s,o)}),Ar}var KE=XE();const YE=AE(KE),Ut=n=>document.getElementById(n),Oe={marquee:Ut("marquee"),cashP:Ut("cashP"),cashL:Ut("cashL"),endP:Ut("endP").querySelector(".endbar"),endL:Ut("endL").querySelector(".endbar"),center:Ut("centerMsg"),sub:Ut("subMsg"),taunt:Ut("taunt"),help:Ut("help"),flash:Ut("shockFlash")};function jn(n,e){n.textContent!==e&&(n.textContent=e)}const kd=new WeakMap;function $r(n,e){kd.get(n)!==e&&(kd.set(n,e),n.innerHTML=e)}const Mi=1/60;let _n="attract",ji=0,Pt=0,is=[],ui={p:0,l:0},pn={p:100,l:100},Ke=null,Fc=null,wn=co(7),dp=new Set,Ia=[],Pe=null,Ir=0,Bc=2,zc=-1,Hc=!1,Zn="title",ut=null;const Si={x:0,y:0};let Il="mouse",fp=null;const pp=8,JE=12;let Ie=null,dt=null,Ll="",cn="";function ZE(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ";let e="";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}let $a=null,Qt=0,Yn=0,Dl=0;const qt={p:new Map,l:new Map};let kr=null;const Cs=new Map;function Pi(){return Ie?Ie.mySide:"p"}function mp(){return Ie?Nn[Pi()==="p"?"l":"p"]:"LARGO"}const Vc={shieldDir:0,fireAt:null,launch:!1};function er(){$a!==null&&window.clearInterval($a),$a=null}function Fd(n,e,t){er(),dt=null,Ie={role:n,mySide:n==="host"?"p":"l",seed:e},n==="host"?Nn={p:tn,l:(t||"CHALLENGER").slice(0,8)}:Nn={p:(t||"HOST").slice(0,8),l:tn},_p(),su(),Pt=0,ui={p:0,l:0},pn={p:100,l:100},ut=null,Zn="title",Oe.flash.style.background="#ff2200",Oe.flash.style.opacity="0",wn=co(e),is=$c(wn),fu()}function Gc(){Ie&&fn({t:"mp-bye"}),Ie=null,dt=null,er(),Wa()}function Bd(n){if(!Ie)return;const e=Math.max(0,n-(JE-1)),t=[];for(let i=e;i<=n;i++)t.push(qt[Ie.mySide].get(i)??Vc);fn({t:"mp-in",sid:Ie.seed,side:Ie.mySide,from:e,ins:t})}let gp=!1,tn=(()=>{try{return(localStorage.getItem("dom.name")||"007").slice(0,8)}catch{return"007"}})(),Nn={p:"007",l:"LARGO"},Hi=!1,Vi="";function _p(){const n=document.querySelector("#endP .tag"),e=document.querySelector("#endL .tag");n&&(n.textContent=`${Nn.p} — ENDURANCE`),e&&(e.textContent=`${Nn.l} — ENDURANCE`)}const Pn=(()=>{try{return{muted:!1,crt:!0,...JSON.parse(localStorage.getItem("dom.settings")??"{}")}}catch{return{muted:!1,crt:!0}}})();function zd(){try{localStorage.setItem("dom.settings",JSON.stringify(Pn))}catch{}}function It(n){return dp.has(n)}function Ai(n){_n=n,ji=0}const La={endP:-1,endL:-1};function zs(){$r(Oe.cashP,`<span class="label">${Nn.p}</span>${nr(ui.p)}`),$r(Oe.cashL,`<span class="label">${Nn.l}</span>${nr(ui.l)}`);const n=Math.max(0,Math.round(pn.p*2)/2),e=Math.max(0,Math.round(pn.l*2)/2);n!==La.endP&&(La.endP=n,Oe.endP.style.width=`${n}%`),e!==La.endL&&(La.endL=e,Oe.endL.style.width=`${e}%`)}function Hd(){dt=null,er(),Nn={p:tn,l:"LARGO"},_p(),Pt=0,ui={p:0,l:0},pn={p:100,l:100},ut=null,Zn="title",Oe.flash.style.background="#ff2200",Oe.flash.style.opacity="0",wn=co(Math.random()*1e9|0),is=$c(wn),fu()}function QE(){const n=co(Math.random()*1e9|0),e=$c(n)[0];ut={duel:Xd(e),aiP:new Nl("p",1,n),aiL:new Nl("l",1,n),rng:n,round:e},Df(ut.duel.outline)}function fu(){_S(),Ut("joinInfo").style.display="none";const n=is[Pt];Ke=Xd(n,Pt,wn,!!Ie),Fc=new Nl("l",Pt,wn),Qt=0,Yn=0,kr=null,Cs.clear(),qt.p.clear(),qt.l.clear();for(let e=0;e<pp;e++)qt.p.set(e,Vc),qt.l.set(e,Vc);Df(Ke.outline),Nr(!1),Oe.center.textContent=n.name,Oe.sub.textContent=`FOR ${nr(n.stake)}`,$r(Oe.marquee,""),Oe.taunt.textContent=Ie?Pt===3?"THE FINAL TABLE — FOR THE REST OF THE WORLD":"":Pt===0?qa(Fr.intro,wn):Pt===3?Fr.finalRound[0]:"",Oe.help.textContent="MOUSE: AIM+FIRE LASER · A/D: SHIELD · 1,2: MISSILES · NEVER RELEASE THE GRIPS",SS(`${n.name}. ${n.stake.toLocaleString("en-US")} dollars.`),Ir=0,Bc=2,zc=-1,Hc=!1,iu(0),Ai("intro")}function ew(){Oe.center.textContent="",Oe.sub.textContent="",iu(null),vS(Pt),pS(Pt),Ai("duel")}function tw(n,e){lu(),ou();const t=is[Pt],i=n==="p"?"l":"p";if(e==="crack"){ui.p+=t.stake,Oe.taunt.textContent=Fr.crack[0],Hs(!0,"LARGO RELEASES HIS GRIPS");return}ui[i]+=t.stake,zs(),Pe={victim:n,drain:t.drain,t:0,dur:3,outcome:null,rumbleAt:0},Oe.flash.style.background=n===Pi()?"#ff2200":"#ff7a00",Oe.center.textContent=n===Pi()?`${t.name} FALLS TO ${mp()}`:`${t.name} IS YOURS`,Oe.sub.textContent=n===Pi()?"HOLD [SPACE] — ENDURE THE PAIN":"",Oe.taunt.textContent=Ie?"":qa(n==="p"?Fr.playerShock:Fr.largoShock,wn),yS(),Ai("shock")}function Hs(n,e){lu(),ou(),Of(),Oe.flash.style.opacity="0",zs(),Oe.center.textContent=`${e}
${n?"THE WORLD IS YOURS":Ie?"THE TABLE IS LOST":"DOMINATION: LARGO"}`,Oe.sub.textContent="PRESS ENTER TO PLAY AGAIN",Oe.help.textContent=`FINAL — 007 ${nr(ui.p)} · LARGO ${nr(ui.l)}`,n&&xi.win(),Ai("over")}function nw(){Of(),Oe.flash.style.opacity="0";const n=Pe.victim;if(Pe=null,Pt===3){const e=n!==Pi();Hs(e,e?`${mp()} ENDURES, BUT THE WORLD IS LOST`:"YOU ENDURED — BUT THE WORLD IS THEIRS");return}Pt++,fu()}function iw(n){switch(ji+=n,Ia=zp(),dp=new Set(Ia),dt!=="entering"&&!Hi&&(It("m")&&(Pn.muted=!Pn.muted,Nf(Pn.muted),zd()),It("c")&&(Pn.crt=!Pn.crt,Uf(Pn.crt),zd())),_n){case"attract":{if(gS(),Zn==="title")jn(Oe.center,"DOMINATION"),jn(Oe.sub,Hi?`YOUR NAME: ${Vi}_`:dt==="hosting"?`TABLE ${Ll} — TELL YOUR CHALLENGER THE CODE`:dt==="entering"?`ENTER TABLE CODE: ${cn}${"·".repeat(4-cn.length)}`:dt==="joining"?`SEEKING TABLE ${cn}…`:"PRESS ENTER"),jn(Oe.taunt,""),jn(Oe.help,`ENTER: VS LARGO · O: HOST · J: JOIN · N: NAME (${tn}) · M: MUTE · C: CRT · LINK: GLOBAL ◉`),$r(Oe.marquee,""),Ut("joinInfo").style.display=gp?"flex":"none",!dt&&!Hi&&ji>9&&(QE(),Nr(!1),Zn="demo",Ai("attract"));else if(ut){Ut("joinInfo").style.display="none",jn(Oe.center,""),jn(Oe.sub,"DEMONSTRATION — PRESS ENTER");const e={p:ut.aiP.think(ut.duel),l:ut.aiL.think(ut.duel)};Tu(ut.duel,Mi,e,1,ut.rng);const t=Math.max(0,ut.duel.duration-ut.duel.time);$r(Oe.marquee,`${ut.round.name} — ${nr(ut.round.stake)}<span class="stake">DEMO ${ut.duel.strikes.p} — ${ut.duel.strikes.l} · ${t.toFixed(0)}s</span>`),(ut.duel.over||ji>30)&&(ut=null,Zn="title",Nr(!0),Ai("attract"))}if(Hi){for(const e of Ia)if(/^[a-z0-9]$/.test(e)&&Vi.length<8)Vi+=e.toUpperCase();else if(e==="backspace")Vi=Vi.slice(0,-1);else if(e==="enter"){tn=Vi||"007";try{localStorage.setItem("dom.name",tn)}catch{}Hi=!1}else e==="escape"&&(Hi=!1);break}if(dt==="entering"){for(const e of Ia)/^[a-z]$/.test(e)&&cn.length<4?cn+=e.toUpperCase():e==="backspace"?cn=cn.slice(0,-1):e==="escape"&&(dt=null,cn="");dt==="entering"&&cn.length===4&&(ld(cn),dt="joining",er(),fn({t:"mp-hello",name:tn}),$a=window.setInterval(()=>fn({t:"mp-hello",name:tn}),1200));break}(It("o")||It("j")||It("escape")||It("n"))&&(Zn==="demo"&&(ut=null,Zn="title",Nr(!0),Ai("attract")),It("n")?dt||(Hi=!0,Vi=tn==="007"?"":tn):It("o")?(dt==="hosting"?(dt=null,Wa()):(Ll=ZE(),ld(Ll),dt="hosting"),er()):It("j")?(er(),Wa(),dt="entering",cn=""):(dt=null,er(),Wa())),It("enter")&&!dt&&(su(),Hd());break}case"intro":{iu(Math.min(1,ji/3)),(ji>3||!Ie&&It("enter"))&&ew();break}case"duel":{if(!Ke||!Fc)break;const e=is[Pt],t=bu();Ln.moved&&(Ln.moved=!1,Il="mouse"),(t.aimDX||t.aimDY)&&(Il="pad",Si.x=Math.max(-1.3,Math.min(1.3,Si.x+t.aimDX*2.4*Mi)),Si.y=Math.max(-1,Math.min(1,Si.y+t.aimDY*2.4*Mi)));const i=lS(Ln.x,Ln.y);fp=Il==="pad"?{x:Si.x,y:Si.y}:i;const r=Vp(),s={shieldDir:(as("d")||as("arrowright")?1:0)+(as("a")||as("arrowleft")?-1:0)+t.shieldDir,fireAt:r?{x:i.x,y:i.y}:t.fire?{x:Si.x,y:Si.y}:null,launch:It("1")||It("2")||It("e")||t.launch};s.shieldDir=Math.max(-1,Math.min(1,s.shieldDir));let a;if(Ie){const h=Qt+pp;qt[Ie.mySide].has(h)||(qt[Ie.mySide].set(h,s),h%2===0&&Bd(h));const d=qt.p.get(Qt),f=qt.l.get(Qt);if(!d||!f){Yn+=n,Yn>Dl&&(Bd(h),Dl=Yn+.3),Yn>.6&&jn(Oe.sub,"AWAITING OPPONENT"),Yn>20&&(Hs(!0,"OPPONENT CONNECTION LOST"),Gc());break}Yn>.6&&jn(Oe.sub,""),Yn=0,Dl=0,a={p:d,l:f}}else a={p:s,l:Fc.think(Ke)};if(Tu(Ke,Mi,a,Pt,wn),Qt++,Ie&&Qt%120===0)for(const h of[qt.p,qt.l])for(const d of h.keys())d<Qt-60&&h.delete(d);if(Ie&&Qt%300===0&&Ke&&!Ke.over){const h=Ke.strikes.p*1e6+Ke.strikes.l*1e3+Ke.missiles.length*10+Ke.targets.length;Cs.set(Qt,h),fn({t:"mp-sum",sid:Ie.seed,tick:Qt,sum:h});for(const d of Cs.keys())d<Qt-1200&&Cs.delete(d)}for(const h of Ke.events)h==="blip"?xi.blip():h==="zap"?xi.zap():h==="miss"?xi.miss():h==="launch"?xi.launch():h==="boom"&&(xi.boom(),Ch(.05,.4),Eu(.4,200));const o=Pi()==="p"?"l":"p";Ke.ammo[o]<Bc&&(Bc=Ke.ammo[o],Ir=1.4,xi.warn()),Ir>0&&(Ir-=Mi,jn(Oe.center,Ir>0?"MISSILE INBOUND":"")),!Ie&&!Hc&&Ke.time>18&&Ir<=0&&(Hc=!0,Oe.taunt.textContent=qa(Fr.duel,wn));const l=Math.max(0,Ke.duration-Ke.time);l<=5.4&&Math.floor(l)!==zc&&(zc=Math.floor(l),xi.tick());const c="▲".repeat(Ke.ammo.p)+"△".repeat(2-Ke.ammo.p),u="▲".repeat(Ke.ammo.l)+"△".repeat(2-Ke.ammo.l);$r(Oe.marquee,`${e.name} — ${nr(e.stake)}<span class="stake">${c} ${Nn.p} ${Ke.strikes.p} — ${Ke.strikes.l} ${Nn.l} ${u} · ${l.toFixed(0)}s</span>`),Ke.over&&Ke.loser&&tw(Ke.loser,Ke.reason);break}case"shock":{if(!Pe)break;Pe.t+=n;const e=Pe.drain/Pe.dur;if(Pe.victim===Pi()){const i=Pe.victim;if(!(as(" ")||bu().grip||kf(i)&&Ff(i))&&Pe.t>.25&&(Pe.outcome="release"),pn[i]-=e*n,pn[i]<=0&&(Pe.outcome="collapse"),Oe.flash.style.opacity=String(.25+.3*Math.abs(Math.sin(Pe.t*26))),Ch(.06,.2),Pe.t>Pe.rumbleAt&&(Eu(Math.min(1,.4+Pt*.2),180),Pe.rumbleAt=Pe.t+.2),Pe.t>=Pe.dur&&!Pe.outcome&&(Pe.outcome="endured"),Ie&&Pe.outcome){const s={t:"mp-shock",sid:Ie.seed,outcome:Pe.outcome,endurance:pn[i]};fn(s),setTimeout(()=>fn(s),400),setTimeout(()=>fn(s),900)}}else pn[Pe.victim]-=e*n,Oe.flash.style.opacity=String(.08+.1*Math.abs(Math.sin(Pe.t*18))),Ie?kr?(pn[Pe.victim]=kr.endurance,Pe.outcome=kr.outcome,kr=null):Pe.t>Pe.dur+4&&(Pe.outcome="endured"):(pn.l<=0&&(Pe.outcome="collapse"),Pe.t>=Pe.dur&&!Pe.outcome&&(Pe.outcome="endured"));if(zs(),Pe.outcome==="release"||Pe.outcome==="collapse"){const i=Pe.victim===Pi(),r=i?Pe.outcome==="release"?"YOU RELEASED YOUR GRIPS":"YOU COLLAPSED":Ie?Pe.outcome==="release"?"YOUR OPPONENT RELEASES":"YOUR OPPONENT COLLAPSES":"LARGO COLLAPSES";Hs(!i,r),Pe=null;break}Pe.outcome==="endured"&&nw();break}case"over":{It("enter")&&ji>1&&(Ie?(Gc(),Zn="title",Nr(!0),Ai("attract")):Hd());break}}zs()}const vp=document.getElementById("game");oS(vp);Hp(vp,()=>su());TE();ME(n=>{switch(n.t){case"mp-hello":{if(dt==="hosting"&&_n==="attract"){const e=Math.random()*1e9|0;fn({t:"mp-start",seed:e,name:tn}),Fd("host",e,typeof n.name=="string"?n.name:void 0)}else Ie&&Ie.role==="host"&&_n!=="over"&&fn({t:"mp-start",seed:Ie.seed,name:tn});break}case"mp-start":{dt==="joining"&&typeof n.seed=="number"&&Fd("guest",n.seed,typeof n.name=="string"?n.name:void 0);break}case"mp-in":{const e=n.side;if(Ie&&n.sid===Ie.seed&&e!==Ie.mySide&&(e==="p"||e==="l")&&typeof n.from=="number"&&Array.isArray(n.ins))for(let t=0;t<n.ins.length;t++){const i=n.from+t;qt[e].has(i)||qt[e].set(i,n.ins[t])}break}case"mp-shock":{Ie&&n.sid===Ie.seed&&typeof n.endurance=="number"&&(kr={outcome:n.outcome,endurance:n.endurance});break}case"mp-sum":{if(Ie&&n.sid===Ie.seed&&typeof n.tick=="number"&&typeof n.sum=="number"){const e=Cs.get(n.tick);e!==void 0&&e!==n.sum&&(Oe.taunt.textContent="SYNC DRIFT DETECTED — RESULT MAY DIVERGE")}break}case"mp-bye":{Ie&&_n!=="over"&&(Hs(!0,"YOUR OPPONENT LEFT THE TABLE"),Gc());break}}});Nr(!0);Nf(Pn.muted);Uf(Pn.crt);zs();fetch("/grip-info").then(n=>n.ok?n.json():Promise.reject(new Error("no relay"))).then(n=>{const e=`http://${n.ip}:${n.port}/grip.html`;return Ut("joinUrl").textContent=e.replace("http://",""),gp=!0,YE.toCanvas(Ut("joinQr"),e,{width:92,margin:1,color:{dark:"#ffd24aff",light:"#00000000"}})}).catch(()=>{});let Wc=performance.now(),Ul=0;function yp(n){const e=Math.min(.1,(n-Wc)/1e3);for(Wc=n,Ul+=e;Ul>=Mi;)iw(Mi),Ul-=Mi;const t=_n==="duel"?fp:null,i=_n==="duel"||_n==="shock"||_n==="intro"?Ke:_n==="attract"&&ut?ut.duel:null;uS(i,t,e)}function Sp(n){yp(n),requestAnimationFrame(Sp)}requestAnimationFrame(Sp);setInterval(()=>{const n=performance.now();n-Wc>45&&yp(n)},33);Mc();window.__dom={get phase(){return _n},get duel(){return Ke},get cash(){return ui},get endurance(){return pn},get attractMode(){return Zn},get demo(){return ut},get settings(){return Pn},get phone(){return{connected:kf("p"),held:Ff("p")}},get mp(){return Ie?{role:Ie.role,mySide:Ie.mySide,seed:Ie.seed,duelTick:Qt,stallT:Yn}:null},get mpWait(){return dt},get renderStats(){return hS()},get ladder(){return is.map(n=>`${n.name} ${n.stake}`)},skipToEnd(){Ke&&(Ke.time=Ke.duration-.3)}};
