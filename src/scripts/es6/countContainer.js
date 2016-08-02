
export class count{
	constructor(time,all,present,notice,id){
		this.time=time;
		this.all=all;
		this.present=present;
		this.notice=notice;
		this.id=id;
	}


}

export class countContainer{
	constructor(element,hover){
		var self=this;
		this.$element=element;
		this.$hover=hover;
		this.left;
		this.top;
		this.counts=new Array();
		$.getJSON("http://django.piclass.cn/test",function(data){
    		for(var i=0;i<=data.info.length-1;i++){
    		    var countt=new count(data.info[i].time,data.info[i].all,data.info[i].present,data.info[i].notice,data.info[i].count_id);
    		    self.counts.push(countt);
    		}
    		self.addBlock();
    		self.regi();
        })


	}



	addBlock(){
		this.counts.forEach(function(count){
			this.$element.append('<button class="countBlock">'+count.id+'</button>');
		},this)
	}

	regi(){
		var self=this;
		$('[class="countBlock"]').each(function(i,block){
			$(block).data("pi.countBlock",self.counts[i])
			// var x=self.counts[i].getBoundingClientRect().left+document.documentElement.scrollLeft;
			// var y=self.counts[i].getBoundingClientRect().top+document.documentElement.scrollTop;
			// y=y+parseInt(self.counts[i].css("height").replace("px",""))+10;
		    $(block).on('mouseenter',self,function(e){
		    	var x=this.getBoundingClientRect().left+document.documentElement.scrollLeft;
				var y=this.getBoundingClientRect().top+document.documentElement.scrollTop;
				y=y+parseInt($(this).css("height").replace("px",""))+10+document.body.scrollTop;

		    	e.data.$hover.css("left",x);
		    	e.data.$hover.css("top",y);
		    	var c=$(this).data("pi.countBlock");
		    	e.data.$hover.find('#time').html("点名日期："+c.time);
		    	e.data.$hover.find('#presentRatio').html("出席率："+c.present/c.all);
		    	e.data.$hover.find('#present').html("出席人数："+c.present+"/"+c.all);
		    	e.data.$hover.find('#notice').html(c.notice);
		    	e.data.$hover.css("display","block");
		    })
		    $(block).on('mouseleave',self,function(e){
		    	e.data.$hover.css("display","none");

		    })
		})
	}



}