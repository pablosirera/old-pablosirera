import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en.json'

Vue.use(VueI18n)
const locale: string = 'en'
const messages = {
  en
}

export const i18n = new VueI18n({
  locale,
  messages
})

export const LANGUAGES = [
  {
    text: 'ES',
    key: 'es'
  },
  {
    text: 'EN',
    key: 'en'
  }
]
