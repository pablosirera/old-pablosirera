import Vuex from 'vuex'
import Vue from 'vue'

import langs from './modules/language/index'

Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    langs
  }
})
