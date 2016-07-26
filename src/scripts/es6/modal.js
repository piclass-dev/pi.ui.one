//modal
//mk 

export default class modal{
    constructor(element,target,deleteTarget){
        //modal button 
        this.$element = element;
        //modal
        this.$target=target;
        //modal close button
        this.$deleteTarget=deleteTarget;
        this.regi();
    }

    show(){
        this.$target.css('display','block');
    }

    hide(){
        this.$target.css('display','none');
    }

    regi(){
        this.$element.on('click.pi.modal',function(e){
            var m=$(this).data("pi.modal");
            m.show();
        });
        //save the modal button position
        this.$deleteTarget.data("pi.modalMother",this.$element);

        this.$deleteTarget.on('click.pi.modal',function(e){
            var m=$($(this).data("pi.modalMother")).data("pi.modal");
            m.hide();
        });
    }
}


	
	