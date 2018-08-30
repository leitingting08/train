var http = require('http');
var express = require('express');
var https = require('https');
var http = require('http');
// http://192.168.1.248:3307/leave/defaultAudit

var postData = {currentPage:"1",
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
        // var postData = JSON.stringify(reqData);
        var opts = {
            method:'POST',
            host:'http://192.168.1.248',
            port:'3307',
            path:'/leave/AllApply',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'Content-Length':postData.length
            }
        }
        var req = http.request(opts,function(res){
        	console.log(res);
            var datas = [];
            var size = 0;
            res.on('data',function(data){
                datas.push(data);
                size += data.length;
            })
            res.on('end', function(){
                var buff = Buffer.concat(datas, size);
                console.log(datas);
                console.log(buff);
                // callback({success:true, data:str});
            })
        })
        req.on('error',function(err){
            console.log('异常,异常原因'+err);
            // callback({success:false, msg:'失败'});
        })
        req.write(postData);

// const url = 'http://192.168.1.248:3307/leave/defaultAudit'
// const url = 'https://www.cnblogs.com/leiting/p/9530180.html'
// https.get(url,function(res){
//         var datas = [];
//         var size = 0;
//         console.log(res);
//         res.on('data', function(data){
//             datas.push(data);
//             size += data.length;
//             // console.log(data);
//         })
//         res.on('end', function(data){
//             var buff = Buffer.concat(datas, size);
//             // callback({success:true, data:pic});
//             // console.log(datas)
//             // console.log(buff)
//         })
//     }).on('error',function(err){
//         console.log('获取验证码异常,异常原因'+err);
//         // callback({success:false, msg:'获取验证码失败'});
//     })