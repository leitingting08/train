<template>
<div class="train-fill-order">
	<vTitle></vTitle>
	<trainInfo></trainInfo>
	<div class="seatType">
		<div class="type font30"><span>二等座</span><span class="price"><span class="font20">￥</span>77.5</span></div>
		<!-- <div class="accept-no-seat">接受无座</div> -->
		<check-icon class="accept-no-seat" :value.sync="noTicket" type="plain">{{('接受无座')}}</check-icon>
	</div>
	<group>
	<cell class="link12306" is-link><span slot="title"><i class="fa fa-bullseye fa-1x"></i>
    	<span class="font30">{{('12306username')}}</span></span>
    </cell>
   </group>
</div>
</template>

<script>
import vTitle from '@/components/header/v-title'
import trainInfo from '@/components/common/train-info'
import {Group,Cell,CheckIcon} from 'vux'

export default{
	components:{Group,Cell,trainInfo,vTitle,CheckIcon},
	data(){
		return{
			noTicket:false
		}
	}
}
</script>

<style lang="less">
@import "../assets/css/base.less";
.font20{font-size: 0.2rem;}
.font30{font-size: 0.3rem;}
.train-fill-order{
   .seatType{background-color: #fff;position: relative;padding:0.2rem;
   	&:before{.top1px(#d9d9d9)}
   	&:after{.bottom1px(#d9d9d9)}
   	.type{width: 69%;display: inline-block;
   		.price{margin-left: 0.2rem;
   		&:after{.arrow-right}}
   	}
   	.accept-no-seat{width: 20%;display: inline-block;
      .weui-icon{position: absolute;right: 0.5rem;}
   	}
   }
   .link12306{background-color: #fff;
   	&:before{left:0}
   	p{margin:0;}
   }
}
</style>