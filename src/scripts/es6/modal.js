//modal
//mk 

export class modal{
    constructor(element,target,deleteTarget){
        //modal button 
        this.$element = element;
        //modal
        this.$target=target;
        //modal close button
        this.$deleteTarget=deleteTarget;

        //about size and position
        this.modalWidth=parseInt(this.$target.css("width").replace("px",""));
        this.modalHeight=parseInt(this.$target.css("height").replace("px",""));


        this.regi();
    }

    //prepare style
    stylePerpare(){
        this.$target.css("position","fixed");

    }

    show(){
        this.$target.css('display','block');
        this.$target.after('<div class="piModalBack"></div>');
        $('[class="piModalBack"]').one('click',this,function(e){
            e.data.hide();
        });
        $('[class="piModalBack"]').animate({
            opacity:"0.3",
        },200,'swing');
        this.$target.animate({
            opacity:"1",
            top:"+=1rem",
        },400)
    }

    hide(){
        this.$target.css('display','none');
        $('[class="piModalBack"]').remove();
    }

    regi(){

        this.$element.on('click',this,function(e){
            e.data.show();
        });

        this.$deleteTarget.on('click',this,function(e){
            e.data.hide();
        })
    }
}


	
	