<template>
<div class="order-datail">
    <vTitle></vTitle>
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
</div>
</template>

<script>
import vTitle from '@/components/header/v-title'
import stopList from '@/components/common/stop-list'
// import trainInfo from '@/components/common/train-info'
import {Flexbox, FlexboxItem} from 'vux'

export default {
	components:{vTitle,Flexbox, FlexboxItem,stopList},
	data(){
		return{

		}
	}
}
</script>

<style lang="less">
@yellow:#FFC300;
@orange:#ff6600;
@light-orange:#f7d977;
.col999{color: #999;}
.orange{color: @orange;}
.font20{font-size: 0.2rem;}
.font26{font-size: 0.26rem;}
.font30{font-size: 0.3rem;}
.order-datail{
.train-info{background-color:rgba(255, 195, 0, 0.5);margin: 0.2rem;border-radius: 3px;padding:0.2rem;
    .l{text-align: left;}
    .c{text-align: center;
      .time-table{display: inline-block;width: 1.5rem;height: 0.55rem;background: url(../assets/img/icon/arrow.png) no-repeat center;background-size: contain;
         .time{border:1px solid #666;border-radius: 2em;padding:0 0.1rem;background: @light-orange;display: inline-block;margin-top: 0.1rem;}
      }
    }
    .r{text-align: right;}
  }
}
</style>