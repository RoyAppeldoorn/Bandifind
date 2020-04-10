//Asking for permission with the Notification API
if (typeof Notification !== typeof undefined) {
  //First check if the API is available in the browser
  Notification.requestPermission()
    .then(function (result) {
      //If accepted, then save subscriberinfo in database
      if (result === "granted") {
        console.log(
          "Browser: User accepted receiving notifications, save as subscriber data!"
        );
        navigator.serviceWorker.ready.then(function (serviceworker) {
          //When the Service Worker is ready, generate the subscription with our Serice Worker's pushManager and save it to our list
          const VAPIDPublicKey =
            "BKT3bUIjKd5ERPyvGvel4SgdtR1MELATnG0f9KsJlzfA9SHPUT_-y2cT7fUinmsqs8-YpCS9jP3aPf_yflo7poc";
          const options = {
            applicationServerKey: VAPIDPublicKey,
            userVisibleOnly: true
          }; //Option userVisibleOnly is neccesary for Chrome
          serviceworker.pushManager.subscribe(options).then(subscription => {
            //POST the generated subscription to our saving script (this needs to happen server-side, (client-side) JavaScript can't write files or databases)
            let subscriberFormData = new FormData();
            subscriberFormData.append("json", JSON.stringify(subscription));
            fetch("data/saveSubscription.php", {
              method: "POST",
              body: subscriberFormData
            });
          });
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
}