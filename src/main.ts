import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import { i18n } from './langs/i18n'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VTooltip from 'v-tooltip'

import '@/assets/styles/all.scss'

Vue.use(Vuetify)
Vue.use(VTooltip)

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
})

Vue.nextTick(() => {
  store.dispatch('langs/loadDefaultLanguage')
  app.$mount('#app')
})
