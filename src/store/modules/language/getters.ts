import { GetterTree } from 'vuex'
import { State } from './state'

export function getLocaleLanguage(state: State) {
  return state.language
}

export const getters: GetterTree<State, any> = {
  getLocaleLanguage
}
