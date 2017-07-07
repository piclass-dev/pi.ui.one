///modal 模态框
//
//使用：在触发modal出现的button元素上添加 data-toggle="modal" data-target="#｛｛X｝｝"
//X为modal块的id。在modal块内关闭该modal的button元素上添加 data-dismiss="modal"
//

export class modal {
  constructor(element, target, deleteTarget) {
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
  stylePerpare() {
    this.$target.css("position", "fixed");
    var widthAll = document.body.clientWidth;
    var left = (widthAll - this.modalWidth) / 2;
    this.$target.css("left", left);
  }

  show() {

    this.stylePerpare();
    this.$target.css('display', 'block');
    this.$target.after('<div class="piModalBack"></div>');
    $('[class="piModalBack"]').one('click', this, function(e) {
      e.data.hide();
    });
    $('[class="piModalBack"]').animate({
      opacity: "0.3"
    }, 200, 'swing');
    this.$target.animate({
      opacity: "1",
      top: "+=0.5rem"
    }, 400)
  }

  hide() {
    $('[class="piModalBack"]').remove();
    this.$target.css("top", "100px")
    this.$target.css('display', 'none');
  }

  regi() {

    this.$element.on('click', this, function(e) {
      e.data.show();
    });

    this.$deleteTarget.on('click', this, function(e) {
      e.data.hide();
    })
  }
}
