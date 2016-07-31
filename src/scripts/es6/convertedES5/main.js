'use strict';

var _avatar = require('./avatar.js');

var _modal = require('./modal.js');

var _user = require('./user.js');

var _navTab = require('./navTab.js');

var _errorCanvas = require('./errorCanvas.js');

var _graColorTable = require('./graColorTable');

//create colorTable
var colorList = new Array();
colorList.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(255, 111, 98), 0));
colorList.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(165, 87, 109), 80));
colorList.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(91, 85, 122), 200));
colorList.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(72, 89, 110), 220));
colorList.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(36, 45, 55), 255));
// this.colorList.push(new colorMatch(new rgbColor(255,111,98),0));
// this.colorList.push(new colorMatch(new rgbColor(91,85,122),255));
var mainGra = new _graColorTable.graColorTable(colorList);

//create avatar obj
$('[data-toggle="avatar"]').each(function () {
	var $this = $(this);
	var name = $this.attr('data-src');
	var type = $this.attr('data-srcType');
	var user = new _user.User(name, type);
	$this.data("pi.avatar", new _avatar.avatar(user, $this, mainGra));
});

// create modal object
$('[data-toggle="modal"]').each(function () {
	var $this = $(this);
	var $target = $($this.attr('data-target'));
	var $deleteTarget = $target.find('[data-dismiss="modal"]');
	$this.data("pi.modal", new _modal.modal($this, $target, $deleteTarget));
});

//creat nav0tab obj
$('[data-toggle="piNavBtnGroup"]').each(function () {
	var $this = $(this);
	var $buttonList = $this.find('*');
	var $active = $this.find('.piBtnGroupActive');
	var $MatchList = new Array();
	$buttonList.each(function () {
		var $Match = { "button": $(this),
			"target": $($(this).attr('data-target')) };
		$MatchList.push($Match);
	});
	$this.data("pi-navTabBtnGroup", new _navTab.navTabBtnGroup($this, $MatchList, $active));
});

//create menu obj
$('[data-au="menu"]').each(function () {
	var $this = $(this);
	var $target = $($this.attr('data-target'));
	$this.data("pi.menu", new menu($this, $target));
});

// //create errorcanvas
// $('[class="pi404canvas"]').each(function(){
// 	var $this   = $(this);
// 	$this.data("pi.404canvas",new errorCanvas($this));
// })