import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import { i18n } from './shared/langs/i18n'
import VTooltip from 'v-tooltip'
import { highlightjsDirective } from '@/shared/directives/highlightDirective'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAnalytics from 'vue-analytics'
import VueMarkdown from 'vue-markdown'

import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'
import 'highlight.js/styles/dracula.css'

import titleMixin from '@/shared/mixins/titleMixin'

Vue.mixin(titleMixin)

library.add(faStopwatch)
Vue.component('font-awsome-icon', FontAwesomeIcon)
Vue.component('vue-markdown', VueMarkdown)

Vue.use(VTooltip)
Vue.use(VueAnalytics, {
  id: 'UA-143056165-1',
})

Vue.config.productionTip = false

store.dispatch('langs/loadDefaultLanguage')

new Vue({
  router,
  store,
  i18n,
  directives: { highlightjsDirective },
  render: h => h(App),
}).$mount('#app')
