import languageMutationsTypes from './mutationTypes'

export const mutations = {
  [languageMutationsTypes.LANGUAGE.FETCH.SUCCESS](state, { language }) {
    state.loadedLanguages.push(language)
  },
  [languageMutationsTypes.LANGUAGE.SET](state, { language }) {
    state.language = language
  },
}
