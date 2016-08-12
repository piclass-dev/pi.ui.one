
// //本地调试目录
// var mkdebugURL="http://django.piclass.cn";
// var serverBaseURL="";
//
// //实际使用前缀
// var baseURL=mkdebugURL;
//
// //路径配置
// export var config={
//
//
//     //获取所有学生信息
//     "getStudents":baseURL+"/myclass/student_list.html",
//     //修改学生信息
//     "changeStudent":baseURL+"/myclass/student_info.html",
//
//     //获取所有点名记录
//     "getCount":baseURL+"/count/history.html",
//
// }

var mkdebugURL = "http://django.piclass.cn/api/test/";
var commenURL="http://django.piclass.cn/"
var serverBaseURL = "/api/";

//实际使用前缀
var baseURL = mkdebugURL;

//路径配置
var config = exports.config = {

    //获取所有学生信息
    "getStudents": baseURL + "student_list.html",
    "changeStudent": "/myclass/student_info.html",

    //获取所有点名记录
    "getCount": baseURL + "count_history.html",
    //继续点名
    "continueCount":commenURL+"count/count_qrcode.html",
    //查看详情
    "getCountDetail":commenURL+"count/count_detail.html",
};
