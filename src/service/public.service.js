/*
* @Author: Administrator
* @Date:   2018-03-08 22:44:43
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-08 22:44:57
*/
import axios from './axios.service';
import Vue from 'vue'

class PublicFn{

  getUrl(url){
     return `${__ce.baseURL}${url}`; // 打包时用这个 __ce.baseURL
     // return `${url}`; // 防止跨域，开发环境用这个代理
  };
  //公共ajax;post请求
  postServer(opt) {
    let data = {};
    if (opt.data) {
      data = opt.data;
    }
    
    axios.post(opt.url, data).then((res) => {
      if (opt.onSuccess) {
        if(!res.data.status){
          Vue.$vux.toast.text(res.data.msg)
          if (opt.onFailed) {
            opt.onFailed(res);
          }
          return;
        }
        opt.onSuccess(res.data);
      }
    }).catch(error => {
      console.log(error)
    });
  }

  //公共ajax;get请求
  getServer(opt) {
    let data = {};
    if (opt.data) {
      data = opt.data;
    }
    
    axios.get(opt.url, {params: data}).then((res) => {
      if (opt.onSuccess) {
        if(!res.data.status){
          Vue.$vux.toast.text(res.data.msg)
          if (opt.onFailed) {
            opt.onFailed(res);
          }
          return;
        }
        opt.onSuccess(res.data);
      }
    }).catch(error => {
      console.log(error)
    });
  }

  setData(opt) {
    let data = {};
    if (opt.data) {
      data = opt.data;
    }
    return data;
  }

}

export default PublicFn;