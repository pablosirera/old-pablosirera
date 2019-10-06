import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'
import { State } from './state'

export default {
  namespaced: true,
  state: new State(),
  actions,
  mutations,
  getters,
}
