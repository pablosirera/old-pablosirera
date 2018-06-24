import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/Home.vue'
import AboutView from '@/views/About.vue'
import ProjectsView from '@/views/Projects.vue'
import BlogView from '@/views/Blog.vue'
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
