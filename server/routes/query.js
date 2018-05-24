/*
* @Author: Administrator
* @Date:   2018-04-18 19:10:27
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-18 20:16:54
*/
var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var Query = require('../models/query');



router.get("/", function(req,res,next){
    Query.find({}, function(err,doc){
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