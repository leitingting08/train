<template>
    <div class="train-list">
        <!-- <vTitle :title="('杭州-北京')"></vTitle> -->
        <timeCalender></timeCalender>
         <div class="lists">
            <scroller lock-x>
            <div class="list"><router-link to="./trainFillOrder">
                <flexbox>
                    <flexbox-item><div class="flex-demo l"><span class="font36">07:10</span><br/><span>杭州东</span></div></flexbox-item>
                    <flexbox-item><div class="flex-demo c1"><span>G34<i class="fa fa-vcard-o"></i></span><br/><span>5时55分</span></div></flexbox-item>
                    <flexbox-item><div class="flex-demo c2"><span class="font36">13:05</span><br/><span>北京南</span></div></flexbox-item>
                    <flexbox-item><div class="flex-demo r orange"><span><span>￥</span><span  class="font36">538.5</span><span class="col999">起</span></span><br/><span>预约购票</span></div></flexbox-item>
                </flexbox>
                <div class="explain"><span class="orange">1月15日 11点30分</span>起售，可预约购票，开启自动购票</div></router-link>
            </div>
            <!-- <load-more tip="loading"></load-more> -->
            </scroller>
         </div>
        <vFilter></vFilter>
    </div>
</template>

<script>
import axios from 'axios'
import vTitle from '@/components/header/v-title'
import timeCalender from '@/components/header/time-calender'
import vFilter from '@/components/footer/filter'
import {Flexbox, FlexboxItem,Scroller,LoadMore } from 'vux'
import {trainQueryUrl} from '@/service/interface.service'
import TraintripServer from '@/service/traintrip.server';
const traintripServer = new TraintripServer();

export default{
    name:'trainList',
    components:{vTitle,vFilter,timeCalender,Flexbox, FlexboxItem,Scroller,LoadMore },
    data(){
        return{
            scrollTop:0,
            onFetching:false,
            bottomCount:5,
            questData: {
            trainList:[]
            },
            trainTripArg: {
            FromStation: this.$route.query.FromStation,
            ToStation: this.$route.query.ToStation,
            FromDate: this.$route.query.FromDate,
            // PageSize:7,
            // PageNo:1,
            // SortType:'',
            TrainType:this.$route.query.gaoDong,
            // FilterTime:'',
            // FilterStation:''
          }

        }
    },
    beforeRouteEnter(to,from,next){
    let option={
      headSwiper:false,
      headNav:false,
      headTitle:true,
      sTitle: '杭州-北京',
      sTo: {
        url: '/',
        name: true
      }
    }
    next(vm=>{
      vm.$store.commit('publicSetEvent',option);
    })
  },
    created(){
        console.log(this.trainTripArg)
       // this.loadTrainList(this.trainTripArg)
       this.loadTrainList()
    },
    methods:{
        loadTrainList(data){
          axios.get(trainQueryUrl)
            .then((res)=>{
                console.log(err)
            })
            .catch((err)=>{
              console.log(err)
            })
            // traintripServer.sendTripListServer({
            //     params:data,
            //     onSuccess: (response) => {
            //       if(response.status==='error'){
            //         alert(response.tipsinfo);
            //         return;
            //       }
            //     },
            //     onFalied: (error) => {

            //       console.log(error);
            //     }
            // });

        }
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
    .v-title{position: fixed;top: 0;width: 100%;z-index: 100;}
    .time-calender{position: fixed;top: 0.8rem;width: 100%;z-index: 99;}
  .lists{position: absolute;top: 1.6rem;width: 100%;
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