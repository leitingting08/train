let username = require('./username');

console.log(`userName:${username.name}`);

console.log(`say:${username.say()}`)

let http = require('http');
let url = require('url');
let util = require('util');


let server = http.createServer((req,res)=>{
    res.statusCode = 200;

    res.setHeader("Content-Type","text/plain; charset=utf-8");

    console.log(req.url);//字符串
    console.log(url.parse(req.url));
    console.log(util.inspect(url.parse(req.url)));//object

    res.end(util.inspect(url.parse(req.url)));//url对象解析后展开
});

server.listen(3000,'127.0.0.1', ()=>{
    console.log("服务器已经运行，请打开浏览器，输入：http://127.0.0.0:3000/ 来访问")
})
