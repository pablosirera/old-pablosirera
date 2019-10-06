import Vue from 'vue'
import Router from 'vue-router'
import { ROUTES } from '@/shared/constants'

Vue.use(Router)

// TODO: add name routes into constants
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/components/NotFoundComponent.vue'),
    },
    {
      path: '/',
      redirect: ROUTES.HOME,
    },
    {
      path: ROUTES.HOME,
      name: 'HomeView',
      component: () => import('@/views/Home/Index.vue'),
    },
    {
      path: ROUTES.PROJECTS,
      name: 'ProjectsView',
      component: () => import('@/views/Projects/Index.vue'),
    },
    {
      path: ROUTES.BLOG.BASE_URL,
      name: 'PostListView',
      component: () => import('@/views/Posts/Index.vue'),
    },
    {
      path: ROUTES.BLOG.ID(),
      name: 'BlogView',
      component: () => import('@/views/Blog/Index.vue'),
    },
    {
      path: '/about',
      name: 'AboutView',
      component: () => import('@/views/About/Index.vue'),
    },
  ],
})
