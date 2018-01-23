import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { LOGGED_USER, GET_LAST } from '@/store/types'

Vue.use(Router)

const checkSession = () => {
  store.commit(GET_LAST)
  const loggedUser = store.getters[LOGGED_USER]
  return loggedUser && loggedUser.logged
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Talks',
      component: () => import('@/pages/Talks'),
      beforeEnter: (to, from, next) => checkSession()
        ? next()
        : next({ path: '/login', replace: true })
    },
    {
      path: '/agenda',
      name: 'Agenda',
      component: () => import('@/pages/Agenda'),
      beforeEnter: (to, from, next) => checkSession()
        ? next()
        : next({ path: '/login', replace: true })
    },
    {
      path: '/talks',
      name: 'Admin',
      component: () => import('@/pages/Admin'),
      beforeEnter: (to, from, next) => checkSession()
        ? next()
        : next({ path: '/login', replace: true })
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login'),
      beforeEnter: (to, from, next) => checkSession()
        ? next({ path: '/', replace: true })
        : next()
    }
  ]
})
