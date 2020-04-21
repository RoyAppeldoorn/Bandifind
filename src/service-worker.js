// The precaching code provided by Workbox.
// self.__precacheManifest = [].concat(self.__precacheManifest || [])
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// Cache Google fonts
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'googleapis'
  })
)

const CACHE_NAME = 'offline-html'

const FALLBACK_HTML_URL = '/offline.html'
// Populate the cache with the offline HTML page when the
// service worker is installed.
self.addEventListener('install', async event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.add(FALLBACK_HTML_URL))
  )
})

this.addEventListener('fetch', event => {
  // request.mode = navigate isn't supported in all browsers
  // so include a check for Accept: text/html header.
  if (
    event.request.mode === 'navigate' ||
    (event.request.method === 'GET' &&
      event.request.headers.get('accept').includes('text/html'))
  ) {
    event.respondWith(
      fetch(event.request.url).catch(error => {
        // Return the offline page
        return caches.match(FALLBACK_HTML_URL)
      })
    )
  } else {
    // Respond with everything else if we can
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request)
      })
    )
  }
})

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
