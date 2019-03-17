import { IPostsModel } from '@/models'
import { i18n } from '@/langs/i18n'

export const POSTS: IPostsModel[] = [
  {
    title: i18n.t('posts.deployAppsVue.title'),
    date: new Date(2018, 11),
    id: 0
  },
  {
    title: 'Añadir i18n en una aplicación Vue',
    date: new Date(2019, 2),
    id: 1
  }
]

export const POSTS_IDS = POSTS.map(post => post.id)
