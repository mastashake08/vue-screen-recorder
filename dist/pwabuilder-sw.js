// This is the "Offline copy of assets" service worker

const CACHE = "recorder-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
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
