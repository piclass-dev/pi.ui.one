////选项卡切换
//使用：
export class navTabBtnGroup {
    constructor(element, MatchList, active) {
        this.vm = this;
        this.$element = element;
        this.$MatchList = MatchList;
        this.$active = active;
        this.regi();
        $(this.$active.attr('data-target')).css('display', 'block');
    }

    show($button) {
        var $target = $($button.attr('data-target'));
        $(this.$active.attr('data-target')).css('display', 'none');
        $(this.$active).removeClass("piBtnGroupActive");
        $target.css('display', 'block');
        this.$active = $button;
        $(this.$active).addClass("piBtnGroupActive");
    }

    regi() {
        this.$MatchList.forEach(function(match) {
            match.target.css('display', 'none');
            match.button.on('click', this, function(e) {
                e.data.show(match.button);
            });
        }, this)
    }
}
