//avatar
(function () {

var avatar=function(User,element){
	this.$element=element;
	this.User=User;
}

          

//create avatar obj
$('[data-toggle="avatar"]').each(function(){
	var $this   = $(this);
	var name = $this.attr('data-src');
	var type = $this.attr('data-srcType');
	var user = new User(name,type);
    $this.data("pi.avatar",(data=new avatar(user,$this)));
})


})(jQuery);


