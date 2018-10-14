var superagent = require('superagent')
var express = require('express');
var app = express();
var router = express.Router();
var stationobj = require('../models/query');

router.post("/", function(req,res,next){
  var params = req.body.params
  var fromsta = 'BJP';
  var tosta = 'HZH';
  var curpage = params.curpage;
  for(let i in stationobj){
    fromsta = stationobj[params.FromStation]
    tosta = stationobj[params.ToStation]
  }
//获取查询参数
var config = {
    time:params.FromDate,//日期格式必须是这样
    from_station:fromsta,//始发站车站代码，这里是北京北
    end_station:tosta,//车次
};
console.log(config)

// https://kyfw.12306.cn/otn/leftTicket/queryO?leftTicketDTO.train_date=2018-10-20&leftTicketDTO.from_station=HZH&leftTicketDTO.to_station=SHH&purpose_codes=ADULT
const url = 'https://kyfw.12306.cn/otn/leftTicket/queryO?leftTicketDTO.train_date='+config.time+'&leftTicketDTO.from_station='+config.from_station+'&leftTicketDTO.to_station='+config.end_station+'&purpose_codes=ADULT'

let lists = []

superagent.get(url)
        .end(function(response,result){
             if (result.statusCode==200) {
              const r = result.body
              const flag = r.data.flag
              const map = r.data.map
              const ress = r.data.result


              ress.forEach((item,index)=>{
                let list = {}
                list.train_id = item.split('|')[2].toString()
                list.train_no = item.split('|')[3].toString()
                // list.from_station_name = item.split('|')[4].toString()
                // list.to_station_name = item.split('|')[5].toString()
                for(var key in stationobj){
                  if(stationobj[key]===item.split('|')[4]){
                    list.from_station_name = key
                  }
                  if(stationobj[key]===item.split('|')[5]){
                    list.to_station_name = key
                  }
                }
                list.start_time = item.split('|')[8].toString()
                list.arrive_time = item.split('|')[9].toString()
                list.duration = item.split('|')[10].split(':')[0]+'时'+item.split('|')[10].split(':')[1]+'分'
                list.if_can_by = item.split('|')[11].toString()
                list.leave_time = item.split('|')[13].toString()
                list.seat_type = item.split('|')[15].toString()
                lists.push(list)
              })
              res.json({
                  status:true,
                  msg:'查询成功',
                  data:{'result': lists}
              });
           } else {
             res.json({
                  status:false,
                  msg:'查询失败',
                  data:{}
              });
           }
           
        })
  
});

module.exports = router;
