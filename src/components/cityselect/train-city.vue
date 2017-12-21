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
					<!-- <div class="auto-list-con">
						<div class="list-name" v-for="item in autoData">{{item.stationName}}</div>
					</div> -->
					<div class="list-con">
						<div class="tit">最近访问</div>
			            <div class="list-other">
			                <span class="tag-name" v-for="(city,index) in citys">{{city.searchcitys}}</span>
			            </div>
			            <div class="tit">热门车站</div>
			            <div class="list-other">
			                <span class="tag-name" v-for="(item,index) in hotcitys">{{item}}</span>
			            </div>
                        <div class="list-name" v-for="(item,index) in listData">
                              <div class="name" v-for="city in Stations">{{city.sta_name}}</div>
                        </div>
					</div>
				</div>
			</div>
		</popup>
	</div>
</div>
</template>

<script>
import axios from 'axios';
import {TransferDom,Popup,InlineLoading } from 'vux';

export default{
	name:'train-city',
	directives:{
		TransferDom
	},
	components:{TransferDom,Popup,InlineLoading},
	created(){
       this.stations = this.loadCityList();
      console.log(this.stations)
	},
	// props:['cityname'],
	data(){
		return{
			// name:this.cityName
			changeCityName:'杭州',
			cityIsShow:false,
			citys:[{'searchcitys':'杭州'}],
			hotcitys:['杭州','北京'],
			listData:{},
			Stations: []
		}
	},
	methods:{
		showCityList(){
			this.cityIsShow=true;
		},
		loadCityList(){
			var vm = this
			axios.get('src/api/station-list.json')
			.then((res)=>{
				let citys=[];
				citys.push(res.data.result);
                citys=citys[0]
                vm.Stations=citys
			})
			.catch((err)=>{
				console.log(err);
			})
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
         .list-con{padding-top: 0.3rem;
         	.list-other{
         		.tag-name{display:inline-block;padding: 0.15rem 0.3rem;border:1px solid #d8d8d8;background: #fff;border-radius: 5px;margin:0.2rem 0.1rem;}
         		.list-name{
         			.name{display: inline-block;width: 100%;height: 0.6rem;}
         		}
         	}
         }
    }
}
</style>