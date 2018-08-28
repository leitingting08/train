var https = require('https');
const request = require('async-request');
var fs = require('fs');
var ca = fs.readFileSync('../cert/srca.cer.pem');
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

const url = 'https://kyfw.12306.cn/otn/leftTicket/queryA?leftTicketDTO.train_date='+config.time+'&leftTicketDTO.from_station='+config.from_station+'&leftTicketDTO.to_station='+config.end_station+'&purpose_codes=ADULT';


// app.get('/', function (req, res, next) {
    var options = { 
        hostname: 'kyfw.12306.cn',//12306
        path: '/otn/leftTicket/queryA?leftTicketDTO.train_date='+config.time+'&leftTicketDTO.from_station='+config.from_station+'&leftTicketDTO.to_station='+config.end_station+'&purpose_codes=ADULT',
        ca:[ca],//证书
        // key: fs.readFileSync('../cert/server.key'),//这是我在ssl目录下生成的server.key改名为server.pem
        // cert: fs.readFileSync('../cert/cert.pem'),
        requestCert:true,  //请求客户端证书
        // rejectUnauthorized:false 
        // rejectUnauthorized:false
    };
    var req = https.get(options, function(res){ 
      // res.pipe(process.stdout); 
      // console.log(res.pipe(process.stdout));
        var data = '';
        res.on('data',function(buff){
            data += buff;//查询结果（JSON格式）
            console.log(data)
        });
        res.on('end',function(){
            console.log(data)
        }); 
        console.log(res);
    });

    req.on('error', function(err){
      console.error(err.code);
    });
   
    
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容

  // superagent.get('https://www.baidu.com')
  //   .end(function (err, sres) {
  //     // 常规的错误处理
  //     if (err) {
  //       return next(err);
  //     }
  //     // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
  //     // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
  //     // 剩下就都是 jquery 的内容了
  //     console.log(sres);
  //     console.log(sres.text);
  //     var $ = cheerio.load(sres.text);
  //     var items = [];
  //     // $('#topic_list .topic_title').each(function (idx, element) {
  //     //   var $element = $(element);
  //     //   items.push({
  //     //     title: $element.attr('title'),
  //     //     href: $element.attr('href')
  //     //   });
  //     // });

  //     res.send(items);
  //   });
// });
// var yz_temp = '',yw_temp = '';//保存余票状态
// router.get("/", function(req,res,next){
// async function queryTickets(config){
//     const url = 'https://kyfw.12306.cn/otn/leftTicket/queryA?leftTicketDTO.train_date='+config.time+'&leftTicketDTO.from_station='+config.from_station+'&leftTicketDTO.to_station='+config.end_station+'&purpose_codes=ADULT';
//     const result = await request(url, {
//       headers: {
//         'verify': 'false'
//       }
//     });
//     console.log(result.body)
//     // var options = { 
//     //     hostname: 'kyfw.12306.cn',//12306
//     //     path: '/otn/leftTicket/queryA?leftTicketDTO.train_date='+config.time+'&leftTicketDTO.from_station='+config.from_station+'&leftTicketDTO.to_station='+config.end_station+'&purpose_codes=ADULT',
//     //     ca:[ca],//证书
//     //     rejectUnauthorized:false
//     // };
//     // var req = https.get(options, function(res){ 
//     //   res.pipe(process.stdout); 
//     //   console.log(res.pipe(process.stdout));
//     // });

//     // req.on('error', function(err){
//     //   console.error(err.code);
//     // });
//     // var req = https.get(options, function(res){ 
//     // var data = '';
//     // res.on('data',function(buff){
//     //     data += buff;//查询结果（JSON格式）
//     //     console.log(data)
//     // }); 
//     // res.on('end',function(){
//     //     console.log('res',data);
//     //     // var jsonData = JSON.parse(data).data;
//     //     // console.log('res',jsonData);
//     //     // for(var i=0;i<jsonData.length;i++){
//     //     //     var cur = jsonData[i];
//     //     // }
//     //     // fs.writeFile('./train.json',data);
//     //     })  
//     // });
//     // req.on('error', function(err){
//     //     console.error(err.code);
//     // });
//     }
//     queryTickets(config)
// });

module.exports = router;
