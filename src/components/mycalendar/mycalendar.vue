<template>
  <div>
    <title-back @backEvent="cancelBtn" homehidden="true" :title="`出发日期`">
    </title-back>
    <div class="select-date">
      <ul class="week-tit">
        <li>日</li>
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
      </ul>
      <div v-for="item in pullDate">
        <div class="date-title">{{item.title}}</div>
        <ul>
          <li v-for="day in item.date" :class="day.classname"
              @click="(day.classname.indexOf('day')!==-1? dayClickEvent(day): null)">
              <!-- <div v-show="day.classname.indexOf('today')">今天</div> -->
            {{day.day}}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import moment from 'moment';
  import TitleBack from "@/components/header/pop-title";

  export default {
    components: {TitleBack},
    props: ['modal'],
    data() {
      return {
        startDate: this.modal.startDate,
        endDate: this.modal.endDate,
        dateJson: this.modal.dateJson | [],
        currentDate: this.modal.currentDate,
        pullDate:null,
        clickNum:0,
        clickStartDate:''
      }
    },
    created() {
      let today = moment().format('YYYY-MM-DD')
      this.pullDate = this.getAll(today, this.endDate)
      console.log(this.pullDate);
    },
    methods: {
      dayClickEvent(data){ // 一天的日期
        this.clickStartDate = `${data.year}-${data.month}-${data.day}`;
        this.$emit('selectDate',{'startDate':this.clickStartDate}); // 发射出去
      },
      // dayClickdoubleEvent(data) { // 入店离店
      //   let endDate = '';
      //   if(this.clickNum!==0){
      //     endDate = `${data.year}-${data.month}-${data.day}`;
      //     const v = moment(endDate).diff(moment(this.clickStartDate));
      //     if(v<0){ // 如果小于于0，就是start大于end,那么就重头开始
      //       this.clickNum = 0;
      //     }
      //   }

      //   for(let key in this.pullDate){
      //     this.pullDate[key].date.forEach(item => {
      //       if(!item.classname){return;}
      //       (item.classname.indexOf('rudian') !== -1 || item.classname.indexOf('lidian') !== -1)&&this.clickNum === 0 ? item.classname = item.classname.replace(/ lidian| rudian/,''):item.classname = item.classname; // 如果是第一次点击就是清空入店离店，重新选择入店，
      //       item.classname.indexOf('lidian')&&this.clickNum !== 0 ? item.classname = item.classname.replace(/ lidian| rudian /,''):item.classname = item.classname; // 如果是第二次点击，就清空离店，重新选择离店
      //     })
      //   }
      //   if(this.clickNum === 0){
      //     this.clickStartDate = `${data.year}-${data.month}-${data.day}`;
      //     data.classname+=' rudian';
      //     this.clickNum++; // 累加
      //   }else{
      //     data.classname+=' lidian';
      //     this.clickNum = 0;
      //     this.$emit('selectDate',{'startDate':this.clickStartDate,'endDate':endDate}); // 发射出去
      //   }
      // },
      pushTag(yearMonthDay) { // 添加 价格信息，是否休息等。。。
        let tags = [];
        for (let i = 0; i < this.dateJson.length; i++) {
          if (moment(yearMonthDay).format('x') === moment(this.dateJson[i].date).format('x')) {
            for (let key in this.dateJson[i]) {
              tags.push([key, this.dateJson[i][key]]);
            }
            break;
          }
        }
        return tags;
      },
      setClass(start,end, i){ //根据日期给div设置样式
        let className = '';
        if (i >= moment(start).format('x') && i <= moment(end)) { // 是否在开始和结束之间
          className = 'day';
          if(moment(i).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')){ // 今天
            className += ' today';
          }
          this.currentDate.forEach((item,index) => { // currentDate
            if(moment(i).format('YYYY-MM-DD') === moment(item).format('YYYY-MM-DD')){
              index === 0 ? className += ' rudian':className += ' lidian';
            }
          })
        } else {
          className = 'pass';
          if(moment(i).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')){
            className += ' today';
          }
        }
        return className;
      },
      getAll(start, end) { // 获取两个日期间的所有日期数据
        const sd = Number(moment(start).startOf('month').format('x')); // 本月第一天
        const ed = Number(moment(end).endOf('month').format('x')); // 本月最后一天

        let dataObject = {};

        dataObject[sd] = {title: moment(start).format('YYYY年MM月'), date: []} // 初始第一个月
        for (let w = 0; w < moment(sd).weekday(); w++) { // 对本月一号之前的周几补全。
          dataObject[sd].date.push({year: '', month: '', day: '', week: w});// 如果当前月份没有存储当前天数用的数组,就创建一个空数组，如果有，就向里面添加一个空对象; (空对象是用来占位置的，用来填充月份前面的空白)
        }
        for (let i = sd; i <= ed;) {
          const firstDay = Number(moment(i).startOf('month').format('x')); // 当月第一天;--作为每个月的唯一标示

          if (moment(i).format('x') === moment(moment(i).startOf('month').format('YYYY-MM-DD')).format('x') && i !== sd) { // 如果是当月的第一天,添加下个月的数据
         //   console.log(i, sd)
            const op = {
              title: moment(i).add(1, 'days').format('YYYY年MM月'), // 下个月的第一天
              date: []
            }
            for (let w = 0; w < moment(i).weekday(); w++) { // 对本月一号之前的周几补全。
              op.date.push({year: '', month: '', day: '', week: w});// 如果当前月份没有存储当前天数用的数组,就创建一个空数组，如果有，就向里面添加一个空对象; (空对象是用来占位置的，用来填充月份前面的空白)
            }
            dataObject[i] = op;
          }

          //根据日期给div设置样式
          let className = this.setClass(start, end, i);
          const tag = this.pushTag(moment(i).format('YYYY-MM-DD')); 

          const option = {
            year: moment(i).format('YYYY'),
            month: moment(i).format('MM'),
            day: moment(i).format('DD'),
            week: moment(i).weekday(),
            classname: className,
            tags: tag
          }
          dataObject[firstDay].date.push(option);
          i = Number(moment(i).add(1, 'days').format('x')); // 下次赋值
        }
        return dataObject;
      },
      cancelBtn(){
        this.$emit('cancelBtn');
      }
    }
  }
</script>

<style scoped lang="less">
.select-date {padding-top: 1.8rem;
    background: #fafafa;color: #333;
    .date-title {width: 100%;background-color: transparent;color: #333;line-height: 1rem;font-weight: 400;text-align: center;letter-spacing: .025rem;font-size: .28rem;z-index: 9;
    }
    .week-tit{position: fixed;top:.8rem;width:7.2rem;background: #fff;z-index: 1;
    }
    ul {overflow: hidden;border-bottom: 1px solid #e8e8e8;background: #fafafa;
      li {list-style: none;position: relative;float: left;width: 14.2857%;height: .9rem;margin-bottom: -1px;border-bottom: 1px solid #e8e8e8;text-align: center;line-height: .9rem;font-size: .22rem;box-sizing: border-box;
        .rd,.ld{display: none;}
        &.pass, &.future {color: #ccc;opacity: 0.5;}
        &.day {color: #333;}
        &.rudian,&.lidian{color: #fff;background:#ff6600;padding-top: .05rem;
        }
        &.rudian .rd,&.lidian .ld{display: block}
        &.today{
          color: green;
        }
        i {display: block;position: absolute;color: #333;font-style: normal;font-size: .2rem;
          &.date {display: none;font-style: normal;}
          &.rest, &.discount {right: 0.1rem;top: 0.1rem;width: 0.3rem;height: 0.3rem;background: #4AC29A;line-height: 0.3rem;color: #fff;}
          &.discount {background: #ff6600;color: #fff;}
          &.price {bottom: 0;left: 0;width: 100%;color: #333;font-size: .2rem;line-height: 0.3rem;}
        }
      }
    }
  }
</style>
