'use strict';

var Job = require('./job')
    ,Time = require('./time')
    ,Num = require('./num');

var Utils = function () {
    var self = this;
    self.job = new Job();//任务管理 job tools
    self.time = new Time();//时间管理
    self.num = new Num();//计算工具
}

module.exports = Utils;

