"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

////导航栏头像悬浮菜单

var menu = exports.menu = function () {
    function menu(element, target) {
        _classCallCheck(this, menu);

        this.$element = element;
        this.$target = target;
        this.timer;
        this.init();
        this.regi();
    }

    //find position


    _createClass(menu, [{
        key: "init",
        value: function init() {
            var x = this.$element.get(0).getBoundingClientRect().right + document.documentElement.scrollLeft;
            var y = this.$element.get(0).getBoundingClientRect().bottom + document.documentElement.scrollTop;

            y = y + 10;
            x = x - parseInt(this.$target.css("width").replace("px", ""));
            this.$target.css("left", x);
            this.$target.css("top", y);
        }

        //register event

    }, {
        key: "regi",
        value: function regi() {
            this.$target.css("display", "none");
            this.$element.on('mouseenter', this, function (e) {
                e.data.init();
                e.data.$target.css("display", "block");
            });
            this.$element.on('mouseleave', this, function (e) {
                e.data.timer = setTimeout(function () {
                    e.data.$target.css("display", "none");
                }, 100);
                e.data.$target.one('mouseenter', e.data, function (e) {
                    clearTimeout(e.data.timer);
                });
            });
            this.$target.on('mouseleave', this, function (e) {
                e.data.$target.css("display", "none");
            });
        }
    }]);

    return menu;
}();