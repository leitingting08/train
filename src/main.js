// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-ployfill'
import Vue from 'vue'
import fastclick from 'fastclick'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import Vuex from 'vuex'
import store from './store'
import  { AlertPlugin, ConfirmPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)

Vue.use(Vuex)
fastclick.attach(document.body)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  store,
  render: h=>h(App)
}).$mount('#app')
