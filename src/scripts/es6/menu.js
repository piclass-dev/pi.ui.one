

export class menu{
	constructor(element,target){
		this.$element=element;
		this.$target=target;
		this.timer;
		this.init();
		this.regi();

	}

	//find position
	init(){
		var x=this.$element.get(0).getBoundingClientRect().left+document.documentElement.scrollLeft;
		var y=this.$element.get(0).getBoundingClientRect().top+document.documentElement.scrollTop;
	
		y=y+parseInt(this.$element.css("height").replace("px",""))+10;
		this.$target.css("left",x);
		this.$target.css("top",y);
	}


    //register event
	regi(){
		this.$target.css("display","none");
		this.$element.on('mouseenter',this,function(e){
            e.data.$target.css("display","block");
        });
        this.$element.on('mouseleave',this,function(e){
            e.data.timer=setTimeout(function(){
            	e.data.$target.css("display","none");
            },100)
            e.data.$target.one('mouseenter',e.data,function(e){
        		clearTimeout(e.data.timer);
            });

        });
        this.$target.on('mouseleave',this,function(e){
        	e.data.$target.css("display","none");
        });
        
	}
}
