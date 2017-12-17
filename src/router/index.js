import Vue from 'vue'
import Router from 'vue-router'
import trainQuery from '@/page/index'
import trainList from '@/page/train-list'

Vue.use(Router)

export default new Router({
	mode:'history', //去掉#/
  routes: [
    {path: '/',name: 'trainQuery',component: trainQuery},
    {path: '/trainList',name: 'trainList',component: trainList}
  ]
})
