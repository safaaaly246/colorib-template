/*  ---------------------------------------------------
    Template Name: Fashi
    Description: Fashi eCommerce HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */


$(window).scroll(function(){
    var sc =  $(window).scrollTop()
     if(sc>0){
      $(".navbar").addClass("navbar1")
     console.log("welcome back")
 
     }  
     else {
              $(".navbar").removeClass("navbar1").removeClass("navbar2");
           }
   })

   
     // WOW ANIMATION
     new WOW({ mobile: false }).init();

//   var set =  document.getElementById("set")
//   set.addEventListener("click",function(){
//       setInterval(function(){
//           alert("hello")
//       },1000); 

//   })

 // Testimonials carousel (uses the Owl Carousel library)
 $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  $(document).ready(function() {

    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });
    
    });
