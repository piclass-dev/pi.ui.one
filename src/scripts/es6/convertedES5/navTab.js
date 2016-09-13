'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

////选项卡切换
//使用：
var navTabBtnGroup = exports.navTabBtnGroup = function () {
    function navTabBtnGroup(element, MatchList, active) {
        _classCallCheck(this, navTabBtnGroup);

        this.vm = this;
        this.$element = element;
        this.$MatchList = MatchList;
        this.$active = active;
        this.regi();
        $(this.$active.attr('data-target')).css('display', 'block');
    }

    _createClass(navTabBtnGroup, [{
        key: 'show',
        value: function show($button) {
            var $target = $($button.attr('data-target'));
            $(this.$active.attr('data-target')).css('display', 'none');
            $(this.$active).removeClass("piBtnGroupActive");
            $target.css('display', 'block');
            this.$active = $button;
            $(this.$active).addClass("piBtnGroupActive");
        }
    }, {
        key: 'regi',
        value: function regi() {
            this.$MatchList.forEach(function (match) {
                match.target.css('display', 'none');
                match.button.on('click', this, function (e) {
                    e.data.show(match.button);
                });
            }, this);
        }
    }]);

    return navTabBtnGroup;
}();