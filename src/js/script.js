$(document).ready(function(){
   $('.carousel__inner').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/block1/chevron-left-solid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/block1/chevron-left-solid.png"></button>'
   });
 });

