'use strict';

var async = require('async');

/////////////////////////////////////////////////
// 任务管理
/////////////////////////////////////////////////

var job = function () {
    var self = this;

    /**
     * 无条件任务
     *
     * @example:
     * var tasks = [
     * {delay: 1000, fun: function () {console.log(new Date());}}
     * ];
     * forever(tasks);
     */
    self.forever = function (tasks) {
        async.each(tasks, function (item) {
            async.forever(function (cb) {
                item.fun();
                setTimeout(cb, item.delay);
            });
        }, function (err) {
            if (err) console.log("Error: " + err);
        });
    }

    /**
     * 有条件任务
     *
     * @example:
     * var tasks = [
     * {
     * delay: 1000,
     * test: function () {return true;},
     * fun: function () {console.log("Task1:" + new Date());}
     * }
     * condition(tasks);
     */
    self.condition = function (tasks) {
        async.each(tasks, function (item, callback) {
            async.whilst(item.test, function (cb) {
                    item.fun();
                    setTimeout(cb, item.delay);
                }, function (err) {
                    if (err) console.log("Error: " + err);
                }
            );
        }, function (err) {
            if (err) console.log("Error: " + err);
        });
    }
}

module.exports = job;
