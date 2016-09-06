 import {avatar} from './avatar.js';
 import {modal} from './modal.js';
 import {User} from './user.js';
 import {navTabBtnGroup} from './navTab.js'
 import {errorCanvas} from './errorCanvas.js'
 import {menu} from './menu.js'
 import patchAll from './patch.js'
 import {countContainer} from './countContainer.js'
 import {studentContainer,studentFinder} from './studentContainer.js'
 import {colorMatch,rgbColor,graColorTable} from "./graColorTable";

//rem calculate
function setRem(){
	var width=document.body.clientWidth;
	var ratio=width/12.8
	var fontSize=ratio+"px";
	if(width<=1280){
		$('html').css("font-size","100px");
	}else{
		$('html').css("font-size",fontSize);
	}

}


function main(){

setRem();
patchAll();

$($('html').attr("data-type")).attr("class","current");

//create colorTable
var colorList= new Array();
colorList.push(new colorMatch(new rgbColor(255,111,98),0));
colorList.push(new colorMatch(new rgbColor(165,87,109),80));
colorList.push(new colorMatch(new rgbColor(91,85,122),200));
colorList.push(new colorMatch(new rgbColor(72,89,110),220));
colorList.push(new colorMatch(new rgbColor(36,45,55),255));
// this.colorList.push(new colorMatch(new rgbColor(255,111,98),0));
// this.colorList.push(new colorMatch(new rgbColor(91,85,122),255));
var mainGra=new graColorTable(colorList);

var colorList2=new Array();
colorList2.push(new colorMatch(new rgbColor(255,111,98),0));
colorList2.push(new colorMatch(new rgbColor(157,47,124),40));
colorList2.push(new colorMatch(new rgbColor(176,71,188),100));
colorList2.push(new colorMatch(new rgbColor(54,46,99),255));
var mainGra2=new graColorTable(colorList2);
//create avatar obj
$('[data-toggle="avatar"]').each(function(){
	var $this   = $(this);
	var name = $this.attr('data-src');
	var type = $this.attr('data-srcType');
	var user = new User(name,type);
	if(type=="user"){
	    $this.data("pi.avatar",new avatar(user,$this,mainGra,type));
	}else if(type=="course"){
		$this.data("pi.avatar",new avatar(user,$this,mainGra2,type));
	}
})


// create modal object
$('[data-toggle="modal"]').each(function(){
	var $this   = $(this);
	var $target = $($this.attr('data-target'));
	var $deleteTarget = $target.find('[data-dismiss="modal"]');
    $this.data("pi.modal",new modal($this,$target,$deleteTarget));
})

//creat nav0tab obj
$('[data-toggle="piNavBtnGroup"]').each(function(){
	var $this =$(this);
	var $buttonList=$this.find('*');
	var $active=$this.find('.piBtnGroupActive')
	var $MatchList=new Array;
	$buttonList.each(function(){
		var $Match={"button":$(this),
					"target":$($(this).attr('data-target'))};
		$MatchList.push($Match);
	})
	$this.data("pi-navTabBtnGroup",new navTabBtnGroup($this,$MatchList,$active));
})

//create menu obj
$('[data-au="menu"]').each(function(){
	var $this   = $(this);
	var $target = $($this.attr('data-target'));
    $this.data("pi.menu",new menu($this,$target));
})

//create countContainer
$('[class="piCountContainer"]').each(function(){
	var $this=$(this);
	var $hover=$($this.attr('data-target'));
	$this.data("pi.countContainer",new countContainer($this,$hover));
})

$('[class="piStudentCourseContainer"]').each(function(){
	var $this=$(this);
	var $hover=$($this.attr('data-target'));
	$this.data("pi.studentContainer",new studentContainer($this,$hover));
})

$('#studentFinder').each(function(){
	var $this=$(this);
    var s=$('[class="piStudentCourseContainer"]').data("pi.studentContainer");
	$this.data("pi.studentFinder",new studentFinder(s,$this));
})

};
$(document).ready(main);
window.onresize=setRem;
// //create errorcanvas
// $('[class="pi404canvas"]').each(function(){
// 	var $this   = $(this);
// 	$this.data("pi.404canvas",new errorCanvas($this));
// })
