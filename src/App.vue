<template>
  <div id="app">
     <vHeader></vHeader>
    <router-view/>
  </div>
</template>

<script>
import vHeader from '@/components/header/v-header'
export default {
  name: 'app',
  components:{vHeader},
  data (){
  	return {

  	}
  }
}
</script>
