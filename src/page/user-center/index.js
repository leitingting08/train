/*
* @Author: Administrator
* @Date:   2017-11-18 21:41:29
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-18 22:36:37
*/
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');
var _user = require('service/user-service.js');
var templateIndex = require('./index.string');

var page = {
    init:function(){
        this.onLoad();
    },
    onLoad : function(){
        //初始化左侧菜单
        navSide.init({
            name:'user-center'
        });
        //加载用户信息
        this.loadUserInfo();
    },
    loadUserInfo:function(){
        var userHtml = '';
        _user.getUserInfo(function(res){
            userHtml = _mm.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        },function(errMsg){
            _mm.errorTips(errMsg);
        });
    }
};
$(function(){
    page.init();
})