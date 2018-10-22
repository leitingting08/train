<template>
<div class="filter">
    <flexbox>
        <flexbox-item v-for="item in list"><div class="flex-demo"><i class="fa" :class="item.class"></i>{{item.name}}</div></flexbox-item>
    </flexbox>
    <actionsheet></actionsheet>
</div>
</template>

<script>
import {Flexbox, FlexboxItem} from 'vux'

export default {
    components:{Flexbox, FlexboxItem},
    data(){
        return{
            list:[
            {name:'最早出发',class:'fa-calculator'},
            {name:'全部车型',class:'fa-train'},
            {name:'综合筛选',class:'fa-filter'}
            ]
        }
    }
}
</script>

<style lang="less">
.filter{background: #fff;position: fixed;bottom: 0;width: 100%;padding: 0.5rem 0 0.2rem;
   .flex-demo{text-align: center;position: relative;
    i{position: absolute;bottom: 0.35rem;left: 45%}}
}
</style>