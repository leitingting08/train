/*
* @Author: Administrator
* @Date:   2018-04-18 19:10:27
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-18 20:16:54
*/
// var express = require('express');
// var router = express.Router();
// // var mongoose = require('mongoose');
// var Query = require('../models/query');



// router.get("/", function(req,res,next){
//     var _callbcak = req.query.callbcak;
//     var _data = {};
//     if (_callbcak){
//         res.type('text/javascript');
//         res.send(_callbcak + '('+JSON.stringify(_data)+ ')');
//     }
//     else{
//         res.json(_data)
//     }
//     // Query.find({}, function(err,doc){
//     //     if(err){
//     //         res.json({
//     //             status:'1',
//     //             msg:err.message
//     //         });

//     //     }else{
//     //         res.json({
//     //             status:'0',
//     //             msg:'',
//     //             result:{
//     //                 count:doc.length,
//     //                 list:doc
//     //             }
//     //         })
//     //     }
//     // })
// });

// module.exports = router;

var request=require('request');
var mongoose=require('mongoose');
var moment=require('moment');



exports.railway=function(req,res){
    var obj=req.body;
    var url='/otn/leftTicket/query?leftTicketDTO.train_date=20160831&leftTicketDTO.from_station=上海&leftTicketDTO.to_station=北京&purpose_codes=ADULT';
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
