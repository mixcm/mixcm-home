importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.5445746.js",
    "revision": "63a638fcf6027d1c1d739e188ba169d2"
  },
  {
    "url": "/_nuxt/pages/index.0d434b7.js",
    "revision": "1f812d6089902b8173c5f861e035239e"
  },
  {
    "url": "/_nuxt/pages/page/about.fd07ccc.js",
    "revision": "08d6dca5ad57313b8cb59da9d9172bd5"
  },
  {
    "url": "/_nuxt/runtime.93ca6cf.js",
    "revision": "b67147213925e879b312201d97b5e679"
  }
], {
  "cacheId": "mixcm-home",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
