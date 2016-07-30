 import {avatar} from './avatar.js';
 import {modal} from './modal.js';
 import {User} from './user.js';
 import {navTabBtnGroup} from './navTab.js'
 import {errorCanvas} from './errorCanvas.js'

//create avatar obj
$('[data-toggle="avatar"]').each(function(){
	var $this   = $(this);
	var name = $this.attr('data-src');
	var type = $this.attr('data-srcType');
	var user = new User(name,type);
    $this.data("pi.avatar",new avatar(user,$this));
})


// create modal object
$('[data-toggle="modal"]').each(function(){
	var $this   = $(this);
	var $target = $($this.attr('data-target'));
	var $deleteTarget = $target.find('[data-dismiss="modal"]');
    $this.data("pi.modal",new modal($this,$target,$deleteTarget));
})

$('[data-toggle="piNavBtnGroup"]').each(function(){
	var $this =$(this);
	var $buttonList=$this.find('button');
	var $active=$this.find('[class="active"]')
	var $MatchList=new Array;
	$buttonList.each(function(){
		var $Match={"button":$(this),
					"target":$($(this).attr('data-target'))};
		$MatchList.push($Match);
	})
	$this.data("pi-navTabBtnGroup",new navTabBtnGroup($this,$MatchList,$active));
})


// //create errorcanvas
// $('[class="pi404canvas"]').each(function(){
// 	var $this   = $(this);
// 	$this.data("pi.404canvas",new errorCanvas($this));
// })



