import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Profile from '@/components/Profile'
import Carrier from '@/components/Carrier'
import Skill from '@/components/Skill'
import Output from '@/components/Output'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/carrier',
      name: 'Carrier',
      component: Carrier
    },
   {
      path: '/skills',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/outputs',
      name: 'Output',
      component: Output
    }
  ]
})
