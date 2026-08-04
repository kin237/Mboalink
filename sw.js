const CACHE_NAME = 'mboalink-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Passthrough basique : laisse toutes les requêtes réseau passer normalement.
// Nécessaire uniquement pour que le navigateur considère l'app comme "installable".
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
