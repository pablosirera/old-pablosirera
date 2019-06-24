import { IPostsModel } from '@/models'
import { i18n } from '@/langs/i18n'

export const POSTS: IPostsModel[] = [
  {
    title: i18n.t('posts.deployAppsVue.title', 'es'),
    date: new Date(2018, 11),
    id: 0,
    altImage: i18n.t('posts.addI18nVue.title', 'es')
  },
  {
    title: i18n.t('posts.addI18nVue.title', 'es'),
    date: new Date(2019, 2),
    id: 1,
    altImage: i18n.t('posts.addI18nVue.title', 'es')
  },
  {
    title: i18n.t('posts.eventBus.title', 'es'),
    date: new Date(2019, 5),
    id: 2,
    altImage: i18n.t('posts.eventBus.title', 'es')
  }
]

export const POSTS_IDS = POSTS.map(post => post.id)
