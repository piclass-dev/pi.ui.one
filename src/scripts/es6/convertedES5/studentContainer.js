"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var studentBlock = exports.studentBlock = function studentBlock(id, name, countScore, ccScore, homeworkScore, notice, element) {
    _classCallCheck(this, studentBlock);

    this.$element = element;
    this.id = id;
    this.name = name;
    this.countScore = countScore;
    this.ccScore = ccScore;
    this.homeworkScore = homeworkScore;
    this.notice = notice;
}

// show(){
//     this.$element.css("display","block");
// }
;

var studentFinder = exports.studentFinder = function () {
    function studentFinder(Container, finder) {
        _classCallCheck(this, studentFinder);

        this.container = Container;
        this.$finder = finder;
        this.regi();
    }

    _createClass(studentFinder, [{
        key: "check",
        value: function check(str) {
            for (var i = 0; i < this.container.students.length; i++) {
                this.container.students[i].$element.css("color", "#000000");
                if (this.container.students[i].name.indexOf(str) != -1 && str != '') {
                    this.container.students[i].$element.css("color", "#ff6036");
                }
            }
        }
    }, {
        key: "regi",
        value: function regi() {
            this.$finder.on("input", this, function (e) {
                e.data.check(e.data.$finder.val());
            });
        }
    }]);

    return studentFinder;
}();

var studentContainer = exports.studentContainer = function () {
    function studentContainer(element, hover) {
        _classCallCheck(this, studentContainer);

        var self = this;
        this.$element = element;
        this.$hover = hover;
        this.left;
        this.top;
        this.timer;
        this.students = new Array();
        $.getJSON("http://django.piclass.cn/myclass/student_list.html", function (data) {
            for (var i = 0; i <= data.student_list.length - 1; i++) {
                var s = new studentBlock(data.student_list[i].username, data.student_list[i].name, data.student_list[i].score, data.student_list[i].score2, data.student_list[i].score3, data.student_list[i].notice, null);
                self.students.push(s);
            }
            self.addBlock();
            self.regi();
        });
    }

    _createClass(studentContainer, [{
        key: "addBlock",
        value: function addBlock() {
            this.students.forEach(function (student) {
                this.$element.append('<div  class="studentBlock">' + student.name + '</div>');
            }, this);
        }
    }, {
        key: "show",
        value: function show(i) {
            this.student[i].show();
        }
    }, {
        key: "regi",
        value: function regi() {
            var self = this;
            this.$hover.on('mouseleave', this, function (e) {
                e.data.$hover.css("display", "none");
            });
            $('[class="studentBlock"]').each(function (i, block) {
                self.students[i].$element = $(block);
                $(block).data("pi.studentBlock", self.students[i]);

                $(block).on('mouseenter', self, function (e) {
                    clearTimeout(e.data.timer);

                    var x = this.getBoundingClientRect().left + document.documentElement.scrollLeft;
                    var y = this.getBoundingClientRect().top + document.documentElement.scrollTop;
                    y = y + parseInt($(this).css("height").replace("px", "")) + 10 + document.body.scrollTop;

                    e.data.$hover.css("left", x);
                    e.data.$hover.css("top", y);

                    var c = $(this).data("pi.studentBlock");

                    // e.data.$hover.find('#time').html("点名日期："+c.time);
                    // e.data.$hover.find('#presentRatio').html("出席率："+c.present/c.all);
                    // e.data.$hover.find('#present').html("出席人数："+c.present+"/"+c.all);
                    // e.data.$hover.find('#notice').html(c.notice);
                    e.data.$hover.css("display", "block");
                });
                $(block).on('mouseleave', self, function (e) {
                    //	e.data.$hover.css("display","none");
                    e.data.timer = setTimeout(function () {
                        e.data.$hover.css("display", "none");
                    }, 100);
                    e.data.$hover.one('mouseenter', e.data, function (e) {
                        clearTimeout(e.data.timer);
                    });
                });
            });
        }
    }]);

    return studentContainer;
}();