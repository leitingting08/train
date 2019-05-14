<template>
  <div class="order-list">
    <oTab :tabLists="tabs" @onItemClick="clickTab"></oTab>
    <div class="list-wrapper">
      <div class="list">
        <router-link to="./orderDetail">
          <div class="title">
            <span>友成票务</span>
            <span class="yellow fr">预约成功</span>
          </div>

          <i class="fa fa-train fa-2x"></i>
          <div class="train">
            <div>
              <span class="font30">杭州-上海</span>
              <span class="fr">￥93</span>
            </div>
            <div>K132 新空快速</div>
            <div>出发时间 2017-10-08 19:05</div>
          </div>
          <div class="delete-r">
            <span class="fr delete">删除订单</span>
          </div>
        </router-link>
      </div>

      <div class="list">
        <div class="title">
          <span>友成票务</span>
          <span class="yellow fr">预约成功</span>
        </div>

        <i class="fa fa-train fa-2x"></i>
        <div class="train">
          <div>
            <span class="font30">杭州-上海</span>
            <span class="fr">￥93</span>
          </div>
          <div>K132 新空快速</div>
          <div>出发时间 2017-10-08 19:05</div>
        </div>
        <div class="delete-r">
          <span class="fr delete">删除订单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import oTab from "@/components/header/o-tab";

export default {
  name: "order-list",
  components: { oTab },
  data() {
    return {
      tabs: ["全部", "待付款", "处理中"]
    };
  },
  methods: {
    clickTab(index) {
      console.log(index);
    }
  },
  beforeRouteEnter(to, from, next) {
    let option = {
      headSwiper: false,
      sTitle: "我的订单",
      headTitle: true
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
.font30 {
  font-size: 0.3rem;
}
.orange {
  color: @orange;
}
.fr {
  float: right;
}
.tab {
  position: fixed;
  top: 0.9rem;
  width: 100%;
}
.order-list {
  .list-wrapper {
    padding-top: 2rem;
  }
  .list {
    background: #fff;
    overflow: hidden;
    padding: 0.2rem 0;
    position: relative;
    margin-bottom: 0.2rem;
    i {
      position: absolute;
      top: 1rem;
      left: 0.2rem;
    }
    .title {
      padding: 0 0.2rem 0.2rem;
    }
    .train {
      line-height: 0.4rem;
      padding: 0.2rem 0.2rem 0.2rem 0.7rem;
      background: #f5f5f5;
    }
    .delete-r {
      padding: 0.2rem 0.2rem 0;
      .delete {
        border: 1px solid #666;
        border-radius: 2em;
        padding: 0 0.15rem;
      }
    }
  }
}
</style>