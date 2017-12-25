<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import vTitle from '@/components/header/v-title'
export default {
  name: 'app',
  components:{vTitle},
  data (){
  	return {

  	}
  }
}
</script>
