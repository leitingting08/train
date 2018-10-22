<template>
<div class="time-calender">
    <flexbox>
        <flexbox-item><div class="flex-demo l" @click="beforedate"><i class="fa fa-angle-left"></i>前一天</div></flexbox-item>
        <flexbox-item><div class="flex-demo c"> {{leavedate | format('MM月DD日')}} | <i class="fa fa-calendar-o"></i></div></flexbox-item>
        <flexbox-item><div class="flex-demo r" @click="afterdate">后一天<i class="fa fa-angle-right"></i></div></flexbox-item>
    </flexbox>
</div>
</template>

<script>
import {Flexbox, FlexboxItem} from 'vux'
import moment from 'moment'
let today = moment().format('YYYY-MM-DD')

export default {
    components:{Flexbox, FlexboxItem},
    props:['leavedate'],
    data(){
        return{

        }
    },
    methods:{
      beforedate(){

        // if(this.leavedate<today){
        //    this.$vux.toast.text('所选日期不能早于今天！')
        //    return;
        // }
        this.$emit('beforedate')
        
      },
      afterdate(){
        this.$emit('afterdate')
      },
    }
}
</script>

<style lang="less">
@yellow:#FFC300;
.time-calender{background: @yellow;width: 100%;padding: 0.1rem 0;margin-top: -0.05rem;
   .flex-demo{text-align: center;i{padding:0 0.2rem;}}
   .l{text-align: left;}
   .c{background: #fff;padding:0.15rem 0;}
   .r{text-align: right;}
}
</style>