/*
* @Author: Administrator
* @Date:   2017-11-12 19:31:28
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-26 22:03:09
*/
var _mm = require('util/mm.js');


var _cart = {
    //获取购物车数量
    getCartCount : function (resolve, reject) {
        _mm.request({
            url:_mm.getServerUrl('/cart/get_cart_product_count.do'),
            success:resolve,
            error:reject
        });
    },
    addToCart : function (productInfo, resolve, reject) {
        _mm.request({
            url:_mm.getServerUrl('/cart/add.do'),
            data : productInfo,
            success:resolve,
            error:reject
        });
    }
}
module.exports = _cart;