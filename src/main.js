import Vue from "vue";
import VueYouTubeEmbed from "vue-youtube-embed";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// eslint-disable-next-line no-unused-vars
import "./notification";

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  VueYouTubeEmbed,
  render: h => h(App)
}).$mount("#app");