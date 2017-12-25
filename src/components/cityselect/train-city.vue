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
					<div class="list-con">
						<div class="tit">定位</div>
			            <div class="list-other">
			                <span class="tag-name po" v-for="(city,index) in positions">{{city}}</span>
			            </div>
						<div class="tit">历史</div>
			            <div class="list-other">
			                <span class="tag-name" v-for="(city,index) in citys" @click="selectCityName(city.searchcitys)">{{city.searchcitys}}</span>
			            </div>
			            <div class="tit">热门城市</div>
			            <div class="list-other">
			                <span class="tag-name" v-for="(item,index) in hotcitys" @click="selectCityName(item)">{{item}}</span>
			            </div>
                        <!-- <div class="list-name" v-for="(item,index) in listData"> -->
                              <div class="name" v-for="city in Stations" @click="selectCityName(city.sta_name)">{{city.sta_name}}</div>
                        <!-- </div> -->
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

const hot_city='热门'

export default{
	name:'train-city',
	props:['cityName'],
	directives:{
		TransferDom
	},
	components:{TransferDom,Popup,InlineLoading},
	created(){
       this.Stations = this.loadCityList();
      console.log(this.Stations)
	},
	// props:['cityname'],
	data(){
		return{
			// name:this.cityName
			cityIsShow:false,
			positions:['杭州'],
			citys:[{'searchcitys':'杭州'}],
			hotcitys:['杭州','北京','广州','上海','重庆','天津','长沙','成都','大连','哈尔滨','合肥','南昌','南京','青岛','沈阳','深圳','苏州','太原','武汉','厦门','西安','郑州'],
			// listData:{},
			Stations: []
		}
	},
	computed:{
        changeCityName(){
        	this.name = this.cityName
        	return this.name;
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
		},
		nomalizeCity(list){
			let map = {
				hot:{
					title: hot_city,
					items:[]
				}
			}
			const key = item.sta_ename.substr(0,1);
			
		},
		selectCityName(val){
			this.name=val;
			this.cityIsShow=false;
			this.$emit('changeCityName',this.name);
			//存放历史记录
			// const option={cityname:this.name}
			// setCity(option);
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
@import "../../assets/css/base.less";
@yellow:#FFC300;
@orange:#ff6600;
.vux-popup-dialog{
    .city-btns{padding: 0.2rem;background: #fff;overflow: hidden;font-size: 0.26rem;
       .vux-enter{float: right;}
       .title{margin-left:2.8rem;}
    }
    .city{font-size: 0.28rem;
         .search-wrapper{
         	input{width: 91%;height: 0.5rem;border:1px solid #eee;padding-left: 0.2rem;border-radius: 3px;margin:0.2rem;}
         }
         .list-con{
         	.tit{padding-left: 0.2rem;margin: 0.2rem 0;}
         	.list-other{margin-bottom: 0.2rem;
         		.tag-name{display:inline-block;width:1.8rem;height:0.6rem;line-height:0.6rem;text-align:center;border:1px solid #d8d8d8;background: #fff;border-radius: 2px;margin:0.05rem 0.2rem;}
         		.po{border:1px solid @yellow;color: @yellow;}
         	}
         	.name{background:#fff;width: 100%;height: 0.8rem;line-height:0.8rem;padding-left:0.2rem;
         		border-top: 1px solid #eee;
         		&:last-child{border-bottom: 1px solid #eee;}
         	}
        }
    }
}
</style>