import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import globalMutationsTypes from '@/store/modules/global/mutationTypes'
import { i18n } from './langs/i18n'
//TODO: remove vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VTooltip from 'v-tooltip'

import '@/assets/styles/all.scss'

router.beforeEach((to, from, next) => {
  const isHome = to.name === 'home'
  store.commit(`global/${globalMutationsTypes.GLOBAL.SET.IS_ON_HOME}`, { isOnHome: isHome })
  next()
})

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
