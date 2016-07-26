//modal
//mk 

(function () {

var modal=function(element,target,deleteTarget){
    //modal button 
    this.$element = element;
    //modal
    this.$target=target;
    //modal close button
    this.$deleteTarget=deleteTarget;
 //   this.modalVisible=false;
    this.regi();
}


modal.prototype.show=function(){
	this.$target.css('display','block');

}
modal.prototype.hide=function(){
	this.$target.css('display','none');
}

// modal.prototype.change=function(){

// }

//registe event
modal.prototype.regi=function(){

    this.$element.on('click.pi.modal',function(e){
	    m=$(this).data("pi.modal");
        m.show();
    });
    //save the modal button position
    this.$deleteTarget.data("pi.modalMother",this.$element);

    this.$deleteTarget.on('click.pi.modal',function(e){
	    m=$($(this).data("pi.modalMother")).data("pi.modal");
        m.hide();
    });
}

// create modal object
$('[data-toggle="modal"]').each(function(){
	var $this   = $(this);
	var $target = $($this.attr('data-target'));
	var $deleteTarget = $target.find('[data-dismiss="modal"]');
    $this.data("pi.modal",(data=new modal($this,$target,$deleteTarget)));
})

	
})(jQuery);
	