<template>
  <div class="train-query">
  	<!-- <vSwiper></vSwiper>
  	<vTab></vTab> -->
  	<form class="con">
  	  <flexbox class="train-q">
        <flexbox-item><div class="flex-demo l"><trainCity :cityName="gocity" :stationsData="questCityData" fromToType="from" @changeCityName="changeGoCity"></trainCity></div></flexbox-item>
        <flexbox-item><div class="flex-demo c"><span class="change-icon" @click="changeCity"></span></div></flexbox-item>
        <flexbox-item><div class="flex-demo r"><trainCity :cityName="tocity" :stationsData="questCityData" fromToType="to" @changeCityName="changeToCity"></trainCity></div></flexbox-item>
      </flexbox>
      <calendar :title="(`周${calendarDay}`)" @on-change="onChange" v-model="calendarDate" show-popup-header :popup-header-title="('选择日期')" disable-past></calendar>
      <div class="fi">
        <check-icon :value.sync="studentTicket" type="plain">{{('学生票查询')}}</check-icon>
        <check-icon :value.sync="onlySeeGD" type="plain">{{('只看高铁动车')}}</check-icon>
        <!-- <router-link to="./trainList"> -->
          <x-button type="primary" action-type="button" @click.native="goListRouter('trainList')">开始搜索</x-button>
        <!-- </router-link> -->
        <span class="history" v-for="(item,index) in historys">{{item.FromStation}}-{{item.ToStation}}</span>  <span class="clearHistory">清除历史记录</span>
      </div>
    </form>
    <vMenu></vMenu>
  </div>
</template>

<script>
import moment from 'moment';
import vMenu from '@/components/footer/v-menu';
import trainCity from '@/components/cityselect/train-city';
import {setHistory,getHistory} from '@/assets/js/storage_historySearch';
import {Flexbox, FlexboxItem,Group,Calendar,CheckIcon,XButton,Cell} from 'vux';
import TraintripServer from '@/service/traintrip.server';
const stationServer = new TraintripServer();


export default {
  name:'trainQuery',
  data (){
    return {
      calendarDate:'2018-04-01',
      calendarDay:'一',
      studentTicket:false,
      onlySeeGD:false,
      title:'',
      gocity:'北京',
      tocity:'杭州',
      historys:null,
      questCityData:[]
    }
  },
  components:{Flexbox, FlexboxItem,Group,Calendar,CheckIcon,XButton,Cell,vMenu,trainCity},
  created(){
      this.historys = getHistory();

      this.setcalendarDayStr();
  },
  methods:{
    stationsData(){

      stationServer.sendTripListServer({
        onSuccess: (response) => {
          if(response.status==='error'){
            alert(response.tipsinfo);
            return;
          }
          this.questCityData = response.tipsinfo;
        },
        onFalied: (error) => {
          console.log(error);
        }
      });
    },
    onChange(val){
      this.setcalendarDayStr();
      console.log('on change', val)
    },
    changeGoCity(val){
      this.gocity=val;
    },
    changeToCity(val){
      this.tocity=val;
    },
    changeCity(){//交换城市
      let temp = this.gocity;
      this.gocity = this.tocity;
      this.tocity = temp;
    },
    beginSearch(){
      let option = {
        FromStation:this.gocity,
        ToStation:this.tocity
      }
    },
    setcalendarDayStr(){
      this.calendarDay = moment(this.calendarDate).day();
      this.calendarDay===1?this.calendarDay='一':'';
      this.calendarDay===2?this.calendarDay='二':'';
      this.calendarDay===3?this.calendarDay='三':'';
      this.calendarDay===4?this.calendarDay='四':'';
      this.calendarDay===5?this.calendarDay='五':'';
      this.calendarDay===6?this.calendarDay='六':'';
      this.calendarDay===0?this.calendarDay='日':'';
    },
    goListRouter(url){
      console.log(url)
      const option = {
        FromStation:this.gocity,
        ToStation:this.tocity,
        FromDate:this.calendarDate,
        gaoDong:this.onlySeeGD,
        studentTicket:this.studentTicket
      }
      console.log(option)
      this.$router.push({name:url,query:option});//在点击查询按钮的时候把查询参数放到浏览器url里
      setHistory(option);
    }
  },
  beforeRouteEnter(to,from,next){
    let option={
      headSwiper:true,
      headNav:true,
      headerTitle:false
    }
    next(vm=>{
      vm.$store.commit('publicSetEvent',option);
    })
  }
}
</script>

<style lang="less">
@import "../assets/css/base.less";

@yellow:#FFC300;
@orange:#ff6600;
@grey:#d9d9d9;
.train-query{font-size: 0.3rem;
  .vux-tab .vux-tab-item{font-size: 0.3rem!important;}
  .con{background: #fff;
	.train-q{
		.l{text-align: left;padding:0.4rem 0.3rem;}
		.c{text-align: center;
           .change-icon{display: inline-block;width:0.6rem;height:0.6rem;background: url(../assets/img/icon/change_icon.png) no-repeat center;background-size:contain;}
		}
		.r{text-align: right;padding:0.4rem 0.3rem;}
	}
  .vux-calendar{
    &:before{left:0.2rem;right:0.2rem}
    &:after{content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    left:0.2rem;right:0.2rem;}
    .vux-cell-value{color: #333;margin-right: 3.6rem;}
  }
  .fi{padding:0.3rem 0.2rem;
    &:before{.top1px}
  .vux-check-icon {width:49%;
  .weui-icon-success:before,.weui-icon-success-circle:before {color: @yellow;}
  }
  .weui-btn_primary{background: @orange;margin:0.2rem 0;}
  .history{color:#666;margin-right: 0.2rem;}
  .clearHistory{color: #333;}
    }
  }
  .eTicket{padding:0.2rem;
    p{margin:0;}
    i{margin-right: 0.2rem;}
  }
}
.vux-popup-dialog{
  .inline-calendar td.is-today, .inline-calendar td.is-today.is-disabled{color: @yellow;}
  .inline-calendar td.current > span.vux-calendar-each-date{background-color: @yellow;}
  .vux-prev-icon, .vux-next-icon{border:1px solid @yellow;}
  .calendar-year > span, .calendar-month > span{width: 6px;overflow: hidden;}
  .vux-popup-header-right{color: @yellow;}
}
</style>