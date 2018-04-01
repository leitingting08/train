/*
* @Author: Administrator
* @Date:   2018-03-27 22:20:28
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-01 20:49:50
*/
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Stations = require('../models/stations');

//链接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/train');

mongoose.connection.on("connected", function(){
    console.log("MongoDB connected success.");
});

mongoose.connection.on("error", function(){
    console.log("MongoDB connected fail.");
});

mongoose.connection.on("disconnected", function(){
    console.log("MongoDB connected disconnected.");
});

router.get("/", function(req,res,next){
    //res.send('hello,goods list .')
    //实现分页
    let page = parseInt(req.param("page"));
    let pageSize = parseInt(req.param('pageSize'));
    let sort = req.param("sort");
    let skip = (page-1)*pageSize;
    let params = {};
    let stationsModel = Stations.find(params).skip(skip).limit(pageSize);
    stationsModel.sort({'sta_code':sort});

    Stations.exec({}, function(err,doc){
        if(err){
            res.json({
                status:'1',
                msg:err.message
            });

        }else{
            res.json({
                status:'0',
                msg:'',
                result:{
                    count:doc.length,
                    list:doc
                }
            })
        }
    })
});

module.exports = router;