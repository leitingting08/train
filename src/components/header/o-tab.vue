<template>
	<div class="tab">
	  <tab>
        <tab-item @on-item-click="onItemClick">全部</tab-item>
        <tab-item selected @on-item-click="onItemClick">待付款</tab-item>
        <tab-item @on-item-click="onItemClick">处理中</tab-item>
        <tab-item @on-item-click="onItemClick">已成功</tab-item>
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