(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _modal = require('./modal.js');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var test= new avatar(1,1);

// import add from "./employ.js";

// var a=1;
// var b=2;

// var t=add(a+b);

// $('[data-toggle="avatar"]').each(function(){
// 	var $this   = $(this);
// 	var name = $this.attr('data-src');
// 	var type = $this.attr('data-srcType');
// 	var user = new User(name,type);
// 	var data = new avatar(user,$this)
//     $this.data("pi.avatar",data);
// })


// create modal object
$('[data-toggle="modal"]').each(function () {
	var $this = $(this);
	var $target = $($this.attr('data-target'));
	var $deleteTarget = $target.find('[data-dismiss="modal"]');
	$this.data("pi.modal", new _modal2.default($this, $target, $deleteTarget));
});

// var a=$('[data-toggle="modal"]').data("pi.modal");
// alert(a.$element);
// import avatar from './avatar.js';
},{"./modal.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//modal
//mk 

var modal = function () {
    function modal(element, target, deleteTarget) {
        _classCallCheck(this, modal);

        //modal button 
        this.$element = element;
        //modal
        this.$target = target;
        //modal close button
        this.$deleteTarget = deleteTarget;
        this.regi();
    }

    _createClass(modal, [{
        key: 'show',
        value: function show() {
            this.$target.css('display', 'block');
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.$target.css('display', 'none');
        }
    }, {
        key: 'regi',
        value: function regi() {
            this.$element.on('click.pi.modal', function (e) {
                var m = $(this).data("pi.modal");
                m.show();
            });
            //save the modal button position
            this.$deleteTarget.data("pi.modalMother", this.$element);

            this.$deleteTarget.on('click.pi.modal', function (e) {
                var m = $($(this).data("pi.modalMother")).data("pi.modal");
                m.hide();
            });
        }
    }]);

    return modal;
}();

exports.default = modal;
},{}]},{},[1])