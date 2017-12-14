<template>
  <div class="train-query">
   <vHeader></vHeader>
   这是主页
  </div>
</template>

<script>
import vHeader from '@/components/header/v-header';//这里把组件导入
export default {
  name:'trainQuery',
  data (){
    return {

    }
  },
  components:{vHeader} //这里别忘了引用组件
}
</script>