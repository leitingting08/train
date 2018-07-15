const express = require('express');
const router = express.Router();
// const urllib = require('url');
// const request = require('request');
// const https = require('https');
const url = 'https://kyfw.12306.cnn/otn/leftTicket/query?leftTicketDTO.train_date=2018-08-07&leftTicketDTO.from_station=HZH&leftTicketDTO.to_station=MCN&purpose_codes=ADULT';
// https.get(url,function(res){
//  var data = '';
//  res.on('data',function(chunk){
//   data += chunk;
//  });
//  res.on('end',function(){
//   console.log(data);
//  })
// });
router.get("/query", function(req,res,next){
    // const obj = req.body;
    // const url = '/otn/leftTicket/query?leftTicketDTO.train_date=2018-08-07&leftTicketDTO.from_station=HZH&leftTicketDTO.to_station=MCN&purpose_codes=ADULT';
    // const options={
    //     hostnme:'kyfw.12306.cn',
    //     port:443,
    //     path:url,
    //     method:'GET',
    //     rejectUnauthorized:false
    // };
    // console.log(options)
    let request = https.request(url,function(response){
        response.setEncoding('utf8');

        // const str='';

        // response.on('data',function(chunk){
        //     str+=chunk;
        // });

        // //完成拼装
        // request.on('error',funcion(e){
        //     console.log('错误信息：'+e.message);
        // });
        // request.end();
         var data = '';
         response.on('data',function(chunk){
          data += chunk;
         });
         response.on('end',function(){
          console.log(data);
         })
    })

});

module.exports = router;
