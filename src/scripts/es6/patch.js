export default function patchAll(){
    $("#switcher").on('click',function(){
    	$("#newCount").css("display","none");
    	$("#countInfo").css("display","block");
    });
    $("#abortCount").on('click',function(){
        $("#newCount").css("display","block");
    	$("#countInfo").css("display","none");
    })
    $("#renewCount").on('click',function(){
        $("#countPlace").val("");
    	$("#countTime").val("");
    	$("#countText").val("");
    })

    $("#checkTimeNow").on('change',function(){
        var myDate=new Date();
       alert($("#checkTimeNow").val())
       //alert(myDate.getFullYear()+"-"+myDate.getMonth()+"-"+myDate.getDate())
    })




}
