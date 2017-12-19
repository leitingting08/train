<template>
<div>
	<span class="time-table" @click="stopListIsShow=true"><span class="time">时刻表</span></span>

	<div v-transfer-dom class="stop-list-wrapper">
		<x-dialog v-model="stopListIsShow" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
			 <div class="stop-list">
          		<div class="title">列车时刻表</div>
          		<div><!-- <inline-loading></inline-loading> --></div>
                <table>
                	<thead>
	                	<tr>
				          <th>车站</th>
			              <th>到达</th>
			              <th>发车</th>
			              <th>停留</th>
	                	</tr>
                    </thead>
                    <tbody>
                    	<tr>
                    	  <th>衢州</th>
                    	  <th>22:10</th>
                    	  <th>22:13</th>
                    	  <th>3分钟</th>
                    	</tr>
                    	<tr class="yellow">
                    	  <th>杭州</th>
                    	  <th>22:10</th>
                    	  <th>22:13</th>
                    	  <th>3分钟</th>
                    	</tr>
                    	<tr>
                    	  <th>衢州</th>
                    	  <th>22:10</th>
                    	  <th>22:13</th>
                    	  <th>3分钟</th>
                    	</tr>
                    	<tr>
                    	  <th>衢州</th>
                    	  <th>22:10</th>
                    	  <th>22:13</th>
                    	  <th>3分钟</th>
                    	</tr>
                    	<tr>
                    	  <th>衢州</th>
                    	  <th>22:10</th>
                    	  <th>22:13</th>
                    	  <th>3分钟</th>
                    	</tr>
                    	<tr>
                    	  <th>衢州</th>
                    	  <th>22:10</th>
                    	  <th>22:13</th>
                    	  <th>3分钟</th>
                    	</tr>
                    	<tr>
                    	  <th>衢州</th>
                    	  <th>22:10</th>
                    	  <th>22:13</th>
                    	  <th>3分钟</th>
                    	</tr>
                    </tbody>
                </table>
             </div>
		</x-dialog>
	</div>
</div>
</template>

<script>
  // import axios from 'axios';
  import { InlineLoading,TransferDomDirective as TransferDom,XDialog } from 'vux';
  export default {
    name:'stop-list',
    // props:['trainStopData'],
    components: {InlineLoading,XDialog},
    directives: {
      TransferDom
    },
    data(){
      return {
        showHideOnBlur:false,
        loadIsSHow:false,
        questData:{
          faild:'',
          stopList:[]
        },
        stopListIsShow: false
      }
    },
    // created(){
    //   this.showStopList();
    // },
    // methods:{
    //   showStopList(){
    //     this.loadIsSHow=true;
    //     //this.stopListIsShow=true;
    //     axios.post(this.trainStopData.url,this.trainStopData.asspectArg)
    //       .then((response) => {
    //         this.questData.stopList = response.data.tipsinfo;

    //         this.loadIsSHow = false;
    //         if(this.questData.stopList.length===0 ){
    //           this.questData.faild='暂无数据';
    //         }
    //         return this.questData;
    //       })
    //       .catch(error => {
    //         this.loadIsSHow = false;
    //         this.questData.faild='查询失败';
    //         return this.questData;
    //         console.log(error);
    //       });
    //   }
    // }
  }
</script>

<style lang="less">
@import "../../assets/css/base.less";
@yellow:#FFC300;
.yellow{color: @yellow;}
.stop-list-wrapper{
.weui-dialog{height: 5rem!important;top:43%!important;background: #fff;
.stop-list{width:6.6rem;height:5rem;margin:0 auto;background: #fff;color:#333;overflow-y: auto;
  .title{position:relative;padding:0.3rem 0;text-align: center;font-size: 0.3rem;
   &:after{.top1px(#d9d9d9);top: 1rem;}
  }
  table{width:100%;padding:0.2rem 0.2rem;text-align: left;font-size: .24rem;color:#333;}
    th{font-weight: 100;line-height: 0.5rem;text-align: center;
    td{line-height: 0.5rem;text-align: center;}
  }
  }
 }
}
</style>