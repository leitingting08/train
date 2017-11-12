/*
* @Author: Administrator
* @Date:   2017-11-12 23:17:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-12 23:41:49
*/

require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function () {
    var type = _mm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
        //显示对应的提示元素
        $element.show();
})
