const CACHE='nexa-calendar-v6';
const ASSETS=['./','./index.html','./manifest.json','./icon-180.png','./icon-512.png','./sw.js'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return r}).catch(()=>cached)))});
self.addEventListener('message',event=>{if(event.data?.type==='SHOW_NOTIFICATION'){event.waitUntil(self.registration.showNotification('NEXA Calendar',{body:event.data.body||'',icon:'icon-180.png',badge:'icon-180.png',tag:'nexa-reminder',renotify:true,data:{url:'./'}}))}});
self.addEventListener('notificationclick',event=>{event.notification.close();event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{for(const client of list){if('focus' in client)return client.focus()}if(clients.openWindow)return clients.openWindow('./')}))});
