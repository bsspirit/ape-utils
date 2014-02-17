'use strict';

/////////////////////////////////////////////////
// 计算工具
/////////////////////////////////////////////////

var _this = this;

/**
 * 产生随机数
 *
 * @example:
 * getRandomInt(1,5);
 */
exports.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 产生随机数序列
 *
 * @example:
 * getRandomInt(16);
 */
exports.getRandomChar = function (len) {
    var buf = []
        , chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        , charlen = chars.length;
    for (var i = 0; i < len; ++i) {
        buf.push(chars[_this.getRandomInt(0, charlen - 1)]);
    }
    return buf.join('');
}
