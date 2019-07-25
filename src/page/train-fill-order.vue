<template>
  <div class="train-fill-order">
    <trainInfo :trainInfo="seatInfo"></trainInfo>

    <div class="link12306 clearfix">
      <span slot="title fl">
        <i class="iconfont icon-icon-test"></i>
        <span class="font26">{{('12306username')}}</span>
      </span>
      <span class="fr">
        <i class="iconfont icon-jinrujiantou"></i>
      </span>
    </div>
    <div class="passenger-info">
      <div class="add v-b1px center font38 themeColor">
        <i class="iconfont icon-jia"></i>
        <span class="pl10">选择乘客</span>
        <!-- <span class="add-person flexitem v-r1px">添加/修改乘车人</span>
        <span class="add-children flexitem">添加儿童票</span> -->
      </div>
      <div class="certi-info flex v-b1px">
        <div class="w10">
          <i class="iconfont icon-guanbishixin orange"></i>
        </div>
        <div class="w90">
          <div class="font30">lihsuh</div>
          <div>身份证 411523199907178888</div>
        </div>
      </div>
      <div class="connect flex font26">
        <div class="w15">联系手机</div>
        <div class="w60 left">
          <input class="font26" type="text" name="phonenumber" value="15888888888">
        </div>
        <div class="w10 right">
          <i class="iconfont icon-biaodankongjianlianxiren col888 font36"></i>
        </div>
      </div>
    </div>
    <div class="tips">
      <div class="font26">温馨提示</div>
      <div class="orange">*学生票、儿童票暂按成人价收取，出票后以实际票价为准，票款差额将原路退还到您的账户</div>
    </div>
    <payMenu></payMenu>
  </div>
</template>

<script>
import vTitle from "@/components/header/v-title";
import payMenu from "@/components/footer/pay-menu";
import trainInfo from "@/components/common/train-info";

export default {
  components: {
    trainInfo,
    vTitle,
    payMenu
  },
  data() {
    return {
      noTicket: false,
      seatInfo: this.$route.query
    };
  },
  beforeRouteEnter(to, from, next) {
    let option = {
      headTitle: true,
      sTitle: "订单填写",
      sTo: {
        url: "/",
        name: true
      }
    };
    next(vm => {
      vm.$store.commit("publicSetEvent", option);
    });
  }
};
</script>

<style lang="less" scoped>
.train-fill-order {
  padding-top: 1rem;
  .link12306 {
    background: #fff;
    padding: 0.2rem 0.25rem;
    margin-top: 0.2rem;
  }
  .passenger-info {
    background: #fff;
    margin-top: 0.2rem;
    .add {
      height: 0.8rem;
      line-height: 0.8rem;
    }
    .certi-info {
      padding: 0.2rem 0.25rem;
    }
    .connect {
      padding: 0.2rem 0.25rem;
    }
  }
  .tips {
    padding: 0.2rem 0.25rem;
  }
}
</style>