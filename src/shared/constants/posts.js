export const POSTS = [
  {
    title: 'posts.scaffoldingVue.title',
    date: new Date(2020, 2),
    nameComponent: 'scaffolding-vue',
    id: 3,
    altImage: 'posts.scaffoldingVue.title',
    timeToRead: '4',
  },
  {
    title: 'posts.eventBus.title',
    date: new Date(2019, 5),
    nameComponent: 'event-bus',
    id: 2,
    altImage: 'posts.eventBus.title',
    timeToRead: '3',
  },
  {
    title: 'posts.addI18nVue.title',
    date: new Date(2019, 2),
    nameComponent: 'add-i18n-vue',
    id: 1,
    altImage: 'posts.addI18nVue.title',
    timeToRead: '5',
  },
  {
    title: 'posts.deployAppsVue.title',
    date: new Date(2018, 11),
    nameComponent: 'deploy-apps-vue',
    id: 0,
    altImage: 'posts.deployAppsVue.title',
    timeToRead: '2',
  },
]

export const POSTS_IDS = POSTS().map(post => post.nameComponent)
