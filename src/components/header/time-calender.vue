<template>
  <div class="time-calender">
    <div class="flex">
      <div class="flexitem l" @click="beforedate">
        <i class="fa fa-angle-left"></i>
        前一天
      </div>
      <div class="flexitem c" @click="calendarshow=true">
        {{leavedate | format('MM月DD日')}} |
        <i class="fa fa-calendar-o"></i>
      </div>
      <div class="flexitem r" @click="afterdate">
        后一天
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
    <!-- 日期选择弹层 -->
    <my-popup v-if="calendarshow">
      <myCalendar
        @cancelBtn="calendarshow=false"
        :modal="dateModalData"
        @selectDate="selectDateEvent"
        ref="selectdate"
      ></myCalendar>
    </my-popup>
  </div>
</template>

<script>
import moment from "moment";
let today = moment().format("YYYY-MM-DD");
import myPopup from "@/components/pop/my-popup";
import myCalendar from "@/components/mycalendar/mycalendar";

export default {
  components: { myPopup, myCalendar },
  props: ["leavedate"],
  data() {
    return {
      calendarshow: false,
      dateModalData: {
        startDate: moment().format("YYYY-MM-DD"),
        endDate: moment()
          .add(60, "day")
          .format("YYYY-MM-DD"), // 默认今天往后3个月
        currentDate: [moment().format("YYYY-MM-DD")] // 默认今天和明天
      }
    };
  },
  created() {
    this.dateModalData.currentDate = [
      moment(this.leavedate).format("YYYY-MM-DD")
    ];
  },
  methods: {
    beforedate() {
      this.$emit("beforedate");
    },
    afterdate() {
      this.$emit("afterdate");
    },
    selectDateEvent(data) {
      // 选择日期
      this.dateModalData.startDate = moment(this.leavedate).format(
        "YYYY-MM-DD"
      );
      this.dateModalData.currentDate = [
        moment(data.startDate).format("YYYY-MM-DD")
      ];
      this.$emit("currentDate", moment(data.startDate).format("YYYY-MM-DD"));
      this.calendarshow = false;
    }
  }
};
</script>

<style lang="less">
@yellow: #ffc300;
.time-calender {
  background: @yellow;
  width: 100%;
  padding: 0.1rem 0;
  margin-top: -0.05rem;
  .flex-demo {
    text-align: center;
    i {
      padding: 0 0.2rem;
    }
  }
  .l {
    text-align: left;
    padding-left: 0.2rem;
  }
  .c {
    background: #fff;
    padding: 0.15rem 0;
  }
  .r {
    text-align: right;
    padding-right: 0.2rem;
  }
}
</style>