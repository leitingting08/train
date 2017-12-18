<template>
    <div class="pay-menu">
      <flexbox>
        <flexbox-item class="price-detail"><div class="flex-demo l">
            <div class="orange font30"><span class="font20">￥</span>92.5<span class="col999 font20">（共1人）</span><span></span></div>
            <div>订单总价</div>
            <span class="detail">明细<i class="fa fa-angle-down"></i></span>
            </div>
        </flexbox-item>
        <flexbox-item class="pay"><div class="flex-demo r">去付款</div></flexbox-item>
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
   .flex-demo{text-align: center;position: relative;
    // i{position: absolute;bottom: 0.35rem;left: 45%}
    .l{position: relative;
        .detail{position: absolute;top:0.2rem;}
    }
  }
}
</style>