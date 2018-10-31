import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import BlogView from '@/views/BlogView.vue'
import { ROUTES } from './constants'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: ROUTES.HOME,
      name: 'home',
      component: HomeView
    },
    {
      path: ROUTES.PROJECTS,
      name: 'projects',
      component: ProjectsView
    },
    {
      path: ROUTES.BLOG,
      name: 'blog',
      component: BlogView
    },
    {
      path: ROUTES.ABOUT,
      name: 'about',
      component: AboutView
    }
  ]
})
