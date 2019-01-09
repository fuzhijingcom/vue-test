import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aaa from '@/components/aaa'
import ddd from '@/components/ddd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: aaa,
      meta: {
        title: "标题"
      },
    },
    {
      path: '/ddd',
      name: 'ddd',
      component: ddd,
      meta: {
        title: "详情"
      }
    }

  ]
})
