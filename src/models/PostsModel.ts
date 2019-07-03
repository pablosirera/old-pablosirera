import { TranslateResult } from 'vue-i18n'

export interface IPostsModel {
  title: TranslateResult
  date: Date
  id: number
  nameComponent: string
  altImage: TranslateResult
  timeToRead: string
}
