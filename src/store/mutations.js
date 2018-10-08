import {publicSetEvent,vLoadingIsShow,toastMsg} from './mutation-types';

const mutations = {
  [publicSetEvent]: (state, json) => {
    state.publicSet = {
      headSwiper: false, //轮播图
      headNav: false, // tab切换
      headTitle: false, // 头
      sTitle: '列表页',
      sStyle: '',
      sTo: {
        url: '/',
        name: true
      }
    } // 在路由变化时更新状态
    state.publicSet.headSwiper = json.headSwiper || state.publicSet.headSwiper;
    state.publicSet.headNav = json.headNav || state.publicSet.headNav;
    state.publicSet.headTitle = json.headTitle || state.publicSet.headTitle;
    state.publicSet.sTitle = json.sTitle || state.publicSet.sTitle;
    state.publicSet.sStyle = json.sStyle || state.publicSet.sStyle;
    state.publicSet.sTo = json.sTo || state.publicSet.sTo;
  },
  [vLoadingIsShow]: (state, arg) => {
    state.vLoadingIsShow = arg;
  },
  [toastMsg]: (state, json) => {
    json.isShow !== undefined ? state.toastMsg.isShow = json.isShow : '';
    json.text !== undefined ? state.toastMsg.text = json.text : '';
    json.time !== undefined ? state.toastMsg.time = json.time : '';
    json.width !== undefined ? state.toastMsg.width = json.width : '';
  }
}

export default mutations;
