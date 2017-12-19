<template>
<div class="train-info">
	<flexbox>
        <flexbox-item><div class="flex-demo l font30"><span>杭州东</span><br/><span>02:26</span></div></flexbox-item>
        <flexbox-item><div class="flex-demo c"><span>G34</span><br/><stopList></stopList><span class="font20">1小时26分</span></div></flexbox-item>
        <flexbox-item><div class="flex-demo r font30"><span>上海南</span><br/><span>04:14</span></div></flexbox-item>
    </flexbox>
</div>
</template>

<script>
import stopList from '@/components/common/stop-list'
import {Flexbox, FlexboxItem} from 'vux'

export default{
	components:{stopList, Flexbox, FlexboxItem}
}
</script>

<style lang="less">
.font30{font-size: 0.30rem;}
.font20{font-size: 0.20rem;}
.train-info{background-color: #fff;padding:0.3rem 0rem 0;
		.vux-flexbox{padding-bottom: 0.2rem;
		.l{text-align: right;line-height: 0.6rem}
		.c{text-align: center;
           .time-table{display: inline-block;width: 1.5rem;height: 0.55rem;background: url(../../assets/img/icon/arrow.png) no-repeat center;background-size: contain;
               .time{border:1px solid #666;border-radius: 2em;padding:0 0.1rem;background: #fff;display: inline-block;margin-top: 0.1rem;}
            }
		}
		.r{text-align: left;line-height: 0.6rem}
	}
}
</style>