import Vue from 'vue'
import Vuex from 'vuex'
import { AlertPlugin, ToastPlugin } from 'vux'
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

Vue.use(Vuex);
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)


const state = {
  publicSet: {//设置公共部分--头/尾
    // trainListFilter:false,
    // indexSubmenu:false,
    headSwiper: false, //轮播图
    headNav: false, // tab切换
    headTitle: false, // 头
    sTitle: '列表页',
    sStyle: '',
    sTo: {
      url: '/',
      name: true
    }
  },
  vLoadingIsShow:false,
  toastMsg:{
    isShow:false,
    text:'提示',
    width:'20em',
    time:2000
  }
}

const store = new Vuex.Store({
 getters,
 actions,
 mutations,
 state

});

export default store
