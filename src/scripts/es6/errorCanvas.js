export class errorCanvas{
     constructor(canvas){
        this.$canvas =canvas;
        this.canvas=this.$canvas.get(0);
        this.ctx=this.canvas.getContext("2d");
        this.resize();
        window.onresize = this.resize;//to fix
        this.RAF = (function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
         })();
        this.warea = {x: null, y: null, max: 20000};
        $(window).on("mousemove",this,function(e){
            e.data.mm(e);
        });
        $(window).on("onmouseout",this,this.mo);
        // window.onmousemove = this.mm();
        // window.onmouseout =  this.mo();

        this.dots = [];

        var r=(Math.floor(Math.random()*255));
        var g=(Math.floor(Math.random()*255));
        var b=(Math.floor(Math.random()*255));
        var v=0.5;
        for(var i=0;i<20;i++){
            var x = Math.random()*canvas.width;
            var y = Math.random()*canvas.height;
            var xa = Math.random() * 2*v - v*0.5;
            var ya = Math.random() * 2*v - v*0.5;

            this.dots.push({
                x: x,
                y: y,
                xa: xa,
                ya: ya,
                max: 6000
            })
        }

        this.animate();
     }

     resize(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.$canvas.css("height",window.innerWidth);
        this.$canvas.css("width",window.innerHeight);
     }

     mm(e){
        e = e || window.event;

        this.warea.x = e.clientX;
        this.warea.y = e.clientY;
    };

    mo(e){
        e.data.warea.x = null;
        e.data.warea.y = null;
    };

    eachDot(dot){

            // 粒子位移
            dot.x += dot.xa;
            dot.y += dot.ya;

            // 遇到边界将加速度反向
            dot.xa *= (dot.x > this.canvas.width || dot.x < 0)? -1 : 1;
            dot.ya *= (dot.y > this.canvas.height || dot.y < 0)? -1 : 1;

            // 绘制点
            this.ctx.fillStyle="rgba(66,65,71,0.2)";
            this.ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);

            // 循环比对粒子间的距离
            for (var i = 0; i < ndots.length; i++) {
                var d2 = ndots[i];

                if (dot === d2 || d2.x === null || d2.y === null) continue;

                var xc = dot.x - d2.x;
                var yc = dot.y - d2.y;

                // 两个粒子之间的距离
                var dis = xc * xc + yc * yc;

                // 距离比
                var ratio;

                // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
                if(dis < d2.max){

                    // 如果是鼠标，则让粒子向鼠标的位置移动
                    if (d2 === warea && dis > (d2.max / 2)) {
                        dot.x -= xc * 0.03;
                        dot.y -= yc * 0.03;
                    }

                    // 计算距离比
                    ratio = (d2.max - dis) / d2.max;

                    // 画线
                    this.ctx.beginPath();
                    this.ctx.lineWidth = ratio/2;
                    this.ctx.strokeStyle = 'rgba('
                    + (220+Math.floor(Math.random()*20))+','
                    + (10+Math.floor(Math.random()*200))+','
                    + (10+Math.floor(Math.random()*220))+',' + (ratio + 0.6) + ')';
                    this.ctx.moveTo(dot.x , dot.y);
                    this.ctx.lineTo(d2.x , d2.y);
                    this.ctx.stroke();
                }
            }

            // 将已经计算过的粒子从数组中删除
            ndots.splice(ndots.indexOf(dot), 1);
        }

    animate(){
       // ctx.clearRect(0,0,canvas.width, canvas.height);

        // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
        var ndots  = [this.warea].concat(this.dots);

        this.dots.forEach(this.eachDot(dot),this);

        this.RAF(animate);
    }

}