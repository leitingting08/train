import Vue from 'vue'
import Router from 'vue-router'
import trainQuery from '@/page/index'
import trainList from '@/page/train-list'
import bookTicket from '@/page/book-ticket'
import trainFillOrder from '@/page/train-fill-order'
import orderList from '@/page/order-list'
import orderDetail from '@/page/order-detail'
import orderPay from '@/page/pay-order'


Vue.use(Router)

export default new Router({
	// mode:'history', //去掉#/
  routes: [
    {path: '/',name: 'trainQuery',component: trainQuery},
    {path: '/trainList',name: 'trainList',component: trainList},
    {path: '/bookTicket',name: 'bookTicket',component: bookTicket},
    {path: '/trainFillOrder',name: 'trainFillOrder',component: trainFillOrder},
    {path: '/orderList',name: 'orderList',component: orderList},
    {path: '/orderDetail',name: 'orderDetail',component: orderDetail},
    {path: '/orderPay',name: 'orderPay',component: orderPay}
  ]
})
