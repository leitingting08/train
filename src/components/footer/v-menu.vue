<template>
    <div class="menu">
      <flexbox>
        <flexbox-item><div class="flex-demo l"><i class="fa fa-bullseye"></i>12306</div></flexbox-item>
        <flexbox-item><div class="flex-demo c1"><i class="fa fa-clock-o"></i>预约购票</div></flexbox-item>
        <flexbox-item><div class="flex-demo c2"><i class="fa fa-commenting-o"></i>在线客服</div></flexbox-item>
        <flexbox-item><router-link to="./orderList"><div class="flex-demo r"><i class="fa fa-file-text-o"></i>我的订单</div></router-link></flexbox-item>
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
.menu{background: #fff;position: fixed;bottom: 0;width: 100%;padding: 0.4rem 0 0.1rem;
   .flex-demo{text-align: center;position: relative;font-size: 0.26rem;
    i{position: absolute;bottom: 0.35rem;left: 45%}}

}
</style>