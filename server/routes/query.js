const express = require('express');
const router = express.Router();
const urllib = require('url');
const request = require('request');

router.get("/query", function(req,res,next){
    const obj = req.body;
    const url = '/otn/leftTicket/query?leftTicketDTO.train_date=2018-08-07&leftTicketDTO.from_station=HZH&leftTicketDTO.to_station=MCN&purpose_codes=ADULT';
    const options={
        hostnme:'kyfw.12306.cn',
        port:443,
        path:url,
        method:'GET',
        rejectUnauthorized:false
    };
    console.log(options)
    // let request=https.request(options,function(response){
    //     response.setEncoding('utf8');

    //     const str='';

    //     response.on('data',function(chunk){
    //         str+=chunk;
    //     });

    //     //完成拼装
    //     request.on('error',funcion(e){
    //         console.log('错误信息：'+e.message);
    //     });
    //     request.end();
    // })

});

module.exports = router;
