// This is the "Offline copy of assets" service worker

const CACHE = "recorder-offline";
const QUEUE_NAME = "bgSyncQueue";
const urlsToCache = [
  '/',
  '/logo.svg'
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
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
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
    cacheName: CACHE,
    plugins: [
      bgSyncPlugin
    ]
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

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
