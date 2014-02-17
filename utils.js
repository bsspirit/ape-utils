'use strict';

var Job = require('./job');
var Time = require('./time');

var Utils = function () {
    var self = this;
    self.job = new Job();//任务管理 job tools
    self.time = new Time();//时间管理
}

module.exports = Utils;

