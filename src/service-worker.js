/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
// eslint-disable-next-line no-undef
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("push", function(event) {
  if (event.data) {
    var pushdata = JSON.parse(event.data.text());
    console.log("Service Worker: I received this:", pushdata);
    if (pushdata["title"] != "" && pushdata["message"] != "") {
      const options = {
        body: pushdata["message"],
        icon: "img/apple-touch-icon-76x76.png",
        vibrate: [300, 100, 400]
      };
      self.registration.showNotification(pushdata["title"], options);
      console.log("Service Worker: I made a notification for the user");
    } else {
      console.log(
        "Service Worker: I didn't make a notification for the user, not all the info was there :("
      );
    }
  }
});

// eslint-disable-next-line no-unused-vars
let installPrompt;

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;

  const installButton = document.getElementById("install-button");
  installButton.style.display = "block";

  installButton.addEventListener("click", () => {
    installPrompt.prompt();

    installButton.style.display = "none";

    installPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome !== "accepted") {
        installButton.style.display = "block";
      }
      installPrompt = null;
    });
  });
});
