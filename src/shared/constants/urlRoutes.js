export const ROUTES = {
  HOME: '/home',
  PROJECTS: '/projects',
  BLOG: {
    BASE_URL: '/blog',
    ID: () => `${ROUTES.BLOG.BASE_URL}/:id`,
  },
  ABOUT: '/about',
}
