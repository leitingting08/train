/*
* @Author: Administrator
* @Date:   2018-03-27 22:20:28
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-27 22:34:10
*/
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

//链接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/dumall');

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
    res.send('hello,goods list .')
    Goods.find({}, function(err,doc){
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

modules.exports = router;