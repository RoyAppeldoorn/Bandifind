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

self.addEventListener('install', evt => {
  console.log('Service Worker: Installing..')
  evt.waitUntil(
    caches.open(cache).then(cache => {
      console.log('Service Worker: Caching static resources and offline page')
      return cache.addAll(defaultFiles)
    })
  )
})

self.addEventListener('activate', evt => {
  console.log('Service Worker: activated')
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
                'Service Worker: Serving offline page > ' + fetching.request.url
              )
              return caches.match('offline.html')
            }
          })
      )
    })
  )
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
