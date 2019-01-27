<template>
    <div class="menu">
        <div class="flex">
            <div class="flexitem" v-for="item in menus">
                <div class="center"><i class="iconfont" :class="item.icon"></i></div>
                <div class="center">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                menus:[
                {name:'12306',icon:'icon-icon-test'},
                {name:'预约购票',icon:'icon-naozhong'},
                {name:'在线客服',icon:'icon-kefu'},
                {name:'我的订单',icon:'icon-dingdan'}]
            }
        }
    }
</script>

<style lang="less">
.menu{background: #fff;position: fixed;
    bottom: 0;width: 100%;padding: 0.1rem 0;
    i{font-size: 0.4rem;}
    .center{font-size: 0.24rem;}
}
</style>