/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
workbox.precaching.precacheAndRoute([])

const cacheName = 'testCache'
const offlineURL = '/offline.html'

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      })
    ]
  })
)

// Cache Google fonts:
workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  new workbox.strategies.CacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      })
    ]
  })
)

// This code listens for the user's confirmation to update the app.
self.addEventListener('message', e => {
  if (!e.data) {
    return
  }

  switch (e.data) {
    case 'skipWaiting':
      self.skipWaiting()
      break
    default:
      // NOOP
      break
  }
})

self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName)
      await cache.add(new Request(offlineURL, { cache: 'reload' }))
    })()
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      if ('navigationPreload' in self.registration) {
        await self.registration.navigationPreload.enable()
      }
    })()
  )

  self.clients.claim()
})

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse
          if (preloadResponse) {
            return preloadResponse
          }

          const networkResponse = await fetch(event.request)
          return networkResponse
        } catch (error) {
          console.log('Fetch failed; returning offline page instead.', error)

          const cache = await caches.open(cacheName)
          const cachedResponse = await cache.match(offlineURL)
          return cachedResponse
        }
      })()
    )
  }
})

self.addEventListener('push', function(event) {
  if (event.data) {
    var pushdata = JSON.parse(event.data.text())
    console.log('Service Worker: I received this:', pushdata)
    if (pushdata['title'] != '' && pushdata['message'] != '') {
      const options = {
        body: pushdata['message'],
        icon: 'img/icons/logo-512x512.png',
        badge: 'img/icons/logo-192x192.png'
      }
      self.registration.showNotification(pushdata['title'], options)
      console.log('Service Worker: I made a notification for the user')
    } else {
      console.log(
        "Service Worker: I didn't make a notification for the user, not all the info was there :("
      )
    }
  }
})
