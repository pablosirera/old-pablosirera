import { ActionTree, ActionContext } from 'vuex'
import languageMutationsTypes from './mutationTypes'
import { State } from './state'
import { setLanguage, setLanguageAndLocale, loadLanguageFile } from '@/langs/utils'

function loadDefaultLanguage({ dispatch }: ActionContext<State, any>) {
  const currentLanguage = window.navigator.language.split('-')[0]
  dispatch('changeLanguage', currentLanguage)
}

export async function changeLanguage(
  { commit, state }: ActionContext<State, any>,
  language: string
) {
  if (state.loadedLanguages.includes(language)) {
    setLanguage(language)
    commit(languageMutationsTypes.LANGUAGE.SET, { language })
    return
  }

  const locale = await loadLanguageFile(language);
  setLanguageAndLocale(language, locale)
  commit(languageMutationsTypes.LANGUAGE.FETCH.SUCCESS, { language })
  commit(languageMutationsTypes.LANGUAGE.SET, { language })
}

export const actions: ActionTree<State, any> = {
  loadDefaultLanguage,
  changeLanguage
}
