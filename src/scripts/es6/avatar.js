import {User} from "./user";
import {colorMatch,rgbColor,graColorTable} from "./graColorTable";
export class avatar{
	constructor(User,element){
	    this.$element=element;
		this.User=User;
	    this.colors=new Array(24);
	    this.colorsSig= new Array(24);
	    this.colorsSig10= new Array(24);
	    this.canvas=this.$element.get(0);
	    this.canvas.height=this.$element.css("height").replace("px",'');
	    this.canvas.width=this.$element.css("width").replace("px",'');
	    this.ctx=this.canvas.getContext("2d");
	    this.step=this.canvas.height/5;

	    this.colorList= new Array();
		this.colorList.push(new colorMatch(new rgbColor(255,111,98),0));
		this.colorList.push(new colorMatch(new rgbColor(165,87,109),80));
		this.colorList.push(new colorMatch(new rgbColor(91,85,122),200));
		this.colorList.push(new colorMatch(new rgbColor(72,89,110),220));
		this.colorList.push(new colorMatch(new rgbColor(36,45,55),255));
		// this.colorList.push(new colorMatch(new rgbColor(255,111,98),0));
		// this.colorList.push(new colorMatch(new rgbColor(91,85,122),255));
		this.graColorTable=new graColorTable(this.colorList);
	   // this.graColorTable=new Array()

 		this.draw();
 		//alert(this.User.signature);
	}

//draw avatar on canvas

	draw(){
		for(var i=0;i<=24;i++){
	        this.colorsSig[i]=this.User.signature.slice(i,i+2);
	        var index=parseInt(this.colorsSig[i],16);
	        this.colorsSig10[i]=index;
	    }

	    var min =255;
	    var max =0;

	    for(var i=0;i<=24;i++){
	        if(this.colorsSig10[i]>max){
	        	max=this.colorsSig10[i]
	        };
	        if(this.colorsSig10[i]<min){
	        	min=this.colorsSig10[i]
	        }
	    }
	     var d=max-min;
	    for(var i=0;i<=24;i++){
	    	this.colorsSig10[i]=parseInt(254*(this.colorsSig10[i]-min)/d);
	    	var r,g,b;
	    	r=this.graColorTable.colorArray[this.colorsSig10[i]].r;
	    	g=this.graColorTable.colorArray[this.colorsSig10[i]].g;
	    	b=this.graColorTable.colorArray[this.colorsSig10[i]].b;
	    	this.colors[i]="rgb("+r+","+g+","+b+")";
	    }
	    for(var i=0;i<=4;i++){
	        for(var j=0;j<=4;j++){
	            this.ctx.fillStyle=this.colors[5*i+j];
	            this.ctx.fillRect(i*this.step,j*this.step,this.step,this.step);
	        }
        }

	}
    


}


 
