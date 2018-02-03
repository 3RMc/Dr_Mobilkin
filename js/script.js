



    // SLIDER MEDIA

$(document).ready(function () {

var mql = window.matchMedia('all and (max-width: 600px)');
if (mql.matches) {
    $(".slide2").addClass("slide");
} else {
    // нет, размер окна более 
};

    if($(window).width() < 767) {
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var ul = $(".clM"); // тут указываем ID элемента
            if (!ul.is(e.target) // если клик был не по нашему блоку
                && ul.has(e.target).length === 0) { // и не по его дочерним элементам
                ul.css( "visibility" , "hidden"); // скрываем его
            }
        });
    } else {
        // change functionality for larger screens
    }

    $(".main-nav").click ( function () {
        $(".main-nav").css( "overflow" , "visible");
        $("ul.main-nav > li > a").css( "visibility" , "visible");
    });


    // PopUp1

    $(".shadWindow").css("display" , "none");

    $(".order").click ( function () {
        $(".shadWindow").css("display" , "block");	
    });

    $(".close").click ( function () {
        $(".shadWindow").css("display" , "none");	
    });

    $(".shadWindow").css("display" , "none");

    $(".orderFt").click ( function () {
        $(".shadWindow").css("display" , "block");	
    });

    $(".close").click ( function () {
        $(".shadWindow").css("display" , "none");	
    });    

    // PopUp2

    $(".shadWindow2").css("display" , "none");

    $(".gadgets").click ( function () {
        $(".shadWindow2").css("display" , "block");	
    });

    $(".close").click ( function () {
        $(".shadWindow2").css("display" , "none");	
    });

    // PopUp3

    $(".shadWindow3").css("display" , "none");

    $(".watchhref").click ( function () {
        $(".shadWindow3").css("display" , "block");
        $(".frame1").css("display" , "block");
    });

    $(".close").click ( function () {
        $(".frame1").css("display" , "none");
        $(".shadWindow3").css("display" , "none");   
    });  
   
      
   // Scroll
			// Плавный скролл по якорям
			$('a[href^="#"]').click(function () { 
			    elementClick = $(this).attr("href");
				destination = $(elementClick).offset().top;
				if($.browser.safari){
				$('body').animate( { scrollTop: destination }, 1000 );
				} else {
			    	$('html').animate( { scrollTop: destination }, 1000 );
				}
				return false;
		   });

});

   




