import Vue from 'vue'
import Router from 'vue-router'
import TalkList from '@/components/TalkList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TalkList',
      component: TalkList
    }
  ]
})
