import { i18n } from './i18n'
import axios from 'axios'
import VueI18n from 'vue-i18n'

export function setLanguage(language: string) {
  i18n.locale = language

  axios.interceptors.request.use(config => {
    config.headers.common['Accept-Language'] = language
    return config
  })
  const html = document.querySelector('html')
  if (html != null) {
    html.setAttribute('lang', language)
  }
}

export function setLanguageAndLocale(language: string, locale: VueI18n.LocaleMessageObject) {
  setLanguage(language)
  i18n.setLocaleMessage(language, locale)
}

export async function loadLanguageFile(language: string = 'en') {
  return await loadLanguageDomains(language)
}

async function loadLanguageDomains(language: string) {
  const locale = await import(`./../langs/locales/${language}.json`)
  return locale
}
