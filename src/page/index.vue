<template>
  <div class="train-query">
  	<form class="con">
      <div class="row go-to-city flex v-b1px">
          <div class="flexitem left" @click="eventShowCityList('go')">
              {{selectCity.goCity}}
          </div>
          <div class="flexitem">
            <span class="change-icon" @click="changeCity"></span>
          </div>
          <div class="flexitem right" @click="eventShowCityList('to')">
              {{selectCity.toCity}}
          </div>
      </div>
      <div class="row flex v-b1px" @click="calendar.show=true">
        <div class="w90">
          <span class="font36">{{calendar.calendarDate}}</span>
        &nbsp;<span class="font28">周{{calendar.calendarDay}}</span></div>
        <div class="w10 right"><i class="arrow iconfont icon-jinrujiantou1"></i></div>
      </div>
      <div class="row flex" style="height: 0.8rem;line-height:0.8rem;">
        <div class="left w40" style="align-self: flex-end;">
            <label class="label" @click="isStudent=!isStudent"><input type="radio" :checked="isStudent"/><span class="text">学生票查询</span></label>
        </div>
        <div class="left w60" style="align-self: flex-end;">
            <label class="label" @click="onlySeeGD=!onlySeeGD"><input type="radio" :checked="onlySeeGD"/><span class="text">只看高铁动车</span></label>
        </div>
      </div>
      <div class="btn-wrap">
          <button class="btn" @click="goListRouter('trainList')">开始搜索</button>
        <span class="history font26 mr20 col666" v-for="(item,index) in historys" @click="selectHistory(item)" v-if="historys">{{item.FromStation}}-{{item.ToStation}}</span>
        <span class="clearHistory font26" v-if="historys.length">清除历史记录</span>
      </div>
    </form>
    <!-- 城市选择弹层 -->
    <my-popup v-show="selectCity.show">
     <trainCity :fromToType="selectCity.type" @changeCityName="changeThisCity" @closePop="closePopup"></trainCity>
    </my-popup>
    <!-- 日历弹层 -->
    <my-popup v-show="calendar.show">
      <myCalendar @cancelBtn="calendar.show=false"  :modal="dateModalData" @selectDate="selectDateEvent" ref="selectdate"></myCalendar>
    </my-popup>
    <vMenu></vMenu>
  </div>
</template>

<script>
import moment from 'moment';
import vMenu from '@/components/footer/v-menu';
import trainCity from '@/components/cityselect/train-city';
import myPopup from '@/components/pop/my-popup';
import myCalendar from '@/components/mycalendar/mycalendar';
import {setHistory,getHistory} from '@/assets/js/storage_historySearch';

export default {
  name:'trainQuery',
  data (){
    return {
      selectCity: {
        show: false,
        hackReset: true,
        goCity: '北京',//出发城市
        toCity: '杭州',//到达城市
        type:'go'
      },
      calendar:{
        calendarDate:'2018-10-17',
        calendarDay:'一',
        show:false
      },
      dateModalData: {
        startDate: moment().format('YYYY-MM-DD'),
        endDate: moment().add(60, 'day').format('YYYY-MM-DD'), // 默认今天往后3个月
        currentDate: [moment().format('YYYY-MM-DD')] // 默认今天和明天
      },
      isStudent:false,
      onlySeeGD:false,
      historys:[]
    }
  },
  components:{vMenu,trainCity,myPopup,myCalendar},
  created(){
      this.historys = getHistory();
      let queryinfo = JSON.parse(localStorage.getItem('QUERY_INFO'))
      const today = moment(new Date()).format('YYYY-MM-DD');
      this.calendar.calendarDate = queryinfo&&queryinfo.FromDate>today?queryinfo.FromDate:today;
      this.selectCity.goCity = queryinfo&&queryinfo.FromStation?queryinfo.FromStation:'北京';
      this.selectCity.toCity = queryinfo&&queryinfo.ToStation?queryinfo.ToStation:'杭州';
      this.isStudent = queryinfo&&queryinfo.isStudent?queryinfo.isStudent:false;
      this.onlySeeGD = queryinfo&&queryinfo.gaoDong?queryinfo.gaoDong:false;
      this.calendarDayStr();
  },
  methods:{
    closePopup(){  // 关闭选择城市面板
      this.selectCity.show = false;
    },
    eventShowCityList(type){  // 显示选择城市面板
      this.selectCity.type = type;
      this.selectCity.show = true;
      this.selectCity.hackReset = false
      this.$nextTick(() => {
        this.selectCity.hackReset = true
      })
    },
    selectHistory(item){ // 选择历史记录里的城市
      this.selectCity.goCity = item.FromStation
      this.selectCity.toCity = item.ToStation
    },
    changeThisCity(val){ // 选择城市
      if(val.type==='go'){
        this.selectCity.goCity = val.name
      }
      if(val.type==='to'){
        this.selectCity.toCity = val.name
      }
      this.selectCity.show = false;
    },
    changeCity(){// 交换城市
      let temp = this.selectCity.goCity;
      this.selectCity.goCity = this.selectCity.toCity;
      this.selectCity.toCity = temp;
    },
    calendarDayStr(){ // 选择的对应的日期是周几
      this.calendar.calendarDay = moment(this.calendar.calendarDate).day();
      this.calendar.calendarDay===1?this.calendar.calendarDay='一':'';
      this.calendar.calendarDay===2?this.calendar.calendarDay='二':'';
      this.calendar.calendarDay===3?this.calendar.calendarDay='三':'';
      this.calendar.calendarDay===4?this.calendar.calendarDay='四':'';
      this.calendar.calendarDay===5?this.calendar.calendarDay='五':'';
      this.calendar.calendarDay===6?this.calendar.calendarDay='六':'';
      this.calendar.calendarDay===0?this.calendar.calendarDay='日':'';
    },
    selectDateEvent(data) { // 选择日期
      console.log(data);
      this.calendar.calendarDate = moment(data.startDate).format('YYYY-MM-DD');
      this.calendarDayStr();
      this.dateModalData.startDate = moment(data.startDate).format('YYYY-MM-DD');
      this.dateModalData.currentDate = [moment(data.startDate).format('YYYY-MM-DD')];
      this.calendar.show = false;
    },
    goListRouter(url){ // 搜索查询车次
      console.log(url)
      const option = {
        FromStation:this.selectCity.goCity,
        ToStation:this.selectCity.toCity,
        FromDate:this.calendar.calendarDate,
        gaoDong:this.onlySeeGD,
        isStudent:this.isStudent
      }
      console.log(option)
      localStorage.setItem('QUERY_INFO',JSON.stringify(option))
      this.$router.push({name:url,query:option});//在点击查询按钮的时候把查询参数放到浏览器url里
      setHistory(option);
    }
  },
  beforeRouteEnter(to,from,next){ // 路由进来之前渲染头部轮播图
    let option={
      headSwiper:true,
      headTitle:false
    }
    next(vm=>{
      vm.$store.commit('publicSetEvent',option);
    })
  }
}
</script>

<style lang="less" scoped>

@yellow:#FFC300;
@orange:#ff6600;
@grey:#d9d9d9;

.train-query{font-size: 0.3rem;margin-top: 2.5rem;
  .con{background: #fff;
    .row{padding:0 0.3rem;height: 1.3rem;line-height: 1.3rem;}
    .go-to-city{
      .flexitem{font-size: 0.32rem;}
      .change-icon{display: inline-block;width:0.6rem;height:0.6rem;background: url(../assets/img/icon/change_icon.png) no-repeat center;background-size:contain;vertical-align: middle;}
    }
    .arrow{font-size: 0.4rem;}
    .btn-wrap{padding:0 0.2rem 0.2rem 0.2rem;
      .btn{width: 100%;height: 0.8rem;background: #ff6e00;color:#fff;border:0;border-radius: 0.05rem;margin-bottom: 0.2rem;font-size: 0.3rem;}
    }
    .label{display:inline-block;height: 0.6rem;line-height: 0.6rem;
      .text{display:inline-block;height: 0.6rem;line-height: 0.6rem;}
      input{margin-right: 0.3rem;}
    }
  }
}
</style>