let t,e,n=0,l=!1;const o="undefined"!=typeof window?window:{},r=o.document||{head:{}},s={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},c=(()=>(r.head.attachShadow+"").indexOf("[native")>-1)(),i=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),a=new WeakMap,u=t=>a.get(t),f=(t,e)=>a.set(e.o=t,e),m=(t,e)=>e in t,d=t=>console.error(t),y=new Map,p=new Map,$=[],w=[],h=[],_=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&s.t?g(v):s.raf(v))},b=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(o){d(o)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},v=()=>{n++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){d(e)}t.length=0})($);const t=2==(6&s.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;b(w,t),b(h,t),w.length>0&&(h.push(...w),w.length=0),(l=$.length+w.length+h.length>0)?s.raf(v):n=0},g=t=>Promise.resolve().then(t),j=_(w,!0),S={},M=t=>"object"==(t=typeof t)||"function"===t,R=()=>o.CSS&&o.CSS.supports&&o.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_my_counter("./css-shim-6aaf713d-9b13816a.js").then(()=>{s.s=o.__stencil_cssshim}),P=()=>{s.s=o.__stencil_cssshim;const t=Array.from(r.querySelectorAll("script")).find(t=>new RegExp("/my-counter(\\.esm)?\\.js($|\\?|#)").test(t.src)||"my-counter"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,o.location.href)).href,U(e.resourcesUrl,t),window.customElements?Promise.resolve(e):__sc_import_my_counter("./dom-76cc7c7d-0a082895.js").then(()=>e))},U=(t,e)=>{const n=`__sc_import_${"my-counter".replace(/\s|-/g,"_")}`;try{o[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const s=new Map;o[n]=l=>{const c=new URL(l,t).href;let i=s.get(c);if(!i){const t=r.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${c}'; window.${n}.m = m;`],{type:"application/javascript"})),i=new Promise(e=>{t.onload=()=>{e(o[n].m),t.remove()}}),s.set(c,i),r.head.appendChild(t)}return i}}},k=new WeakMap,L=t=>"sc-"+t,O=(t,e,...n)=>{let l=null,o=!1,r=!1,s=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!M(l))&&(l=String(l)),o&&r?s[s.length-1].i+=l:s.push(o?x(null,l):l),r=o)};if(c(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}const i=x(t,null);return i.u=e,s.length>0&&(i.p=s),i},x=(t,e)=>({t:0,$:t,i:e,h:null,p:null,u:null}),C={},A=(t,e,n,l,r,c)=>{if(n===l)return;let i=m(t,e),a=e.toLowerCase();if("class"===e){const e=t.classList,o=T(n),r=T(l);e.remove(...o.filter(t=>t&&!r.includes(t))),e.add(...r.filter(t=>t&&!o.includes(t)))}else if(i||"o"!==e[0]||"n"!==e[1]){const o=M(l);if((i||o&&null!==l)&&!r)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?i=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(u){}null==l||!1===l?t.removeAttribute(e):(!i||4&c||r)&&!o&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):m(o,a)?a.slice(2):a[2]+e.slice(3),n&&s.rel(t,e,n,!1),l&&s.ael(t,e,l,!1)},E=/\s/,T=t=>t?t.split(E):[],F=(t,e,n,l)=>{const o=11===e.h.nodeType&&e.h.host?e.h.host:e.h,r=t&&t.u||S,s=e.u||S;for(l in r)l in s||A(o,l,r[l],void 0,n,e.t);for(l in s)A(o,l,r[l],s[l],n,e.t)},W=(e,n,l)=>{let o,s,c=n.p[l],i=0;if(null!==c.i)o=c.h=r.createTextNode(c.i);else if(o=c.h=r.createElement(c.$),F(null,c,!1),null!=t&&o["s-si"]!==t&&o.classList.add(o["s-si"]=t),c.p)for(i=0;i<c.p.length;++i)s=W(e,c,i),s&&o.appendChild(s);return o},q=(t,n,l,o,r,s)=>{let c,i=t;for(i.shadowRoot&&i.tagName===e&&(i=i.shadowRoot);r<=s;++r)o[r]&&(c=W(null,l,r),c&&(o[r].h=c,i.insertBefore(c,n)))},B=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.h.remove()},H=(t,e)=>t.$===e.$,N=(t,e)=>{const n=e.h=t.h,l=t.p,o=e.p,r=e.i;null===r?(F(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,r=0,s=0,c=e.length-1,i=e[0],a=e[c],u=l.length-1,f=l[0],m=l[u];for(;r<=c&&s<=u;)null==i?i=e[++r]:null==a?a=e[--c]:null==f?f=l[++s]:null==m?m=l[--u]:H(i,f)?(N(i,f),i=e[++r],f=l[++s]):H(a,m)?(N(a,m),a=e[--c],m=l[--u]):H(i,m)?(N(i,m),t.insertBefore(i.h,a.h.nextSibling),i=e[++r],m=l[--u]):H(a,f)?(N(a,f),t.insertBefore(a.h,i.h),a=e[--c],f=l[++s]):(o=W(e&&e[s],n,s),f=l[++s],o&&i.h.parentNode.insertBefore(o,i.h));r>c?q(t,null==l[u+1]?null:l[u+1].h,n,l,s,u):s>u&&B(e,r,c)})(n,l,e,o):null!==o?(null!==t.i&&(n.textContent=""),q(n,null,e,o,0,o.length-1)):null!==l&&B(l,0,l.length-1)):t.i!==r&&(n.data=r)},V=(t,e)=>{e&&!t._&&e["s-p"].push(new Promise(e=>t._=e))},z=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const o=e.o,r=()=>D(t,e,n,o,l);return V(e,e.v),K(void 0,()=>j(r))},D=(n,l,o,s,i)=>{const a=n["s-rc"];i&&((t,e)=>{const n=((t,e)=>{let n=L(e.g),l=p.get(n);if(t=11===t.nodeType?t:r,l)if("string"==typeof l){let e,o=k.get(t=t.head||t);o||k.set(t,o=new Set),o.has(n)||(e=r.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(c&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(n,o),((n,l,o,r)=>{e=n.tagName;const s=l.j||x(null,null),c=(i=r)&&i.$===C?r:O(null,null,r);var i;c.$=null,c.t|=4,l.j=c,c.h=s.h=n.shadowRoot||n,t=n["s-sc"],N(s,c)})(n,l,0,G(s)),l.t&=-17,l.t|=2,a&&(a.forEach(t=>t()),n["s-rc"]=void 0);{const t=n["s-p"],e=()=>I(n,l,o);0===t.length?e():(Promise.all(t).then(e),l.t|=4,t.length=0)}},G=t=>{try{t=t.render()}catch(e){d(e)}return t},I=(t,e,n)=>{const l=e.v;64&e.t||(e.t|=64,t.classList.add("hydrated"),e.S(t),l||J()),e._&&(e._(),e._=void 0),512&e.t&&g(()=>z(t,e,n,!1)),e.t&=-517},J=()=>{r.documentElement.classList.add("hydrated"),s.t|=2},K=(t,e)=>t&&t.then?t.then(e):e(),Q=(t,e,n)=>{if(e.M){const l=Object.entries(e.M),o=t.prototype;l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return e=t,u(this).R.get(e);var e},set(n){((t,e,n,l)=>{const o=u(this),r=o.P,s=o.R.get(e),c=o.t,i=o.o;var a;null==(a=n)||M(a),(n=a)===s||8&c&&void 0!==s||(o.R.set(e,n),i&&2==(18&c)&&z(r,o,l,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})})}return t},X=(t,e={})=>{const n=[],l=e.exclude||[],f=r.head,m=o.customElements,$=f.querySelector("meta[charset]"),w=r.createElement("style"),h=[];r.querySelectorAll("[sty-id]");let _,b=!0;Object.assign(s,e),s.l=new URL(e.resourcesUrl||"./",r.baseURI).href,e.syncQueue&&(s.t|=4),t.forEach(t=>t[1].forEach(e=>{const o={t:e[0],g:e[1],M:e[2],U:e[3]};o.M=e[2],!c&&1&o.t&&(o.t|=8);const r=o.g,f=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,P:t,R:new Map};e.k=new Promise(t=>e.S=t),t["s-p"]=[],t["s-rc"]=[],a.set(t,e)})(t=this),1&o.t&&(c?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){_&&(clearTimeout(_),_=null),b?h.push(this):s.jmp(()=>((t,e)=>{if(0==(1&s.t)){const n=()=>{},l=u(t);if(!(1&l.t)){l.t|=1;{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){V(l,l.v=e);break}}g(()=>(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=(t=>{const e=t.g.replace(/-/g,"_"),n=t.L,l=y.get(n);return l?l[e]:__sc_import_my_counter(`./${n}.entry.js`).then(t=>(y.set(n,t),t[e]),d)})(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(Q(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(c){d(c)}e.t&=-9,t()}const t=L(n.g);if(!p.has(t)&&o.style){const e=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_my_counter("./shadow-css-d7d058ec-d59cb009.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=p.get(t);i&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,p.set(t,l)})(t,l,!!(1&n.t)),e()}}const r=e.v,s=()=>z(t,e,n,!0);r&&r["s-rc"]?r["s-rc"].push(s):s()})(t,l,e))}n()}})(this,o))}disconnectedCallback(){s.jmp(()=>{})}forceUpdate(){((t,e)=>{{const n=u(t);n.P.isConnected&&2==(18&n.t)&&z(t,n,e,!1)}})(this,o)}componentOnReady(){return u(this).k}};o.L=t[0],l.includes(r)||m.get(r)||(n.push(r),m.define(r,Q(f,o,1)))})),w.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",w.setAttribute("data-styles",""),f.insertBefore(w,$?$.nextSibling:f.firstChild),b=!1,h.length>0?h.forEach(t=>t.connectedCallback()):s.jmp(()=>_=setTimeout(J,30,"timeout"))};export{R as a,X as b,O as h,P as p,f as r};