"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

//本地调试目录
var mkdebugURL = "http://django.piclass.cn";
var serverBaseURL = "";

//实际使用前缀
var baseURL = mkdebugURL;

//路径配置
var config = exports.config = {

    //获取所有学生信息
    "getStudents": baseURL + "/myclass/student_list.html",
    "changeStudent": baseURL + "/myclass/student_info.html",

    //获取所有点名记录
    "getCount": baseURL + "/count/history.html"

};