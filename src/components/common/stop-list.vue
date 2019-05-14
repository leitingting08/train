<template>
  <div>
    <span class="time-table" @click="stopListIsShow=true">
      <span class="time">时刻表</span>
    </span>

    <div class="stop-list-wrapper" v-show="stopListIsShow" @click="stopListIsShow=false">
      <div class="stop-list" @click="prevent($event)">
        <div class="title">列车时刻表</div>
        <div>
          <!-- <inline-loading></inline-loading> -->
        </div>
        <table>
          <tr>
            <th>车站</th>
            <th>到达</th>
            <th>发车</th>
            <th>停留</th>
          </tr>
          <tr class="yellow">
            <td>杭州</td>
            <td>22:10</td>
            <td>22:13</td>
            <td>3分钟</td>
          </tr>
          <tr>
            <td>杭州</td>
            <td>22:10</td>
            <td>22:13</td>
            <td>3分钟</td>
          </tr>
          <tr>
            <td>杭州</td>
            <td>22:10</td>
            <td>22:13</td>
            <td>3分钟</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stop-list",
  data() {
    return {
      showHideOnBlur: false,
      loadIsSHow: false,
      questData: {
        faild: "",
        stopList: []
      },
      stopListIsShow: false
    };
  },
  methods: {
    prevent(e) {
      e.stopPropagation();
    }
  }
};
</script>

<style lang="less" scoped>
@orange: #ff6600;
.yellow {
  td {
    color: @orange!important;
  }
}
.stop-list-wrapper {
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  .stop-list {
    background: #fff;
    width: 86%;
    margin: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    max-height: 6rem;
    overflow-y: auto;
    .title {
      padding: 0.3rem 0;
    }
    table {
      width: 100%;
      margin-bottom: 0.3rem;
      tr {
        th,
        td {
          height: 0.5rem;
        }
        th {
          color: #333;
        }
        td {
          color: #666;
        }
      }
    }
  }
}
</style>