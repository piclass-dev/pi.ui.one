"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var colorMatch = exports.colorMatch = function colorMatch(color, position) {
  _classCallCheck(this, colorMatch);

  this.color = color;
  this.position = position;
};

var rgbColor = exports.rgbColor = function rgbColor(r, g, b) {
  _classCallCheck(this, rgbColor);

  this.r = r;
  this.g = g;
  this.b = b;
};

var graColorTable = exports.graColorTable = function graColorTable(colorList) {
  _classCallCheck(this, graColorTable);

  this.colorArray = new Array();
  for (var i = 1; i <= colorList.length - 1; i++) {
    var section = colorList[i].position - colorList[i - 1].position;
    var stepR = (colorList[i].color.r - colorList[i - 1].color.r) / section;
    var stepG = (colorList[i].color.g - colorList[i - 1].color.g) / section;
    var stepB = (colorList[i].color.b - colorList[i - 1].color.b) / section;
    for (var j = 0; j <= section; j++) {
      this.colorArray.push(new rgbColor(parseInt(colorList[i - 1].color.r + stepR * j), parseInt(colorList[i - 1].color.g + stepG * j), parseInt(colorList[i - 1].color.b + stepB * j)));
    }
  }
};