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
    {path: '/',name: 'trainQuery',component: trainQuery,meta:{title:'火车票查询'}},
    {path: '/trainList',name: 'trainList',component: trainList,meta:{title:'列车列表'}},
    {path: '/bookTicket',name: 'bookTicket',component: bookTicket,meta:{title:'坐席预订'}},
    {path: '/trainFillOrder',name: 'trainFillOrder',component: trainFillOrder,meta:{title:'填写订单'}},
    {path: '/orderList',name: 'orderList',component: orderList,meta:{title:'订单列表'}},
    {path: '/orderDetail',name: 'orderDetail',component: orderDetail,meta:{title:'订单详情'}},
    {path: '/orderPay',name: 'orderPay',component: orderPay,meta:{title:'订单支付'}}
  ]
})
