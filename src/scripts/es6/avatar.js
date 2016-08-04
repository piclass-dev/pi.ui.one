import {User} from "./user";
export class avatar{
	constructor(User,element,graColorTable,type){
	    this.$element=element;
		this.User=User;
		this.type=type;
	    this.colors=new Array(24);
	    this.colorsSig= new Array(24);
	    this.colorsSig10= new Array(24);
	    this.canvas=this.$element.get(0);
	    this.canvas.height=this.$element.css("height").replace("px",'');
	    this.canvas.width=this.$element.css("width").replace("px",'');
	    this.ctx=this.canvas.getContext("2d");
	    this.step=this.canvas.height/5;
	    this.graColorTable=graColorTable;
	    if(this.type=="user"){
	    	this.drawUser();
	    }else if(this.type=="course"){
	    	this.drawCourse();
	    }

 		
 		//alert(this.User.signature);
	}
    
    perpareColor(){
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
    }

//draw avatar on canvas

	drawUser(){
		this.perpareColor();
	    for(var i=0;i<=4;i++){
	        for(var j=0;j<=4;j++){
	            this.ctx.fillStyle=this.colors[5*i+j];
	            this.ctx.fillRect(i*this.step,j*this.step,this.step,this.step);
	        }
        }

	}

	drawAngular(x1,y1,x2,y2,x3,y3,color){
    	var c=this.ctx;
    	c.fillStyle=color;
    	c.beginPath();
    	c.moveTo(x1*this.step,y1*this.step);
    	c.lineTo(x2*this.step,y2*this.step);
    	c.lineTo(x3*this.step,y3*this.step);
    	c.fill();
    }

	drawCourse(){
        this.perpareColor();
        this.step=this.canvas.height/10;
        
        this.drawAngular(0,0,5,0,3,3,this.colors[0]);
        this.drawAngular(0,0,2,2,0,5,this.colors[1]);
        this.drawAngular(0,5,2,2,5,5,this.colors[2]);
        this.drawAngular(5,5,5,0,3,3,this.colors[3]);

        this.drawAngular(5,0,10,0,8,2,this.colors[4]);
        this.drawAngular(5,0,5,5,8,2,this.colors[5]);
        this.drawAngular(5,5,7,3,10,5,this.colors[6]);
        this.drawAngular(10,0,10,5,7,3,this.colors[7]);

        this.drawAngular(0,5,5,5,3,7,this.colors[8]);
        this.drawAngular(0,5,0,10,3,7,this.colors[9]);
        this.drawAngular(0,10,2,8,5,10,this.colors[10]);
        this.drawAngular(5,5,5,10,2,8,this.colors[11]);

        this.drawAngular(5,5,10,5,8,8,this.colors[12]);
        this.drawAngular(5,5,7,7,5,10,this.colors[13]);
        this.drawAngular(5,10,7,7,10,10,this.colors[14]);
        this.drawAngular(10,10,10,5,8,8,this.colors[15]);
	}
    


}


 
