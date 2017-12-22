<template>
<div class="fee-detail">
	<span @click="showFeeDetail">费用详情<i class="fa fa-angle-right"></i></span>
	<div v-transfer-dom>
		<x-dialog v-model="feeDetailIsShow" hide-on-blur>
            <div class="price">
	         <div class="title">费用明细</div>
	          <div>
	            <table>
		          <tr>
		            <td>票价</td>
		            <td>￥120</td>
		          </tr>
		          <tr>
		            <td>保险总额</td>
		            <td>￥10</td>
		          </tr>
		          <tr>
		            <td>订单总额</td>
		            <td class="orange">￥130</td>
		          </tr>
	            </table>
	          </div>
	        </div>
		</x-dialog>
	</div>
</div>
</template>

<script>
import {XDialog,TransferDomDirective as TransferDom} from 'vux';

export default{
	directives:{
		TransferDom
	},
	data(){
		return{
			feeDetailIsShow:false
		}
	},
	components:{XDialog},
	methods:{
		showFeeDetail(){
			this.feeDetailIsShow=true;
		}
	}
}
</script>

<style lang="less">
@orange:#ff6e00;
.orange{color: @orange}
   .fee-detail{
   	i{margin-left: 0.1rem;}
   }
   .price{
   		.title{padding: 0.2rem 0;font-size: 0.3rem;}
   		table{padding: 0 0.2rem 0.2rem;width: 100%;font-size: 0.26rem;
           tr td{
           	&:nth-child(1){width: 30%;text-align: left;}
           	&:nth-child(2){width: 70%;text-align: right;}
           }
   		}
   	}
</style>