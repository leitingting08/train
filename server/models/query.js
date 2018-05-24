var http = require('http');
var url = require('url');
var util = require('util');
// var url = 'https://kyfw.12306.cn/otn/leftTicket/query?leftTicketDTO.train_date=2018-05-24&leftTicketDTO.from_station=HZH&leftTicketDTO.to_station=MCN&purpose_codes=ADULT'
// var url = 'https://kyfw.12306.cn/otn/leftTicket/query?leftTicketDTO.train_date=2018-05-25&leftTicketDTO.from_station=SHH&leftTicketDTO.to_station=HZH&purpose_codes=ADULT'

// var obj = {
//     leaveTime:'2018-06-01',
//     fromStation:'北京',
//     toStation:'杭州'
// }


// //车票预订
// var url= '/otn/leftTicket/query?leftTicketDTO.train_date='+ obj.leaveTime +'$leftTicketDTO.from_station='+ obj.fromStation +'&lleftTicketDTO.to_station='+obj.toStation+'&purpose_codes=ADULT';

//生成GET请求的参数
// var options={
//     hostname:'kyfw.12306.cn',
//     port:3000,
//     path:url,
//     method:'GET',
//     rejectUnauthorized:false //重要:跳过https证书验证
// };
// var request=http.request(options,function(response){response.setEncoding('utf8');
//     var str='';
//     //拼装数据流
//     response.on('data',function(chunk){ str+=chunk; });
//     //完成拼装
//     request.on('error',function(e){
//         console.log('错误信息：'+e.message);
//     });
//     request.end();
// });

exports.railway = function(req,res){
    var obj=req.body;
    var url='/otn/leftTicket/query?leftTicketDTO.train_date=2018-05-25&leftTicketDTO.from_station=SHH&leftTicketDTO.to_station=HZH&purpose_codes=ADULT';
    var options={
        hostnme:'kyfw.12306.cn',
        port:443,
        path:url,
        method:'GET',
        rejectUnauthorized:false

    };

    var request=https.request(options,function(response){
        response.setEncoding('utf8');

        var str='';

        response.on('data',function(chunk){
            str+=chunk;
        });

        //完成拼装
        request.on('error',funcion(e){
            console.log('错误信息：'+e.message);
        });
        request.end();
    })

}

