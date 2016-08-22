(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.avatar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = require("./user");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var avatar = exports.avatar = function () {
	function avatar(User, element, graColorTable, type) {
		_classCallCheck(this, avatar);

		this.$element = element;
		this.User = User;
		this.type = type;
		this.colors = new Array(24);
		this.colorsSig = new Array(24);
		this.colorsSig10 = new Array(24);
		this.canvas = this.$element.get(0);
		this.canvas.height = this.$element.css("height").replace("px", '');
		this.canvas.width = this.$element.css("width").replace("px", '');
		this.ctx = this.canvas.getContext("2d");
		this.step = this.canvas.height / 5;
		this.graColorTable = graColorTable;
		if (this.type == "user") {
			this.drawUser();
		} else if (this.type == "course") {
			this.drawCourse();
		}

		//alert(this.User.signature);
	}

	_createClass(avatar, [{
		key: "perpareColor",
		value: function perpareColor() {
			for (var i = 0; i <= 24; i++) {
				this.colorsSig[i] = this.User.signature.slice(i, i + 2);
				var index = parseInt(this.colorsSig[i], 16);
				this.colorsSig10[i] = index;
			}

			var min = 255;
			var max = 0;

			for (var i = 0; i <= 24; i++) {
				if (this.colorsSig10[i] > max) {
					max = this.colorsSig10[i];
				};
				if (this.colorsSig10[i] < min) {
					min = this.colorsSig10[i];
				}
			}
			var d = max - min;
			for (var i = 0; i <= 24; i++) {
				this.colorsSig10[i] = parseInt(254 * (this.colorsSig10[i] - min) / d);
				var r, g, b;
				r = this.graColorTable.colorArray[this.colorsSig10[i]].r;
				g = this.graColorTable.colorArray[this.colorsSig10[i]].g;
				b = this.graColorTable.colorArray[this.colorsSig10[i]].b;
				this.colors[i] = "rgb(" + r + "," + g + "," + b + ")";
			}
		}

		//draw avatar on canvas

	}, {
		key: "drawUser",
		value: function drawUser() {
			this.perpareColor();
			for (var i = 0; i <= 4; i++) {
				for (var j = 0; j <= 4; j++) {
					this.ctx.fillStyle = this.colors[5 * i + j];
					this.ctx.fillRect(i * this.step, j * this.step, this.step, this.step);
				}
			}
		}
	}, {
		key: "drawAngular",
		value: function drawAngular(x1, y1, x2, y2, x3, y3, color) {
			var c = this.ctx;
			c.fillStyle = color;
			c.strokeStyle = color;
			c.beginPath();
			c.moveTo(x1 * this.step, y1 * this.step);
			c.lineTo(x2 * this.step, y2 * this.step);
			c.lineTo(x3 * this.step, y3 * this.step);
			c.fill();
			c.stroke();
		}
	}, {
		key: "drawCourse",
		value: function drawCourse() {
			this.perpareColor();
			this.step = this.canvas.height / 10;

			this.drawAngular(0, 0, 5, 0, 3, 3, this.colors[0]);
			this.drawAngular(0, 0, 2, 2, 0, 5, this.colors[1]);
			this.drawAngular(0, 5, 2, 2, 5, 5, this.colors[2]);
			this.drawAngular(5, 5, 5, 0, 3, 3, this.colors[3]);

			this.drawAngular(5, 0, 10, 0, 8, 2, this.colors[4]);
			this.drawAngular(5, 0, 5, 5, 8, 2, this.colors[5]);
			this.drawAngular(5, 5, 7, 3, 10, 5, this.colors[6]);
			this.drawAngular(10, 0, 10, 5, 7, 3, this.colors[7]);

			this.drawAngular(0, 5, 5, 5, 3, 7, this.colors[8]);
			this.drawAngular(0, 5, 0, 10, 3, 7, this.colors[9]);
			this.drawAngular(0, 10, 2, 8, 5, 10, this.colors[10]);
			this.drawAngular(5, 5, 5, 10, 2, 8, this.colors[11]);

			this.drawAngular(5, 5, 10, 5, 8, 8, this.colors[12]);
			this.drawAngular(5, 5, 7, 7, 5, 10, this.colors[13]);
			this.drawAngular(5, 10, 7, 7, 10, 10, this.colors[14]);
			this.drawAngular(10, 10, 10, 5, 8, 8, this.colors[15]);
		}
	}]);

	return avatar;
}();
},{"./user":13}],2:[function(require,module,exports){
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
},{"./config.js":3}],3:[function(require,module,exports){
"use strict";

// //本地调试目录
// var mkdebugURL="http://django.piclass.cn";
// var serverBaseURL="";
//
// //实际使用前缀
// var baseURL=mkdebugURL;
//
// //路径配置
// export var config={
//
//
//     //获取所有学生信息
//     "getStudents":baseURL+"/myclass/student_list.html",
//     //修改学生信息
//     "changeStudent":baseURL+"/myclass/student_info.html",
//
//     //获取所有点名记录
//     "getCount":baseURL+"/count/history.html",
//
// }

var mkdebugURL = "http://django.piclass.cn/api/test/";
var commenURL = "http://django.piclass.cn/";
var serverBaseURL = "/api/";

//实际使用前缀
var baseURL = mkdebugURL;

//路径配置
var config = exports.config = {

    //获取所有学生信息
    "getStudents": baseURL + "student_list.html",
    "changeStudent": "/myclass/student_info.html",

    //获取所有点名记录
    "getCount": baseURL + "count_history.html",
    //继续点名
    "continueCount": commenURL + "count/count_qrcode.html",
    //查看点名详情
    "getCountDetail": commenURL + "count/count_detail.html",

    //获取选择题题目详情
    "getChoiceDetail": mkdebugURL + "tk.html",
    //一次作业中的全部选择题
    "getAllChoice": mkdebugURL + "zy_choice.html",
    //做选择题
    "ansChoice": commenURL + "choice/student_answer.html",
    //编程题详情
    "getProgramDetail": mkdebugURL + "tk.html"
};
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.countContainer = exports.count = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('./config.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var count = exports.count = function count(time, all, present, notice, id, state) {
	_classCallCheck(this, count);

	this.time = time;
	this.all = all;
	this.present = present;
	this.notice = notice;
	this.id = id;
	this.state = state;
};

var countContainer = exports.countContainer = function () {
	function countContainer(element, hover) {
		_classCallCheck(this, countContainer);

		var self = this;
		this.$element = element;
		this.$hover = hover;
		this.left;
		this.top;
		this.timer;
		this.counts = new Array();
		$.getJSON(_config.config.getCount, function (data) {
			for (var i = 0; i <= data.info.length - 1; i++) {
				var countt = new count(data.info[i].time, data.info[i].all, data.info[i].present, data.info[i].notice, data.info[i].count_id, data.info[i].state);
				self.counts.push(countt);
			}
			self.addBlock();
			self.regi();
		});
	}

	_createClass(countContainer, [{
		key: 'addBlock',
		value: function addBlock() {
			this.counts.forEach(function (count) {
				this.$element.append('<button class="countBlock">' + count.id + '</button>');
			}, this);
		}
	}, {
		key: 'regi',
		value: function regi() {
			var self = this;
			this.$hover.on('mouseleave', this, function (e) {
				e.data.$hover.css("display", "none");
			});
			$('[class="countBlock"]').each(function (i, block) {

				$(block).data("pi.countBlock", self.counts[i]);

				$(block).on('mouseenter', self, function (e) {
					clearTimeout(e.data.timer);

					var x = this.getBoundingClientRect().left + document.documentElement.scrollLeft;
					var y = this.getBoundingClientRect().top + document.documentElement.scrollTop;
					y = y + parseInt($(this).css("height").replace("px", "")) + 10 + document.body.scrollTop;

					e.data.$hover.css("left", x);
					e.data.$hover.css("top", y);

					var c = $(this).data("pi.countBlock");

					e.data.$hover.find('#time').html("点名日期：" + c.time);
					var a = c.present / c.all + '';
					var b = a.slice(0, 4);
					e.data.$hover.find('#presentRatio').html("出席率：" + b);
					e.data.$hover.find('#present').html("出席人数：" + c.present + "/" + c.all);
					e.data.$hover.find('#notice').html(c.notice);
					if (c.state === "1") {
						e.data.$hover.find('#ch').html("查看详情");
						e.data.$hover.find('#contin').css("display", "none");
					} else {
						e.data.$hover.find('#ch').html("查看详情/手工修改");
						e.data.$hover.find('#contin').css("display", "block");
						e.data.$hover.find('#contin').one('click', c, function (e) {
							location.href = _config.config.continueCount + "?count_id=" + e.data.id;
						});
					}
					e.data.$hover.find('#ch').one('click', c, function (e) {
						location.href = _config.config.getCountDetail + "?count_id=" + e.data.id;
					});
					// $('#deleteCount').one('click',c,function(e){
					// 	location.href=config.getCountDetail+"?count_id="+e.data.id;
					// });
					$("#qwe").val(c.id);
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

	return countContainer;
}();
},{"./config.js":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var errorCanvas = exports.errorCanvas = function () {
    function errorCanvas(canvas) {
        _classCallCheck(this, errorCanvas);

        this.$canvas = canvas;
        this.canvas = this.$canvas.get(0);
        this.ctx = this.canvas.getContext("2d");
        this.resize();
        window.onresize = this.resize; //to fix
        this.RAF = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        }();
        this.warea = { x: null, y: null, max: 20000 };
        $(window).on("mousemove", this, function (e) {
            e.data.mm(e);
        });
        $(window).on("onmouseout", this, this.mo);
        // window.onmousemove = this.mm();
        // window.onmouseout =  this.mo();

        this.dots = [];

        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var v = 0.5;
        for (var i = 0; i < 20; i++) {
            var x = Math.random() * canvas.width;
            var y = Math.random() * canvas.height;
            var xa = Math.random() * 2 * v - v * 0.5;
            var ya = Math.random() * 2 * v - v * 0.5;

            this.dots.push({
                x: x,
                y: y,
                xa: xa,
                ya: ya,
                max: 6000
            });
        }

        this.animate();
    }

    _createClass(errorCanvas, [{
        key: "resize",
        value: function resize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.$canvas.css("height", window.innerWidth);
            this.$canvas.css("width", window.innerHeight);
        }
    }, {
        key: "mm",
        value: function mm(e) {
            e = e || window.event;

            this.warea.x = e.clientX;
            this.warea.y = e.clientY;
        }
    }, {
        key: "mo",
        value: function mo(e) {
            e.data.warea.x = null;
            e.data.warea.y = null;
        }
    }, {
        key: "eachDot",
        value: function eachDot(dot) {

            // 粒子位移
            dot.x += dot.xa;
            dot.y += dot.ya;

            // 遇到边界将加速度反向
            dot.xa *= dot.x > this.canvas.width || dot.x < 0 ? -1 : 1;
            dot.ya *= dot.y > this.canvas.height || dot.y < 0 ? -1 : 1;

            // 绘制点
            this.ctx.fillStyle = "rgba(66,65,71,0.2)";
            this.ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);

            // 循环比对粒子间的距离
            for (var i = 0; i < ndots.length; i++) {
                var d2 = ndots[i];

                if (dot === d2 || d2.x === null || d2.y === null) continue;

                var xc = dot.x - d2.x;
                var yc = dot.y - d2.y;

                // 两个粒子之间的距离
                var dis = xc * xc + yc * yc;

                // 距离比
                var ratio;

                // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
                if (dis < d2.max) {

                    // 如果是鼠标，则让粒子向鼠标的位置移动
                    if (d2 === warea && dis > d2.max / 2) {
                        dot.x -= xc * 0.03;
                        dot.y -= yc * 0.03;
                    }

                    // 计算距离比
                    ratio = (d2.max - dis) / d2.max;

                    // 画线
                    this.ctx.beginPath();
                    this.ctx.lineWidth = ratio / 2;
                    this.ctx.strokeStyle = 'rgba(' + (220 + Math.floor(Math.random() * 20)) + ',' + (10 + Math.floor(Math.random() * 200)) + ',' + (10 + Math.floor(Math.random() * 220)) + ',' + (ratio + 0.6) + ')';
                    this.ctx.moveTo(dot.x, dot.y);
                    this.ctx.lineTo(d2.x, d2.y);
                    this.ctx.stroke();
                }
            }

            // 将已经计算过的粒子从数组中删除
            ndots.splice(ndots.indexOf(dot), 1);
        }
    }, {
        key: "animate",
        value: function (_animate) {
            function animate() {
                return _animate.apply(this, arguments);
            }

            animate.toString = function () {
                return _animate.toString();
            };

            return animate;
        }(function () {
            // ctx.clearRect(0,0,canvas.width, canvas.height);

            // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
            var ndots = [this.warea].concat(this.dots);

            this.dots.forEach(this.eachDot(dot), this);

            this.RAF(animate);
        })
    }]);

    return errorCanvas;
}();
},{}],6:[function(require,module,exports){
'use strict';

var _avatar = require('./avatar.js');

var _modal = require('./modal.js');

var _user = require('./user.js');

var _navTab = require('./navTab.js');

var _errorCanvas = require('./errorCanvas.js');

var _menu = require('./menu.js');

var _patch = require('./patch.js');

var _patch2 = _interopRequireDefault(_patch);

var _countContainer = require('./countContainer.js');

var _studentContainer = require('./studentContainer.js');

var _choiceContainer = require('./choiceContainer.js');

var _graColorTable = require('./graColorTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//rem calculate
function setRem() {
	var width = document.body.clientWidth;
	var ratio = width / 12.8;
	var fontSize = ratio + "px";
	if (width <= 1280) {
		$('html').css("font-size", "100px");
	} else {
		$('html').css("font-size", fontSize);
	}
}

function main() {

	setRem();
	(0, _patch2.default)();

	$($('html').attr("data-type")).attr("class", "current");

	//create colorTable
	var colorList = new Array();
	colorList.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(255, 111, 98), 0));
	colorList.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(165, 87, 109), 80));
	colorList.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(91, 85, 122), 200));
	colorList.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(72, 89, 110), 220));
	colorList.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(36, 45, 55), 255));
	// this.colorList.push(new colorMatch(new rgbColor(255,111,98),0));
	// this.colorList.push(new colorMatch(new rgbColor(91,85,122),255));
	var mainGra = new _graColorTable.graColorTable(colorList);

	var colorList2 = new Array();
	colorList2.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(255, 111, 98), 0));
	colorList2.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(157, 47, 124), 40));
	colorList2.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(255, 61, 98), 100));
	colorList2.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(127, 47, 134), 180));
	colorList2.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(54, 46, 99), 255));
	var mainGra2 = new _graColorTable.graColorTable(colorList2);
	//create avatar obj
	$('[data-toggle="avatar"]').each(function () {
		var $this = $(this);
		var name = $this.attr('data-src');
		var type = $this.attr('data-srcType');
		var user = new _user.User(name, type);
		if (type == "user") {
			$this.data("pi.avatar", new _avatar.avatar(user, $this, mainGra, type));
		} else if (type == "course") {
			$this.data("pi.avatar", new _avatar.avatar(user, $this, mainGra2, type));
		}
	});

	// create modal object
	$('[data-toggle="modal"]').each(function () {
		var $this = $(this);
		var $target = $($this.attr('data-target'));
		var $deleteTarget = $target.find('[data-dismiss="modal"]');
		$this.data("pi.modal", new _modal.modal($this, $target, $deleteTarget));
	});

	//creat nav0tab obj
	$('[data-toggle="piNavBtnGroup"]').each(function () {
		var $this = $(this);
		var $buttonList = $this.find('*');
		var $active = $this.find('.piBtnGroupActive');
		var $MatchList = new Array();
		$buttonList.each(function () {
			var $Match = { "button": $(this),
				"target": $($(this).attr('data-target')) };
			$MatchList.push($Match);
		});
		$this.data("pi-navTabBtnGroup", new _navTab.navTabBtnGroup($this, $MatchList, $active));
	});

	//create menu obj
	$('[data-au="menu"]').each(function () {
		var $this = $(this);
		var $target = $($this.attr('data-target'));
		$this.data("pi.menu", new _menu.menu($this, $target));
	});

	//create countContainer
	$('[class="piCountContainer"]').each(function () {
		var $this = $(this);
		var $hover = $($this.attr('data-target'));
		$this.data("pi.countContainer", new _countContainer.countContainer($this, $hover));
	});

	$('[class="piStudentCourseContainer"]').each(function () {
		var $this = $(this);
		var $hover = $($this.attr('data-target'));
		$this.data("pi.studentContainer", new _studentContainer.studentContainer($this, $hover));
	});

	$('[class="piChoiceContainerTeacher"]').each(function () {
		var $this = $(this);
		var $hover = $($this.attr('data-target'));
		var id = $this.attr('data-src');
		$this.data("pi.choiceContainer", new _choiceContainer.choiceContainerTeacher($this, $hover, id));
	});

	$('[class="piChoiceContainerStudent"]').each(function () {
		var $this = $(this);
		var $hover = $($this.attr('data-target'));
		var id = $this.attr('data-src');
		$this.data("pi.choiceContainer", new _choiceContainer.choiceContainerStudent($this, $hover, id));
	});

	$('#studentFinder').each(function () {
		var $this = $(this);
		var s = $('[class="piStudentCourseContainer"]').data("pi.studentContainer");
		$this.data("pi.studentFinder", new _studentContainer.studentFinder(s, $this));
	});
};
$(document).ready(main);
window.onresize = setRem;
// //create errorcanvas
// $('[class="pi404canvas"]').each(function(){
// 	var $this   = $(this);
// 	$this.data("pi.404canvas",new errorCanvas($this));
// })
},{"./avatar.js":1,"./choiceContainer.js":2,"./countContainer.js":4,"./errorCanvas.js":5,"./graColorTable":7,"./menu.js":8,"./modal.js":9,"./navTab.js":10,"./patch.js":11,"./studentContainer.js":12,"./user.js":13}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//modal
//mk

var modal = exports.modal = function () {
    function modal(element, target, deleteTarget) {
        _classCallCheck(this, modal);

        //modal button
        this.$element = element;
        //modal
        this.$target = target;
        //modal close button
        this.$deleteTarget = deleteTarget;

        //about size and position
        this.modalWidth = parseInt(this.$target.css("width").replace("px", ""));
        this.modalHeight = parseInt(this.$target.css("height").replace("px", ""));

        this.regi();
    }

    //prepare style


    _createClass(modal, [{
        key: "stylePerpare",
        value: function stylePerpare() {
            this.$target.css("position", "fixed");
            var widthAll = document.body.clientWidth;
            var left = (widthAll - this.modalWidth) / 2;
            this.$target.css("left", left);
        }
    }, {
        key: "show",
        value: function show() {
            this.stylePerpare();
            this.$target.css('display', 'block');
            this.$target.after('<div class="piModalBack"></div>');
            $('[class="piModalBack"]').one('click', this, function (e) {
                e.data.hide();
            });
            $('[class="piModalBack"]').animate({
                opacity: "0.3"
            }, 200, 'swing');
            this.$target.animate({
                opacity: "1",
                top: "+=0.5rem"
            }, 400);
        }
    }, {
        key: "hide",
        value: function hide() {
            $('[class="piModalBack"]').remove();
            this.$target.animate({
                opacity: "0",
                top: "-=0.5rem"
            }, 400);
            this.$target.css('display', 'none');
        }
    }, {
        key: "regi",
        value: function regi() {

            this.$element.on('click', this, function (e) {
                e.data.show();
            });

            this.$deleteTarget.on('click', this, function (e) {
                e.data.hide();
            });
        }
    }]);

    return modal;
}();
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
},{}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.studentContainer = exports.studentFinder = exports.studentBlock = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require("./config.js");

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
        $.getJSON(_config.config.getStudents, function (data) {
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

                    e.data.$hover.find('#id').html("学号：" + c.id);
                    e.data.$hover.find('#c1').html("上课点名成绩:" + c.countScore);
                    e.data.$hover.find('#c2').html("上机点名成绩:" + c.ccScore);
                    e.data.$hover.find('#c3').html("作业成绩:" + c.homeworkScore);
                    e.data.$hover.find('#notice').html(c.notice);
                    e.data.$hover.css("display", "block");

                    e.data.$hover.find('#submitChange').off('click');
                    e.data.$hover.find('#submitChange').one('click', c, function (e) {
                        //$.get(config.changeStudent,{"student":e.data.id,"class_id":"1001"},function(){ location.href =config.changeStudent;});
                        location.href = _config.config.changeStudent + "?student=" + e.data.id;
                    });
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
},{"./config.js":3}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function () {
	function User(name, type) {
		_classCallCheck(this, User);

		this.name = name;
		this.type = type;
		this.signature = this.md5(this.name);
	}

	_createClass(User, [{
		key: "md5",
		value: function md5(string) {
			function md5_RotateLeft(lValue, iShiftBits) {
				return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
			}
			function md5_AddUnsigned(lX, lY) {
				var lX4, lY4, lX8, lY8, lResult;
				lX8 = lX & 0x80000000;
				lY8 = lY & 0x80000000;
				lX4 = lX & 0x40000000;
				lY4 = lY & 0x40000000;
				lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
				if (lX4 & lY4) {
					return lResult ^ 0x80000000 ^ lX8 ^ lY8;
				}
				if (lX4 | lY4) {
					if (lResult & 0x40000000) {
						return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
					} else {
						return lResult ^ 0x40000000 ^ lX8 ^ lY8;
					}
				} else {
					return lResult ^ lX8 ^ lY8;
				}
			}
			function md5_F(x, y, z) {
				return x & y | ~x & z;
			}
			function md5_G(x, y, z) {
				return x & z | y & ~z;
			}
			function md5_H(x, y, z) {
				return x ^ y ^ z;
			}
			function md5_I(x, y, z) {
				return y ^ (x | ~z);
			}
			function md5_FF(a, b, c, d, x, s, ac) {
				a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac));
				return md5_AddUnsigned(md5_RotateLeft(a, s), b);
			};
			function md5_GG(a, b, c, d, x, s, ac) {
				a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac));
				return md5_AddUnsigned(md5_RotateLeft(a, s), b);
			};
			function md5_HH(a, b, c, d, x, s, ac) {
				a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac));
				return md5_AddUnsigned(md5_RotateLeft(a, s), b);
			};
			function md5_II(a, b, c, d, x, s, ac) {
				a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac));
				return md5_AddUnsigned(md5_RotateLeft(a, s), b);
			};
			function md5_ConvertToWordArray(string) {
				var lWordCount;
				var lMessageLength = string.length;
				var lNumberOfWords_temp1 = lMessageLength + 8;
				var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
				var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
				var lWordArray = Array(lNumberOfWords - 1);
				var lBytePosition = 0;
				var lByteCount = 0;
				while (lByteCount < lMessageLength) {
					lWordCount = (lByteCount - lByteCount % 4) / 4;
					lBytePosition = lByteCount % 4 * 8;
					lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
					lByteCount++;
				}
				lWordCount = (lByteCount - lByteCount % 4) / 4;
				lBytePosition = lByteCount % 4 * 8;
				lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
				lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
				lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
				return lWordArray;
			};
			function md5_WordToHex(lValue) {
				var WordToHexValue = "",
				    WordToHexValue_temp = "",
				    lByte,
				    lCount;
				for (lCount = 0; lCount <= 3; lCount++) {
					lByte = lValue >>> lCount * 8 & 255;
					WordToHexValue_temp = "0" + lByte.toString(16);
					WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
				}
				return WordToHexValue;
			};
			function md5_Utf8Encode(string) {
				string = string.replace(/\r\n/g, "\n");
				var utftext = "";
				for (var n = 0; n < string.length; n++) {
					var c = string.charCodeAt(n);
					if (c < 128) {
						utftext += String.fromCharCode(c);
					} else if (c > 127 && c < 2048) {
						utftext += String.fromCharCode(c >> 6 | 192);
						utftext += String.fromCharCode(c & 63 | 128);
					} else {
						utftext += String.fromCharCode(c >> 12 | 224);
						utftext += String.fromCharCode(c >> 6 & 63 | 128);
						utftext += String.fromCharCode(c & 63 | 128);
					}
				}
				return utftext;
			};
			var x = Array();
			var k, AA, BB, CC, DD, a, b, c, d;
			var S11 = 7,
			    S12 = 12,
			    S13 = 17,
			    S14 = 22;
			var S21 = 5,
			    S22 = 9,
			    S23 = 14,
			    S24 = 20;
			var S31 = 4,
			    S32 = 11,
			    S33 = 16,
			    S34 = 23;
			var S41 = 6,
			    S42 = 10,
			    S43 = 15,
			    S44 = 21;
			string = md5_Utf8Encode(string);
			x = md5_ConvertToWordArray(string);
			a = 0x67452301;
			b = 0xEFCDAB89;
			c = 0x98BADCFE;
			d = 0x10325476;
			for (k = 0; k < x.length; k += 16) {
				AA = a;
				BB = b;
				CC = c;
				DD = d;
				a = md5_FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
				d = md5_FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
				c = md5_FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
				b = md5_FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
				a = md5_FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
				d = md5_FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
				c = md5_FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
				b = md5_FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
				a = md5_FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
				d = md5_FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
				c = md5_FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
				b = md5_FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
				a = md5_FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
				d = md5_FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
				c = md5_FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
				b = md5_FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
				a = md5_GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
				d = md5_GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
				c = md5_GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
				b = md5_GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
				a = md5_GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
				d = md5_GG(d, a, b, c, x[k + 10], S22, 0x2441453);
				c = md5_GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
				b = md5_GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
				a = md5_GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
				d = md5_GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
				c = md5_GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
				b = md5_GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
				a = md5_GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
				d = md5_GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
				c = md5_GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
				b = md5_GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
				a = md5_HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
				d = md5_HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
				c = md5_HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
				b = md5_HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
				a = md5_HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
				d = md5_HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
				c = md5_HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
				b = md5_HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
				a = md5_HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
				d = md5_HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
				c = md5_HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
				b = md5_HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
				a = md5_HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
				d = md5_HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
				c = md5_HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
				b = md5_HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
				a = md5_II(a, b, c, d, x[k + 0], S41, 0xF4292244);
				d = md5_II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
				c = md5_II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
				b = md5_II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
				a = md5_II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
				d = md5_II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
				c = md5_II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
				b = md5_II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
				a = md5_II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
				d = md5_II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
				c = md5_II(c, d, a, b, x[k + 6], S43, 0xA3014314);
				b = md5_II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
				a = md5_II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
				d = md5_II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
				c = md5_II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
				b = md5_II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
				a = md5_AddUnsigned(a, AA);
				b = md5_AddUnsigned(b, BB);
				c = md5_AddUnsigned(c, CC);
				d = md5_AddUnsigned(d, DD);
			}
			return (md5_WordToHex(a) + md5_WordToHex(b) + md5_WordToHex(c) + md5_WordToHex(d)).toLowerCase();
		}
	}]);

	return User;
}();
},{}]},{},[6])