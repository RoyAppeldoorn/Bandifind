/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("push", function(event) {
  if (event.data) {
    pushdata = JSON.parse(event.data.text());
    console.log("Service Worker: I received this:", pushdata);
    if (pushdata["title"] != "" && pushdata["message"] != "") {
      const options = { body: pushdata["message"] };
      self.registration.showNotification(pushdata["title"], options);
      console.log("Service Worker: I made a notification for the user");
    } else {
      console.log(
        "Service Worker: I didn't make a notification for the user, not all the info was there :("
      );
    }
  }
});
