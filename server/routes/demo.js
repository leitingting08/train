var http = require('http');
var express = require('express');
var https = require('https');
var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
var ca = fs.readFileSync('../cert/srca.cer.pem');
// http://192.168.1.248:3307/leave/defaultAudit

// var reqData = {currentPage:"1",
// 				departmentName:"",
// 				emId:"127",
// 				entryEndTime:"",
// 				entryStartTime:"",
// 				items:[],
// 				leaveName:"",
// 				leaveType:"",
// 				perRange:[],
// 				roleName:"超级管理员",
// 				state:""}
//         var postData = querystring.stringify(reqData);
//         var opts = {
//             method:'POST',
//             host:'192.168.1.248',
//             port:'3307',
//             path:'/leave/AllApply',
//             headers:{
//                 'Content-Type':'application/x-www-form-urlencoded',
//                 'Content-Length':postData.length
//             }
//         }
// var reqData = {
//     leftTicketDTO:{
//         train_date: '2018-09-17',
//         from_station: 'HZH',
//         to_station: 'MCN'
//     },
//     purpose_codes: 'ADULT'
// }
// var reqData = {station_version:'1.9063'}
// var reqData = {
//     type: 'movie',
//     tag: '热门',
//     sort: 'recommend',
//     page_limit: 20,
//     page_start: 0
// }
var reqData = {
    para: {"TimeStamp":1535957384.118,"MemberId":"","ConstId":"5b8cd96b06IXBeGb98TEUzsmyFUckXC1asLvdPI1","PlatId":432,"From":"杭州东","To":"麻城北","Date":"2018-09-17","OrderBy":0,"IsStudent":false,"TrainNo":""},
    sign: 'ded9b698883875b33498935abad30b89'
}
// https://m.ctrip.com/restapi/soa2/10103/json/GetGrabTicketSucRateInfo?_fxpcqlniredt=09031094412093578760
var postData = querystring.stringify(reqData);
        var options = { 
            // hostname: 'kyfw.12306.cn',//12306
            // hostname: 'movie.douban.com',//豆瓣
            hostname: 'm.ly.com',//携程
            path:'/uniontrain/webapi/trainsearch.html',
            // path:'/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0',
            // path:'/otn/resources/js/framework/station_name.js?station_version=1.9063',
            // path: '/otn/leftTicket/queryA?leftTicketDTO.train_date='
            // +reqData.leftTicketDTO.train_date
            // +'&leftTicketDTO.from_station='
            // +reqData.leftTicketDTO.from_station+'&leftTicketDTO.to_station='
            // +reqData.leftTicketDTO.to_station+'&purpose_codes=ADULT',
            port: 443,
            method:'POST',
            rejectUnauthorized:false,
            // key :ca, //证书
            // cert :ca, //证书
            agent: false,
            headers:{
                    "Content-Type": 'application/json',
                    "Content-Length": postData.length
            } 
         };
// const url = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0'
const url = 'https://m.ly.com/universal/touch/#/list?startdatetime=2018-09-17&startname=%E6%9D%AD%E5%B7%9E%E4%B8%9C&startcity=%E6%9D%AD%E5%B7%9E&arrivename=%E9%BA%BB%E5%9F%8E%E5%8C%97&arrivecity=%E9%BA%BB%E5%9F%8E&type=2055-9-0-1022-9-0&onlygd=0&student=0&origin=index'
// const url = 'https://kyfw.12306.cn/otn/leftTicket/queryA?leftTicketDTO.train_date=2018-09-17&leftTicketDTO.from_station=HZH&leftTicketDTO.to_station=MCN&purpose_codes=ADULT'
        //  const url = 'http://127.0.0.1:3000/stations'
        // var req = http.get(url,function(res){
        const req = https.request(url,function(res){
        // var req = https.request(opts,function(res){
            // console.log(res);
            var json = '';
            res.on('data',function(data){
                process.stdout.write(data);
                console.log(process.stdout.write(data));
                json += data
            })
            res.on('end', function(chunk){
                console.log('获取的json是'+ json);
            })
        })
   
        req.on('error',function(err){
            console.log('异常,异常原因'+err);
        })
        // req.write(postData);options
        req.end();