/*
* @Author: Administrator
* @Date:   2018-03-08 22:44:43
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-08 22:44:57
*/
import axios from 'axios';
//import store from '@/store';
class PublicFn{
   //公共ajax;
  postServer(opt) {
    const _axios = axios.create({
      timeout: this.timeout
    });
    let data = {};
    if (opt.data) {
      data = opt.data;
    }
    _axios.post(opt.url, data).then((response) => {
      console.log(response);
      if(response.data.status === 'error'){
        layer.open({
          content: 'error:' + response.data.hotelInfo
          ,skin: 'msg'
          ,time: 2 //2秒后自动关闭
        });
        if (opt.onFailed) {
          opt.onFailed(response);
        }
        return;
      }
      if (opt.onSuccess) {
        opt.onSuccess(response);
      }
    }).catch(error => {
      if (opt.onFailed) {
        opt.onFailed(error);
      }
      if (!error.response.data.success) {
        alert(error.response.data.error.message);
        // return;
      }

    });
  }

  // get 请求
  getServer(opt) {
    const _axios = axios.create({
      timeout: this.timeout
    });
    let data = {};
    if (opt.data) {
      data = opt.data;
    }
    _axios.get(opt.url, {params: data}).then((response) => {
      if (opt.onSuccess) {
        opt.onSuccess(response);
      }
    }).catch(error => {
      if (opt.onFailed) {
        opt.onFailed(error);
      }
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