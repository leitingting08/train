<template>
  <div id="app">
      <vHeader/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/header/v-header'
export default {
  name: 'app',
  directives: {
  },
  components:{vHeader},
  data (){
  	return {
  	}
  },
  computed:{
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
// vux-1px-l 左边框
// vux-1px-r 右边框
// vux-1px-t 上边框
// vux-1px-b 下边框
// vux-1px-tb 上下边框
// vux-1px 全边框
</style>
