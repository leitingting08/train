<template>
<div class="train-info">
	<flexbox>
        <flexbox-item><div class="flex-demo l font30"><span>{{trainInfo.from_station_name}}</span><br/><span>{{trainInfo.start_time}}</span></div></flexbox-item>
        <flexbox-item><div class="flex-demo c"><span>{{trainInfo.train_no}}</span><br/><stopList></stopList><span class="font20">{{trainInfo.duration}}</span></div></flexbox-item>
        <flexbox-item><div class="flex-demo r font30"><span>{{trainInfo.to_station_name}}</span><br/><span>{{trainInfo.arrive_time}}</span></div></flexbox-item>
    </flexbox>
</div>
</template>

<script>
import stopList from '@/components/common/stop-list'
import {Flexbox, FlexboxItem} from 'vux'

export default{
	name:"train-info",
	props:['trainInfo'],
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