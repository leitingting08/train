import axios from 'axios'
// 超时时间
axios.defaults.timeout = 10000
// http请求拦截器
axios.interceptors.request.use(config => { // 请求之前加loading
  this.$vux.toast.show({
    text: 'Loading'
  })
  return config
}, error => {
  this.$vux.toast.text('加载超时')
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  this.$vux.toast.hide()
  return data
}, error => {
  this.$vux.toast.hide()
  this.$vux.toast.text('加载超时')
  return Promise.reject(error)
})
export default axios;