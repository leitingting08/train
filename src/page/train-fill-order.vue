<template>
<div class="train-fill-order">
	<vTitle :title="('12月25日 周一')"></vTitle>
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
   <div class="passenger-info">
   	<div class="add"><span class="add-person">添加/修改乘机人</span><span class="add-children">添加儿童票</span></div>
   	<div class="certi-info"><!-- <i class="fa fa-times-circle"></i> -->
   		<x-icon type="ios-close" size="22"></x-icon>
   		<span class="font30" style="margin-left:0.2rem;">雷婷婷</span><br/><span style="margin-left:0.7rem;">身份证  411523199907178888</span></div>
   	<!-- <div class="connect"><span>联系手机</span><input type="text" name="phonenumber" value="15888888888"><i class="fa fa-user-circle-o"></i></div> -->
   	<x-input label-width="4em" :title='`<span style="{style}">联系手机</span>`' placeholder="用于接受确认短信"></x-input>
   </div>
   <div class="select-seat">
   	  <div class="explain">所选座位余票不足时,将自动为您选择有票座位</div>
   	  <div class="title">
   	  	<div>已选<span class="orange">0</span><span>/</span><span>1</span></div>
   	  	<div class="seat-wraper">
   	  		<span class="chuang-l">窗</span>
	          <label class="v-seat-w">
	          	<!-- <input type="checkbox" v-model="seatsSecects[0].isChecked" @change="seateChange(0,seatsSecects[0].isChecked)"/> -->
	          	<span class="seat seatA active">A</span>
	          </label>
	          <label class="v-seat-w">
	          	  <!-- <input type="checkbox" v-model="seatsSecects[1].isChecked"  @change="seateChange(1,seatsSecects[1].isChecked)"/> -->
	              <span class="seat seatA">B</span></label>
	          <label class="v-seat-w">
	          	<!-- <input type="checkbox" v-model="seatsSecects[2].isChecked" @change="seateChange(2,seatsSecects[2].isChecked)" /> -->
	          	<span class="seat seatA">C</span>
	          </label>
	            <span class="guodao">过道</span>
	          <label class="v-seat-w">
	          	  <!-- <input type="checkbox" v-model="seatsSecects[3].isChecked"  @change="seateChange(3,seatsSecects[3].isChecked)"/> -->
	            <span class="seat seatA">D</span>
	          </label>
	          <label class="v-seat-w">
	          	  <!-- <input type="checkbox" v-model="seatsSecects[4].isChecked"  @change="seateChange(4,seatsSecects[4].isChecked)"/> -->
	              <span class="seat seatA">F</span>
	          </label>
	        <span class="chuang-r">窗</span>
   	  	</div>
   	  </div>
   </div>
   <group>
   	<x-switch :title="('送票上门')"></x-switch>
   </group>
   <div class="tips">
   	<div class="font26">温馨提示</div>
   	<div class="orange">*学生票、儿童票暂按成人价收取，出票后以实际票价为准，票款差额将原路退还到您的账户</div>
   </div>
   <payMenu></payMenu>
</div>
</template>

<script>
import vTitle from '@/components/header/v-title'
import payMenu from '@/components/footer/pay-menu'
import trainInfo from '@/components/common/train-info'
import {Group,Cell,CheckIcon,XInput,XSwitch} from 'vux'

export default{
	components:{Group,Cell,trainInfo,vTitle,CheckIcon,XInput,XSwitch,payMenu},
	data(){
		return{
			noTicket:false
		}
	}
}
</script>

<style lang="less">
@import "../assets/css/base.less";
@yellow:#FFC300;
@orange:#ff6600;
@bg-grey:#fcf8e3;
@border-grey:#faebcc;
.col999{color: #999;}
.orange{color: @orange;}
.font20{font-size: 0.2rem;}
.font26{font-size: 0.26rem;}
.font30{font-size: 0.3rem;}
.train-fill-order{
	.weui-cells{margin-top: 0.2rem;}
   .seatType{background-color: #fff;position: relative;padding:0.2rem;
   	&:before{.top1px(#d9d9d9)}
   	// &:after{.bottom1px(#d9d9d9)}
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
   .passenger-info{background-color: #fff;margin-top: 0.2rem;padding:0.1rem 0.2rem;font-size: 0.26rem;position: relative;
   	.add{padding:0.2rem 0;
   		span{display: inline-block;width: 49.5%;text-align: center;}
   	}
   	.certi-info{padding:0.2rem 0;
   		// i{position: relative;top: .15rem;}
   		svg{position: relative;top: .3rem;}
   		.vux-x-icon {fill: #F70968;}
   		&:before{.top1px(#d9d9d9);top: 0.85rem;}
       &:after{.bottom1px(#d9d9d9);bottom:0.85rem;}
     }
     .vux-x-input{
     	input{padding-left: 0.5rem;}
     }
     // .connect{
     // 	input{border:none;padding-left: 0.2rem;}
     // }
   }
   .select-seat{background-color: #fff;margin-top: 0.2rem;
     .explain{background-color:@bg-grey;padding:0.1rem; }
     .title{text-align: center;padding:0.1rem 0;}
     .seat-wraper{padding:0.2rem 0;
     	.seat{background:url(../assets/img/icon/seat.png) no-repeat center;display:inline-block;width:0.52rem;height:0.48rem;background-size:contain}
     	.seat.active{background:url(../assets/img/icon/seat_selectd.png) no-repeat center;display:inline-block;width:0.52rem;height:0.48rem;background-size:contain}
     	label{margin:0 0.1rem;}
     }
   }
   .weui-cell{&:before{border:none;}}
   .tips{padding: 0.2rem;}
}

</style>