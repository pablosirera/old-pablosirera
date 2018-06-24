import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import { i18n } from './langs/i18n'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
})

if (process.env.NODE_ENV !== 'production') {
  setTimeout(() => {
    defaultActions()
    app.$mount('#app')
  }, 500)
} else {
  defaultActions()
  app.$mount('#app')
}

function defaultActions() {
  store.dispatch('langs/loadDefaultLanguage')
}
