import languageMutationsTypes from './mutationTypes'
import { State } from './state'
import { MutationTree } from 'vuex'

export const mutations: MutationTree<State> = {
  [languageMutationsTypes.LANGUAGE.FETCH.SUCCESS](state, { language }: { language: string }) {
    state.loadedLanguages.push(language)
  },
  [languageMutationsTypes.LANGUAGE.SET](state, { language }: { language: string }) {
    state.language = language
  }
}
