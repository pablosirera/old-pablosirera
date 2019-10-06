import languageMutationsTypes from './mutationTypes'
import {
  setLanguage,
  setLanguageAndLocale,
  loadLanguageFile,
} from '@/shared/langs/utils'

function loadDefaultLanguage({ dispatch }) {
  const currentLanguage = window.navigator.language.split('-')[0]
  dispatch('changeLanguage', currentLanguage)
}

export async function changeLanguage({ commit, state }, language) {
  if (state.loadedLanguages.includes(language)) {
    setLanguage(language)
    commit(languageMutationsTypes.LANGUAGE.SET, { language })
    return
  }

  const locale = await loadLanguageFile(language)
  setLanguageAndLocale(language, locale)
  commit(languageMutationsTypes.LANGUAGE.FETCH.SUCCESS, { language })
  commit(languageMutationsTypes.LANGUAGE.SET, { language })
}

export const actions = {
  loadDefaultLanguage,
  changeLanguage,
}
