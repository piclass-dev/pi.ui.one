export class studentBlock {
    constructor(id,name,countScore,ccScore,homeworkScore,notice,element) {
        this.$element=element;
        this.id=id;
        this.name=name;
        this.countScore=countScore;
        this.ccScore=ccScore;
        this.homeworkScore=homeworkScore;
        this.notice=notice;
    }

    // show(){
    //     this.$element.css("display","block");
    // }
}

export class studentFinder {
    constructor(Container,finder) {
        this.container=Container;
        this.$finder=finder;
        this.regi();
    }

    check(str){
        for(var i=0;i<this.container.students.length;i++){
            this.container.students[i].$element.css("color","#000000");
            if(this.container.students[i].name.indexOf(str)!=-1&&str!=''){
                this.container.students[i].$element.css("color","#ff6036");
            }
        }
    }

    regi(){
        this.$finder.on("input",this,function(e){
             e.data.check(e.data.$finder.val())
        });
    }

}

export class studentContainer {
    constructor(element,hover) {
		var self=this;
		this.$element=element;
		this.$hover=hover;
		this.left;
		this.top;
		this.timer;
		this.students=new Array();
        $.getJSON("http://django.piclass.cn/myclass/student_list.html",function(data){
    		for(var i=0;i<=data.student_list.length-1;i++){
    		    var s=new studentBlock(data.student_list[i].username,
                                        data.student_list[i].name,
                                        data.student_list[i].score,
                                        data.student_list[i].score2,
                                        data.student_list[i].score3,
                                        data.student_list[i].notice,null);
    		    self.students.push(s);
    		}
    		self.addBlock();
    		self.regi();
        })
    }

    addBlock(){
        this.students.forEach(function(student){
			this.$element.append('<div  class="studentBlock">'+student.name+'</div>');
		},this)
    }

    show(i){
        this.student[i].show();
    }

    regi(){
        var self=this;
        this.$hover.on('mouseleave',this,function(e){
            e.data.$hover.css("display","none");
         });
        $('[class="studentBlock"]').each(function(i,block){
            self.students[i].$element=$(block);
            $(block).data("pi.studentBlock",self.students[i])

            $(block).on('mouseenter',self,function(e){
                clearTimeout(e.data.timer);

                var x=this.getBoundingClientRect().left+document.documentElement.scrollLeft;
                var y=this.getBoundingClientRect().top+document.documentElement.scrollTop;
                y=y+parseInt($(this).css("height").replace("px",""))+10+document.body.scrollTop;

                e.data.$hover.css("left",x);
                e.data.$hover.css("top",y);

                var c=$(this).data("pi.studentBlock");

                e.data.$hover.find('#id').html("学号："+c.id);
                e.data.$hover.find('#c1').html("上课点名成绩:"+c.countScore);
                e.data.$hover.find('#c2').html("上机点名成绩:"+c.ccScore);
                e.data.$hover.find('#c3').html("作业成绩:"+c.homeworkScore);
                e.data.$hover.find('#notice').html(c.notice);
                e.data.$hover.css("display","block");

            })
            $(block).on('mouseleave',self,function(e){
            //	e.data.$hover.css("display","none");
                e.data.timer=setTimeout(function(){
                    e.data.$hover.css("display","none");
                },100)
                e.data.$hover.one('mouseenter',e.data,function(e){
                    clearTimeout(e.data.timer);
                });
            })
        })
    }
}
