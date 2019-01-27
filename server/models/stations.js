/*
* @Author: Administrator
* @Date:   2018-03-27 22:11:12
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-27 22:19:58
*/
var superagent = require('superagent')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stationSchema = new Schema({ //新建数据表
    "sta_name":String, // 车站名称
    "sta_ename":String, // 车站的英文名
    "sta_code":String // 车站对应的三字码
});
var monModel = mongoose.model('Station',stationSchema);
const url = 'https://kyfw.12306.cn/otn/resources/js/framework/station_name.js?station_version=1.9069'

let stalists = []
superagent.get(url)
  .end(function(response,result){
  	if (result.statusCode==200) {
  		  let r = result.text.split('=')[1]
		  let arr = r.split('@')
		  arr.forEach((i,index)=>{
		    let list = {}
		    list.sta_name = i.split('|')[1];
		    list.sta_ename = i.split('|')[3];
		    list.sta_code = i.split('|')[2];
		    stalists.push(list);
		  })

		  monModel.find({},function(err,docs){
		  	if(!docs.length){ // 如果数据库里有数据就不插入，否则就插入数据
		  	  // 把车站信息写入数据库
		      monModel.insertMany(stalists, function(err, docs){
			        if(err) console.log(err);
			        console.log('车站信息写入成功!');
			  });
		  	}
		  })
  	}
})


module.exports = monModel;