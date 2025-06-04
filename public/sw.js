
const CACHE_NAME = 'ccea-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Handle background sync for content updates
self.addEventListener('sync', (event) => {
  if (event.tag === 'content-sync') {
    event.waitUntil(
      // Sync logic for content updates
      fetch('/api/sync-content').then(() => {
        console.log('Content synced successfully');
      })
    );
  }
});
