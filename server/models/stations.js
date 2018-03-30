/*
* @Author: Administrator
* @Date:   2018-03-27 22:11:12
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-27 22:19:58
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stationSchema = new Schema({
    "sta_name":String,
    "sta_ename":String,
    "sta_code":String
});

module.exports = mongoose.model('Station',stationSchema);