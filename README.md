# train

> A Vue.js project

这个项目是基于vue+node.js+MongoDB来完成的。目前完成了部分页面及功能，涉及到12306登录的部分功能未完成
完成了server端的环境搭建，以及车站接口/stations，查询接口/query, 票价查询/book, 后续待完善...

## Build Setup 运行项目

``` bash
# install dependencies 安装依赖
npm install

# serve with hot reload at localhost:8080 运行
npm run dev
or
npm start

# build for production with minification  打包
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 运行server端

##### 由于用到了MongoDB数据库，在运行之前请安装启动MongoDB

``` bash
# 到项目目录下运行
node server/bin/www
```
```
# 推荐 nodemon 安装，可以实时监测文件的改动，不用重复启动服务端
npm install nodemon -g

# 上一步安装完成之后运行
nodemon server/bin/www
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

