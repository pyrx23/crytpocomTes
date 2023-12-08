"use strict";(self.webpackChunkmkt_aurora_site=self.webpackChunkmkt_aurora_site||[]).push([[4615],{99038:function(e,t,n){var r,o=n(81880),i=n(31268),s=n(84171),c=n(75980),l=n(67294);const a=(0,i.Z)(s.Z)(r||(r=(0,o.Z)(["\n  ","\n"])),(0,c.bU)({variants:{hero:{pt:[15,15,23],pb:[10,10,16]},hero2:{pt:[15,15,23],pb:[0,0,0]},default:{py:[10,10,16]},compact:{py:[10]},defaultNoPaddingTop:{pb:[10,10,16]},defaultNoPaddingBottom:{pt:[10,10,16]},earn:{pt:[10,10,16],pb:[10,10,0]},noDefiLanding:{pt:["34px","20px"],pb:[0,9]},campaignLading:{pt:["75px"],pb:["50px"]},payHero:{pt:[6,22,17]}}})),f=(0,l.forwardRef)(((e,t)=>{let{as:n="section",variant:r="default",...o}=e;return l.createElement(a,Object.assign({as:n,ref:t,variant:r},o))}));f.displayName="Block",t.Z=f},26679:function(e,t,n){var r=n(67294),o=n(47500);t.Z=e=>{let{href:t,id:n,style:i,isExternal:s,children:c,ariaLabel:l,...a}=e;return s||t.startsWith("http")||t.startsWith("mailto:")||t.startsWith("/privacy")?r.createElement("a",Object.assign({href:t,id:n,target:"_blank",rel:"noopener noreferrer",style:i,"aria-label":l},a),c):r.createElement(o.Link,Object.assign({to:t,activeStyle:i},a),c)}},38113:function(e,t,n){n.d(t,{v:function(){return _}});var r=n(33234),o=n(96681),i=n(67294),s=n(45487);const c=new WeakMap;let l;function a({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=c.get(e))||void 0===r||r.forEach((r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})}))}function f(e){e.forEach(a)}function u(e,t){l||"undefined"!=typeof ResizeObserver&&(l=new ResizeObserver(f));const n=function(e,t,n){var r;if("string"==typeof e){let o=document;t&&((0,s.k)(Boolean(t.current),"Scope provided, but no element detected."),o=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach((e=>{let n=c.get(e);n||(n=new Set,c.set(e,n)),n.add(t),null==l||l.observe(e)})),()=>{n.forEach((e=>{const n=c.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==l||l.unobserve(e)}))}}const d=new Set;let g;function h(e){return d.add(e),g||(g=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};d.forEach((e=>e(t)))},window.addEventListener("resize",g)),()=>{d.delete(e),!d.size&&g&&(g=void 0)}}var p=n(23967),m=n(3038);const v=50,y=()=>({time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}}),w={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function b(e,t,n,r){const o=n[t],{length:i,position:s}=w[t],c=o.current,l=n.time;o.current=e["scroll"+s],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,p.Y)(0,o.scrollLength,o.current);const a=r-l;o.velocity=a>v?0:(0,m.R)(o.current-c,a)}const E={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},x={start:0,center:.5,end:1};function L(e,t,n=0){let r=0;if(void 0!==x[e]&&(e=x[e]),"string"==typeof e){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}const W=[0,0];function B(e,t,n,r){let o=Array.isArray(e)?e:W,i=0,s=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,x[e]?e:"0"]),i=L(o[0],n,r),s=L(o[1],t),i-s}var k=n(35367),S=n(82093);const z={x:0,y:0};function O(e,t,n){let{offset:r=E.All}=n;const{target:o=e,axis:i="y"}=n,s="y"===i?"height":"width",c=o!==e?function(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){const e=r.getBoundingClientRect();r=r.parentElement;const t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else{if(!(r instanceof SVGGraphicsElement))break;{const{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let o=null,i=r.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=r.parentNode;r=o}}return n}(o,e):z,l=o===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(o),a={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let f=!t[i].interpolate;const u=r.length;for(let d=0;d<u;d++){const e=B(r[d],a[s],l[s],c[i]);f||e===t[i].interpolatorOffsets[d]||(f=!0),t[i].offset[d]=e}f&&(t[i].interpolate=(0,k.s)(t[i].offset,(0,S.Y)(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}function H(e,t,n,r={}){return{measure:()=>function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){b(e,"x",t,n),b(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&O(e,n,r)},notify:()=>t(n)}}var N=n(15618);const P=new WeakMap,A=new WeakMap,X=new WeakMap,R=e=>e===document.documentElement?window:e;function Y(e,{container:t=document.documentElement,...n}={}){let r=X.get(t);r||(r=new Set,X.set(t,r));const o=y(),i=H(t,e,o,n);if(r.add(i),!P.has(t)){const e=()=>{for(const e of r)e.measure()},n=()=>{for(const e of r)e.update(N.frameData.timestamp)},o=()=>{for(const e of r)e.notify()},i=()=>{N.Wi.read(e,!1,!0),N.Wi.update(n,!1,!0),N.Wi.update(o,!1,!0)};P.set(t,i);const l=R(t);window.addEventListener("resize",i,{passive:!0}),t!==document.documentElement&&A.set(t,(c=i,"function"==typeof(s=t)?h(s):u(s,c))),l.addEventListener("scroll",i,{passive:!0})}var s,c;const l=P.get(t);return N.Wi.read(l,!1,!0),()=>{var e;(0,N.Pn)(l);const n=X.get(t);if(!n)return;if(n.delete(i),n.size)return;const r=P.get(t);P.delete(t),r&&(R(t).removeEventListener("scroll",r),null===(e=A.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}var T=n(58868);function M(e,t){(0,s.K)(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const Z=()=>({scrollX:(0,r.BX)(0),scrollY:(0,r.BX)(0),scrollXProgress:(0,r.BX)(0),scrollYProgress:(0,r.BX)(0)});function _({container:e,target:t,layoutEffect:n=!0,...r}={}){const s=(0,o.h)(Z);return(n?T.L:i.useEffect)((()=>(M("target",t),M("container",e),Y((({x:e,y:t})=>{s.scrollX.set(e.current),s.scrollXProgress.set(e.progress),s.scrollY.set(t.current),s.scrollYProgress.set(t.progress)}),{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0}))),[e,t,JSON.stringify(r.offset)]),s}}}]);