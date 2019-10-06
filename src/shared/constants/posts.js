import { i18n } from '@/shared/langs/i18n'

export const POSTS = [
  {
    title: i18n.t('posts.eventBus.title', 'es'),
    date: new Date(2019, 5),
    nameComponent: 'event-bus',
    id: 2,
    altImage: i18n.t('posts.eventBus.title', 'es'),
    timeToRead: '2',
  },
  {
    title: i18n.t('posts.addI18nVue.title', 'es'),
    date: new Date(2019, 2),
    nameComponent: 'add-i18n-vue',
    id: 1,
    altImage: i18n.t('posts.addI18nVue.title', 'es'),
    timeToRead: '4',
  },
  {
    title: i18n.t('posts.deployAppsVue.title', 'es'),
    date: new Date(2018, 11),
    nameComponent: 'deploy-apps-vue',
    id: 0,
    altImage: i18n.t('posts.addI18nVue.title', 'es'),
    timeToRead: '1',
  },
]

export const POSTS_IDS = POSTS.map(post => post.nameComponent)
