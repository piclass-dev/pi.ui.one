'use strict';

var _avatar = require('./avatar.js');

var _modal = require('./modal.js');

var _user = require('./user.js');

var _navTab = require('./navTab.js');

var _errorCanvas = require('./errorCanvas.js');

//create avatar obj
$('[data-toggle="avatar"]').each(function () {
	var $this = $(this);
	var name = $this.attr('data-src');
	var type = $this.attr('data-srcType');
	var user = new _user.User(name, type);
	$this.data("pi.avatar", new _avatar.avatar(user, $this));
});

// create modal object
$('[data-toggle="modal"]').each(function () {
	var $this = $(this);
	var $target = $($this.attr('data-target'));
	var $deleteTarget = $target.find('[data-dismiss="modal"]');
	$this.data("pi.modal", new _modal.modal($this, $target, $deleteTarget));
});

$('[data-toggle="piNavBtnGroup"]').each(function () {
	var $this = $(this);
	var $buttonList = $this.find('button');
	var $active = $this.find('[class="active"]');
	var $MatchList = new Array();
	$buttonList.each(function () {
		var $Match = { "button": $(this),
			"target": $($(this).attr('data-target')) };
		$MatchList.push($Match);
	});
	$this.data("pi-navTabBtnGroup", new _navTab.navTabBtnGroup($this, $MatchList, $active));
});

// //create errorcanvas
// $('[class="pi404canvas"]').each(function(){
// 	var $this   = $(this);
// 	$this.data("pi.404canvas",new errorCanvas($this));
// })