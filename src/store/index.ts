import Vuex from 'vuex'
import Vue from 'vue'

import langs from './modules/language/index'
import global from './modules/global/index'

Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    langs,
    global
  }
})
