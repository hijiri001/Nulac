importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/36c49a64c5678bbbe24f.js",
    "revision": "81a89263f6c1b0e17459984c2db64fd5"
  },
  {
    "url": "/_nuxt/3d332864864515410f60.js",
    "revision": "d7da31ec22ba779a89e2d73fb61ee3a2"
  },
  {
    "url": "/_nuxt/52193636a84fdf1f67fb.js",
    "revision": "8e974b5064399bdcdbe81cbd627a8c65"
  },
  {
    "url": "/_nuxt/576617ce9f9c8ed8dc15.js",
    "revision": "0e9a149aec9b51c134beab222a3d7476"
  },
  {
    "url": "/_nuxt/a0c9b068ae7e1c7399c6.js",
    "revision": "c084a9eda11f5b906568c23bb5a93e58"
  },
  {
    "url": "/_nuxt/bacb385bdc6c62cac2e6.js",
    "revision": "85b68d0bf777012f871fe324d1eb64f1"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
