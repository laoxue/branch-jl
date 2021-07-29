//index.js
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Details from '@/components/Details'
Vue.use(Router) //这句别忘记了
export default new Router({
  mode:'history',  //使用history防止url中出现#
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})