function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequirea225;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequirea225=i);var a=i.register;a("5nAwG",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.VNode=void 0;var n=i("ixQGO"),r=i("3qCuN"),o=function(){var e;function t(t){var r,o,i=t.children,a=n.__rest(t,["children"]);Object.assign(this,a);try{for(var u=n.__values(i||[]),s=u.next();!s.done;s=u.next()){var c=s.value;e.isFragment(c)?this.children=n.__spreadArray(n.__spreadArray([],n.__read(this.children||[]),!1),n.__read(c.children||[]),!1):this.children=n.__spreadArray(n.__spreadArray([],n.__read(this.children||[]),!1),[c],!1)}}catch(e){r={error:e}}finally{try{s&&!s.done&&(o=u.return)&&o.call(u)}finally{if(r)throw r.error}}var l=a.tagName,f=a.is,d=a.props;(l||(null==d?void 0:d.className)||f)&&(this.selector=[null==l?void 0:l.toLowerCase(),(null==d?void 0:d.className)&&".".concat(d.className.trim().replace(/\s+/,".")),f&&'[is="'.concat(f,'"]')].filter(Boolean).join(""))}return t.isFragment=function(e){e.key,e.node,e.children;var t=n.__rest(e,["key","node","children"]);for(var o in t)if(!(0,r.isEmpty)(t[o]))return!1;return!0},t.fromDOM=function(t){var n=this;if(t instanceof Text)return new e({node:t,text:t.nodeValue});if(!(t instanceof Element))return new e({node:t});var r=t.tagName,o=t.attributes,i=t.style,a=t.childNodes,u={node:t,tagName:r.toLowerCase(),is:t.getAttribute("is")},s=Array.from(o,function(e){var t=e.name,r=e.value;return"style"!==t&&[n.attrsMap[t]||t,r]}).filter(Boolean);s[0]&&(u.props=Object.fromEntries(s));var c=Array.from(i,function(e){return[e,i[e]]});c[0]&&(u.style=Object.fromEntries(c));var l=Array.from(a,function(t){return e.fromDOM(t)});return l[0]&&(u.children=l),new e(u)},e=t,t.propsMap={className:"class",htmlFor:"for"},t.attrsMap=Object.fromEntries(Object.entries(e.propsMap).map(function(e){return e.reverse()})),t}();e.exports.VNode=o}),a("ixQGO",function(t,n){e(t.exports,"__assign",function(){return r}),e(t.exports,"__rest",function(){return o}),e(t.exports,"__exportStar",function(){return a}),e(t.exports,"__values",function(){return u}),e(t.exports,"__read",function(){return s}),e(t.exports,"__spreadArray",function(){return c});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var i=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function a(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)}function u(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function c(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError}),a("3qCuN",function(t,n){function r(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}e(t.exports,"isEmpty",function(){return g}),e(t.exports,"toHyphenCase",function(){return _}),e(t.exports,"toCamelCase",function(){return S}),e(t.exports,"DiffStatus",function(){return i}),e(t.exports,"diffKeys",function(){return j}),e(t.exports,"groupBy",function(){return C}),e(t.exports,"templateOf",function(){return eg}),e(t.exports,"elementTypeOf",function(){return ev}),e(t.exports,"isHTMLElementClass",function(){return ew}),e(t.exports,"tagNameOf",function(){return ex}),e(t.exports,"documentReady",function(){return eR});var o,i,a={};r(a,"likeNull",function(){return y}),r(a,"isEmpty",function(){return g}),r(a,"classNameOf",function(){return v}),r(a,"assertInheritance",function(){return w}),r(a,"proxyPrototype",function(){return b}),r(a,"isUnsafeNumeric",function(){return x}),r(a,"byteLength",function(){return O}),r(a,"toHyphenCase",function(){return _}),r(a,"toCamelCase",function(){return S}),r(a,"uniqueID",function(){return M}),r(a,"objectFrom",function(){return N}),r(a,"DiffStatus",function(){return i}),r(a,"diffKeys",function(){return j}),r(a,"groupBy",function(){return C}),r(a,"likeArray",function(){return A}),r(a,"isTypedArray",function(){return E}),r(a,"makeArray",function(){return T}),r(a,"splitArray",function(){return k}),r(a,"findDeep",function(){return function e(t,n,r){for(let o of t){if(r(o))return[o];if(o[n]instanceof Array){let t=e(o[n],n,r);if(t.length)return[o,...t]}}return[]}}),r(a,"countBy",function(){return L}),r(a,"cache",function(){return D}),r(a,"createAsyncIterator",function(){return P}),r(a,"mergeStream",function(){return H}),r(a,"ByteSize",function(){return F});var u={};function s(...e){return e.reduce((e,t)=>e+t,0)}function c(...e){return s(...e)/e.length}function l(e,t=!1){let n=c(...e);return s(...e.map(e=>(e-n)**2))/(e.length-(t?1:0))}function f(e,t=!1){return Math.sqrt(l(e,t))}function d(...e){return Math.sqrt(s(...e.map(e=>e**2)))}function p(e,t){let n=e.toFixed(t+2),r=n.indexOf(".")+t+1,o=e=>e.slice(0,r-(t?0:1));if(!+n.slice(r))return o(n);let i=o((+o(n)+10**-t).toFixed(t));return i.includes(".")?i.padEnd(r,"0"):i}function m(e,t=2){let n=e.toFixed(t+2),r=n.indexOf(".");if(r<0)return t?`${n}.${"0".repeat(t)}`:n;let o=r+t+1,i=+n[o-1],a=+n[o],u=+n[o+1];if(a>5||5===a&&(u||i%2))return p(e,t);let s=n.slice(0,o-(t?0:1));return s.includes(".")?s.padEnd(o,"0"):s}r(u,"sum",function(){return s}),r(u,"averageOf",function(){return c}),r(u,"varianceOf",function(){return l}),r(u,"standardDeviationOf",function(){return f}),r(u,"hypotenuseOf",function(){return d}),r(u,"carryFloat",function(){return p}),r(u,"fixFloat",function(){return m}),r(u,"Scalar",function(){return h});class h{constructor(e){this.value=e}valueOf(){return this.value}toShortString(e=2){let{units:t,value:n}=this,{base:r,name:o}=[...t].reverse().find(({base:e})=>Math.abs(n)>=e)||t[0];return`${(n/r).toFixed(e)} ${o}`}static distanceOf(e,t){return Reflect.construct(this,[e-t])}}function y(e){return!(null!=e)||Number.isNaN(e)}function g(e){return y(e)||("object"==typeof e?!Object.keys(e).length:""===e)}let v=e=>Object.prototype.toString.call(e).slice(8,-1);function w(e,t){return e.prototype instanceof t}function b(e,t,n){let r=Object.getPrototypeOf(e);Object.setPrototypeOf(e,new Proxy(r,{set:(e,o,i,a)=>(o in a?Reflect.set(r,o,i,a):t[o]=i,n?.(o,i),!0),get:(e,n,r)=>n in t?t[n]:Reflect.get(e,n,r)}))}function x(e){return/^[\d.]+$/.test(e)&&e.localeCompare(Number.MAX_SAFE_INTEGER+"",void 0,{numeric:!0})>0}function O(e){return e.replace(/[^\u0021-\u007e\uff61-\uffef]/g,"xx").length}function _(e){return e.replace(/[A-Z]+|[^A-Za-z][A-Za-z]/g,(e,t)=>`${t?"-":""}${(e[1]||e[0]).toLowerCase()}`)}function S(e,t=!1){return e.replace(/^[A-Za-z]|[^A-Za-z][A-Za-z]/g,(e,n)=>n||t?(e[1]||e[0]).toUpperCase():e.toLowerCase())}function M(){return(Date.now()+parseInt((Math.random()+"").slice(2))).toString(36)}function N(e,t){return Object.fromEntries(e.map((e,n)=>[t[n],e]))}function j(e,t){let n={};for(let t of e)n[t]=-1;for(let e of t)n[e]||=0,n[e]+=1;return{map:n,group:C(Object.entries(n),([e,t])=>t)}}function A(e){if(y(e))return!1;let{length:t}=e;return"number"==typeof t&&t>=0&&~~t===t}(o=i||(i={}))[o.Old=-1]="Old",o[o.Same=0]="Same",o[o.New=1]="New";let E=e=>e instanceof Object.getPrototypeOf(Int8Array);function T(e){return e instanceof Array?e:y(e)?[]:A(e)?Array.from(e):[e]}let k=(e,t)=>e.reduce((e,n,r)=>((e[~~(r/t)]||=[])[r%t]=n,e),[]);function C(e,t){let n={};for(let r of e){let e=t instanceof Function?t(r):r[t];for(let t of(e instanceof Array||(e=[e]),new Set(e.filter(e=>null!=e))))(n[t]=n[t]||[]).push(r)}return n}function L(e,t){return Object.fromEntries(Object.entries(C(e,t)).map(([e,{length:t}])=>[e,t]))}function D(e,t){var n;return function(...r){return null!=n||(console.trace(`[Cache] execute: ${t}`),Promise.resolve(n=e.call(this,()=>n=void 0,...r)).then(e=>console.log(`[Cache] refreshed: ${t} => ${e}`),e=>console.error(`[Cache] failed: ${e?.message||e}`))),n}}async function*P(e){let{promise:t,resolve:n,reject:r}=Promise.withResolvers(),o=Symbol("done"),i=Promise.withResolvers(),a=e({next:e=>n(e),error:e=>{r(e),a?.()},complete:()=>{i.resolve(o),a?.()}});for(;;){let e=await Promise.race([t,i.promise]);if(e===o)return;yield e,{promise:t,resolve:n,reject:r}=Promise.withResolvers()}}async function*H(...e){for(var t=e.map(e=>e());t[0];){let e=[];for(let n=0,r;r=t[n];n++){let{done:t,value:o}=await r.next();t?e.push(n):yield o}t=t.filter((t,n)=>!e.includes(n))}}class F extends h{constructor(...e){super(...e),this.units=["","K","M","G","T","P","E","Z","Y"].map((e,t)=>({base:1024**t,name:e+"B"}))}}var R={};r(R,"Second",function(){return B}),r(R,"Minute",function(){return z}),r(R,"Quarter",function(){return $}),r(R,"Hour",function(){return V}),r(R,"Day",function(){return I}),r(R,"Week",function(){return W}),r(R,"Year",function(){return Y}),r(R,"Month",function(){return q}),r(R,"Season",function(){return U}),r(R,"Timestamp",function(){return Z}),r(R,"diffTime",function(){return G}),r(R,"formatDate",function(){return Q}),r(R,"changeMonth",function(){return K});let B=1e3,z=6e4,$=9e5,V=36e5,I=864e5,W=6048e5,Y=31536e6,q=2628e6,U=7884e6;class Z extends h{toShortString(e=0){return super.toShortString(e)}constructor(...e){super(...e),this.units=[{base:B,name:"s"},{base:z,name:"m"},{base:V,name:"H"},{base:I,name:"D"},{base:W,name:"W"},{base:q,name:"M"},{base:Y,name:"Y"}]}}function G(e,t=new Date){let[n,r]=Z.distanceOf(+new Date(e),+new Date(t)).toShortString().split(/\s+/);return{distance:+n,unit:r}}function J(e){return e=+e+"",t=>(e.length<t.length?e.padStart(t.length,"0"):e).slice(-Math.max(t.length,2))}function Q(e=new Date,t="YYYY-MM-DD HH:mm:ss"){let[n,r,o,i,a,u,s]=(e=new Date(+(e=e instanceof Date?e:new Date(e))-e.getTimezoneOffset()*z)).toJSON().split(/\D/);return t.replace(/ms/g,s).replace(/Y+/g,J(n)).replace(/M+/g,J(r)).replace(/D+/g,J(o)).replace(/H+/g,J(i)).replace(/m+/g,J(a)).replace(/s+/g,J(u))}function K(e,t){let n=(e=new Date(e)).getMonth()+t;return e.setFullYear(e.getFullYear()+Math.floor(n/12)),t=n%12,e.setMonth(t<0?12+t:t),e}var X={};function ee(e){function t(e){if("string"==typeof e&&/^\d+(-\d{1,2}){1,2}/.test(e)){let t=new Date(e);if(!Number.isNaN(+t))return t}return e}let n=t(e);if("string"!=typeof n||x(n))return n;try{return JSON.parse(e,(e,n)=>t(n))}catch{return e}}function et(e){let t=ee(e);if("string"!=typeof t)return t;let n=+t;return Number.isNaN(n)||n+""!==t?t:n}function en(e,t,n=","){let r=e.trim().split(/[\r\n]+/).map(e=>{let t=[];do{let r;if('"'===e[0]||"'"===e[0])r=function(e){let t=e[0],n=e.indexOf(t,1);if(n<0)throw SyntaxError(`A ${t} is missing`);return e.slice(1,n)}(e),e=e.slice(r.length+3);else{let t=e.indexOf(n);t>-1?(r=e.slice(0,t),e=e.slice(t+1)):(r=e,e="")}t.push(et(r.trim()))}while(e)return t});return t?r.slice(1).map(e=>e.reduce((e,t,n)=>(e[r[0][n]]=t,e),{})):r}r(X,"parseJSON",function(){return ee}),r(X,"toJSValue",function(){return et}),r(X,"parseTextTable",function(){return en});var er={};function eo(e){return new URL(e,document.baseURI).origin!==location.origin}function ei(e=window.location.search,t=!0){let n=e.split(/\?|#/),r=new URLSearchParams(n[1]||n[0]);return Object.fromEntries([...r.keys()].map(e=>{let n=t?r.getAll(e).map(ee):r.getAll(e);return[e,n.length<2?n[0]:n]}))}r(er,"isXDomain",function(){return eo}),r(er,"parseURLData",function(){return ei}),r(er,"buildURLData",function(){return eu}),r(er,"blobOf",function(){return es}),r(er,"blobFrom",function(){return el});let ea=e=>"string"==typeof e?e:A(e)?T(e)+"":JSON.stringify(e);function eu(e){return e instanceof Array||(e=Object.entries(e)),new URLSearchParams(e.map(([e,t])=>!g(t)&&[e,ea(t)]).filter(Boolean))}async function es(e){return(await fetch(e+"")).blob()}let ec=/^data:(.+?\/(.+?))?(;base64)?,([\s\S]+)/;function el(e){var[t,n,r,o,i]=ec.exec(e)||[];let a=new ArrayBuffer((i=o?atob(i):i).length),u=new Uint8Array(a);for(let e=0;i[e];e++)u[e]=i.charCodeAt(e);return new Blob([a],{type:n})}var ef={};r(ef,"makeCRC32",function(){return ep}),r(ef,"makeSHA",function(){return em});let ed=Array.from(Array(256),(e,t)=>{for(var n=0;n<8;n++)t=1&t?t>>1&2147483647^3988292384:t>>1&2147483647;return t});function ep(e){var t=4294967295;for(let n of e)t=t>>8&16777215^ed[255&t^n.charCodeAt(0)];return"0x"+((4294967295^t)>>>0).toString(16)}if("object"==typeof self){if("msCrypto"in globalThis){let{subtle:e}=globalThis.crypto=globalThis.msCrypto;for(let t in e){let n=e[t];n instanceof Function&&(e[t]=function(){let e=n.apply(this,arguments);return new Promise((t,n)=>{e.oncomplete=({target:e})=>t(e.result),e.onabort=e.onerror=n})})}}let{crypto:e}=globalThis;!e?.subtle&&e?.webkitSubtle&&(e.subtle=e.webkitSubtle)}async function em(e,t="SHA-1"){return Array.from(new Uint8Array(await crypto.subtle.digest(t,new TextEncoder().encode(e))),e=>e.toString(16).padStart(2,"0")).join("")}var eh={};r(eh,"templateOf",function(){return eg}),r(eh,"elementTypeOf",function(){return ev}),r(eh,"isHTMLElementClass",function(){return ew}),r(eh,"tagNameOf",function(){return ex}),r(eh,"isDOMReadOnly",function(){return eO}),r(eh,"parseDOM",function(){return e_}),r(eh,"stringifyDOM",function(){return eS}),r(eh,"walkDOM",function(){return eM}),r(eh,"getVisibleText",function(){return eN}),r(eh,"splitPages",function(){return ej}),r(eh,"importCSS",function(){return eA}),r(eh,"stringifyCSS",function(){return function e(t,n=0,r="    "){let o=r.repeat(n);return Object.entries(t).map(([t,i])=>"object"!=typeof i?`${o}${_(t)}: ${i};`:`${o}${t} {
${e(i,n+1,r)}
${o}}`).join("\n")}}),r(eh,"insertToCursor",function(){return eE}),r(eh,"scrollTo",function(){return eT}),r(eh,"watchScroll",function(){return ek}),r(eh,"watchVisible",function(){return eC}),r(eh,"formToJSON",function(){return function e(t){let n={};for(let r of t.elements){let{type:o,name:i,value:a,checked:u,defaultValue:s,selectedOptions:c,files:l}=r;if(!i||""===a)continue;let f="fieldset"!==o&&r.closest("fieldset");if(f&&f!==t)continue;let d=a;switch(o){case"radio":case"checkbox":if(!u)continue;d=!s||et(s);break;case"select-multiple":d=Array.from(c,({value:e})=>et(e));break;case"fieldset":d=e(r);break;case"file":d=l&&Array.from(l);break;case"date":case"datetime-local":case"month":case"hidden":case"number":case"range":case"select-one":d=et(a)}i in n?n[i]=[].concat(n[i],d):n[i]=d instanceof Array&&g(d[1])?d[0]:d}return n}});let ey={};function eg(e){if(ey[e])return ey[e];let t=document.createElement("template");return t.innerHTML=`<${e} />`,ey[e]=t.content.firstElementChild}function ev(e){let t=eg(e);return t instanceof HTMLElement&&!(t instanceof HTMLUnknownElement)?"html":"xml"}function ew(e){return w(e,HTMLElement)}let eb=new WeakMap;function ex(e){let t=eb.get(e);if(t)return t;var{tagName:n}=new e;return eb.set(e,n=n.toLowerCase()),n}function eO(e,t){let n=[[HTMLLinkElement,["sizes"]],[HTMLIFrameElement,["sandbox"]],[HTMLObjectElement,["form"]],[HTMLInputElement,["form","list"]],[HTMLButtonElement,["form"]],[HTMLSelectElement,["form"]],[HTMLTextAreaElement,["form"]],[HTMLOutputElement,["form"]],[HTMLFieldSetElement,["form"]]],r=eg(e);for(let[e,o]of n)if(r instanceof e&&o.includes(t))return!0;return!1}function e_(e){let t=document.createElement("template");return t.innerHTML=e,[...t.content.childNodes].map(e=>(e.remove(),e))}function eS(e){return new XMLSerializer().serializeToString(e).replace(/ xmlns="http:\/\/www.w3.org\/1999\/xhtml"/g,"")}function*eM(e,t){let n=[...e.childNodes];for(let r of((g(t)||t===e.nodeType)&&(yield e),n))yield*eM(r,t)}function eN(e){var t="";for(let{nodeType:n,parentElement:r,nodeValue:o}of eM(e))if(n===Node.TEXT_NODE&&"true"!==r.getAttribute("aria-hidden")){let{width:e,height:n}=r.getBoundingClientRect();e&&n&&(t+=o.trim().replace(/\s+/g," "))}return t}function ej({offsetWidth:e,children:t},n=841.89,r=595.28){let o=n/r*e;var i=0;return[...t].reduce((e,t)=>{var{offsetTop:n,offsetHeight:r}=t;let a=((n+=i)+r)/o,u=~~a;return~~(n/o)!==u&&(i+=r-a),(e[u]||=[]).push(t),e},[])}function eA(e,{alternate:t,...n}={}){let r=[...document.styleSheets].find(({href:t})=>t===e);if(r)return Promise.resolve(r);let o=document.createElement("link");return new Promise((r,i)=>{o.onload=()=>r(o.sheet),o.onerror=(e,t,n,r,o)=>i(o),Object.assign(o,n),o.rel=(t?"alternate ":"")+"stylesheet",o.href=e,document.head.append(o)})}function eE(...e){let t=document.createDocumentFragment();for(let n of(t.append(...e),eM(t)))(![1,3,11].includes(n.nodeType)||["meta","title","link","script"].includes(n.nodeName.toLowerCase()))&&n.replaceWith(...n.childNodes);let n=globalThis.getSelection();if(!n)return;let r=n.getRangeAt(0);r.deleteContents(),r.insertNode(t)}function eT(e,t,n,r){let[o,i]=/^#(.+)/.exec(e)||[];"top"===i?window.scrollTo({top:0,left:0,behavior:"smooth"}):(t||document).querySelector(i?`[id="${i}"]`:e)?.scrollIntoView({behavior:"smooth",block:n,inline:r})}function ek(e,t,n=6){return Array.from(e.querySelectorAll(Array.from(Array(n),(e,t)=>`h${++t}`)+""),e=>(new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;let n=e.target;t({target:n,links:[...n.ownerDocument.querySelectorAll(`[href="#${n.id}"]`)]})}).observe(e),e.id.trim()||(e.id=e.textContent.trim().replace(/\W+/g,"-")),{level:+e.tagName[1],id:e.id,text:e.textContent.trim()}))}function eC(e,t){var n="visible"===document.visibilityState?1:0;function r(e){(3===e||3===n)&&t(3===e),n=e}new IntersectionObserver(([{isIntersecting:e}])=>r(e?2|n:1&n)).observe(e),document.addEventListener("visibilitychange",()=>r("visible"===document.visibilityState?1|n:2&n))}var eL={};function eD(e=1){return new Promise(t=>setTimeout(t,1e3*e))}function eP(e,t=1){var n=!1;return(async()=>{for(;!n;){let n=e();n instanceof Promise&&await n,await eD(t)}})(),()=>n=!0}r(eL,"sleep",function(){return eD}),r(eL,"asyncLoop",function(){return eP});var eH={};function eF(e,t){return function(n){for(var r,o=n.composedPath();(r=o.shift())&&r!==n.currentTarget;)if(r instanceof HTMLElement&&r.matches(e))return t.call(this,n,r,n.detail)}}r(eH,"delegate",function(){return eF}),r(eH,"documentReady",function(){return eR}),r(eH,"promisify",function(){return eB}),r(eH,"createMessageServer",function(){return ez}),r(eH,"createMessageClient",function(){return e$}),r(eH,"serviceWorkerUpdate",function(){return eV});let eR="undefined"!=typeof window?new Promise(e=>{function t(){document?.removeEventListener("DOMContentLoaded",t),window.removeEventListener("load",t),e()}document?.addEventListener("DOMContentLoaded",t),window.addEventListener("load",t),setTimeout(function t(){document?.readyState==="complete"?e():setTimeout(t)})}):Promise.resolve();function eB(e,t){return new Promise((n,r)=>{function o(e){n(e),a()}function i(e){r(e),a()}function a(){t.removeEventListener(e+"end",o),t.removeEventListener(e+"cancel",i)}t.addEventListener(e+"end",o),t.addEventListener(e+"cancel",i)})}function ez(e){async function t({data:{type:t,id:n,...r},source:o,origin:i}){var a=e[t]?.(r);a instanceof Promise&&(a=await a),o.postMessage({...a,id:n},i)}return globalThis.addEventListener("message",t),()=>globalThis.removeEventListener("message",t)}function e$(e,t="*"){return(n,r)=>new Promise(o=>{let i=M();globalThis.addEventListener("message",function e({data:{id:t,...n}}){t===i&&(o(n),globalThis.removeEventListener("message",e))}),e.postMessage({id:i,type:n,...r},t)})}function eV(e){return new Promise(t=>{if(e.waiting)return t(e.waiting);e.onupdatefound=()=>e.installing?.addEventListener("statechange",function(){"installed"===this.state&&navigator.serviceWorker.controller&&t(this)})})}var eI={};r(eI,"PageVector",function(){return eW}),r(eI,"getSwipeVector",function(){return eY}),r(eI,"durationOf",function(){return eq}),r(eI,"watchMotion",function(){return eU}),r(eI,"transitIn",function(){return eJ}),r(eI,"animateIn",function(){return eQ}),r(eI,"transitOut",function(){return eK}),r(eI,"animateOut",function(){return eX});class eW{constructor(e,t){this.from=e,this.to=t}get length(){let{from:e,to:t}=this;return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)+(null!=t.z?Math.pow(t.z-e.z,2):0))}get direction(){let{from:e,to:t}=this,n=t.x-e.x,r=t.y-e.y,o=t.z-e.z,i=Math.abs(n),a=Math.abs(r),u=Math.abs(o);switch(isNaN(u)?Math.max(i,a):Math.max(i,a,u)){case i:return n>0?"right":"left";case a:return r>0?"forward":"backward";case u:return o>0?"up":"down"}}}function eY(e,t,n=6*parseInt(getComputedStyle(document.body).fontSize)){let r=new eW(e,t);if(r.length>=n&&!getSelection()?.toString().trim())return r}function eq(e,t){let{transitionDuration:n,animationDuration:r}=getComputedStyle(t),o="animation"===e?r:n;return parseFloat(o)*("ms"===o.slice(-2)?1:1e3)}function eU(e,t){return Promise.race([eB(e,t).catch(e=>Promise.resolve(e)),new Promise(n=>setTimeout(n,eq(e,t)))])}function eZ(e,t,n,r){t.style.display=r;let o=eU(e,t);return new Promise(e=>requestAnimationFrame(()=>{t.classList.add(n),o.then(e)}))}async function eG(e,t,n,r){let o=eU(e,t);t.classList.remove(n),await o,r?t.remove():t.style.display="none"}function eJ(e,t,n="block"){return eZ("transition",e,t,n)}function eQ(e,t,n="block"){return eZ("animation",e,t,n)}function eK(e,t,n){return eG("transition",e,t,n)}function eX(e,t,n){return eG("animation",e,t,n)}var e0={};async function e1(e,t){console.log(e),console.time(e),await t(),console.timeEnd(e)}async function e2(e,t,n=3){async function r(){throw await eD(n),RangeError("Timed out")}console.time(e="    "+e);try{return await Promise.race([t(t=>console.assert(t,e)),r()])}finally{console.timeEnd(e)}}r(e0,"describe",function(){return e1}),r(e0,"it",function(){return e2})}),a("1Qr9n",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.DOMRenderer=void 0;var n=i("ixQGO"),r=i("3qCuN"),o=i("5nAwG"),a=function(){function e(){var e=this;this.eventPattern=/^on[A-Z]/,this.ariaPattern=/^aira[A-Z]/,this.treeCache=new WeakMap,this.keyOf=function(e,t){var n=e.key,r=e.text,o=e.props,i=e.selector;return(null==n?void 0:n.toString())||(null==o?void 0:o.id)||(r||i||"")+t},this.vNodeOf=function(t,n){return t.find(function(t,r){return"".concat(e.keyOf(t,r))===String(n)})},this.propsKeyOf=function(t){return t.startsWith("aria-")?(0,r.toCamelCase)(t):e.eventPattern.test(t)?t.toLowerCase():t}}return e.prototype.updateProps=function(e,t,o,i,a){void 0===t&&(t={}),void 0===o&&(o={});var u,s,c,l,f=(0,r.diffKeys)(Object.keys(t),Object.keys(o)).group;try{for(var d=n.__values(f[r.DiffStatus.Old]||[]),p=d.next();!p.done;p=d.next()){var m=n.__read(p.value,1)[0];null==i||i(e,m)}}catch(e){u={error:e}}finally{try{p&&!p.done&&(s=d.return)&&s.call(d)}finally{if(u)throw u.error}}try{for(var h=n.__values(n.__spreadArray(n.__spreadArray([],n.__read(f[r.DiffStatus.Same]||[]),!1),n.__read(f[r.DiffStatus.New]||[]),!1)),y=h.next();!y.done;y=h.next()){var m=n.__read(y.value,1)[0];t[m]!==o[m]&&(a instanceof Function?a(e,m,o[m]):Reflect.set(e,m,o[m]))}}catch(e){c={error:e}}finally{try{y&&!y.done&&(l=h.return)&&l.call(h)}finally{if(c)throw c.error}}},e.prototype.createNode=function(e,t){if(e.text)return e.node=document.createTextNode(e.text);var n,r,o=e.selector&&(null===(n=null==t?void 0:t[e.selector])||void 0===n?void 0:n.shift());e.node=e.tagName?(null==o?void 0:o.node)||document.createElement(e.tagName,{is:e.is}):document.createDocumentFragment();var i=this.patch(o||{tagName:e.tagName,node:e.node},e).node;return i&&(null===(r=e.ref)||void 0===r||r.call(e,i)),i},e.prototype.deleteNode=function(e){var t=e.ref,n=e.node,r=e.children;n instanceof DocumentFragment?null==r||r.forEach(this.deleteNode):n&&(n.remove(),null==t||t())},e.prototype.commitChildren=function(e,t){var r,o;try{for(var i=n.__values(n.__spreadArray([],n.__read(e.childNodes),!1)),a=i.next();!a.done;a=i.next()){var u=a.value,s=t.indexOf(u);if(!(s<0)){if(0===s){t.shift();continue}var c=t.slice(0,s);c[0]&&(u.before.apply(u,n.__spreadArray([],n.__read(c),!1)),t=t.slice(s+1))}}}catch(e){r={error:e}}finally{try{a&&!a.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}t[0]&&e.append.apply(e,n.__spreadArray([],n.__read(t),!1))},e.prototype.updateChildren=function(e,t,o){var i,a,u=this,s=(0,r.diffKeys)(t.map(this.keyOf),o.map(this.keyOf)),c=s.map,l=s.group,f=l[r.DiffStatus.Old]&&(0,r.groupBy)(l[r.DiffStatus.Old].map(function(e){var r=n.__read(e,1)[0];return u.vNodeOf(t,r)}),function(e){return e.selector+""}),d=o.map(function(e,n){var o=u.keyOf(e,n);if(c[o]!==r.DiffStatus.Same)return u.createNode(e,f);var i=u.vNodeOf(t,o);return null!=e.text?e.node=i.node:u.patch(i,e).node});for(var p in f)try{for(var m=(i=void 0,n.__values(f[p])),h=m.next();!h.done;h=m.next()){var y=h.value;this.deleteNode(y)}}catch(e){i={error:e}}finally{try{h&&!h.done&&(a=m.return)&&a.call(m)}finally{if(i)throw i.error}}this.commitChildren(e,d)},e.prototype.handleCustomEvent=function(e,t){var n;Object.defineProperty(e,"on".concat(t),{set:function(r){n&&e.removeEventListener(t,n),e.addEventListener(t,n=r)},get:function(){return n}})},e.prototype.patch=function(e,t){var n=this,i=e.tagName,a=(0,r.templateOf)(i)&&"xml"===(0,r.elementTypeOf)(i);return this.updateProps(e.node,e.props,t.props,function(e,t){return n.eventPattern.test(t)?e[t.toLowerCase()]=null:e.removeAttribute(n.ariaPattern.test(t)?(0,r.toHyphenCase)(t):o.VNode.propsMap[t]||t)},function(e,t,r){if(a||t.includes("-"))e.setAttribute(t,r);else try{var o=n.propsKeyOf(t);!n.eventPattern.test(t)||o in e||n.handleCustomEvent(e,o.slice(2)),e[o]=r}catch(n){e.setAttribute(t,r)}}),this.updateProps(e.node.style,e.style,t.style,function(e,t){return e.removeProperty(t)}),this.updateChildren(e.node,e.children||[],t.children||[]),t.node=e.node,t},e.prototype.render=function(e,t){void 0===t&&(t=document.body);var r=this.treeCache.get(t)||o.VNode.fromDOM(t);return r=this.patch(r,new o.VNode(n.__assign(n.__assign({},r),{children:[e]}))),this.treeCache.set(t,r),r},e.prototype.renderToStaticMarkup=function(e){var t=document.implementation.createHTMLDocument().body;return this.render(e,t),t.innerHTML},e}();e.exports.DOMRenderer=a});var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.Fragment=u.jsxDEV=u.jsxs=u.jsx=void 0;var s=i("ixQGO"),c=i("3qCuN"),l=i("5nAwG");function f(e,t,n){var r=t.ref,o=t.is,i=t.style,a=t.children,u=s.__rest(t,["ref","is","style","children"]);"function"==typeof e&&(0,c.isHTMLElementClass)(e)&&(e=(0,c.tagNameOf)(e));var f={key:n,ref:r,is:o,style:i,children:a=[a].flat(1/0).map(function(e){return e instanceof Object?new l.VNode(e):0===e||e?new l.VNode({text:e.toString()}):void 0}).filter(Boolean)};return"string"==typeof e?new l.VNode(s.__assign(s.__assign({},f),{tagName:e,props:u})):e(s.__assign(s.__assign({},f),u))}u.jsx=f,u.jsxs=f,u.jsxDEV=f,u.Fragment=function(e){var t=e.key,n=e.ref,r=e.is,o=e.style,i=e.children,a=s.__rest(e,["key","ref","is","style","children"]);return new l.VNode({key:t,ref:n,is:r,props:(0,c.isEmpty)(a)?void 0:a,style:o,children:i})};var d={};Object.defineProperty(d,"__esModule",{value:!0});var s=i("ixQGO");s.__exportStar(i("5nAwG"),d),s.__exportStar(i("1Qr9n"),d);var c=i("3qCuN");const p=({name:e,description:t,author:n,link:r})=>(0,u.jsxs)("li",{className:"guide",children:[(0,u.jsxs)("h3",{className:"mb-1",children:["《",e,"》"]}),(0,u.jsx)("p",{children:t}),(0,u.jsxs)("p",{children:[(0,u.jsx)("strong",{children:"作者："})," ",n]}),(0,u.jsx)("p",{children:(0,u.jsx)("a",{className:"text-decoration-none",href:r,target:"_blank",children:"阅读指南"})}),(0,u.jsx)("p",{})]}),m=({id:e,title:t,data:n})=>(0,u.jsxs)("section",{id:e,children:[(0,u.jsx)("h2",{className:"border-bottom border-black border-2 pb-2",children:t}),(0,u.jsx)("ul",{className:"d-flex flex-column gap-4 guides",children:n.map(e=>(0,u.jsx)(p,{...e}))})]});var h={};h=JSON.parse('[{"name":"成人高尿酸血症与痛风食养指南","description":"本指南主要面向未合并肾功能不全等相关合并症的成人高尿酸血症、痛风人群以及基层卫生工作者(包括营养指导人员)，为高尿酸血症与痛风的预防与改善提供食养指导，不可代替药物治疗。有其他合并症的高尿酸血症与痛风人群，可参考本指南制定食养方案，同时应在医生或营养指导人员等专业人员的指导下，根据患者具体情况设计个性化食养方案。","author":"国家卫生健康委办公厅","link":"http://www.nhc.gov.cn/cms-search/downFiles/6c8afb3b8981447c8e96a65143eefedd.pdf"},{"name":"痛風的調理食譜","description":"5个菜谱。","author":"澳门卫生局中医注册生","link":"https://www.dsedj.gov.mo/cep/lifelong_learning/35/46-49.pdf"},{"name":"糖尿病痛風飲食怎麼微解封","description":"新陳代謝科門診部分病人同時存有血糖控制跟高尿酸血症的問題跟困擾，今日我們就這個問題來教您怎麼吃。","author":" 高雄長庚營養治療科營養師吳靜宜","link":"https://www.cgmh.org.tw/cgmn/cgmn_file/2204013.pdf"},{"name":"低普林飲食（痛風飲食）","description":"低普林飲食是一種能減少攝取富含普林食物，並能提供足夠營養素的飲食。配合藥物減輕血液中尿酸的含量，減輕痛楚。適用症狀1. 痛風症。2. 高尿酸血症。3. 尿酸鹽沉積過多所引起之泌尿道結石。","author":" 2001年06月高雄榮總營養室製訂，2024年02月高雄榮總營養室四修","link":"https://wwwfs.vghks.gov.tw/Download.ashx?u=LzAwMS9WZ2hrc1VwbG9hZEZpbGVzLzM0OS9yZWxmaWxlLzExNjg1LzIxMDQvYjM2YTM3Y2UtYjdjNy00NjBkLTljOTgtNjM0YzNlM2RmMjg0LnBkZg%3D%3D&n=5L2O5pmu5p6X6aOy6aOfLnBkZg%3D%3D&icon=.pdf"},{"name":"高尿酸血症与痛风患者膳食指导","description":"本标准规定了高尿酸血症及痛风患者膳食指导原则、能量及要营养素推荐摄入量。本标准适用于对未合并肾功能不全等其他疾病的成年高尿酸血症及痛风患者进行膳食指导。. 痛風症。2. 高尿酸血症。3. 尿酸鹽沉積過多所引起之泌尿道結石。","author":" 中华人民共和国卫生行业标准WS/T 560—2017本标准起草单位：中国医学科学院北京协和医院、北京医院、解放军总医院、中国医科大学附属医院、河北省人民医院、中国医学科学院信息研究所。本标准主要起草人：于康、李融融、李春微、赵维纲、曾小峰、侯勇、孙明晓、欧凤荣、张晓伟、张燕舞、张慧、刘燕萍。","link":"https://www.chinacdc.cn/jkzt/yyhspws/xzdc/201708/P020170807448453838902.pdf"}]');var y={};y=JSON.parse('[{"name":"輔導癌症患者及家屬技巧","description":"輔導癌症患者及家屬技巧","author":"李慧芬 (香港癌症基金會港島癌協服務中心督導經理)","link":"https://www.healthyhkec.org/download/2017-02-24/pisa_lee1.pdf"},{"name":"焦虑和癌症","description":"焦虑可能会使您更难以对护理做出决定，或应对您的疾病。因此，作为整体癌症治疗的一部分，识别和管理焦虑情绪非常重要。","author":"新加坡国立癌症中心（NCCS）","link":"https://www.nccs.com.sg/patient-care/Documents/Chinese-Cancer%20and%20emotions_Anxiety.pdf"},{"name":"社会心理支持系列大笑疗法抵抗. 卓壮. 幸存.","description":"笑疗能帮助纾解患者的焦虑，压力及抑郁状态。同时， 笑疗也能帮助提高癌症患者及幸存者的生活质量和增强患者对抗癌症的 意志力。","author":"马来西亚国家癌症协会 Jefferson Ng Khai Qiang, Chew Wan Ling, Lee Xin Yun, Mandy Thoo, Murallitharan M.","link":"https://cancer.org.my/wp-content/uploads/2021/09/Laughter-Wellness-Booklet_Mandarin.pdf"}]');var g={};function v(e){let n={a:"a",h1:"h1",p:"p",...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.h1,{children:"癌症患者支援数据库"}),"\n",(0,u.jsx)(n.p,{children:(0,u.jsx)(n.a,{href:"https://github.com/xycjscs/KnowledgeBase-xiaoyibao",children:"访问 GitHub 页面"})}),"\n",(0,u.jsx)(m,{id:"nutrition",title:"营养建议",data:t(g)}),"\n",(0,u.jsx)(m,{id:"psychological",title:"心理支持",data:t(y)}),"\n",(0,u.jsx)(m,{id:"hyperuricemia",title:"高尿酸血症指南",data:t(h)})]})}function w(e={}){let{wrapper:t}=e.components||{};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(v,{...e})}):v(e)}g=JSON.parse('[{"name":"給癌症病人的飲食指引","description":"增強病人對治療的承受力和加速復原","author":"香港防癌会","link":"https://www.hkacs.org.hk/uploadimages/download/00971/20PPfood_20Oct.pdf"},{"name":"患癌期间的健康饮食","description":"《患癌期间的健康饮食》是专门为帮助您、您的家人或朋友应对由癌症本身及 癌症治疗所导致的饮食问题而编写。","author":"新加坡癌症协会","link":"https://static.abbottnutrition.com/cms/abbottadult.com.sg/MEDIA/PatientBooklet_edit_chinese.pdf"},{"name":"營養滿分，抗癌加分","description":"內容涵括了病人在治療前、治療期間和治療後，如何正確 的飲食，相信面對癌症治療的病人，能對「吃甚麼?」「如何進食?」有更完整 而正確的資訊，是一本相當有用的參考書。","author":"癌症希望協會","link":"https://www1.cgmh.org.tw/khcc/datas/%B6%BC%AD%B9%BA%A1%A4%C0%A1A%A7%DC%C0%F9%A5%5B%A4%C0.pdf"},{"name":"癌症与营养","description":"癌症病人摄取营养的目标，癌症病人的特殊营养需求，癌症治疗副作用的饮食应对方法。","author":"新加坡国立癌症中心","link":"https://www.nccs.com.sg/patient-care/supportive-care/Documents/Cancer_and_Nutrition_Chinese.pdf"}]'),(0,c.documentReady).then(()=>new(0,d.DOMRenderer)().render((0,u.jsx)(w,{})));
//# sourceMappingURL=index.d68f88e6.js.map