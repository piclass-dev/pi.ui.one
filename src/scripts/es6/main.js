// import avatar from './avatar.js';
 import modal from './modal.js';
// var test= new avatar(1,1);

// import add from "./employ.js";

// var a=1;
// var b=2;

// var t=add(a+b);

// $('[data-toggle="avatar"]').each(function(){
// 	var $this   = $(this);
// 	var name = $this.attr('data-src');
// 	var type = $this.attr('data-srcType');
// 	var user = new User(name,type);
// 	var data = new avatar(user,$this)
//     $this.data("pi.avatar",data);
// })


// create modal object
$('[data-toggle="modal"]').each(function(){
	var $this   = $(this);
	var $target = $($this.attr('data-target'));
	var $deleteTarget = $target.find('[data-dismiss="modal"]');
    $this.data("pi.modal",new modal($this,$target,$deleteTarget));
})

// var a=$('[data-toggle="modal"]').data("pi.modal");
// alert(a.$element);



