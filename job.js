'use strict';
/////////////////////////////////////////////////
// 任务管理
/////////////////////////////////////////////////

var async = require('async');

/**
 * 无条件任务
 *
 * @example:
 * var tasks = [
 * {delay: 1000, fun: function () {console.log(new Date());}}
 * ];
 * forever(tasks);
 */
exports.forever = function (tasks) {
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
exports.condition = function (tasks) {
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

