<template>
	<div class="tab">
	  <tab>
        <tab-item @on-item-click="onItemClick">机票</tab-item>
        <tab-item selected @on-item-click="onItemClick">火车票</tab-item>
        <tab-item @on-item-click="onItemClick">汽车票</tab-item>
      </tab>
	</div>
</template>

<script>
import {Tab, TabItem} from 'vux'

export default{
	components:{Tab, TabItem},
	methods:{
	  onItemClick (index) {
      console.log('on item click:', index)
      },
	}
}
</script>

<style lang="less">
@yellow:#FFC300;
.tab{
	.vux-tab .vux-tab-item.vux-tab-selected{color: @yellow;border-bottom: 3px solid @yellow;}
	.vux-tab-ink-bar{background-color:@yellow; }
}
</style>