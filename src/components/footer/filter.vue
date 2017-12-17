<template>
<div class="filter">
    <flexbox>
        <flexbox-item><div class="flex-demo l"><i class="fa fa-calculator"></i>最早出发</div></flexbox-item>
        <flexbox-item><div class="flex-demo c"><i class="fa fa-train"></i>全部车型</div></flexbox-item>
        <flexbox-item><div class="flex-demo r"><i class="fa fa-filter"></i>综合筛选</div></flexbox-item>
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
.filter{background: #fff;position: fixed;bottom: 0;width: 100%;padding: 0.4rem 0 0.1rem;
   .flex-demo{text-align: center;position: relative;
    i{position: absolute;bottom: 0.35rem;left: 45%}}
}
</style>