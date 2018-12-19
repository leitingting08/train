<template>
  <div id="app">
      <vHeader/>
      <router-view></router-view>
    </div>
  </div>
</template>
<script src="Content/environment.js"></script>
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
// @import '/Content/static.css';
</style>
