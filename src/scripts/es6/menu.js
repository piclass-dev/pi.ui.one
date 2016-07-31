

export class menu{
	constructor(element,menu){
		this.$element=element;
		this.$menu=menu;
		this.regi();
	}

	regi(){
		this.$element.on('mouse',this,function(e){
            e.data.show();
        });
	}
}
