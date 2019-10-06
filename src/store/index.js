import Vuex from 'vuex'
import Vue from 'vue'
import langs from './modules/language'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    langs,
  },
})
