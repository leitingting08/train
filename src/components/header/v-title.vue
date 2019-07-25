<template>
	<div class="v-title">
		<x-header :left-options="{backText: ''}" :right-options="{showMore: true}" class="btn btn-default">{{title}}</x-header>
		<popover placement="bottom" style="margin: 20px;">
          <div slot="content" class="popover-demo-content">
             <li><i class="iconfont icon-pinglun"></i>消息</li>
             <li><i class="iconfont icon-shouye"></i>首页</li>
         </div>
          <button class="btn right-options">{{ ('') }}</button>
    </popover>
	</div>
</template>

<script>
import { XHeader,Popover} from 'vux'

export default {
  name:'vTitle',
  props:['title'],
  components: {XHeader,Popover},
  data(){
    return{
      // title:'杭州-北京'
    }
  },
  methods: {
    onShow () {
      console.log('on show')
    },
    onHide () {
      console.log('on hide')
    },
    // goRouter(url){
    //     this.$router.push(url);
    // }
  }
}
</script>

<style lang="less">

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
 
  a{color: #fff;}
}
 .popover-demo-content{background-color: rgba(0,0,0,0.3);
    li{padding:0.1rem 0.2rem;font-size: 0.26rem;box-sizing:border-box;
      i{margin-right:0.2rem;}
      }
    }
 .vux-popover{z-index: 11;min-width:1.5rem;left:auto!important;right:0.2rem!important;}
</style>
