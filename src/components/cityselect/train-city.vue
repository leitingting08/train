<template>
<div class="train-city">
	<span class="text">{{changeCityName}}</span>
</div>
</template>

<script>
import {TransferDom,Popup,InlineLoading } from 'vux';

export default{
	name:'train-city',
	directives:{
		TransferDom
	},
	components:{TransferDom,Popup,InlineLoading},
	// props:['cityname'],
	data(){
		return{
			// name:this.cityName
			changeCityName:'杭州'
		}
	},
	// computed:{
 //    changeCityName(){
 //      this.name = this.cityName
 //      return this.name;
 //       }
 //    },
}
</script>