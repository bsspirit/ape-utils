'use strict';

//////////////////////////////////////////
// utils
//////////////////////////////////////////
var Utils = require('./utils.js');
var utils = new Utils();

function utils_job_forever() {
    var tasks = [
        {delay: 1000, fun: function () {
            console.log("Task1:" + new Date());
        }},
        {delay: 2000, fun: function () {
            console.log("Task2:" + new Date());
        }}
    ];
    utils.job.forever(tasks);
}
//utils_job_forever();

function utils_time_isTradeTimeNow(){
    console.log(utils.time.isTradeTime('101010'));
    console.log(utils.time.isTradeTimeNow());
    console.log(utils.time.datetime());
    console.log(utils.time.datetime('YYYY-MM-DD HH:mm:ss'));
}

//utils_time_isTradeTimeNow();

//////////////////////////////////////////
// job
//////////////////////////////////////////
var Job = require('./job.js');
var job = new Job();

function job_forever() {
    var tasks = [
        {delay: 1000, fun: function () {
            console.log("Task1:" + new Date());
        }},
        {delay: 2000, fun: function () {
            console.log("Task2:" + new Date());
        }}
    ];
    job.forever(tasks);
}
//job_forever();

function job_condition() {
    var tasks = [
        {
            delay: 1000,
            test: function () {
                return true;
            },
            fun: function () {
                console.log("Task3:" + new Date());
            }
        },
        {
            delay: 2000,
            test: function () {
                return false;
            },
            fun: function () {
                console.log("Task4:" + new Date());
            }
        }
    ];
    job.condition(tasks);
}
//job_condition();

//////////////////////////////////////////
// num
//////////////////////////////////////////
var Num = require('./num.js');
var num = new Num();

function num_test(){
    console.log(num.getRandomInt(1,5));
    console.log(num.getRandomChar(16));
}

//num_test();


