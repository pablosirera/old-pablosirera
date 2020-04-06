export const POSTS = [
  {
    title: 'posts.scaffoldingVue.title',
    date: new Date(2020, 2),
    nameComponent: 'scaffolding-vue',
    id: 3,
    altImage: 'posts.scaffoldingVue.title',
    timeToRead: '4',
    image:
      'https://res.cloudinary.com/de5xzoviz/image/upload/c_scale,q_60,w_1902/v1586162614/post3_kxb9vx.jpg',
  },
  {
    title: 'posts.eventBus.title',
    date: new Date(2019, 5),
    nameComponent: 'event-bus',
    id: 2,
    altImage: 'posts.eventBus.title',
    timeToRead: '3',
    image:
      'https://res.cloudinary.com/de5xzoviz/image/upload/c_scale,q_60,w_1925/v1586161004/post2_evsdv9.jpg',
  },
  {
    title: 'posts.addI18nVue.title',
    date: new Date(2019, 2),
    nameComponent: 'add-i18n-vue',
    id: 1,
    altImage: 'posts.addI18nVue.title',
    timeToRead: '5',
    image:
      'https://res.cloudinary.com/de5xzoviz/image/upload/v1586161002/post1_plfhkl.jpg',
  },
  {
    title: 'posts.deployAppsVue.title',
    date: new Date(2018, 11),
    nameComponent: 'deploy-apps-vue',
    id: 0,
    altImage: 'posts.deployAppsVue.title',
    timeToRead: '2',
    image:
      'https://res.cloudinary.com/de5xzoviz/image/upload/v1586160998/post0_t3r6by.jpg',
  },
]

export const POSTS_IDS = POSTS.map(post => post.nameComponent)
