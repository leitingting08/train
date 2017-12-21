<template>
  <div class="train-query">
  	<vSwiper></vSwiper>
  	<vTab></vTab>
  	<group class="con">
  	  <flexbox class="train-q">
        <flexbox-item><div class="flex-demo l"><trainCity></trainCity></div></flexbox-item>
        <flexbox-item><div class="flex-demo c"><span class="change-icon"></span></div></flexbox-item>
        <flexbox-item><div class="flex-demo r"><trainCity></trainCity></div></flexbox-item>
      </flexbox>
      <calendar @on-change="onChange" v-model="showCalender" show-popup-header :popup-header-title="('请选择')" disable-past></calendar>
      <div class="filter">
        <check-icon :value.sync="studentTicket" type="plain">{{('学生票查询')}}</check-icon>
        <check-icon :value.sync="onlySeeGD" type="plain">{{('只看高铁动车')}}</check-icon>
        <x-button type="primary" action-type="button">开始搜索</x-button>
        <span class="history">杭州-北京</span>  <span class="clearHistory">清除历史记录</span>
      </div>
    </group>
    <group>
      <cell is-link class="eTicket">
        <span style="color:#333;margin-right:4.4rem;"><i class="fa fa-train"></i><span style="vertical-align:middle;">{{('欧洲火车票')}}</span></span>
      </cell>
    </group>
    <vMenu></vMenu>
  </div>
</template>

<script>
import vSwiper from '@/components/header/swiper';
import vTab from '@/components/header/v-tab';
import vMenu from '@/components/footer/v-menu';
import trainCity from '@/components/cityselect/train-city';
// import {getRecommend} from '@/api/recommend';
// import {ERR_OK} from '@/api/config';
import {Flexbox, FlexboxItem,Group,Calendar,CheckIcon,XButton,Cell} from 'vux';
export default {
  name:'trainQuery',
  // props:['title'],
  data (){
    return {
      showCalender:'TODAY',
      studentTicket:false,
      onlySeeGD:false,
      // gocity:'北京',
      // tocity:'杭州'

    }
  },
  components:{vSwiper,vTab,
    Flexbox, FlexboxItem,Group,Calendar,CheckIcon,XButton,Cell,vMenu,trainCity},
  created(){
      // this.getRecommend()
      // console.log(this.getRecommend())
  },
  methods:{
    onChange(val){
      console.log('on change', val)
    },
    _getRecommend(){
      // getRecommend().then(res) =>{
      //     console.log(res)
      // }
    }
  },
  // beforeRouteEnter(to,from,next){
  //   let option={
  //     headSwiper:true,
  //     headTab:true,
  //     headerTitle:false
  //   }
  //   next(vm=>{
  //     vm.$store.commit('pubulicSetEvent',option);
  //   })
  // }
}
</script>

<style lang="less">
@import "../assets/css/base.less";
@yellow:#FFC300;
@orange:#ff6600;
@grey:#d9d9d9;
.train-query{
  .vux-tab .vux-tab-item{font-size: 0.3rem!important;}
  .con{
	.train-q{
		.l{text-align: left;padding:0.4rem 0.2rem;}
		.c{text-align: center;
           .change-icon{display: inline-block;width:0.6rem;height:0.6rem;background: url(../assets/img/icon/change_icon.png) no-repeat center;background-size:contain;}
		}
		.r{text-align: right;padding:0.4rem 0.2rem;}
	}
  .vux-calendar{padding:0.2rem 0;
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
    .vux-cell-value{color: #333;margin-right: 4.5rem;}
  }
  .filter{padding:0.3rem 0.2rem;
    &:before{.top1px}
  .vux-check-icon{width:49%}
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
</style>