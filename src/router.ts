import Vue from 'vue'
import Router, { Route } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import BlogView from '@/views/BlogView.vue'
import PostsListView from '@/views/PostsListView.vue'
import NotFoundComponent from '@/components/NotFoundComponent.vue'
import { ROUTES } from './constants'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundComponent
    },
    {
      path: '/',
      redirect: ROUTES.HOME
    },
    {
      path: ROUTES.HOME,
      name: 'HomeView',
      component: HomeView
    },
    {
      path: ROUTES.PROJECTS,
      name: 'ProjectsView',
      component: ProjectsView
    },
    {
      path: ROUTES.BLOG.BASE_URL,
      name: 'PostListView',
      component: PostsListView
    },
    {
      path: ROUTES.BLOG.ID(),
      name: 'BlogView',
      component: BlogView,
      props: (route: Route) => ({
        nameComponent: route.params.nameComponent
      })
    },
    {
      path: ROUTES.ABOUT,
      name: 'AboutView',
      component: AboutView
    }
  ]
})
