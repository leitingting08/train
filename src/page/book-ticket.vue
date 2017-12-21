<template>
<div class="book-ticket">
   <vTitle :title="('12月25日 周一')"></vTitle>
    <div class="train-info">
        <!-- <flexbox>
            <flexbox-item><div class="flex-demo l font30"><span>杭州东</span><br/><span>02:26</span></div></flexbox-item>
            <flexbox-item><div class="flex-demo c"><span>G34</span><br/><span>1小时48分</span></div></flexbox-item>
            <flexbox-item><div class="flex-demo r font30"><span>上海南</span><br/><span>04:14</span></div></flexbox-item>
        </flexbox> -->
        <trainInfo></trainInfo>
        <div class="explain">卧铺暂显示为下铺价格，最终票款以上中下铺占座结果为准；如需指定下铺，请使用送票上门服务</div>
    </div>
    <div class="seat-type">
	    <timeCalender></timeCalender>
	    <x-table :cell-bordered="false" style="background-color:#fff;">
	        <tbody>
	          <tr>
	            <td>硬座</td>
	            <td>有票</td>
	            <td class="orange font30"><span>￥</span>24.5</td>
	            <td><button>立即预定</button></td>
	          </tr>
	          <tr>
	            <td>硬卧</td>
	            <td class="orange">仅剩4张</td>
	            <td class="orange font30"><span>￥</span>78.5</td>
	            <td><button>立即预定</button></td>
	          </tr>
	          <tr>
	            <td>软卧</td>
	            <td class="orange">仅剩5张</td>
	            <td class="orange font30"><span>￥</span>114.5</td>
	            <td><button>立即预定</button></td>
	          </tr>
	          <tr>
	            <td>无座</td>
	            <td class="col999">无票</td>
	            <td class="orange font30"><span>￥</span>24.5</td>
	            <td><button class="orange no-ticket">预约购票</button></td>
	          </tr>
	        </tbody>
	    </x-table>
    </div>
    <cell class="comT" is-link><span slot="title"><i class="fa fa-ticket fa-2"></i>
    	<div style="margin-left:0.5rem;"><span class="font30">{{('没票？试试上车补票吧！')}}</span><br/><span class="col999 font20">{{('购买中途站车票，上车再补票')}}</span></div></span>
    </cell>
    <bookMenu></bookMenu>
</div>
</template>

<script>
import vTitle from '@/components/header/v-title'
import timeCalender from '@/components/header/time-calender'
import trainInfo from '@/components/common/train-info'
import bookMenu from '@/components/footer/book-menu'
import {Flexbox, FlexboxItem,XTable,Cell} from 'vux'

export default{
	components:{vTitle,Flexbox, FlexboxItem,timeCalender,XTable,Cell,bookMenu,trainInfo},
	data (){
		return{
			title:'12月25日 周一'
		}
	}
}
</script>

<style lang="less">
@yellow:#FFC300;
@orange:#ff6600;
@bg-grey:#fcf8e3;
@border-grey:#faebcc;
.orange{color: @orange;}
.col999{color: #999;}
.font20{font-size: 0.20rem;}
.font30{font-size: 0.30rem;}
.book-ticket{
	.train-info{background-color: #fff;padding:0.3rem 0rem 0;margin-top: -0.1rem;
		// .vux-flexbox{padding-bottom: 0.2rem;
		// .l{text-align: right;}
		// .c{text-align: center;}
		// .r{text-align: left;}}
	.explain{background-color: @bg-grey;border: 1px solid @border-grey;border-left:none;border-right:none;padding:0.1rem 0.2rem;}
  }
  .seat-type{margin-top: 0.2rem;
    .time-calender{background-color: #fff;}
    tbody{font-size: 0.26rem;
    	tr{
    	  td{
    	  	&:nth-child(1){text-align: left;padding-left:0.2rem;width:2rem;}
    	  	&:nth-child(2){text-align: left;width:2rem;}
    	  	&:nth-child(3){text-align: right;width:1.5rem;padding-right: 0.2rem;
    	  		span:nth-child(1){font-size: 0.2rem;}}
    	  	&:nth-child(4){text-align: right;width:1.5rem;}
    	  	button{margin-right:0.2rem;border:1px solid @orange;background-color: @orange;color: #fff;border-radius: 2px;font-size: 0.2rem;padding:0.05rem 0.1rem;}
    	  	.no-ticket{background-color: #fff;color: @orange;}
    	  }
    	}
    }
  }
  .comT{background-color: #fff;margin-top:0.2rem;position: relative;&:before{left:0!important;}
    p{margin:0;}
    i{position: absolute;top:1.1em;left:0.2rem;border: 1px solid @yellow;border-radius: 50%;padding: 0.1rem;background-color: @yellow;}
    .weui-cell__ft:after{content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #C8C8CD;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 0.2rem;}
  }
}
</style>