import Vue from 'vue'
import VueI18n from 'vue-i18n'
import es from './locales/es.json'
import { ILangModel } from '@/models/LangModel'

Vue.use(VueI18n)
const locale: string = 'es'
const messages = {
  es
}

export const i18n = new VueI18n({
  locale,
  messages
})

export const LANGUAGES: ILangModel[] = [
  {
    key: 'es',
    alt: 'Spanish',
    text: 'ES'
  },
  {
    key: 'en',
    alt: 'English',
    text: 'EN'
  }
]
