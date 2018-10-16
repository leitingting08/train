var superagent = require('superagent')
var express = require('express');
var app = express();
var router = express.Router();
var stationobj = require('../models/query');

router.post("/", function(req,res,next){
  var params = req.body.params
//获取查询参数
var priceParams = {
    train_no:'', //日期格式必须是这样
    from_station_no:'',//始发站车站代码，这里是北京北
    to_station_no:'',//车次
    train_date:''
};
console.log(priceParams)
console.log(params)

// const priceUrl = 'https://kyfw.12306.cn/otn/leftTicket/queryTicketPriceFL?train_no='+priceParams.train_no+'&from_station_no='+priceParams.from_station_no+'&to_station_no='+priceParams.to_station_no+'&seat_types='+priceParams.seat_types+'&train_date='+priceParams.train_date
const priceUrl = 'https://kyfw.12306.cn/otn/leftTicket/queryTicketPrice?train_no=6i0000D9060D&from_station_no=02&to_station_no=04&seat_types=FO2&train_date=2018-10-20'
let lists = []

superagent.get(priceUrl)
        .end(function(response,result){
             if (result.statusCode==200) {
              console.log(result.body)
              res.json({
                  status:true,
                  msg:'预定成功',
                  data:{}
              });
           } else {
             res.json({
                  status:false,
                  msg:'预定失败',
                  data:{}
              });
           }
           
        })
  
});

module.exports = router;
