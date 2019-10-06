import Vue from 'vue'
import VueI18n from 'vue-i18n'
import es from './locales/es.json'

Vue.use(VueI18n)

const locale = 'es'
const messages = {
  es,
}

export const i18n = new VueI18n({
  locale,
  messages,
})

export const LANGUAGES = [
  {
    key: 'es',
    alt: 'Spanish',
    text: 'ES',
  },
  {
    key: 'en',
    alt: 'English',
    text: 'EN',
  },
]
