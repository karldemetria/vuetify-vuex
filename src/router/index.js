import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Dashboard',
    },
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'About',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    meta: {
      title: 'Todo List',
    },
    component: () => import(/* webpackChunkName: "about" */ '../components/TodoList/TodoList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
