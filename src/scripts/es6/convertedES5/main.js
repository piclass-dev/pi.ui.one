'use strict';

var _avatar = require('./avatar.js');

var _modal = require('./modal.js');

var _user = require('./user.js');

var _navTab = require('./navTab.js');

var _errorCanvas = require('./errorCanvas.js');

var _menu = require('./menu.js');

var _patch = require('./patch.js');

var _patch2 = _interopRequireDefault(_patch);

var _countContainer = require('./countContainer.js');

var _studentContainer = require('./studentContainer.js');

var _graColorTable = require('./graColorTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//rem calculate
function setRem() {
	var width = document.body.clientWidth;
	var ratio = width / 12.8;
	var fontSize = ratio + "px";
	if (width <= 1280) {
		$('html').css("font-size", "100px");
	} else {
		$('html').css("font-size", fontSize);
	}
}

function main() {

	setRem();
	(0, _patch2.default)();

	$($('html').attr("data-type")).attr("class", "current");

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

	var colorList2 = new Array();
	colorList2.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(255, 111, 98), 0));
	colorList2.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(157, 47, 124), 40));
	colorList2.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(176, 71, 88), 100));
	colorList2.push(new _graColorTable.colorMatch(new _graColorTable.rgbColor(54, 46, 99), 255));
	var mainGra2 = new _graColorTable.graColorTable(colorList2);
	//create avatar obj
	$('[data-toggle="avatar"]').each(function () {
		var $this = $(this);
		var name = $this.attr('data-src');
		var type = $this.attr('data-srcType');
		var user = new _user.User(name, type);
		if (type == "user") {
			$this.data("pi.avatar", new _avatar.avatar(user, $this, mainGra, type));
		} else if (type == "course") {
			$this.data("pi.avatar", new _avatar.avatar(user, $this, mainGra2, type));
		}
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
		$this.data("pi.menu", new _menu.menu($this, $target));
	});

	//create countContainer
	$('[class="piCountContainer"]').each(function () {
		var $this = $(this);
		var $hover = $($this.attr('data-target'));
		$this.data("pi.countContainer", new _countContainer.countContainer($this, $hover));
	});

	$('[class="piStudentCourseContainer"]').each(function () {
		var $this = $(this);
		var $hover = $($this.attr('data-target'));
		$this.data("pi.studentContainer", new _studentContainer.studentContainer($this, $hover));
	});

	$('#studentFinder').each(function () {
		var $this = $(this);
		var s = $('[class="piStudentCourseContainer"]').data("pi.studentContainer");
		$this.data("pi.studentFinder", new _studentContainer.studentFinder(s, $this));
	});
};
$(document).ready(main);
window.onresize = setRem;
// //create errorcanvas
// $('[class="pi404canvas"]').each(function(){
// 	var $this   = $(this);
// 	$this.data("pi.404canvas",new errorCanvas($this));
// })