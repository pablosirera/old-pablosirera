import { State } from './state'
import { mutations } from './mutations'

export default {
  namespaced: true,
  state: new State(),
  mutations
}
