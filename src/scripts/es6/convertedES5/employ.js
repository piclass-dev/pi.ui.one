"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var employ = function () {
  function employ(id, name, dob) {
    _classCallCheck(this, employ);

    this.id = id;
    this.name = name;
    this.dob = dob;
  }

  _createClass(employ, [{
    key: "getAge",
    value: function getAge() {
      return new Date().getYear() - this.dob.getYear();
    }
  }]);

  return employ;
}();

// export function getEmployee(id, name, dob){
//   return new Employee(id, name, dob);
// }

// export function add(a,b){
//   return a+b;
// }

//var emp = new Employee(1, "Rina", new Date(1987, 1, 22));


exports.default = employ;