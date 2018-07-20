

var https = require('https');
var fs = require('fs');
var ca = fs.readFileSync('../cert/srca.cer');

function getTrains(){
var url = 'otn/leftTicket/query?leftTicketDTO.train_date=2018-08-17&leftTicketDTO.from_station=BJP&leftTicketDTO.to_station=SHH&purpose_codes=ADULT'
var options={
    hostname:'kyfw.12306.cn',
    port:443,
    path:url,
    method:'GET',
    rejectUnauthorized:false,
    ca:[ca]//证书
};
var req = https.get(options, function(res){ 
	res.setEncoding('utf8');
    var data = '';
    res.on('data',function(buff){
        data += buff;//查询结果（JSON格式）
        console.log(data)
    }); 
    res.on('end',function(){
        console.log('res',data);
        // var jsonData = JSON.parse(data).data;
    })  
});
req.on('error', function(err){
    console.error(err.code);
});
}
getTrains()