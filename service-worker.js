self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("tebak-hewan-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js",
        "./confetti.min.js",
        "./manifest.json",
        "./icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});