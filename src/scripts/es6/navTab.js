export class navTabBtnGroup{
	constructor(element,MatchList,active){
		this.vm=this;
		this.$element=element;
		this.$MatchList=MatchList;
		this.$active=active;
		this.regi();
	}

	show($button){
		var $target=$($button.attr('data-target'));
		$(this.$active.attr('data-target')).css('display','none');
		$target.css('display','block');
		this.$active=$button;
	}


	regi(){
		this.$MatchList.forEach(function(match){
			match.target.css('display','none');
			//alert(vm);
			match.button.on('click',this,function(e){
				e.data.show(match.button);
			});
		},this)
	}
}