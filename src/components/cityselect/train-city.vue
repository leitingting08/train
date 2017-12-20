<template>
<div class="train-city">
	<span class="text" @click="showCityList">{{changeCityName}}</span>
	<div v-transfer-dom>
		<popup v-model="cityIsShow" position="left" width="100%">
			<div class="container">
				<div class="city-btns">
					<span class="vux-cancel" @click="cityIsShow = false"></span>
		            <span class="title">选择车站</span>
		            <span class="vux-enter" @click="cityIsShow = false">取消</span>
				</div>
				<div class="city">
					<div class="search-wrapper">
						 <input type="text"  placeholder="中文/拼音/首字母" @keyup="autoInput()"/>
					</div>
				</div>
			</div>
		</popup>
	</div>
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
			changeCityName:'杭州',
			cityIsShow:false
		}
	},
	methods:{
		showCityList(){
			this.cityIsShow=true;
		}
	}
	// computed:{
 //    changeCityName(){
 //      this.name = this.cityName
 //      return this.name;
 //       }
 //    },
}
</script>

<style lang="less">
.vux-popup-dialog{
    .city-btns{padding: 0.2rem;background: #fff;overflow: hidden;font-size: 0.26rem;
       .vux-enter{float: right}
       .title{margin-left:2.8rem;}
    }

    .city{padding: 0.2rem;
         .search-wrapper{
         	input{width: 97%;height: 0.5rem;border:1px solid #999;padding-left: 0.2rem;border-radius: 3px;}
         }
    }
}
</style>