
self.addEventListener("install", async event => {
  const cache = await caches.open("pwa-assets");
  // it stores all resources on first SW install
  cache.addAll([
    "/", 
    "app.js", 
    "index.html",
    "A1.jpg", "A2.jpg", "A3.jpg", "A4.jpg", "A5.jpg", "A6.jpg",
    "M1.jpg", "M2.jpg", "M3.jpg", "M4.jpg", "M5.jpg", "M6.jpg",
    "S1.jpg", "S2.jpg", "S3.jpg", "S4.jpg", "S5.jpg", "S6.jpg",
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
