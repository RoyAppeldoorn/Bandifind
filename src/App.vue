<template>
  <v-app>
    <v-container>
      <TopNav />

      <v-content class="v-content--custom">
        <router-view />
        <v-snackbar v-model="snackWithButtons" :timeout="timeout" bottom left>
          {{ snackWithBtnText }}
          <v-spacer />
          <v-btn dark text color="#BB86FC" @click.stop="refreshApp">
            {{ snackBtnText }}
          </v-btn>
          <v-btn dark icon @click="snackWithButtons = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-snackbar>
      </v-content>

      <BottomNav class="hidden-md-and-up" />
    </v-container>
  </v-app>
</template>

<script>
import BottomNav from '@/components/shared/BottomNav.vue'
import TopNav from '@/components/shared/TopNav.vue'

// v-bind:class="{
//   'pa-0': $vuetify.breakpoint.smAndDown
// }"

export default {
  name: 'App',
  components: {
    BottomNav,
    TopNav
  },

  data: () => ({
    refreshing: false,
    registration: null,
    snackBtnText: '',
    snackWithBtnText: '',
    snackWithButtons: false,
    timeout: 0
  }),
  created() {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true })
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return
      this.refreshing = true
      window.location.reload()
    })
  },
  methods: {
    showRefreshUI(e) {
      // Display a snackbar inviting the user to refresh/reload the app due
      // to an app update being available.
      // The new service worker is installed, but not yet active.
      // Store the ServiceWorkerRegistration instance for later use.
      this.registration = e.detail
      this.snackBtnText = 'Refresh'
      this.snackWithBtnText = 'New version available!'
      this.snackWithButtons = true
    },
    refreshApp() {
      this.snackWithButtons = false
      // Protect against missing registration.waiting.
      if (!this.registration || !this.registration.waiting) {
        return
      }
      this.registration.waiting.postMessage('skipWaiting')
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.v-application {
  font-family: $body-font-family;

  background: #222430;
}

.v-content--custom {
  transition: none !important;
}
</style>
