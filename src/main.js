// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-ployfill'
import Vue from 'vue'
import fastclick from 'fastclick'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import Vuex from 'vuex'
// import infiniteScroll from 'vue-infinite-scroll'
import store from './store'
// import Vuex from 'vuex'
// import vuexI18n from 'vuex-i18n'
// Vue.use(infiniteScroll)
// Vue.use(VueResource)
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
