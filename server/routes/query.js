var https = require('https');
var fs = require('fs');
// var ca = fs.readFileSync('cert/srca.cer.pem');
var express = require('express');
var router = express.Router();
var config = {
    time:'2018-08-17',//日期格式必须是这样
    from_station:'BJP',//始发站车站代码，这里是北京北
    end_station:'XMS',//车次
};
// var yz_temp = '',yw_temp = '';//保存余票状态
// router.get("/", function(req,res,next){
function queryTickets(config){
    var options = { 
        hostname: 'kyfw.12306.cn',//12306
        path: '/otn/leftTicket/queryA?leftTicketDTO.train_date='+config.time+'&leftTicketDTO.from_station='+config.from_station+'&leftTicketDTO.to_station='+config.end_station+'&purpose_codes=ADULT',
        // ca:[ca],//证书
        rejectUnauthorized:false
    };
    var req = https.get(options, function(res){ 
    var data = '';
    res.on('data',function(buff){
        data += buff;//查询结果（JSON格式）
        console.log(data)
    }); 
    res.on('end',function(){
        console.log('res',data);
        // var jsonData = JSON.parse(data).data;
        // console.log('res',jsonData);
        // for(var i=0;i<jsonData.length;i++){
        //     var cur = jsonData[i];
        // }
        // fs.writeFile('./train.json',data);
        })  
    });
    req.on('error', function(err){
        console.error(err.code);
    });
    }
    queryTickets(config)
// });

// module.exports = router;
