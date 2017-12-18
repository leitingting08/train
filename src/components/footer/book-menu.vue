<template>
<div class="book-menu">
	<flexbox>
        <flexbox-item><div class="flex-demo l"><i class="fa fa-bullseye"></i>12306</div></flexbox-item>
        <flexbox-item><div class="flex-demo c"><i class="fa fa-ticket"></i>上车补票</div></flexbox-item>
        <flexbox-item><div class="flex-demo r"><i class="fa fa-file-text-o"></i><badge text="上铺"></badge>送票上门</div></flexbox-item>
    </flexbox>
</div>
</template>

<script>
import {Flexbox, FlexboxItem,Badge} from 'vux'

export default {
    components:{Flexbox, FlexboxItem,Badge},
    data(){
        return{

        }
    }
}
</script>

<style lang="less">
.book-menu{background: #fff;position: fixed;bottom: 0;width: 100%;padding: 0.4rem 0 0.1rem;
   .flex-demo{text-align: center;position: relative;
    i{position: absolute;bottom: 0.35rem;left: 45%}
   .vux-badge{font-size: 0.1rem;position: absolute;bottom: 0.3rem;right: 0.2rem;}}
}
</style>