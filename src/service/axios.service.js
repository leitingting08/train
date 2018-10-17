import axios from 'axios'
import Vue from 'vue'
import  { ToastPlugin,LoadingPlugin  } from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
let vm = new Vue;
// 超时时间
axios.defaults.timeout = 200000
// http请求拦截器
axios.interceptors.request.use(config => { // 请求之前加loading
  vm.$vux.loading.show({
    text: 'Loading'
  })
  return config
}, error => {
  vm.$vux.toast.text('请求失败')
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  vm.$vux.loading.hide()
  return data
}, error => {
  vm.$vux.loading.hide()
  vm.$vux.toast.text('请求超时')
  return Promise.reject(error)
})
export default axios;