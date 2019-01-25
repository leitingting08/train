var superagent = require('superagent')
var express = require('express');
var app = express();
var router = express.Router();
var stationobj = require('../models/query');

router.post("/", function(req,res,next){
  var params = req.body
  var fromsta = 'BJP';
  var tosta = 'HZH';
  var listrpage = params.listrpage?params.listrpage:1;
  var Type = params.isStudent?'0X00':'ADULT'
  for(let i in stationobj){
    fromsta = stationobj[params.FromStation]
    tosta = stationobj[params.ToStation]
  }
//获取查询参数
var config = {
    time:params.FromDate,//日期格式必须是这样
    from_station:fromsta,//始发站车站代码，这里是北京北
    end_station:tosta,//车次
    passergerType:Type// 乘客类型(成儿&学生)，ADULT是成人，学生是0X00
};
// console.log(config)

// https://kyfw.12306.cn/otn/leftTicket/queryO?leftTicketDTO.train_date=2018-10-20&leftTicketDTO.from_station=HZH&leftTicketDTO.to_station=SHH&purpose_codes=ADULT
const url = 'https://kyfw.12306.cn/otn/leftTicket/queryZ?leftTicketDTO.train_date='+config.time+'&leftTicketDTO.from_station='+config.from_station+'&leftTicketDTO.to_station='+config.end_station+'&purpose_codes='+config.passergerType

let lists = []

superagent.get(url)
        .end(function(response,result){
             if (result.statusCode==200) {
              const r = result.body
              const flag = r.data.flag
              const map = r.data.map
              const ress = r.data.result

              let priceParams = {}
              ress.forEach((item,index)=>{
                console.log(item.split('|'))
                let list = {}
                list.train_id = item.split('|')[2]
                list.train_no = item.split('|')[3]
                for(var key in stationobj){
                  if(stationobj[key]===item.split('|')[4]){
                    list.from_station_name = key
                  }
                  if(stationobj[key]===item.split('|')[7]){
                    list.to_station_name = key
                  }
                }
                list.start_time = item.split('|')[8]
                list.arrive_time = item.split('|')[9]
                list.duration = item.split('|')[10].split(':')[0]+'时'+item.split('|')[10].split(':')[1]+'分'
                list.if_can_by = item.split('|')[11]
                list.leave_time = item.split('|')[13]
                list.seat_type = item.split('|')[15]
                list.seat_types = item.split('|')[35]
                list.from_station_no = item.split('|')[16]
                list.to_station_no = item.split('|')[17]
  // 普通K：21：软卧、 24：无座  25：  26：硬卧  27：硬座  
  // 普通T：19:高级软  20：其它  21：软卧  24：无座  26：硬卧  27：硬座
  // 普通Z：19:高级软  21：软卧  24：无座  26：硬卧  27：硬座
  // 普通Y：22：软座   24：无座  27：硬座
  // 高铁G：23：特等   24：无座  28：二等  29：一等  30：商务
  // 城际C：23：特等   24：无座  28：二等  29：一等  30：商务 
  // 动车D：21：软卧   24：无座  28：二等  29：一等  31：动卧 
                if(list.train_no.substr(0,1)=='K'||
                  list.train_no.substr(0,1)=='T'||
                  list.train_no.substr(0,1)=='Z'){
                  list.zc0 = '软卧'
                  list.zc1 = '硬卧'
                  list.zc2 = '硬座'
                  list.zc3 = '无座'
                  list.num0 = item[23]?'有票':'无票'
                  list.num1 = item[28]?'有票':'无票'
                  list.num2 = item[29]?'有票':'无票'
                  list.num3 = item[26]?'有票':'无票'
                  // list.swz_num = item[32] || item[25] // # 特别注意：商务座在32或25位置
                  // list.zy_num = item[31] // #一等座信息在31号位置
                  // list.ze_num = item[30] // #二等座信息在30号位置
                  // list.gr_num = item[21] // #高级软卧信息在31号位置
                  // list.rw_num = item[23] // #软卧信息在23号位置
                  // list.dw_num = item[27] // #动卧信息在27号位置
                  // list.yw_num = item[28] // #硬卧信息在28号位置
                  // list.rz_num = item[24] // #软座信息在24号位置
                  // list.yz_num = item[29] // #硬座信息在29号位置
                  // list.wz_num = item[26] // #无座信息在26号位置
                  // list.qt_num = item[22] // #其他信息在22号位置
                }
                if(list.train_no.substr(0,1)=='Y'){
                  list.zc0 = '软座'
                  list.zc1 = '硬座'
                  list.zc2 = '无座'
                  list.zc3 = ''
                  list.num0 = item[24]?'有票':'无票'
                  list.num1 = item[29]?'有票':'无票'
                  list.num2 = item[26]?'有票':'无票'
                  list.num3 = ''
                }
                if(list.train_no.substr(0,1)=='D'){
                  list.zc0 = '一等座'
                  list.zc1 = '二等座'
                  list.zc2 = '无座'
                  list.zc3 = ''
                  list.num0 = item[31]?'有票':'无票'
                  list.num1 = item[30]?'有票':'无票'
                  list.num2 = item[26]?'有票':'无票'
                  list.num3 = ''
                }
                if(list.train_no.substr(0,1)=='G'||
                  list.train_no.substr(0,1)=='C'){
                  list.zc0 = '商务座'
                  list.zc1 = '一等座'
                  list.zc2 = '二等座'
                  list.zc3 = '无座'
                  list.num0 = item[32] || item[25]?'有票':'无票'
                  list.num1 = item[31]?'有票':'无票'
                  list.num2 = item[30]?'有票':'无票'
                  list.num3 = item[26]?'有票':'无票'
                }
                
                
                // priceParams.train_no = item[2]
                // priceParams.from_station_no = item[16]
                // priceParams.to_station_no = item[17]
                // priceParams.seat_types = item[35]

                lists.push(list)
                
              })
              const priceUrl = 'https://kyfw.12306.cn/otn/leftTicket/queryTicketPriceFL?train_no='+priceParams.train_no+'&from_station_no='+priceParams.from_station_no+'&to_station_no='+priceParams.to_station_no+'&seat_types='+priceParams.seat_types+'&train_date='+config.time
                // superagent.get(priceUrl)
                //   .end(function(req,res){
                //     console.log(res.body)
                //     // list.price = res.body.data.wz
                //   })
              res.json({
                  status:true,
                  msg:'查询成功',
                  data: lists
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
