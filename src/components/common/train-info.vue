<template>
<div class="train-info">
	<flexbox>
        <flexbox-item><div class="flex-demo l font30"><span>杭州东</span><br/><span>02:26</span></div></flexbox-item>
        <flexbox-item><div class="flex-demo c"><span>G34</span><br/><span>1小时48分</span></div></flexbox-item>
        <flexbox-item><div class="flex-demo r font30"><span>上海南</span><br/><span>04:14</span></div></flexbox-item>
    </flexbox>
</div>
</template>

<script>
import {Flexbox, FlexboxItem} from 'vux'

export default{
	components:{Flexbox, FlexboxItem}
}
</script>

<style lang="less">
.font30{font-size: 0.30rem;}
.train-info{background-color: #fff;padding:0.3rem 0rem 0;
		.vux-flexbox{padding-bottom: 0.2rem;
		.l{text-align: right;}
		.c{text-align: center;}
		.r{text-align: left;}
	}
}
</style>