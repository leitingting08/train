/*
* @Author: Administrator
* @Date:   2018-03-23 21:14:02
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-23 21:30:32
*/
let http = require('http');

let util = require('util');
http.get('http://www.imooc.com/u/card',function(res){
    let data = '';
    res.on('data',function(chunk){
        data += chunk;
    });
    res.on('end',function(){
        let result = JSON.parse(data);

        console.log("result:"+util.inspect(result));
    });
});