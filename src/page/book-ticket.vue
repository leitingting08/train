<template>
  <div class="book-ticket">
    <div class="train-info">
      <trainInfo :trainInfo="seatInfo"></trainInfo>
    </div>
    <div class="seat-type">
      <timeCalender
        :leavedate="seatInfo.fromDate"
        @beforedate="clickbeforedate"
        @afterdate="clickafterdate"
        @currentDate="choseDate"
      ></timeCalender>
      <table>
        <tr>
          <td>{{seatInfo.zc0}}</td>
          <td>{{seatInfo.num0}}</td>
          <td class="orange font30">{{price0}}</td>
          <td>
            <button @click="book">立即预定</button>
          </td>
        </tr>
        <tr>
          <td>{{seatInfo.zc1}}</td>
          <td>{{seatInfo.num1}}</td>
          <td class="orange font30">{{price1}}</td>
          <td>
            <button @click="book">立即预定</button>
          </td>
        </tr>
        <tr>
          <td>{{seatInfo.zc2}}</td>
          <td>{{seatInfo.num2}}</td>
          <td class="orange font30">{{price2}}</td>
          <td>
            <button @click="book">立即预定</button>
          </td>
        </tr>
        <tr v-if="seatInfo.zc3&&seatInfo.num3">
          <td>{{seatInfo.zc3}}</td>
          <td>{{seatInfo.num3}}</td>
          <td class="orange font30">{{price3}}</td>
          <td>
            <button @click="book">立即预定</button>
          </td>
        </tr>
      </table>
    </div>
    <!--底部菜单栏-->
    <vMenu :menus="menu"></vMenu>
  </div>
</template>

<script>
import moment from "moment";
import vTitle from "@/components/header/v-title";
import timeCalender from "@/components/header/time-calender";
import trainInfo from "@/components/common/train-info";
import TraintripServer from "@/service/traintrip.server";
import vMenu from "@/components/footer/v-menu";
const tripServer = new TraintripServer();

export default {
  components: { vTitle, timeCalender, vMenu, trainInfo },
  data() {
    return {
      menu: [{ name: "12306(已登录)", icon: "icon-icon-test" }],
      seatInfo: this.$route.query,
      priceParams: {
        train_no: this.$route.query.train_id,
        from_station_no: this.$route.query.from_station_no,
        to_station_no: this.$route.query.to_station_no,
        seat_types: this.$route.query.seat_types,
        train_date: this.$route.query.fromDate
      },
      price0: "",
      price1: "",
      price2: "",
      price3: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    let option = {
      headTitle: true,
      sTitle: "选择坐席"
    };
    next(vm => {
      vm.$store.commit("publicSetEvent", option);
    });
  },
  created() {
    console.log(this.$route.query);
    this.loadTicketPrice();
  },
  methods: {
    loadTicketPrice() {
      tripServer.sendTrainBookUrlServer({
        data: this.priceParams,
        onSuccess: res => {
          console.log(res);
          const data = res.data;
          this.price0 = data.A4;
          this.price1 = data.A3;
          this.price2 = data.A1;
          this.price3 = data.WZ;
        },
        onFalied: error => {
          console.log(error);
        }
      });
    },
    clickbeforedate(date) {
      if (this.priceParams.train_date < moment().format("YYYY-MM-DD") + 1) {
        this.$vux.toast.text("所选日期不能早于今天！");
        return;
      }
      this.priceParams.train_date = moment(this.priceParams.train_date)
        .add(-1, "days")
        .format("YYYY-MM-DD");
      this.seatInfo.fromDate = this.priceParams.train_date;
      this.loadTicketPrice();
    },
    clickafterdate(date) {
      this.priceParams.train_date = moment(this.priceParams.train_date)
        .add(1, "days")
        .format("YYYY-MM-DD");
      this.seatInfo.fromDate = this.priceParams.train_date;
      this.loadTicketPrice();
    },
    choseDate(date) {
      console.log(date);
      this.seatInfo.fromDate = date;
      this.priceParams.train_date = date;
      this.loadTicketPrice();
    },
    book() {
      this.$router.push({ name: "trainFillOrder", query: this.seatInfo });
    }
  }
};
</script>

<style lang="less" scoped>
@yellow: #ffc300;
@orange: #ff6600;
@bg-grey: #fcf8e3;
@border-grey: #faebcc;
.orange {
  color: @orange;
}
.col999 {
  color: #999;
}
.font20 {
  font-size: 0.2rem;
}
.font30 {
  font-size: 0.3rem;
}
.book-ticket {
  margin-top: 1rem;
  .train-info {
    background-color: #fff;
    padding: 0.3rem 0rem 0;
    margin-top: -0.2rem;
    .explain {
      background-color: @bg-grey;
      border: 1px solid @border-grey;
      border-left: none;
      border-right: none;
      padding: 0.1rem 0.2rem;
    }
  }
  .seat-type {
    margin-top: 0.2rem;
    .time-calender {
      background-color: #fff;
    }
    table {
      background-color: #fff;
      font-size: 0.26rem;
      margin-top: 0.2rem;
      tr {
        td {
          padding: 0.2rem 0;
          &:nth-child(1) {
            text-align: left;
            padding-left: 0.2rem;
            width: 2rem;
          }
          &:nth-child(2) {
            text-align: left;
            width: 2rem;
          }
          &:nth-child(3) {
            text-align: right;
            width: 1.5rem;
            padding-right: 0.2rem;
            span:nth-child(1) {
              font-size: 0.2rem;
            }
          }
          &:nth-child(4) {
            text-align: right;
            width: 1.5rem;
          }
          button {
            margin-right: 0.2rem;
            border: 1px solid @orange;
            background-color: @orange;
            color: #fff;
            border-radius: 2px;
            font-size: 0.2rem;
            padding: 0.05rem 0.1rem;
          }
          .no-ticket {
            background-color: #fff;
            color: @orange;
          }
        }
      }
    }
  }
  .comT {
    background-color: #fff;
    margin-top: 0.2rem;
    position: relative;
    &:before {
      left: 0 !important;
    }
    p {
      margin: 0;
    }
    i {
      position: absolute;
      top: 1.1em;
      left: 0.2rem;
      border: 1px solid @yellow;
      border-radius: 50%;
      padding: 0.1rem;
      background-color: @yellow;
    }
    .weui-cell__ft:after {
      content: " ";
      display: inline-block;
      height: 6px;
      width: 6px;
      border-width: 2px 2px 0 0;
      border-color: #c8c8cd;
      border-style: solid;
      -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: relative;
      top: -2px;
      position: absolute;
      top: 50%;
      margin-top: -4px;
      right: 0.2rem;
    }
  }
}
</style>