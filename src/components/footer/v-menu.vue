<template>
    <div class="menu">
        <flexbox>
        <flexbox-item><div class="flex-demo l">12306</div></flexbox-item>
        <flexbox-item><div class="flex-demo c1">预约购票</div></flexbox-item>
        <flexbox-item><div class="flex-demo c2">在线客服</div></flexbox-item>
        <flexbox-item><div class="flex-demo r">我的订单</div></flexbox-item>
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
.menu{background: #fff;position: fixed;bottom: 0;width: 100%;

}
</style>