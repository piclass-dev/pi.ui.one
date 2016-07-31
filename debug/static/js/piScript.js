   
export class errorCanvas{
     constructor(canvas){
        this.$canvas =canvas;
        this.ctx=this.$canvas.getContext("2d");
        this.resize();
        window.onresize = resize;//to fix
        this.RAF = (function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
         })();
        this.warea = {x: null, y: null, max: 20000};
        window.onmousemove = mm;
        window.onmouseout =  mo;

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
     }

     resize(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.$canvas.css("height",window.innerWidth);
        this.$canvas.css("width",window.innerHeight);
     }

     mm(e){
        e = e || window.event;

        warea.x = e.clientX;
        warea.y = e.clientY;
    };

    mo(e){
        warea.x = null;
        warea.y = null;
    };

    animate(){
       // ctx.clearRect(0,0,canvas.width, canvas.height);

        // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
        var ndots  = [warea].concat(dots);

        this.dots.forEach(function(dot){

            // 粒子位移
            dot.x += dot.xa;
            dot.y += dot.ya;

            // 遇到边界将加速度反向
            dot.xa *= (dot.x > this.$canvas.width || dot.x < 0)? -1 : 1;
            dot.ya *= (dot.y > this.$canvas.height || dot.y < 0)? -1 : 1;

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
        });

        this.RAF(animate);
    }

}




    var canvas = document.getElementById("cas");
    var ctx = canvas.getContext("2d");
 
    resize();
    window.onresize = resize;

    function resize(){
 //       canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
 //       canvas.height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
                canvas.width = window.innerWidth;
            document.getElementById("cas").style.height=window.innerHeight;   
       
        canvas.height = window.innerHeight;
    }

    var RAF = (function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
    })();

    // 鼠标活动时，获取鼠标坐标
    var warea = {x: null, y: null, max: 20000};
    window.onmousemove = function(e){
        e = e || window.event;

        warea.x = e.clientX;
        warea.y = e.clientY;
    };
    window.onmouseout = function(e){
        warea.x = null;
        warea.y = null;
    };

    // 添加粒子
    // x，y为粒子坐标，xa, ya为粒子xy轴加速度，max为连线的最大距离
    var dots = [];

    var r=(Math.floor(Math.random()*255));
    var g=(Math.floor(Math.random()*255));
    var b=(Math.floor(Math.random()*255));
    var v=0.5;
    for(var i=0;i<20;i++){
        var x = Math.random()*canvas.width;
        var y = Math.random()*canvas.height;
        var xa = Math.random() * 2*v - v*0.5;
        var ya = Math.random() * 2*v - v*0.5;

        dots.push({
            x: x,
            y: y,
            xa: xa,
            ya: ya,
            max: 6000
        })
    }

    // 延迟100秒开始执行动画，如果立即执行有时位置计算会出错
    setTimeout(function(){
        animate();
    }, 300);

    // 每一帧循环的逻辑
    function animate(){
       // ctx.clearRect(0,0,canvas.width, canvas.height);

        // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
        var ndots  = [warea].concat(dots);

        dots.forEach(function(dot){

            // 粒子位移
            dot.x += dot.xa;
            dot.y += dot.ya;

            // 遇到边界将加速度反向
            dot.xa *= (dot.x > canvas.width || dot.x < 0)? -1 : 1;
            dot.ya *= (dot.y > canvas.height || dot.y < 0)? -1 : 1;

            // 绘制点
            ctx.fillStyle="rgba(66,65,71,0.2)";
            ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);

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
                    ctx.beginPath();
                    ctx.lineWidth = ratio/2;
                    ctx.strokeStyle = 'rgba('
                    + (220+Math.floor(Math.random()*20))+','
                    + (10+Math.floor(Math.random()*200))+','
                    + (10+Math.floor(Math.random()*220))+',' + (ratio + 0.6) + ')';

                    // if(r>=240||r<=20||g>=240||g<=20||b>=240||b<=20){
                    // r=Math.floor(r+(Math.random()-0.5)*2-(r-178)/178);
                    // g=Math.floor(g+(Math.random()-0.5)*2-(g-178)/178);
                    // b=Math.floor(b+(Math.random()-0.5)*2-(b-178)/178);
                    // }else{
                    // r=Math.floor(r+(Math.random()-0.5)*2);
                    // g=Math.floor(g+(Math.random()-0.5)*2);
                    // b=Math.floor(b+(Math.random()-0.5)*2);
                    // }
                    // ctx.strokeStyle = 'rgba('
                    // + r+','
                    // + g+','
                    // + b+',' + (ratio + 0.6) + ')';
                    ctx.moveTo(dot.x , dot.y);
                    ctx.lineTo(d2.x , d2.y);
                    ctx.stroke();
                }
            }

            // 将已经计算过的粒子从数组中删除
            ndots.splice(ndots.indexOf(dot), 1);
        });

        RAF(animate);
    }
//avatar
(function () {

var avatar=function(User,element){
	this.$element=element;
	this.User=User;
}
 
          

//create avatar obj
$('[data-toggle="avatar"]').each(function(){
	var $this   = $(this);
	var name = $this.attr('data-src');
	var type = $this.attr('data-srcType');
	var user = new User(name,type);
    $this.data("pi.avatar",(data=new avatar(user,$this)));
})


})(jQuery);




// var fileBlock(){

// }
//modal
//mk 

(function () {

var modal=function(element,target,deleteTarget){
    //modal button 
    this.$element = element;
    //modal
    this.$target=target;
    //modal close button
    this.$deleteTarget=deleteTarget;
 //   this.modalVisible=false;
    this.regi();
}


modal.prototype.show=function(){
	this.$target.css('display','block');

}
modal.prototype.hide=function(){
	this.$target.css('display','none');
}

// modal.prototype.change=function(){

// }

//registe event
modal.prototype.regi=function(){

    this.$element.on('click.pi.modal',function(e){
	    m=$(this).data("pi.modal");
        m.show();
    });
    //save the modal button position
    this.$deleteTarget.data("pi.modalMother",this.$element);

    this.$deleteTarget.on('click.pi.modal',function(e){
	    m=$($(this).data("pi.modalMother")).data("pi.modal");
        m.hide();
    });
}

// create modal object
$('[data-toggle="modal"]').each(function(){
	var $this   = $(this);
	var $target = $($this.attr('data-target'));
	var $deleteTarget = $target.find('[data-dismiss="modal"]');
    $this.data("pi.modal",(data=new modal($this,$target,$deleteTarget)));
})

	
})(jQuery);
	
////用户类

var User=function(name,type){
	this.name=name;
	this.type=type;

	this.md5=function(string){
	    function md5_RotateLeft(lValue, iShiftBits) {
	        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
	    }
	    function md5_AddUnsigned(lX, lY) {
	        var lX4, lY4, lX8, lY8, lResult;
	        lX8 = (lX & 0x80000000);
	        lY8 = (lY & 0x80000000);
	        lX4 = (lX & 0x40000000);
	        lY4 = (lY & 0x40000000);
	        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
	        if (lX4 & lY4) {
	            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
	        }
	        if (lX4 | lY4) {
	            if (lResult & 0x40000000) {
	                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
	            } else {
	                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
	            }
	        } else {
	            return (lResult ^ lX8 ^ lY8);
	        }
	    }
	    function md5_F(x, y, z) {
	        return (x & y) | ((~x) & z);
	    }
	    function md5_G(x, y, z) {
	        return (x & z) | (y & (~z));
	    }
	    function md5_H(x, y, z) {
	        return (x ^ y ^ z);
	    }
	    function md5_I(x, y, z) {
	        return (y ^ (x | (~z)));
	    }
	    function md5_FF(a, b, c, d, x, s, ac) {
	        a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac));
	        return md5_AddUnsigned(md5_RotateLeft(a, s), b);
	    };
	    function md5_GG(a, b, c, d, x, s, ac) {
	        a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac));
	        return md5_AddUnsigned(md5_RotateLeft(a, s), b);
	    };
	    function md5_HH(a, b, c, d, x, s, ac) {
	        a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac));
	        return md5_AddUnsigned(md5_RotateLeft(a, s), b);
	    };
	    function md5_II(a, b, c, d, x, s, ac) {
	        a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac));
	        return md5_AddUnsigned(md5_RotateLeft(a, s), b);
	    };
	    function md5_ConvertToWordArray(string) {
	        var lWordCount;
	        var lMessageLength = string.length;
	        var lNumberOfWords_temp1 = lMessageLength + 8;
	        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
	        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
	        var lWordArray = Array(lNumberOfWords - 1);
	        var lBytePosition = 0;
	        var lByteCount = 0;
	        while (lByteCount < lMessageLength) {
	            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
	            lBytePosition = (lByteCount % 4) * 8;
	            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
	            lByteCount++;
	        }
	        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
	        lBytePosition = (lByteCount % 4) * 8;
	        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
	        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
	        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
	        return lWordArray;
	    };
	    function md5_WordToHex(lValue) {
	        var WordToHexValue = "",
	        WordToHexValue_temp = "",
	        lByte, lCount;
	        for (lCount = 0; lCount <= 3; lCount++) {
	            lByte = (lValue >>> (lCount * 8)) & 255;
	            WordToHexValue_temp = "0" + lByte.toString(16);
	            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
	        }
	        return WordToHexValue;
	    };
	    function md5_Utf8Encode(string) {
	        string = string.replace(/\r\n/g, "\n");
	        var utftext = "";
	        for (var n = 0; n < string.length; n++) {
	            var c = string.charCodeAt(n);
	            if (c < 128) {
	                utftext += String.fromCharCode(c);
	            } else if ((c > 127) && (c < 2048)) {
	                utftext += String.fromCharCode((c >> 6) | 192);
	                utftext += String.fromCharCode((c & 63) | 128);
	            } else {
	                utftext += String.fromCharCode((c >> 12) | 224);
	                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
	                utftext += String.fromCharCode((c & 63) | 128);
	            }
	        }
	        return utftext;
	    };
	    var x = Array();
	    var k, AA, BB, CC, DD, a, b, c, d;
	    var S11 = 7,
	    S12 = 12,
	    S13 = 17,
	    S14 = 22;
	    var S21 = 5,
	    S22 = 9,
	    S23 = 14,
	    S24 = 20;
	    var S31 = 4,
	    S32 = 11,
	    S33 = 16,
	    S34 = 23;
	    var S41 = 6,
	    S42 = 10,
	    S43 = 15,
	    S44 = 21;
	    string = md5_Utf8Encode(string);
	    x = md5_ConvertToWordArray(string);
	    a = 0x67452301;
	    b = 0xEFCDAB89;
	    c = 0x98BADCFE;
	    d = 0x10325476;
	    for (k = 0; k < x.length; k += 16) {
	        AA = a;
	        BB = b;
	        CC = c;
	        DD = d;
	        a = md5_FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
	        d = md5_FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
	        c = md5_FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
	        b = md5_FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
	        a = md5_FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
	        d = md5_FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
	        c = md5_FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
	        b = md5_FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
	        a = md5_FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
	        d = md5_FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
	        c = md5_FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
	        b = md5_FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
	        a = md5_FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
	        d = md5_FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
	        c = md5_FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
	        b = md5_FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
	        a = md5_GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
	        d = md5_GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
	        c = md5_GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
	        b = md5_GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
	        a = md5_GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
	        d = md5_GG(d, a, b, c, x[k + 10], S22, 0x2441453);
	        c = md5_GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
	        b = md5_GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
	        a = md5_GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
	        d = md5_GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
	        c = md5_GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
	        b = md5_GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
	        a = md5_GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
	        d = md5_GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
	        c = md5_GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
	        b = md5_GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
	        a = md5_HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
	        d = md5_HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
	        c = md5_HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
	        b = md5_HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
	        a = md5_HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
	        d = md5_HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
	        c = md5_HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
	        b = md5_HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
	        a = md5_HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
	        d = md5_HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
	        c = md5_HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
	        b = md5_HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
	        a = md5_HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
	        d = md5_HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
	        c = md5_HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
	        b = md5_HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
	        a = md5_II(a, b, c, d, x[k + 0], S41, 0xF4292244);
	        d = md5_II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
	        c = md5_II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
	        b = md5_II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
	        a = md5_II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
	        d = md5_II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
	        c = md5_II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
	        b = md5_II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
	        a = md5_II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
	        d = md5_II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
	        c = md5_II(c, d, a, b, x[k + 6], S43, 0xA3014314);
	        b = md5_II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
	        a = md5_II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
	        d = md5_II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
	        c = md5_II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
	        b = md5_II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
	        a = md5_AddUnsigned(a, AA);
	        b = md5_AddUnsigned(b, BB);
	        c = md5_AddUnsigned(c, CC);
	        d = md5_AddUnsigned(d, DD);
	    }
	    return (md5_WordToHex(a) + md5_WordToHex(b) + md5_WordToHex(c) + md5_WordToHex(d)).toLowerCase();
	}
	this.signature=this.md5(this.name);

}






