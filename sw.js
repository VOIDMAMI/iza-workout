const CACHE_NAME = 'iza-workout-v4';
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
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
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

// Fetch — cache first, then network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    }).catch(() => {
      if (event.request.destination === 'document') {
        return caches.match('./index.html');
      }
    })
  );
});
