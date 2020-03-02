import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"
import vuetify from "./plugins/vuetify"

import MobileLayout from "./layouts/mobile"
import DesktopLayout from "./layouts/desktop"

Vue.component("mobile-layout", MobileLayout)
Vue.component("desktop-layout", DesktopLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app")
