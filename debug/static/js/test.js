"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
  function Animal() {
    _classCallCheck(this, Animal);

    console.log("==constructor animal==");
  }

  _createClass(Animal, [{
    key: "sayHello",
    value: function sayHello() {
      console.log("==sayHello animal==");
    }
  }]);

  return Animal;
}();

var a = 1;

exports.default = Animal; //这个必须，否则require到的模块将会是空Object
//，webpack里导出模块其实是(module.exports = Animal)