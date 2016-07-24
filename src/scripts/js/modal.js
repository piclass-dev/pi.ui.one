
(function () {

var modal=function(element,target){
    this.$body= $(document.body);
    this.$element = $(element);
    this.target=$(target);
}



var test = new modal("a","b");

var mo;

$(document).on('click.pi.modal.data-api',
	'[data-toggle="modal"]',function(e){
		var $this   = $(this);
		
		var $target = $($this.attr('data-target'));
	    $target.css('display','block');
	    mo=$target;
	})
	
$(document).on('click.pi.modal.data-api',
	'[data-dismiss="modal"]',function(e){
		
	    mo.css('display','none');
	})

})(jQuery);
	