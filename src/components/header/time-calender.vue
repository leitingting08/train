<template>
<div class="time-calender">
    <flexbox>
        <flexbox-item><div class="flex-demo l"><i class="fa fa-angle-left"></i>前一天</div></flexbox-item>
        <flexbox-item><div class="flex-demo c"> 2月13日 周二 | <i class="fa fa-calendar-o"></i></div></flexbox-item>
        <flexbox-item><div class="flex-demo r">后一天<i class="fa fa-angle-right"></i></div></flexbox-item>
    </flexbox>
</div>
</template>

<script>
import {Flexbox, FlexboxItem} from 'vux'

export default {
    components:{Flexbox, FlexboxItem},
    data(){
        return{

        }
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