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
        }
    }, {
        key: "show",
        value: function show() {
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
                top: "+=1rem"
            }, 400);
        }
    }, {
        key: "hide",
        value: function hide() {
            this.$target.css('display', 'none');
            $('[class="piModalBack"]').remove();
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