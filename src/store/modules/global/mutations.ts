import { MutationTree } from 'vuex'
import globalMutationsTypes from './mutationTypes'
import { State } from './state'

export const mutations: MutationTree<State> = {
  [globalMutationsTypes.GLOBAL.SET.IS_ON_HOME](state, { isOnHome }: { isOnHome: boolean }) {
    state.isOnHome = isOnHome
  }
}
