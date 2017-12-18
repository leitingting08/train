import Vue from 'vue'
import Router from 'vue-router'
import trainQuery from '@/page/index'
import trainList from '@/page/train-list'
import bookTicket from '@/page/book-ticket'

Vue.use(Router)

export default new Router({
	mode:'history', //去掉#/
  routes: [
    {path: '/',name: 'trainQuery',component: trainQuery},
    {path: '/trainList',name: 'trainList',component: trainList},
    {path: '/bookTicket',name: 'bookTicket',component: bookTicket}
  ]
})
