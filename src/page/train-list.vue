<template>
    <div class="train-list">
        <timeCalender :leavedate="leavedate" @beforedate="clickbeforedate" @afterdate="clickafterdate"></timeCalender>
         <div class="lists center mt20" v-if="trainList&&trainList.length===0">
            暂无列车信息
         </div>
         <div class="lists" v-if="trainList&&trainList.length!==0">
            <!-- <scroller lock-x> -->
            <div class="list" v-for="item in trainList" @click="goBookTicket(item)">
                <!-- <flexbox> -->
                  <div class="flex p20">
                    <div><div class="flex-demo l"><span class="font36 orange">{{item.start_time}}</span><br/><span>{{item.from_station_name}}</span></div></div>
                    <div><div class="flex-demo c1"><span>{{item.train_no}}<i class="fa fa-vcard-o"></i></span><br/><span>{{item.duration}}</span></div></div>
                    <div><div class="flex-demo c2"><span class="font36">{{item.arrive_time}}</span><br/><span>{{item.to_station_name}}</span></div></div>
                  </div>
                    <!-- <flexbox-item><div class="flex-demo r orange"><span><span>￥</span><span  class="font36">{{item.price}}</span><span class="col999">起</span></span><br/>
                      <span>预约购票</span>
                    </div></flexbox-item> -->
                <!-- </flexbox> -->
                <div class="explain">
                  <div class="flex" v-if="item.if_can_by=='Y'">
                    <div class="flexitem left" v-if="item.zc0&&item.num0">{{item.zc0}}:{{item.num0}}</div>
                    <div class="flexitem" v-if="item.zc1&&item.num1">{{item.zc1}}:<span>{{item.num1}}</span></div>
                    <div class="flexitem" v-if="item.zc2&&item.num2">{{item.zc2}}:{{item.num2}}</div>
                    <div class="flexitem" v-if="item.zc3&&item.num3">{{item.zc3}}:{{item.num3}}</div>
                  </div>
                  <div class="orange" v-if="item.if_can_by!=='Y'">
                    暂无余票
                  </div>
                </div>
            </div>
            <!-- </scroller> -->
         </div>
        <vFilter></vFilter>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import vTitle from '@/components/header/v-title'
import timeCalender from '@/components/header/time-calender'
import vFilter from '@/components/footer/filter'
import {Flexbox, FlexboxItem,Scroller,LoadMore } from 'vux'
import TraintripServer from '@/service/traintrip.server';
const tripServer = new TraintripServer();

export default{
    name:'trainList',
    components:{vTitle,vFilter,timeCalender,Flexbox, FlexboxItem,Scroller,LoadMore },
    data(){
        return{
            scrollTop:0,
            onFetching:false,
            bottomCount:5,
            trainList:null,
            option:{
              headSwiper:false,
              headNav:false,
              headTitle:true,
              sTitle: '杭州-北京',
              sTo: {
                url: '/',
                name: true
              }
            },
            leavedate:'',
            trainTripArg: {
              FromStation: '',
              ToStation: '',
              FromDate: '',
              // TrainType:'',
              isStudent:false
          }

        }
    },
    beforeRouteEnter(to,from,next){
    
    next(vm=>{
      vm.option.sTitle = vm.$route.query.FromStation+'-'+vm.$route.query.ToStation
      vm.$store.commit('publicSetEvent',vm.option);
    })
  },
    created(){
      this.trainTripArg.FromStation = this.$route.query.FromStation
      this.trainTripArg.ToStation = this.$route.query.ToStation
      this.trainTripArg.FromDate = this.$route.query.FromDate
      // this.trainTripArg.TrainType = this.$route.query.gaoDong
      this.trainTripArg.isStudent = this.$route.query.isStudent
      this.leavedate = this.$route.query.FromDate;
      this.loadTrainList();
    },
    methods:{
        loadTrainList(){
          tripServer.sendTripListServer({
            data:this.trainTripArg,
            onSuccess: (res) => {
              console.log(res)
              this.trainList = res.data;
            },
            onFalied: (err) => {
              console.log(err);
            }
          });
        },
        goBookTicket(item){
            item.fromDate = this.trainTripArg.FromDate;
            this.$router.push({name:'bookTicket',query:item})
        },
        clickbeforedate(date){
          if(this.trainTripArg.FromDate<moment().format('YYYY-MM-DD')+1){
            this.$vux.toast.text('所选日期不能早于今天！')
            return;
          }
          this.trainTripArg.FromDate = moment(this.trainTripArg.FromDate).add(-1, 'days').format('YYYY-MM-DD')
          console.log('前一天'+this.trainTripArg.FromDate)
          this.leavedate = this.trainTripArg.FromDate
          this.loadTrainList();
        },
        clickafterdate(date){         
          this.trainTripArg.FromDate = moment(this.trainTripArg.FromDate).add(1, 'days').format('YYYY-MM-DD')
          console.log('后一天'+this.trainTripArg.FromDate)
          this.leavedate = this.trainTripArg.FromDate
          this.loadTrainList();
        },
    }
}

</script>

<style lang="less" scoped>
@yellow:#FFC300;
@orange:#ff6600;
.col999{color:#999;}
.font36{font-size: 0.36rem;}
.font20{font-size: 0.2rem;}
.orange{color: @orange;}
.train-list{
    // .v-title{position: fixed;top: 0;width: 100%;z-index: 100;}
    .time-calender{position: fixed;top: 0.8rem;width: 100%;z-index:1;}
  .lists{height: 100%;padding-top:1.6rem;padding-bottom: 1rem;
  .list{background: #fff;margin:0.1rem 0;
    .vux-flexbox{padding:0.2rem 0;
     .l{padding-left: 0.2rem}
     .c1{text-align: center;}
     .c2{text-align: right;}
     .r{text-align: right;padding-right: 0.2rem;}
    }
    .explain{padding:0.2rem 0;margin:0 0.2rem;border-top:1px dashed #d9d9d9;}
    }
  }
}
</style>