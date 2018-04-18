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
  axiosServer(url,data,onSuccess,onFalied){
    //store.commit('vLoadingIsShow', true);
    if(!data){data = '';};
    axios.post(url,data)
      .then((response) => {
        console.log(response)
        //store.commit('vLoadingIsShow', false);
        clearTimeout(timeout);
        if(onSuccess){
          onSuccess(response.data);
        }
      })
      .catch(error => {
        //store.commit('vLoadingIsShow', false);
        clearTimeout(timeout);
        if(onFalied){
          onFalied(error);
        }
      });
    let timeout = setTimeout(() => {
      //store.commit('vLoadingIsShow', false);
    },10000);
  }

}

export default PublicFn;