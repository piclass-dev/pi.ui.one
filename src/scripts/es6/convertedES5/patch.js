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
}