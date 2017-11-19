/*
* @Author: Administrator
* @Date:   2017-11-05 12:19:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-17 22:11:00
*/
require('./index.css');
require('page/common/nav-simple/index.js');
var _user = require('service/user-service.js');
var _mm = require('util/mm.js');

//表单里的错误提示
var formError = {
    show : function (errMsg){
        $('.error-item').show().find('.err-msg').text(errMsg);
    },
    hide : function(){
        $('.error-item').hide().find('.err-msg').text('');
    }
};

var page = {
    init:function(){
        this.bindEvent();
    },
    bindEvent : function(){
        var _this=this;
        //登录按钮的点击
        $('#submit').click(function(){
            _this.submit();
        });
        //如果按下回车，也进行提交
        $('.user-content').keyup(function(e){
            // keyCode === 13表示回车键
            if(e.keyCode === 13){
                _this.submit();
            }
        })
    },
    submit:function(){
        var formData = {
            username : $.trim($('#username').val()),
            password : $.trim($('#password').val())
        },
        validateResult = this.formValidate(formData);
        //验证成功
        if (validateResult.status) {
            //  提交
            _user.login(formData, function(res){
                window.location.href = _mm.getUrlParam('redirect' || './index.html');
            },function(errMsg){
                formError.show(errMsg);
            });
        }
        //  验证失败
        else {
            //错误提示
            formError.show(validateResult.msg);
        }
    },
    //表单字段的验证
    formValidate:function(formData){
        var result = {
            status : false,
            msg    : ''
        };
        if(!_mm.validate(formData.username,'require')){
            result.msg = '用户名不能为空';
            return result;
        }
        if(!_mm.validate(formData.password,'require')){
            result.msg = '密码不能为空';
            return result;
        }
        //通过验证，返回正确提示
        result.status = true;
        result.msg = '验证通过';
        return result;
    }
};
$(function(){
    page.init();
})