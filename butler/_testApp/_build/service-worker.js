if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise(async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()})),i.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},i=(i,r)=>{Promise.all(i.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(i)};self.define=(i,s,c)=>{r[i]||(r[i]=Promise.resolve().then(()=>{let r={};const a={uri:location.origin+i.slice(1)};return Promise.all(s.map(i=>{switch(i){case"exports":return r;case"module":return a;default:return e(i)}})).then(e=>{const i=c(...e);return r.default||(r.default=i),r})}))}}define("./service-worker.js",["./workbox-6592f29f"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/./index.html",revision:"a095bcaafa83711bd47b7f279dad456b"},{url:"/firebase-messaging-sw.js",revision:"94fb6c7f507c798055610bc9d48a357b"},{url:"/fonts/montserrat-400.woff2",revision:"bc3aa95dca08f5fee5291e34959c27bc"},{url:"/fonts/montserrat-500.woff2",revision:"92d16e458625f4d2c8940f6bdca0ff09"},{url:"/images/public/favicon-16x16.png",revision:"0503b5115a98652d6514c3bbeae50453"},{url:"/images/public/favicon-32x32.png",revision:"fae8df5e1697663ef8062254eaac51f0"},{url:"/images/public/favicon-48x48.png",revision:"42e34fc5985ff0614806251ed39d6f3d"},{url:"/images/public/favicon.ico",revision:"cc38a964a076d5e73cb37df0c88ec306"},{url:"/images/public/icon_144x144.png",revision:"2f9123f4152d994b79513106052ad358"},{url:"/images/public/icon_152x152.png",revision:"d0b57320a8022b9ffbdbff2620ea7c20"},{url:"/images/public/icon_167x167.png",revision:"16edbc9912cd14cbaaed4e46f901cea0"},{url:"/images/public/icon_180x180.png",revision:"853c95d62b05b416673d1d4d53b644ac"},{url:"/images/public/icon_192x192.png",revision:"bd5e2c6419e631f019d2bd5a7bb6e841"},{url:"/images/public/icon_512x512.png",revision:"f6910d506f34707ac2c5b1f1965a7067"},{url:"/images/public/icon_92x92.png",revision:"b61950e82f6e05da01ead6c1e82bde98"},{url:"/js/0.d38e2be4e614297b7bb0.js",revision:"1462c4f082651b767f8acaab5674a213"},{url:"/js/1.5d3d11ec3b4c3245293a.js",revision:"094a2fd4728c7e1867bc50bedb4defdd"},{url:"/js/2.40f50ac8b0b10cc7f471.js",revision:"8bba937773a6a48e767de8636d743e30"},{url:"/js/3.5852043c376a1e1eedbe.js",revision:"f97c9354d6c38a0a23c4b1111b548453"},{url:"/js/4.ce372d76cb0cfcb4a82f.js",revision:"46cd4ede87bdadaf5b02b81ccbb5936b"},{url:"/js/5.0ace912dbedd28ba73d7.js",revision:"f52a36dd04b170ca3408f7a25e85543c"},{url:"/js/6.7d0f81b8c504cfa4b2e5.js",revision:"b7f325ff818c01534e3e83393e189b1a"},{url:"/js/entry.54f24dd6d620b0ef8a71.js",revision:"85bf44d3dd120a692295ea3f6e7d265a"},{url:"/manifest.json",revision:"3fde519f536b4daf91a12762e4440853"},{url:"/robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{allowlist:[/^(?!\/__).*/]}))}));
//# sourceMappingURL=service-worker.js.map