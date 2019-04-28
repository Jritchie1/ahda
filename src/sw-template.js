if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
  )

  if (workbox) {
    console.log('Workbox is loaded');
    workbox.precaching.precacheAndRoute([]);
  }

  else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}

self.addEventListener('install', (event) => {
  self.skipWaiting();
});
