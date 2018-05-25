<template>
  <div id="app">
      <vHeader/>
      <router-view></router-view>
      <div v-transfer-dom><loading :show="vLoadingIsShow" :text="`加载中...`"></loading></div>
      <toast v-model="toastMsg.isShow" type="text" :width="toastMsg.width" :time="toastMsg.time" is-show-mask :position="`middle`">{{toastMsg.text}}</toast>
  </div>
</template>

<script>
import {Loading,TransferDomDirective as TransferDom,Toast} from 'vux';
import vHeader from '@/components/header/v-header'
import vFooter from '@/components/footer/v-footer';
import { mapState } from 'vuex';
export default {
  name: 'app',
  directives: {
    TransferDom
  },
  components:{Loading, Toast, vHeader, vFooter},
  data (){
  	return {

  	}
  },
  computed:{
    ...mapState(['vLoadingIsShow','toastMsg'])
    // ...mapState(['vLoadingIsShow'])
  }
}
</script>
