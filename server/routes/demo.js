var http = require('http');
var express = require('express');
var https = require('https');
var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
// var ca = fs.readFileSync('../cert/srca.cer.pem');
// http://192.168.1.248:3307/leave/defaultAudit

var reqData = {currentPage:"1",
				departmentName:"",
				emId:"127",
				entryEndTime:"",
				entryStartTime:"",
				items:[],
				leaveName:"",
				leaveType:"",
				perRange:[],
				roleName:"超级管理员",
				state:""}
        var postData = querystring.stringify(reqData);
        var opts = {
            method:'POST',
            host:'192.168.1.248',
            port:'3307',
            path:'/leave/AllApply',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'Content-Length':postData.length
            }
        }

        var config = {
            time:'2018-09-17',//日期格式必须是这样
            from_station:'BJP',//始发站车站代码，这里是北京北
            end_station:'XMS',//车次
        };
        // const url = 'https://kyfw.12306.cn/otn/leftTicket/queryA?leftTicketDTO.train_date='+config.time+'&leftTicketDTO.from_station='+config.from_station+'&leftTicketDTO.to_station='+config.end_station+'&purpose_codes=ADULT';
        var options = { 
            hostname: 'kyfw.12306.cn',//12306
            path: '/otn/leftTicket/queryA?leftTicketDTO.train_date='+config.time+'&leftTicketDTO.from_station='+config.from_station+'&leftTicketDTO.to_station='+config.end_station+'&purpose_codes=ADULT',
            // ca:[ca],//证书
            rejectUnauthorized:false 
         };
        //  const url = 'http://127.0.0.1:3000/stations'
        // var req = http.get(url,function(res){
        var req = https.get(options,function(res){
        // var req = https.request(opts,function(res){
            // console.log(res);
            var datas = [];
            var json = '';
            var size = 0;
            res.on('data',function(data){
                json += data
                datas.push(data);
                size += data.length;
                console.log(json);// 这个写法是对的，可以获取到数据
            })
            res.on('end', function(chunk){
                var buff = Buffer.concat(datas, size);
                // console.log(chunk);
                console.log('huoqu'+ json);
                // console.log('获取的post数据为：' + chunk);
                // console.log(datas);
                // console.log(buff);
                // callback({success:true, data:str});
            })
        })
        // console.log(req.agent.sockets);
   
        req.on('error',function(err){
            console.log('异常,异常原因'+err);
            // callback({success:false, msg:'失败'});
        })
        // req.write(postData);options