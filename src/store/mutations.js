import {publicSetEvent,vLoadingIsShow,toastMsg} from './mutation-types';

const mutations = {
  [publicSetEvent]: (state, json) => {
    json.headSwiper !== undefined ? state.publicSet.headSwiper = json.headSwiper : '';
    json.headNav !== undefined ? state.publicSet.headNav = json.headNav : '';
    json.headTitle !== undefined ? state.publicSet.headTitle = json.headTitle : '';
    // json.trainListFilter !== undefined ? state.publicSet.trainListFilter = json.trainListFilter : '';
    // json.indexSubmenu !== undefined ? state.publicSet.indexSubmenu = json.indexSubmenu : '';

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
