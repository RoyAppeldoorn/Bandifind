let deferredPrompt
let installButton

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault()
  console.log('👍', 'beforeinstallprompt', event)
  deferredPrompt = event

  installButton = document.getElementById('install-button')
  installButton.classList.remove('d-none')
  installButton.style.display = 'block'
})

window.addEventListener('load', () => {
  if (navigator.standalone) {
    console.log('Launched: Installed (iOS)')
  } else if (matchMedia('(display-mode: standalone)').matches) {
    console.log('Launched: Installed')
  } else {
    console.log('Launched: Browser Tab')
  }
})

document.addEventListener('DOMContentLoaded', function() {
  installButton = document.getElementById('install-button')
  installButton.addEventListener('click', () => {
    console.log('👍', 'installButton-clicked')
    if (!deferredPrompt) {
      // The deferred prompt isn't available.
      return
    }
    // Show the install prompt.
    deferredPrompt.prompt()

    deferredPrompt.userChoice.then(result => {
      console.log('👍', 'userChoice', result)
      if (result.outcome === 'accepted') {
        console.log('User accepted the install prompt')
      } else {
        console.log('User dismissed the install prompt')
      }

      // Reset the deferred prompt variable, since
      // prompt() can only be called once.
      deferredPrompt = null
      // Hide the install button.
      installButton.classList.add('d-none')
    })
  })
})
