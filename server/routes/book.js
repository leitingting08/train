var superagent = require('superagent')
var express = require('express');
var app = express();
var router = express.Router();
var stationobj = require('../models/query');

router.post("/", function(req,res,next){
  var params = req.body
  console.log(params);
//获取查询参数
var priceParams = {
    train_no:params.train_no, //车次代码
    from_station_no:params.from_station_no,
    to_station_no:params.to_station_no,
    seat_types:params.seat_types,
    train_date:params.train_date
};

const priceUrl = 'https://kyfw.12306.cn/otn/leftTicket/queryTicketPrice?train_no='+priceParams.train_no+'&from_station_no='+priceParams.from_station_no+'&to_station_no='+priceParams.to_station_no+'&seat_types='+priceParams.seat_types+'&train_date='+priceParams.train_date
// const priceUrl = 'https://kyfw.12306.cn/otn/leftTicket/queryTicketPrice?train_no=6i0000D9060D&from_station_no=02&to_station_no=04&seat_types=FO2&train_date=2018-10-20'

superagent.get(priceUrl)
        .end(function(response,result){
             if (result.statusCode==200) {
              console.log(result.body)
              res.json({
                  status:true,
                  msg:'加载坐席价格成功',
                  data:result.body.data
              });
           } else {
             res.json({
                  status:false,
                  msg:'加载坐席价格失败',
                  data:{}
              });
           }
           
        })
  
});

module.exports = router;
