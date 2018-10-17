# train

> A Vue.js project

这个项目是用vue框架和vux UI和less搭建仿飞猪webapp火车票部分,由于前期利用vux写的布局略显臃肿,vuxUI可以利用全局加载一些alert,confirm,toast,loading等小插件使用,由于界面是沿用微信weui,故这些插件的界面效果还是不错的,布局不推荐使用vux组件,最好自己写flex布局随自己调整
目前静态页面以及首页的一些交互，城市日期选择，历史纪录等已经完成，后端用node.js+MongoDB，完成了server端的环境搭建，以及车站接口/stations，查询接口/query, 票价查询/book, 后续接口还在学习和搭建的过程中

## Build Setup 运行项目

``` bash
# install dependencies 安装依赖
npm install

# serve with hot reload at localhost:8080 运行
npm run dev

# build for production with minification  打包
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 运行server端

``` bash
# 运行
node server/bin/www
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

若遇运行失败,注意替换涉及的ip为自己的电脑ip
