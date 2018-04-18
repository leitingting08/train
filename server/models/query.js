var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});

    var params = url.parse(req.url, true).query;
    res.write("出发地："+ params.FromStation)
    res.write("目的地："+ params.ToStation)
})


// //车票预订
// var url= './otn/leftTicket/query?leftTicketDTO.train_date='+obj.leaveTime+'$leftTicketDTO.from_station='+obj.fromStation+'&lleftTicketDTO.to_station='+obj.toStation+'&purpose_codes=ADULT';

// //生成GET请求的参数
// var options={
//     hostname:'kyfw.12306.cn',
//     port:443,
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


//查询火车票
// $('#queryT').click(function(){
//     $('#hInfo').fadeOut('slow');
//     //特效
//     var start=$('#startGo').val();
//     //出发地
//     var end=$('#endOf').val();
//     //目的地
//     var dtartCode=$('#startGo').attr('xx');
//     var endCode=$('#endOf').attr('xx');
//     var getDate=$('#inputDate').val();
//     //过滤空值
//     if(start=='' ||end==''||getDate==''||start==end){
//         alert('出发地，目的地，日期不能为空并且出发地与目的地不能相同');
//         retutn;
//     }
//     //获取火车票信息
//     getRailway(startCode,endCode,getDate);
// });