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