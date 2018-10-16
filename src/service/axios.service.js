import axios from 'axios'
import Vue from 'vue'
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
let vm = new Vue;
// 超时时间
axios.defaults.timeout = 10000
// http请求拦截器
axios.interceptors.request.use(config => { // 请求之前加loading
  vm.$vux.toast.show({
    text: 'Loading'
  })
  return config
}, error => {
  vm.$vux.toast.text('请求失败')
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  vm.$vux.toast.hide()
  return data
}, error => {
  vm.$vux.toast.hide()
  vm.$vux.toast.text('请求失败')
  return Promise.reject(error)
})
export default axios;