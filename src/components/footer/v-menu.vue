<template>
  <div class="menu">
    <div class="flex">
      <div class="flexitem" v-for="(item,index) in menus" :key="index" @click="gorouter(item)">
        <div class="center">
          <i class="iconfont" :class="item.icon"></i>
        </div>
        <div class="center">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["menus"],
  data() {
    return {};
  },
  methods: {
    gorouter(item) {
      if (item.link) {
        this.$router.push({ path: item.link });
      }
    }
  }
};
</script>

<style lang="less">
.menu {
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.1rem 0;
  i {
    font-size: 0.4rem;
  }
  .center {
    font-size: 0.24rem;
  }
}
</style>