var http = require('http');
var express = require('express');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log('连接成功。');
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
	console.log('数据接收成功。');
})

eventEmitter.emit('connection');
console.log('程序执行完毕')


// http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
// 	res.end('程序执行完毕');
// }).listen(8888);