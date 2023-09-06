// This is the "Offline copy of assets" service worker

const CACHE = "recorder-offline-v4.2.2";
const QUEUE_NAME = "bgSyncQueue";
const urlsToCache = [
  '/img/logo.5c33d4ac.svg',
  '/favicon.ico',
  '/manifest.json',
  '/',
]
const API_URL = "https://screen-recorder-micro.jcompsolu.com/api"
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

async function fetchLatestStats (event) {
  try {
    await fetch(`${API_URL}/get-stats`)
  } catch {}
}

self.addEventListener('fetch', function(event) {
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(urlsToCache);
  })());
});

self.addEventListener('periodicsync', event => {
  if (event.tag == 'get-latest-stats') {
    event.waitUntil(fetchLatestStats(event));
  }
});
const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin(QUEUE_NAME, {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);
self.addEventListener('notificationclick', function(event) {
  if (!event.action) {
    // Was a normal notification click
    return;
  }

  switch (event.action) {
    case 'donate':
      var url = 'https://cash.me/$mastashake08'
      clients.openWindow(url)
      break;
    case 'close':
      event.notification.close()
      break;
  }
});
