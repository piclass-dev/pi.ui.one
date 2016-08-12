"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = patchAll;
function patchAll() {
    $("#switcher").on('click', function () {
        $("#newCount").css("display", "none");
        $("#countInfo").css("display", "block");
    });
    $("#abortCount").on('click', function () {
        $("#newCount").css("display", "block");
        $("#countInfo").css("display", "none");
    });
    $("#renewCount").on('click', function () {
        $("#countPlace").val("");
        $("#countTime").val("");
        $("#countText").val("");
    });

    $("#checkTimeNow").on('change', function () {
        var myDate = new Date();
        alert($("#checkTimeNow").val());
        //alert(myDate.getFullYear()+"-"+myDate.getMonth()+"-"+myDate.getDate())
        // if()
    });

    //编程页清空信息
    $("#clearError").on('click', function () {
        $("#error").val("");
    });
    $("#clearOutput").on('click', function () {
        $("#output").val("");
    });

    //文件块进度条
    $('[data-toggle="prog"]').each(function () {
        var $this = $(this);
        $this.css("width", $this.attr("data-progL") + "%");
    });
}