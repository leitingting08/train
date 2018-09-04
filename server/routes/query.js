var https = require('https');
const request = require('async-request');
var fs = require('fs');
// var ca = fs.readFileSync('../cert/srca.cer.pem');
var superagent = require('superagent')
var cheerio = require('cheerio')
var express = require('express');
var app = express();
var router = express.Router();


var config = {
    time:'2018-09-17',//日期格式必须是这样
    from_station:'BJP',//始发站车站代码，这里是北京北
    end_station:'XMS',//车次
};


const url = 'https://kyfw.12306.cn/otn/leftTicket/queryA?leftTicketDTO.train_date='+config.time+'&leftTicketDTO.from_station='+config.from_station+'&leftTicketDTO.to_station='+config.end_station+'&purpose_codes=ADULT'

router.get("/", function(req,res,next){

let lists = []

superagent.get(url) //这里的URL也可以是绝对路径
        .end(function(req,res){
            const r = JSON.parse(res.text)
            const flag = r.data.flag
            const map = r.data.map
            const result = r.data.result
            result.forEach((item,index)=>{
              let list = {}
              list.train_id = item.split('|')[2].toString()
              list.train_no = item.split('|')[3].toString()
              list.from_station_name = item.split('|')[4].toString()
              list.to_station_name = item.split('|')[5].toString()
              list.start_time = item.split('|')[8].toString()
              list.arrive_time = item.split('|')[9].toString()
              list.duration = item.split('|')[10].toString()
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
        })
  
});

module.exports = router;
