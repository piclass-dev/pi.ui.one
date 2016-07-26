"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.go = go;

var _kittydar = require("kittydar.js");

function go() {
    var canvas = document.getElementById("catpix");
    var cats = (0, _kittydar.detectCats)(canvas);
    drawRectangles(canvas, cats);
}