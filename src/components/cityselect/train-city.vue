<template>
<div class="train-city">
	<div class="city-btns">
		<span class="vux-cancel" @click="closePop"></span>
        <span class="title">选择车站</span>
        <span class="vux-enter" @click="closePop">取消</span>
	</div>
	<div class="container" id="traincity">
		<div class="city">
			<!-- 搜索框 -->
			<div class="search-wrapper relative">
				 <input type="text"  placeholder="中文/拼音/首字母" @keyup="autoInput()"/>
				 <i class="iconfont icon-sousuo"></i>
			</div>
			<!-- 搜索结果 -->
            <div class="auto-list-con" v-if="autoIsShow">
            	<div class="list-name" v-for="item in autoData" @click="selectCityName(item.sta_name)">{{item.sta_name}}</div>
            </div>

			<!-- 城市列表内容 -->
			<div class="list-con" v-if="!autoIsShow">
				<div class="tit">历史</div>
	            <div class="list-other">
	                <span class="tag-name v1px" v-for="(city,index) in citys" @click="selectCityName(city.searchcitys)">{{city.searchcitys}}</span>
	            </div>
	            <div class="tit">热门城市</div>
	            <div class="list-other">
	                <span class="tag-name v1px" v-for="(item,index) in hotcitys" @click="selectCityName(item)">{{item}}</span>
	            </div>
	            <div class="list-tit">
	              <div class="tit" v-for="(item,index) in listData" @click="localCity(index)">{{index}}</div>
	            </div>
	            <div v-for="(item,index) in listData" :id="index">
		            <div>{{index}}</div>
                    <div class="name" v-for="city in item" @click="selectCityName(city.sta_name)">{{city.sta_name}}</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios';
import {getStation,setStation} from '@/assets/js/storage_stations';
import TraintripServer from '@/service/traintrip.server';
const tripServer = new TraintripServer();

export default{
	name:'train-city',
	props:['fromToType'],//把父组件的值传到子组件中
	created(){
       this.loadCityList(); //加载城市列表
	},
	data(){
		return{
			citys:[{'searchcitys':'杭州'}],
			hotcitys:['杭州','北京','广州','上海','重庆','天津','长沙','成都','大连','合肥','南昌','南京','沈阳','深圳','苏州','武汉','厦门','郑州'],
			listData:{},
			Stations: [],
			autoData:[],
			autoIsShow:false,
            sortFlag:true,
            questCityData:[]
		}
	},
	methods:{
		closePop(){
			console.log('close')
			this.$emit('closePop')
		},
		showCityList(){ //获取历史选择过的城市
			this.citys=getStation();
		},
		loadCityList(){ //点击首页的城市，加载城市列表
			tripServer.sendStationListServer({
				data:{},
		        onSuccess: (res) => {
		        let citys=[];
				citys.push(res.data.list);
				this.Stations = citys[0]
                const arrA_Z = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
                this.listData = {A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],J:[],K:[],L:[],M:[],N:[],O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[],X:[],Y:[],Z:[]}
                 this.Stations.forEach((item,index)=>{//遍历城市数组
                 	arrA_Z.forEach(i=>{//遍历字母数组
                 		if(item.sta_ename&&(item.sta_ename.substring(0, 1).toUpperCase() ===i)){//如果城市英文首字母和对应字母匹配，就加到里面
			              this.listData[i].push(item);
			              return false;
            			}
                 	})
                 })
		        },
		        onFalied: (error) => {
		          console.log(error);
		        }
		      });
		},
		localCity(index){ //点击右边字母索引，跳到对应的位置
		document.querySelector(`#${index}`).scrollIntoView(true);
	    },
		selectCityName(val){//点击选择城市，填入首页
			// this.name=val;
			const option0 = {
				name:val,
				type:this.fromToType
			}
			this.$emit('changeCityName',option0);
			//存放历史记录
			const option={searchcitys:this.name}
			setStation(option);
		},
		autoInput(){//输入框搜索
            const str=event.target.value.toLocaleLowerCase().replace(/\s/g,"");//搜索字符串去空格
            this.autoData.length=0;
            this.autoIsShow=true;

            if(str===''){//如果为空，不展示搜索结果面板
                this.autoIsShow=false;
                return;
            }            
            this.Stations.forEach((item,index)=>{ //模糊匹配
            	if(item.sta_name&&item.sta_ename){
            		const name=item.sta_name;
	            	const ename=item.sta_ename || 's';
	            	if(name.indexOf(str)>=0||ename.indexOf(str)>=0){
	            		this.autoData.push(item);
	            	}
            	}
            	
            })
            if(this.autoData.length===0){
            	this.autoData.push({sta_name:"暂不支持该城市"});
            }
            document.getElementsByClassName('vux-popup-left')[0].scrollTop =0;
		}
	}
}
</script>

<style lang="less" scoped>
@yellow:#FFC300;
@orange:#ff6600;
@grey:#d8d8d8;
.train-city{
	.container{position: absolute;top: 1rem;}
	.city-btns{position: fixed;width:100%;top: 0;z-index: 10;box-sizing: border-box;
    	padding: 0.2rem;background: #fff;overflow: hidden;font-size: 0.26rem;
       .vux-enter{float: right;}
       .title{margin-left:2.8rem;}
    }
    .city{font-size: 0.28rem;
         .search-wrapper{padding:0.2rem;
         	.icon-sousuo{position: absolute;top: 0.36rem;left:0.33rem;}
         	input{width: 100%;border:1px solid #eee;padding: 0.2rem 0.5rem;box-sizing:border-box;border-radius: 3px;}
         }
         .list-con{
         	.list-tit{position: fixed;right: 0;top: 2rem;overflow-y: scroll;height: 76%;color: @yellow;}
         	.tit{padding-left: 0.2rem;margin: 0.2rem 0;}
         	.list-other{margin-bottom: 0.2rem;
         		.tag-name{display:inline-block;width:1.8rem;height:0.6rem;line-height:0.6rem;text-align:center;background: #fff;border-radius: 2px;margin:0.05rem 0.2rem;}
         		.po{border:1px solid @yellow;color: @yellow;}
         	}
         	.name{background:#fff;width: 100%;height: 0.8rem;line-height:0.8rem;padding-left:0.2rem;
         		border-top: 1px solid #eee;
         		&:last-child{border-bottom: 1px solid #eee;}
         	}
        }
        .auto-list-con{
        	.list-name{padding:0.2rem;border-top:1px solid @grey;
              &:last-child{border-bottom:1px solid @grey;}
        	}
        }
    }
}
</style>