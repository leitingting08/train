
// var https = require('https');

// https.get('https://www.baidu.com', function(res){
//     console.log('status code: ' + res.statusCode);
//     console.log('headers: ' + res.headers);

//     res.on('data', function(data){
//         process.stdout.write(data);
//     });
// }).on('error', function(err){
//     console.error(err);
// });
var https = require('https');
var fs = require('fs');

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
})

//完成拼装
    request.on('error',funcion(e){
        console.log('错误信息：'+e.message);
    });
    request.end();
