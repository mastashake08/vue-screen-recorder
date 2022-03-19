// This is the "Offline copy of assets" service worker

const CACHE = "recorder-offline-v2";
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
    const result = await fetch(`${API_URL}/get-stats`)
  } catch (e) {
    console.log(e)
  }
}

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

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
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    console.log('[Service Worker] Caching all: app shell and content');
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
    console.log('Notification Click.');
    return;
  }

  switch (event.action) {
    case 'donate':
      console.log('Donate');
      var url = 'https://cash.me/$mastashake08'
      clients.openWindow(url)
      break;
    case 'close':
      console.log('Close');
      event.notification.close()
      break;
    default:
      console.log(`Unknown action clicked: '${event.action}'`);
      break;
  }
});
