if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
  )

  if (workbox) {
    console.log('Workbox is loaded');
    workbox.precaching.precacheAndRoute([
  {
    "url": "asset-manifest.json",
    "revision": "d72f6d649bbd92558b55fd50a5748ea4"
  },
  {
    "url": "assets/css/arkham-horror-icons.css",
    "revision": "9992059f5d0b42434b53e1efbe920f99"
  },
  {
    "url": "assets/css/arkham-horror-icons/icomoon.eot",
    "revision": "a1101a05afc58e53f7239583cf7428dd"
  },
  {
    "url": "assets/css/arkham-horror-icons/icomoon.svg",
    "revision": "45cb511896649d10ce688b913066558f"
  },
  {
    "url": "assets/css/arkham-horror-icons/icomoon.ttf",
    "revision": "33a95b251585805574de9f467c735eda"
  },
  {
    "url": "assets/css/arkham-horror-icons/icomoon.woff",
    "revision": "2cb582dd117546ca2763d3fdeaf27614"
  },
  {
    "url": "assets/css/material-dashboard-react.css",
    "revision": "dde32be883f1b75c6c5ec256a878fd74"
  },
  {
    "url": "assets/img/eldersignlogo.webp",
    "revision": "4bf72ce5b26f6b14b12c2f635b4a1953"
  },
  {
    "url": "assets/img/investigators/lola-hayes-reverse.webp",
    "revision": "aa3b470db081a4290472086e31d62b39"
  },
  {
    "url": "assets/img/investigators/lola-hayes.webp",
    "revision": "3478d96b0bcb9acc15489dc29d26fc74"
  },
  {
    "url": "assets/img/sidebar-1.webp",
    "revision": "d29dd6af9260e8ee630490e589935509"
  },
  {
    "url": "assets/img/sidebar-2.webp",
    "revision": "ff2569a9e5b1b8b4c9462bc5e3a1b388"
  },
  {
    "url": "assets/img/sidebar-3.webp",
    "revision": "e6a03f83efa1a66e8879073f9688253e"
  },
  {
    "url": "assets/img/sidebar-4.webp",
    "revision": "08f2289e0979646b470a66418311fdda"
  },
  {
    "url": "assets/manifest_images/icons/icon-128x128.png",
    "revision": "5df8cf9e8837f0aecf77bbf95b85bebf"
  },
  {
    "url": "assets/manifest_images/icons/icon-144x144.png",
    "revision": "754eb994cc1d1f74d34ca9b8ca8b3e8b"
  },
  {
    "url": "assets/manifest_images/icons/icon-152x152.png",
    "revision": "4f9ae82bf4b194d2083b2d456e46ccb8"
  },
  {
    "url": "assets/manifest_images/icons/icon-192x192.png",
    "revision": "21d2bcaf06c872cabdd4492739d52358"
  },
  {
    "url": "assets/manifest_images/icons/icon-384x384.png",
    "revision": "73b00949180e8cc2c0d3fc2706ecc6f5"
  },
  {
    "url": "assets/manifest_images/icons/icon-512x512.png",
    "revision": "6d47b94b02c479d05428dac52d53644a"
  },
  {
    "url": "assets/manifest_images/icons/icon-72x72.png",
    "revision": "cced19d6d0f718395fe4d63e806efa81"
  },
  {
    "url": "assets/manifest_images/icons/icon-96x96.png",
    "revision": "753d32cafea97cb35eab7034d2ddd9d3"
  },
  {
    "url": "index.html",
    "revision": "931dd80663a50b5c2e9f8add5dc4b93a"
  },
  {
    "url": "index.js",
    "revision": "0a65c94f1d670e24fe53e738cc6da62a"
  },
  {
    "url": "manifest.json",
    "revision": "f4721bcf4db7f5b08e30cbc9d8c81969"
  },
  {
    "url": "precache-manifest.d9e54c1c3cf2c885c3214fe442691ff4.js",
    "revision": "d9e54c1c3cf2c885c3214fe442691ff4"
  },
  {
    "url": "routes.js",
    "revision": "3f23cf3af9928b12c26a2bbd10caabb1"
  },
  {
    "url": "service-worker.js",
    "revision": "73b50f99d07b10edb1d02ed5675a051f"
  },
  {
    "url": "static/css/2.f3d3e0bb.chunk.css",
    "revision": "cf96f4d55bfcc7bde5dc1efde130b11d"
  },
  {
    "url": "static/css/main.3d1a5dfa.chunk.css",
    "revision": "59a33d43d2cb5590252d4a1913a68e93"
  },
  {
    "url": "static/js/2.3a07d293.chunk.js",
    "revision": "e6f110158c70ee52c48ecd9c4fc2c818"
  },
  {
    "url": "static/js/main.751d237e.chunk.js",
    "revision": "6a34eecd33d7d122e5cf4ebe630bb909"
  },
  {
    "url": "static/js/runtime~main.a8a9905a.js",
    "revision": "238c9148d722c1b6291779bd879837a1"
  },
  {
    "url": "static/media/eldersignlogo.4bf72ce5.webp",
    "revision": "4bf72ce5b26f6b14b12c2f635b4a1953"
  },
  {
    "url": "static/media/icomoon.2cb582dd.woff",
    "revision": "2cb582dd117546ca2763d3fdeaf27614"
  },
  {
    "url": "static/media/icomoon.33a95b25.ttf",
    "revision": "33a95b251585805574de9f467c735eda"
  },
  {
    "url": "static/media/icomoon.45cb5118.svg",
    "revision": "45cb511896649d10ce688b913066558f"
  },
  {
    "url": "static/media/icomoon.a1101a05.eot",
    "revision": "a1101a05afc58e53f7239583cf7428dd"
  },
  {
    "url": "static/media/sidebar-1.d29dd6af.webp",
    "revision": "d29dd6af9260e8ee630490e589935509"
  },
  {
    "url": "static/media/sidebar-2.ff2569a9.webp",
    "revision": "ff2569a9e5b1b8b4c9462bc5e3a1b388"
  },
  {
    "url": "static/media/sidebar-3.e6a03f83.webp",
    "revision": "e6a03f83efa1a66e8879073f9688253e"
  },
  {
    "url": "static/media/sidebar-4.08f2289e.webp",
    "revision": "08f2289e0979646b470a66418311fdda"
  }
]);
  }

  else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}

self.addEventListener('install', (event) => {
  self.skipWaiting();
});
