
const CACHE_NAME = 'ccea-v1';
const urlsToCache = [
  '/',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).catch((error) => {
          console.warn('Failed to cache some resources:', error);
          // Continue installation even if some resources fail to cache
          return Promise.resolve();
        });
      })
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests and avoid chrome-extension requests
  if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        return fetch(event.request).catch((error) => {
          console.warn('Network request failed:', error);
          // Return a basic offline response for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
          throw error;
        });
      })
      .catch((error) => {
        console.error('Cache match failed:', error);
        return new Response('Network error', { status: 503 });
      })
  );
});

// Remove the problematic sync event listener that references non-existent API
// self.addEventListener('sync', ...) - REMOVED for security

// Add proper error handling for unhandled promise rejections
self.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection in service worker:', event.reason);
  event.preventDefault();
});

