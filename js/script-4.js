 $(document).ready(function(){
     $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    nav:true,
    navText:["Geri","İleri"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }

 });
});

  /* $(".owl-carousel").owlCarousel({
    loop:true,
    items:6, // Ekranda kaç nesnenin görüneceği
    nav:true, //İleri geri butonlarının görünmesini sağlar.
    navText:["Geri","İleri"], // İleri geri butonlarını Türkçeleştirmek.
    autoplay:true, // Slider otomatik olarak hareket eder.
    mouseDrag:false, // Fare ile sürükleme yapamazsınız.
    touchDrag:false, // Dokunmatik ekranlarda dokunarak sürükleme yapamazsınız.
    rtl:true, // Sağdan sola

});*/

/*Responsive*/
/*$(".owl-carousel").owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});*/