<template>
<div class="order-datail">
    <vTitle :title="('订单详情')"></vTitle>
    <div>
    	<div></div>
    	<div></div>
    </div>
    <!-- <trainInfo></trainInfo> -->
    <div class="train-info">
    <flexbox>
        <flexbox-item><div class="flex-demo l font30"><span>杭州东</span><br/><span>02:26</span><br/><span class="font20">12月25日 周一</span></div></flexbox-item>
        <flexbox-item><div class="flex-demo c"><span>G34</span><br/><stopList></stopList><span class="font20">1小时26分</span></div></flexbox-item>
        <flexbox-item><div class="flex-demo r font30"><span>上海南</span><br/><span>04:14</span><br/><span class="font20">12月25日 周一</span></div></flexbox-item>
    </flexbox>
    </div>
    <div class="certi-info">
    	<div class="name font28">雷婷婷<span class="font20 ticket-type">学生票</span><div class="price">二等座 ￥92.5</div></div>
    	<div class="idcard">身份证  1****************8</div>
    	<div class="pay-status font26 orange">待支付</div>
    </div>
    <div class="problem">
    	<div class="title">您可能遇到的问题</div>
    	<div class="issus">
	    	<span>如何找人代付</span><span>拍下后多久付款</span>
	    	<span>票价与12306不同</span><span>如何指定铺位</span>
        </div>
    	<div class="contact"><i class="fa fa-headphones"></i>在线客服</div>
    </div>
    <div class="sales">
    	<table>
    		<tr>
    			<td>卖家</td>
    			<td>云虎票务</td>
    		</tr>
    		<tr>
    			<td>订单号</td>
    			<td>102666685965868688  <span class="orange">复制</span></td>
    		</tr>
    	</table>
    	<div class="contact"><i class="fa fa-phone"></i>联系卖家</div>
    </div>
    <x-button plain>取消订单</x-button>
    <x-button plain class="con-service">联系客服Fliggy</x-button>
    <div class="goto-pay font30">去付款<span class="font20">（￥92.5）</span></div>
</div>
</template>

<script>
import vTitle from '@/components/header/v-title'
import stopList from '@/components/common/stop-list'
// import trainInfo from '@/components/common/train-info'
import {Flexbox, FlexboxItem,XButton} from 'vux'

export default {
	components:{vTitle,Flexbox, FlexboxItem,stopList,XButton},
	data(){
		return{

		}
	}
}
</script>

<style lang="less">
@import "../assets/css/base.less";
@yellow:#FFC300;
@orange:#ff6600;
@light-orange:#f7d977;
.col999{color: #999;}
.orange{color: @orange;}
.font20{font-size: 0.2rem;}
.font26{font-size: 0.26rem;}
.font28{font-size: 0.28rem;}
.font30{font-size: 0.3rem;}
.order-datail{
	.v-title{position: fixed;top: 0;width: 100%;}
.train-info{background-color:rgba(255, 195, 0, 0.5);margin: 0.2rem 0.2rem 0rem;border-radius: 3px;padding:0.2rem;margin-top: 1.1rem;
    .l{text-align: left;}
    .c{text-align: center;
      .time-table{display: inline-block;width: 1.5rem;height: 0.55rem;background: url(../assets/img/icon/arrow.png) no-repeat center;background-size: contain;
         .time{border:1px solid #666;border-radius: 2em;padding:0 0.1rem;background: @light-orange;display: inline-block;margin-top: 0.1rem;}
      }
    }
    .r{text-align: right;}
    
  }
  .certi-info{background: #fff;margin: 0rem 0.2rem 0.2rem;padding: 0.2rem;border-radius: 3px;line-height: 0.5rem;
  	.name{overflow: hidden;
      .ticket-type{border:1px solid #d8d8d8;border-radius: 3px;padding: 0 0.06rem;margin-left: 0.2rem;}}
    .price{float: right;}
  }
  .problem{background: #fff;padding: 0.2rem 0;
  	.title{padding-left: 0.2rem;font-size: 0.28rem;color: #999;}
    .issus{padding:0.1rem 0;
    	span{display: inline-block;background: #eee;padding:0.1rem 0.3rem;margin:0.1rem;border-radius: 2em;width: 2.8rem;text-align: center;}}
    .contact{text-align: center;position: relative;padding-top: 0.2rem;font-size: 0.26rem;
    	&:before{.top1px;}
    	i{margin-right: 0.12rem;}
    }
  }
  .sales{background: #fff;padding: 0.2rem 0;margin-top: 0.2rem;
    table{padding: 0 0.2rem 0.2rem;
      tr td:nth-child(1){width: 1.5rem;color: #999;}
    }
    .contact{text-align: center;position: relative;padding-top: 0.2rem;font-size: 0.26rem;
    	&:before{.top1px;}
    	i{margin-right: 0.12rem;}
    }
  }
  .weui-btn {margin: 0.2rem 3%;width: 94%;}
  .con-service{color: @yellow;border:1px solid @yellow;margin-bottom: 1.1rem;}
  .goto-pay{position: fixed;bottom: 0;width: 100%;background: @orange;height: 0.9rem;line-height: 0.9rem;text-align: center;color: #fff;}
}
</style>