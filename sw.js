const C='aponatei-v2',F=['./','./index.html','./story.js','./cover.jpg','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{if(n.ok&&/fonts\.(googleapis|gstatic)/.test(e.request.url)){const m=n.clone();caches.open(C).then(c=>c.put(e.request,m))}return n}).catch(()=>caches.match('./index.html'))))});
