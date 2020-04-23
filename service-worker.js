importScripts("/precache-manifest.f66fd8668b1ac8c122ecad637d9db287.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

const cache = 'bandifind-cache'
const offlineURL = '/offline.html'
let defaultFiles = [
  new Request(offlineURL, { cache: 'reload' }),
  'img/bg.png',
  'img/earth.png',
  'favicon.ico'
]

self.addEventListener('install', installing => {
  console.log('Service Worker: I am being installed, hello world!')

  //Put everything in cache (pre-load)
  installing.waitUntil(
    caches.open(cache).then(cache => {
      console.log('Service Worker: Caching app shell and content')
      return cache.addAll(defaultFiles)
    })
  )
})

self.addEventListener('activate', activating => {
  console.log('Service Worker: All systems online, ready to go!')
})

self.addEventListener('fetch', fetching => {
  fetching.respondWith(
    caches.match(fetching.request.url).then(response => {
      console.log('Service Worker: Fetching resource ' + fetching.request.url)
      return (
        response ||
        fetch(fetching.request)
          .then(response => {
            return caches.open(cache).then(cache => {
              console.log(
                'Service Worker: Giving back from cache > ' +
                  fetching.request.url
              )
              return response
            })
          })
          .catch(function() {
            console.log(
              'Service Worker: No cache for > ' + fetching.request.url
            )
            if (
              fetching.request.mode === 'navigate' ||
              (fetching.request.method === 'GET' &&
                fetching.request.headers.get('accept').includes('text/html'))
            ) {
              console.log(
                'Service Worker: Serve offline HTML for > ' +
                  fetching.request.url
              )
              return caches.match('offline.html')
            }
          })
      )
    })
  )
})

// const CACHE_NAME = 'offline-html'

// const FALLBACK_HTML_URL = '/offline.html'
// // Populate the cache with the offline HTML page when the
// // service worker is installed.
// self.addEventListener('install', async event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(cache => cache.add(FALLBACK_HTML_URL))
//   )
// })

// this.addEventListener('fetch', event => {
//   // request.mode = navigate isn't supported in all browsers
//   // so include a check for Accept: text/html header.
//   if (
//     event.request.mode === 'navigate' ||
//     (event.request.method === 'GET' &&
//       event.request.headers.get('accept').includes('text/html'))
//   ) {
//     event.respondWith(
//       fetch(event.request.url).catch(error => {
//         // Return the offline page
//         return caches.match(FALLBACK_HTML_URL)
//       })
//     )
//   } else {
//     // Respond with everything else if we can
//     event.respondWith(
//       caches.match(event.request).then(function(response) {
//         return response || fetch(event.request)
//       })
//     )
//   }
// })

// const cacheName = 'testCache'
// const offlineURL = '/offline.html'
// let defaultFiles = [
//   new Request(offlineURL, { cache: 'reload' }),
//   'img/bg.png',
//   'img/earth.png'
// ]

// self.addEventListener('install', event => {
//   event.waitUntil(
//     (async () => {
//       const cache = await caches.open(cacheName)
//       await cache.addAll(defaultFiles)
//     })()
//   )
// })

// self.addEventListener('activate', event => {
//   event.waitUntil(
//     (async () => {
//       if ('navigationPreload' in self.registration) {
//         await self.registration.navigationPreload.enable()
//       }
//     })()
//   )

//   self.clients.claim()
// })

// self.addEventListener('fetch', event => {
//   if (event.request.mode === 'navigate') {
//     event.respondWith(
//       (async () => {
//         try {
//           const preloadResponse = await event.preloadResponse
//           if (preloadResponse) {
//             return preloadResponse
//           }

//           const networkResponse = await fetch(event.request)
//           return networkResponse
//         } catch (error) {
//           console.log('Fetch failed; returning offline page instead.', error)

//           const cache = await caches.open(cacheName)
//           const cachedResponse = await cache.match(offlineURL)
//           return cachedResponse
//         }
//       })()
//     )
//   }
// })

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

