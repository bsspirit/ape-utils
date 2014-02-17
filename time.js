'use strict';

var moment = require('moment')
    , twix = require('twix');

/////////////////////////////////////////////////
// 时间管理
/////////////////////////////////////////////////

var ymd = 'YYYYMMDD';
var hms = 'HHmmss';

//中国证券交易时间
var am = moment("093000", hms).twix(moment("113000", hms));
var pm = moment("130000", hms).twix(moment("150000", hms));

var time = function () {
    var self = this;

    /**
     * 返回当前日期和时间
     * @return String YYYYMMDDHHmmss
     */
    self.datetime = function (format) {
        return moment().format(format || (ymd + hms));
    }

    /**
     * 返回当前时间，
     * @return String HHmmss
     */
    self.time = function (format) {
        return moment().format(format || hms);
    }

    /**
     * 返回当前日期，
     * @return String YYYYMMDD
     */
    self.today = function (format) {
        return moment().format(format || ymd);
    }

    /**
     * 判断交易时间
     * @param time: string, length is 6, not null
     * @return: true: [9：15，11：30] and [13：00， 15：15]
     */
    self.isTradeTime = function (time, format) {
        var momTime = moment(time, format || hms);
        return am.contains(momTime) || pm.contains(momTime)
    }

    /**
     * 判断现在是不是交易时间
     */
    self.isTradeTimeNow = function () {
        return self.isTradeTime(self.time());
    }
}

module.exports = time;
