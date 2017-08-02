var imagepos = $("#ajay-image").offset();
var imagesize = $("#ajay-image").width();

$(document).mousemove(function(event){
    // $("span").text(event.pageX + ", " + event.pageY);
    $("#ajay-image").css("left",imagepos.left+event.pageX/100);
    $("#ajay-image").css("top",imagepos.top+event.pageY/100);

    // $("#designation").text(imagepos.left+event.pageX/100);

    // if(imagepos.left==imagepos.left+event.pageX/50)
    // {
    // 	alert("ggg");
    // }
    
});