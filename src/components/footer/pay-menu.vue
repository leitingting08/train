<template>
    <div class="pay-menu">
      <flexbox>
        <flexbox-item class="price-detail"><div class="flex-demo l">
            <div class="orange font30 price"><span class="font20">￥</span>92.5<span class="col999 font20">（共1人）</span><span></span></div>
            <div>订单总价</div>
            <span class="detail">明细<i class="fa fa-angle-down"></i></span>
            </div>
        </flexbox-item>
        <flexbox-item class="pay"><router-link to="./orderPay"><div class="flex-demo r">去付款</div></router-link></flexbox-item>
      </flexbox>
    </div>
</template>

<script>
import {Flexbox, FlexboxItem} from 'vux'

export default {
    components:{Flexbox, FlexboxItem},
    data(){
        return{

        }
    }
}
</script>

<style lang="less">
@orange:#ff6600;
.col999{color: #999;}
.orange{color: @orange;}
.font20{font-size: 0.2rem;}
.font30{font-size: 0.3rem;}
.pay-menu{background: #fff;position: fixed;bottom: 0;width: 100%;
    .pay{background-color: @orange;}
   .flex-demo{text-align: center;position: relative;height: 1rem;font-size: 0.26rem;
  }
  .l{position: relative;text-align: left;margin-left: 0.2rem;
        .detail{position: absolute;top:0.35rem;right: 0.2rem;}
        div{height: 0.4rem;}
        .price{padding-top: 0.1rem;}
    }
    .r{line-height: 1rem;color: #fff;font-size: 0.32rem;}
}
</style>