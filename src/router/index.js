import Vue from 'vue'
import Router from 'vue-router'
import trainQuery from '@/page/index'

Vue.use(Router)

export default new Router({
	mode:'history', //去掉#/
  routes: [
    {path: '/',name: 'trainQuery',component: trainQuery}
  ]
})
