'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.choiceContainerTeacher = exports.choiceContainerStudent = exports.choiceTeacher = exports.choiceStudent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('./config.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var choiceStudent = exports.choiceStudent = function choiceStudent(question, ans, score, zyid, id1, id2) {
    _classCallCheck(this, choiceStudent);

    this.question = question;
    this.ans = ans;
    this.score = score;
    this.zyid = zyid;
    this.id1 = id1;
    this.id2 = id2;
};

var choiceTeacher = exports.choiceTeacher = function choiceTeacher(question, ans, id) {
    _classCallCheck(this, choiceTeacher);

    this.question = question;
    this.ans = ans;
    this.deleteId = id;
};

var choiceContainerStudent = exports.choiceContainerStudent = function () {
    function choiceContainerStudent(element, hover, id) {
        _classCallCheck(this, choiceContainerStudent);

        var self = this;
        this.$element = element;
        this.$hover = hover;
        this.zyId = id;
        this.left;
        this.top;
        this.timer;
        this.choices = new Array();
        $.getJSON(_config.config.getAllChoice + "?zy_id=" + this.zyId, function (data) {
            for (var i = 0; i <= data.info.length - 1; i++) {
                var choice = new choiceStudent(data.info[i].question, data.info[i].student_ans, data.info[i].score, data.info[i].zy_id, data.info[i].id1, data.info[i].id2);
                self.choices.push(choice);
            }
            self.addBlock();
            self.regi();
        });
    }

    _createClass(choiceContainerStudent, [{
        key: 'addBlock',
        value: function addBlock() {
            this.choices.forEach(function (choice) {
                this.$element.append('<div class="choiceBlock"><textarea disabled="disabled">' + choice.question + '</textarea></div>');
            }, this);
        }
    }, {
        key: 'regi',
        value: function regi() {
            var self = this;
            this.$hover.on('mouseleave', this, function (e) {
                e.data.$hover.css("display", "none");
            });

            $('[class="choiceBlock"]').each(function (i, block) {

                $(block).data("pi.choiceBlock", self.choices[i]);
                $(block).attr("id", self.choices[i].deleteId);
                if (self.choices[i].ans != null) {
                    $(block).css("border", "0.02rem solid rgb(135, 218, 131)");
                }

                $(block).on('mouseenter', self, function (e) {
                    clearTimeout(e.data.timer);

                    var x = this.getBoundingClientRect().right + document.documentElement.scrollLeft;
                    var y = this.getBoundingClientRect().bottom + document.documentElement.scrollTop + document.body.scrollTop;
                    //y = y + parseInt($(this).css("height").replace("px", "")) + 10 + document.body.scrollTop;
                    x = x - parseInt(e.data.$hover.css("width").replace("px", ""));
                    if (x < 0) {
                        var x = this.getBoundingClientRect().left + document.documentElement.scrollLeft;
                    }
                    e.data.$hover.css("left", x);
                    e.data.$hover.css("top", y);

                    var c = $(this).data("pi.choiceBlock");

                    e.data.$hover.find('#detailtext').html("题目：" + c.question);
                    // var a = c.present / c.all + '';
                    // var b = a.slice(0, 4);

                    e.data.$hover.find('#currentanswer').html("当前答案：" + c.ans);
                    if (c.ans == null) {
                        e.data.$hover.find('#currentanswer').html("当前答案：未答题");
                    }
                    // e.data.$hover.find('#present').html("出席人数：" + c.present + "/" + c.all);
                    // e.data.$hover.find('#notice').html(c.notice);
                    // if (c.state === "1") {
                    //     e.data.$hover.find('#ch').html("查看详情");
                    //     e.data.$hover.find('#contin').css("display", "none");
                    // } else {
                    //     e.data.$hover.find('#ch').html("查看详情/手工修改");
                    //     e.data.$hover.find('#contin').css("display", "block");
                    //     e.data.$hover.find('#contin').one('click', c, function(e) {
                    //         location.href = config.continueCount + "?count_id=" + e.data.id;
                    //     });
                    // }
                    $("#answer").one('click', c, function (e) {
                        location.href = _config.config.ansChoice + "?zy_id=" + e.data.zyid + "&id1=" + e.data.id1 + "&id2=" + e.data.id2;
                    });
                    // $('#deleteCount').one('click', c, function(e) {
                    //     location.href = config.getCountDetail + "?count_id=" + e.data.id;
                    // });
                    // $("#qwe").val(c.deleteId);
                    e.data.$hover.css("display", "block");
                });
                $(block).on('mouseleave', self, function (e) {
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

    return choiceContainerStudent;
}();

var choiceContainerTeacher = exports.choiceContainerTeacher = function () {
    function choiceContainerTeacher(element, hover, id) {
        _classCallCheck(this, choiceContainerTeacher);

        var self = this;
        this.$element = element;
        this.$hover = hover;
        this.zyId = id;
        this.left;
        this.top;
        this.timer;
        this.choices = new Array();
        $.getJSON(_config.config.getAllChoice + "?zy_id=" + this.zyId, function (data) {
            for (var i = 0; i <= data.info.length - 1; i++) {
                var choice = new choiceTeacher(data.info[i].question, data.info[i].ans, data.info[i].id);
                self.choices.push(choice);
            }
            self.addBlock();
            self.regi();
        });
    }

    _createClass(choiceContainerTeacher, [{
        key: 'addBlock',
        value: function addBlock() {
            this.choices.forEach(function (choice) {
                this.$element.append('<div class="choiceBlock"><textarea disabled="disabled">' + choice.question + '</textarea></div>');
            }, this);
        }
    }, {
        key: 'regi',
        value: function regi() {
            var self = this;
            this.$hover.on('mouseleave', this, function (e) {
                e.data.$hover.css("display", "none");
            });

            $('[class="choiceBlock"]').each(function (i, block) {

                $(block).data("pi.choiceBlock", self.choices[i]);
                $(block).attr("id", self.choices[i].deleteId);

                $(block).on('mouseenter', self, function (e) {
                    clearTimeout(e.data.timer);

                    var x = this.getBoundingClientRect().right + document.documentElement.scrollLeft;
                    var y = this.getBoundingClientRect().bottom + document.documentElement.scrollTop + document.body.scrollTop;
                    //y = y + parseInt($(this).css("height").replace("px", "")) + 10 + document.body.scrollTop;
                    x = x - parseInt(e.data.$hover.css("width").replace("px", ""));
                    if (x < 0) {
                        var x = this.getBoundingClientRect().left + document.documentElement.scrollLeft;
                    }
                    e.data.$hover.css("left", x);
                    e.data.$hover.css("top", y);

                    var c = $(this).data("pi.choiceBlock");

                    e.data.$hover.find('#detailtext').html("题目：" + c.question);
                    // var a = c.present / c.all + '';
                    // var b = a.slice(0, 4);
                    e.data.$hover.find('#rightanswer').html("正确答案：" + c.ans);
                    // e.data.$hover.find('#present').html("出席人数：" + c.present + "/" + c.all);
                    // e.data.$hover.find('#notice').html(c.notice);
                    // if (c.state === "1") {
                    //     e.data.$hover.find('#ch').html("查看详情");
                    //     e.data.$hover.find('#contin').css("display", "none");
                    // } else {
                    //     e.data.$hover.find('#ch').html("查看详情/手工修改");
                    //     e.data.$hover.find('#contin').css("display", "block");
                    //     e.data.$hover.find('#contin').one('click', c, function(e) {
                    //         location.href = config.continueCount + "?count_id=" + e.data.id;
                    //     });
                    // }
                    // e.data.$hover.find('#ch').one('click', c, function(e) {
                    //     location.href = config.getCountDetail + "?count_id=" + e.data.id;
                    // });
                    // $('#deleteCount').one('click', c, function(e) {
                    //     location.href = config.getCountDetail + "?count_id=" + e.data.id;
                    // });
                    $("#qwe").val(c.deleteId);
                    e.data.$hover.css("display", "block");
                });
                $(block).on('mouseleave', self, function (e) {
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

    return choiceContainerTeacher;
}();