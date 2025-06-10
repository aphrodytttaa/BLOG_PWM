
self.addEventListener("install", async event => {
  const cache = await caches.open("pwa-assets");
  // it stores all resources on first SW install
  cache.addAll([
    "/", 
    "app.js", 
    "index.html",
    "A1.png", "A2.png", "A3.png", "A4.png", "A5.png", "A6.png",
    "M1.png", "M2.png", "M3.png", "M4.png", "M5.png", "M6.png",
    "S1.png", "S2.png", "S3.png", "S4.png", "S5.png", "S6.png",
    ]); 
});
 
self.addEventListener("fetch", event => {
   event.respondWith(
     caches.match(event.request).then(cachedResponse => {
	   // It can update the cache to serve updated content on the next request
         return cachedResponse || fetch(event.request);
     }
   )
  )
});