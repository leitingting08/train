<template>
	<div class="v-title">
		<x-header :right-options="{showMore: true}" class="btn btn-default">{{title}}</x-header>
		<popover placement="bottom" style="margin: 20px;">
          <div slot="content" class="popover-demo-content">
             666666
         </div>
          <button class="btn btn-default">{{ ('Popover on bottom') }}</button>
       </popover>
	</div>
</template>

<script>
import { XHeader,Popover} from 'vux'

export default {
  name:'vTitle',
  props:['title','sTo'],
  components: {XHeader,Popover},
  methods: {
    onShow () {
      console.log('on show')
    },
    onHide () {
      console.log('on hide')
    }
  }
}
</script>

<style lang="less">
.v-title{font-size: 0.33rem;height:.9rem;
  // .vux-header{ background-color:#fff;position: fixed;top: 0;right:0;left:0;z-index: 9;height: .9rem;line-height: .9rem;box-sizing: border-box;}
  // .vux-header .vux-header-left .left-arrow:before{border-color:#333;}
  // .vux-header .vux-header-title{color: #333;line-height: .8rem;}
  // .vux-header{padding:.05rem 0}
  // .vux-header .vux-header-left a, .vux-header .vux-header-left button, .vux-header .vux-header-right a, .vux-header .vux-header-right button{color:#fff}
}

</style>
