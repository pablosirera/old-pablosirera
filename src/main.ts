import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { i18n } from './langs/i18n'
import VTooltip from 'v-tooltip'
import { highlightjsDirective } from '@/directives/highlightDirective'

// external styles
import '@/assets/styles/all.scss'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

import 'highlight.js/styles/dracula.css'

Vue.use(VTooltip)

Vue.config.productionTip = false

store.dispatch('langs/loadDefaultLanguage')

new Vue({
  router,
  store,
  i18n,
  directives: { highlightjsDirective },
  render: (h: any) => h(App)
}).$mount('#app')
