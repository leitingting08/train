/*
* @Author: Administrator
* @Date:   2017-11-05 15:29:26
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-06 20:46:01
*/
var webpack             = require('webpack');
var ExtractTextPlugin   = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin   = require('html-webpack-plugin');

//环境变量的配置，dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV);

//获取html-webpack-plugin参数的方法
var getHtmlConfig = function (name) {
    return{
        template: './src/view/' + name + '.html',
        filename: 'view/' + name + '.html',
        inject  :true,
        hash    :true,
        chunks  :['common',name]
    };
};
//webpack config
var config = {
     entry: {
        'common':['./src/page/common/index.js','webpack-dev-server/client?http://localhost:8088/'],
        'index':['./src/page/index/index.js'],
        'login':['./src/page/login/index.js']
     },
     output: {
         path: './dist',
         publicPath:'/dist',
         filename: 'js/[name].js'
     },
     externals:{
        'jquery':'window.jQuery'
     },
    module: {
        loaders: [
        { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader")},
        { test: /\.(gif|png|jpg)\??.*$/, loader: 'url-loader'}
        ]
    },
     plugins:[
     //独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        //把css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
        //html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login')),
     ]
 };

if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}
 module.exports=config;
