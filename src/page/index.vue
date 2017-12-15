<template>
  <div class="train-query">
  	<vSwiper></vSwiper>
  	<vTab></vTab>
  	<group>
  	  <flexbox>
        <flexbox-item><div class="flex-demo l">杭州</div></flexbox-item>
        <flexbox-item><div class="flex-demo c"><span class="change-icon"></span></div></flexbox-item>
        <flexbox-item><div class="flex-demo r">北京</div></flexbox-item>
      </flexbox>
      <calendar @on-change="onChange" v-model="showCalender" :title="('2月12日')" show-popup-header :popup-header-title="('请选择')" disable-past></calendar>
      <div class="filter">
        <check-icon :value.sync="studentTicket" type="plain">{{('学生票查询')}}</check-icon>
        <check-icon :value.sync="onlySeeGD" type="plain">{{('只看高铁动车')}}</check-icon>
      </div>
    </group>
  </div>
</template>

<script>
import vSwiper from '@/components/header/swiper';
import vTab from '@/components/header/v-tab';
import {Flexbox, FlexboxItem,Group,Calendar,CheckIcon} from 'vux';
export default {
  name:'trainQuery',
  data (){
    return {
      showCalender:'TODAY',
      studentTicket:false,
      onlySeeGD:false
    }
  },
  components:{vSwiper,vTab,Flexbox, FlexboxItem,Group,Calendar,CheckIcon},
  methods:{
    onChange(val){
      console.log('on change', val)
    }
  }
}
</script>

<style lang="less">
@yellow:#FFC300;
@grey:#d9d9d9;
.train-query{
  .vux-tab .vux-tab-item{font-size: 0.3rem!important;}
	.vux-flexbox{
		.l{text-align: left;padding:0.4rem 0.2rem;}
		.c{text-align: center;
           .change-icon{display: inline-block;width:0.6rem;height:0.6rem;background: url(../assets/img/icon/change_icon.png) no-repeat center;background-size:contain;}
		}
		.r{text-align: right;padding:0.4rem 0.2rem;}
	}
  .filter{padding:0.3rem 0.2rem;border-top:1px solid @grey;}
  .vux-check-icon{width:49%
    // :nth-child(2){text-align: right;}
  }
}
</style>