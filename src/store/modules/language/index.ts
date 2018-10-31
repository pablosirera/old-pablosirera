import { actions } from './actions'
import { mutations } from './mutations'
import { State } from './state'

export default {
  namespaced: true,
  state: new State(),
  actions,
  mutations
}
