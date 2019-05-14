<template>
  <div class="tab">
    <tab>
      <tab-item
        v-for="(item,index) in tabLists"
        :key="index"
        @on-item-click="onItemClick"
        :selected="index==0"
      >{{item}}</tab-item>
    </tab>
  </div>
</template>

<script>
import { Tab, TabItem } from "vux";

export default {
  components: { Tab, TabItem },
  props: ["tabLists"],
  methods: {
    onItemClick(index) {
      this.$emit("onItemClick", index);
    }
  }
};
</script>

<style lang="less">
@yellow: #ffc300;
.tab {
  .vux-tab .vux-tab-item {
    font-size: 0.3rem !important;
  }
  .vux-tab .vux-tab-item.vux-tab-selected {
    color: @yellow;
    border-bottom: 3px solid @yellow;
  }
  .vux-tab-ink-bar {
    background-color: @yellow!important;
  }
}
</style>