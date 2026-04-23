const CACHE_NAME = 'iza-workout-v22';
const ASSETS = [
  './',
  './index.html',
  './css/index.css',
  './css/components.css',
  './css/pages.css',
  './js/app.js',
  './js/data.js',
  './js/plans-extra.js',
  './js/express.js',
  './js/storage.js',
  './js/calendar.js',
  './js/tracker.js',
  './js/workout.js',
  './js/progress.js',
  './js/running.js',
  './js/plans.js',
  './js/utils.js',
  './manifest.json'
];

// Install — cache all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch — network-first for code (HTML/JS/CSS), cache-first for assets
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  const isCode = /\.(html|js|css)$/i.test(url.pathname) || url.pathname.endsWith('/');

  if (isCode) {
    // Network-first: always try fresh version, fall back to cache offline
    event.respondWith(
      fetch(req)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return response;
        })
        .catch(() => caches.match(req).then((cached) =>
          cached || caches.match('./index.html')
        ))
    );
  } else {
    // Cache-first for images, icons, manifest, etc.
    event.respondWith(
      caches.match(req).then((cached) => {
        return cached || fetch(req).then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return response;
        });
      })
    );
  }
});
