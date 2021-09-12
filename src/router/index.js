// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })


import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Profile from '@/components/Profile'
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
