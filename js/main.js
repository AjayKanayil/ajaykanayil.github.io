var imagepos = $("#ajay-image").offset();
var imagesize = $("#ajay-image").width();



$(document).mousemove(function(event){
    // $("span").text(event.pageX + ", " + event.pageY);
    $("#ajay-image").css("left",imagepos.left+event.pageX/20);
    $("#ajay-image").css("top",imagepos.top+event.pageY/20);

    // $("#designation").text(imagepos.left+event.pageX/100);

    // if(imagepos.left==imagepos.left+event.pageX/50)
    // {
    // 	alert("ggg");
    // }



    $('.contact-me-modal').on('show.bs.modal', function (e) {
    	$('#mainBody, #ajay-image').css({
    		'-webkit-transform': 'scale(' + .1 + ')',
    		'-moz-transform': 'scale(' + .1 + ')',
    		'-ms-transform': 'scale(' + .1 + ')',
    		'-o-transform': 'scale(' + .1 + ')',
    		'transform': 'scale(' + .1 + ')',
    		'transition': 'transform ease-out 90s'
    	});

    	$('#contact-image').css({
    		'-webkit-transform': 'scale(' + .1 + ')',
    		'-moz-transform': 'scale(' + .1 + ')',
    		'-ms-transform': 'scale(' + .1 + ')',
    		'-o-transform': 'scale(' + .1 + ')',
    		'transform': 'scale(' + .1 + ')',
    		'transition': 'all ease-out 90s',
    		'visibility': 'visible',
    		'opacity': '1'
    	})
    });

    $('.contact-me-modal').on('hide.bs.modal', function (e) {
    	$('#mainBody, #ajay-image').css({
    		'-webkit-transform': 'scale(' + 1 + ')',
    		'-moz-transform': 'scale(' + 1 + ')',
    		'-ms-transform': 'scale(' + 1 + ')',
    		'-o-transform': 'scale(' + 1 + ')',
    		'transform': 'scale(' + 1 + ')',
    		'transition': '.3s'
    	});

    	$('#contact-image').css({
    		'-webkit-transform': 'scale(' + 1 + ')',
    		'-moz-transform': 'scale(' + 1 + ')',
    		'-ms-transform': 'scale(' + 1 + ')',
    		'-o-transform': 'scale(' + 1 + ')',
    		'transform': 'scale(' + 1 + ')',
    		'transition': '.3s',
    		'visibility': 'hidden',
    		'opacity': '0'
    	})
    });


    $('.contact-me-modal').on('hidden.bs.modal', function (e) {
    	
    	$('#ajay-image').css({
    		'transition': '.0s'
    	});

    	$('#contact-image').css({
    		'visibility': 'hidden',
    		'opacity':'0'
    	})
    });
    
});