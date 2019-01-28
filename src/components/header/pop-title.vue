<template>
	<div class="v-title">
		<x-header :left-options="{backText: '',preventGoBack:true}" @on-click-back="backEvent" class="btn btn-default" @on-click-more="rightEvent">{{title}}
    </x-header>
	</div>
</template>

<script>
import { XHeader} from 'vux'

export default {
  name:'vTitle',
  props:['title'],
  components: {XHeader},
  data(){
    return{
      // title:'杭州-北京'
    }
  },
  methods: {
    backEvent(){
      this.$emit('backEvent')
    },
    rightEvent(){
      this.$emit('rightEvent')
    },
  }
}
</script>

<style lang="less">
@yellow:#FFC300;
@orange:#ff6600;
.v-title{font-size: 0.33rem;height:.9rem;position: fixed;top: 0;width: 100%;z-index: 10;
  .vux-header{background: @yellow;
    .vux-header-title{color: #333;}
    .vux-header-left .left-arrow:before{content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid #333;
    border-width: 1px 0 0 1px;
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
    top: 8px;
    left: 7px;}
   .vux-header-left a,.vux-header-left button,.vux-header-right a, .vux-header-right button{color: #333;}
  }
  .right-options{position: absolute;top: 0.2rem;right: 0.2rem;width: 0.8rem;height: 0.52rem;background: transparent;border: transparent;&:active{border-style: none;border:none;}}
  .vux-popover{left: 4.8rem!important;width: 2.2rem;z-index: 11;
    .vux-popover-arrow-up{left:83%;}
   .popover-demo-content{background-color: rgba(0,0,0,0.3);
    li{padding:0.1rem 0.2rem;font-size: 0.26rem;
      i{margin-right:0.2rem;}
      }}
  }
  a{color: #fff;}
}

</style>
