<template>
  <div id="app">
    <vHeader/>
    <router-view/>
  </div>
</template>

<script>
import vHeader from "@/components/header/v-header";
export default {
  name: "app",
  directives: {},
  components: { vHeader },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="less">
@import '~@/assets/css/variable.less';
</style>
