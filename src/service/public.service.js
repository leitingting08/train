/*
* @Author: Administrator
* @Date:   2018-03-08 22:44:43
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-08 22:44:57
*/
import axios from 'axios';
import store from '@/store';
class PublicFn{
  //公共ajax;
  axiosServer(url,data,onSuccess,onFalied){
    store.commit('vLoadingIsShow', true);
    if(!data){data = '';};
    axios.post(url,data)
      .then((response) => {
     // console.log(response)
        store.commit('vLoadingIsShow', false);
        clearTimeout(timeout);
        if(onSuccess){
          onSuccess(response.data);
        }
      })
      .catch(error => {
        store.commit('vLoadingIsShow', false);
        clearTimeout(timeout);
        if(onFalied){
          onFalied(error);
        }
      });
    let timeout = setTimeout(() => {
      store.commit('vLoadingIsShow', false);
      // const option = {
      //   isShow:true,
      //   text:'请求超时'
      // }
      // store.commit('toastMsg', option);
    },10000);
  }

  // axiosServer2(url,data,onSuccess,onFalied){
  //   store.commit('vLoadingIsShow', true);
  //   const p = new Promise(function(resolve, reject){
  //     axios.post(url,data)
  //       .then((response) => {
  //         store.commit('vLoadingIsShow', false);
  //         resolve(response.data);
  //       }).catch(error => {
  //       store.commit('vLoadingIsShow', false);
  //         reject(error);
  //     });
  //   });
  //   let timeout = setTimeout(() => {
  //     store.commit('vLoadingIsShow', false);
  //   },10000);
  //   return p;
  // }
}

export default PublicFn;