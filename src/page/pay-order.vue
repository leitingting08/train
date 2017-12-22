<template>
<div class="train-order-pay">
    <vTitle :title="('支付')"></vTitle>
		<div class="waring">火车票余票紧张，为保证出票，请尽快完成支付</div>
    <div class="group">
      <div class="order-detail">
      	<div class="address">杭州东-北京西</div>
      	<div class="time"><span class="date">10:00</span> 至 <span>12:00</span>&emsp;<span>G123</span>次&emsp;<span>二等座</span></div>
      </div>
      <div class="pay-price-wrap">
      	<div class="left payprice">支付金额&emsp;<span class="orange">￥100</span></div>
        <div class="pay-fee-detail">
          <feeDetail></feeDetail>
        </div>
      </div>
    </div>
    <div class="checklist">
        <checklist :title="('选择支付方式')" label-position="left" :options="payWayList" :max="1"></checklist>
    </div>
        <router-link to="./orderDetail"><x-button type="primary" action-type="button">确认支付</x-button></router-link>
    <div class="form"></div>

 </div>
</template>

<script>
import vTitle from '@/components/header/v-title'
import feeDetail from '@/components/common/fee-detail'
import {Group,Checklist,XButton} from 'vux'

export default{
  name:'orderPay',
  components:{vTitle,Group,Checklist,XButton,feeDetail},
  data(){
    return {
       payWayList: [ '<span class="alipay"></span>支付宝', '<span class="wxpay"></span>微信'],
    }
  }
}
</script>

<style lang="less">
@yellow:#FFC300;
@orange:#ff6600;
.train-order-pay{
  .waring{padding:0.2rem;}
  .group{background-color: #fff;
    .order-detail{padding: 0.2rem;line-height: 0.5rem;
      .address{font-size: 0.3rem;}
      .time{color: #999;}
    }
    .pay-price-wrap{padding: 0 0.2rem 0.2rem;position: relative;
      .pay-fee-detail{position: absolute;top: 0;right: 0.2rem;color: @orange;}
    }
  }
  .weui-btn_primary{background-color: @orange;}
  .checklist{
      .weui-cells{margin-bottom: 0.3rem;
        p{span{display:inline-block;width:0.66rem;height:0.66rem;border-radius:3px;vertical-align: middle;margin-right: 0.2rem;}}
         .alipay{background:url(../assets/img/icon/alipay.png) no-repeat center;background-size:contain;}
         .wxpay{background:url(../assets/img/icon/wxpay.png) no-repeat center;background-size:contain;}
    }
  }
  .weui-cell__bd{p{margin: 0;line-height: 0.66rem;}}
}
</style>