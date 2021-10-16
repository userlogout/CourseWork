//после перемотки главной страницы появится навигация
$(function(){

    var h = $("#header").innerHeight();
    var introH = $("#intro").innerHeight();
    var scrollOtstyp = 0;

    $(window).on("scroll", function(){
       scrollOtstyp=$(this).scrollTop();
       
       if ( scrollOtstyp >= introH ) {
           h.addClass("fixed");
       }else {
           h.removeClass("fixed");
       }
        
    });

});



//перемотка к элементам из навигации
$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    var elementId = $(this).data('scroll');
        elementOffset = $(elementId).offset().top;
    $("html, body").animate({
    scrollTop: elementOffset
    });

});








