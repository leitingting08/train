<template>
  <div class="v-header">
     <vSwiper v-if="publicSet.headSwiper"></vSwiper>
     <vNav v-if="publicSet.headNav" :title="publicSet.sTitle" :sTo="publicSet.sTo"></vNav>
     <vTitle v-if="publicSet.headTitle"></vTitle>
  </div>
</template>

<script>
import vTitle from './v-title'
import vNav from './v-tab'
import vSwiper from './swiper'
import { mapState } from 'vuex'

export default{
	name:'vHeader',
	data(){
		return{

		}
	},
	components:{vTitle,vNav,vSwiper},
	computed:{
		...mapState(['publicSet'])
	}
}
</script>

<style lang="less">
	
</style>