<template>
  <div class="order-datail">
    <!--车票状态和价格-->
    <div class="ticket-status">
      <div class="flex">
        <div class="left">
          <div class="clearfix">
            <span class="fl font36 col333">出票成功</span>
            <span class="fr font36 orange">
              <span class="font20">￥</span>11
            </span>
          </div>
          <div class="clearfix">
            <span class="fl col888">请凭购票时有效证件或代售点取票</span>
            <span class="fr col666">查看明细</span>
          </div>
        </div>
        <div class="right">
          <i class="iconfont icon-jinrujiantou"></i>
        </div>
      </div>
      <div class="btn-wrap">
        <button class="btn" @click="bookagain">再订一张</button>
      </div>
    </div>
    <!--车票信息-->
    <div class="detail-block">
      <div class="tit">取票号：EF234468356</div>
      <div class="row rowup flex">
        <div class="flexitem l font30">
          <span>杭州东</span>
          <br>
          <span>02:26</span>
          <br>
          <span class="font20">12月25日 周一</span>
        </div>
        <div class="flexitem c">
          <span>G34</span>
          <br>
          <stopList></stopList>
          <span class="font20">1小时26分</span>
        </div>
        <div class="flexitem r font30">
          <span>上海南</span>
          <br>
          <span>04:14</span>
          <br>
          <span class="font20">12月25日 周一</span>
        </div>
      </div>
      <div class="row rowdown">
        <div class="font20">
          <div class="clearfix">
            <span class="fl">张大伟</span>
            <span class="fr">硬座 ￥92</span>
          </div>
          <div class="clearfix">
            <span class="fl">身份证4****************8</span>
            <span class="fr">02 车厢 087 号</span>
          </div>
          <div class="clearfix">
            <span class="font30 orange fl">出票成功</span>
            <span class="fr">
              <button>退票</button>
              <button>改签</button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--退改须知-->
    <div class="clearfix tickets-refund">
      <span class="fl">退改详情</span>
      <span class="fr">
        详情
        <i class="iconfont icon-jinrujiantou"></i>
      </span>
    </div>
  </div>
</template>

<script>
import vTitle from "@/components/header/v-title";
import stopList from "@/components/common/stop-list";
// import trainInfo from '@/components/common/train-info'

export default {
  components: { vTitle, stopList },
  data() {
    return {};
  },
  methods: {
    bookagain() {
      this.$router.push({ path: "/" });
    }
  },
  beforeRouteEnter(to, from, next) {
    let option = {
      headTitle: true,
      sTitle: "订单详情",
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
@yellow: #ffc300;
@orange: #ff6600;
@light-orange: #f7d977;
.order-datail {
  padding-top: 1rem;
  color: #333;
  .ticket-status {
    background: #fff;
    padding: 0.2rem 0.25rem;
    .flex {
      width: 100%;
      .left {
        width: 95%;
      }
      .right {
        width: 5%;
      }
    }
    .btn-wrap {
      .btn {
        width: 100%;
        border: 1px solid @yellow;
        background: #fff;
        color: @yellow;
        height: 0.8rem;
        font-size: 0.26rem;
        border-radius: 0.05rem;
        margin-top: 0.2rem;
      }
    }
  }
  .detail-block {
    padding: 0.2rem 0.25rem;
    .tit {
      margin-bottom: 0.2rem;
    }
    .row {
      &.rowup {
        background: @light-orange;
      }
      &.rowdown {
        background: #fff;
      }
      padding: 0.2rem;
      border-radius: 0.1rem;
      .l {
        text-align: left;
      }
      .r {
        text-align: right;
      }
    }
  }
  .tickets-refund {
    width: 100%;
    background: #fff;
    padding: 0.2rem 0.25rem;
  }
}
</style>