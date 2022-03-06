// 
// user.js
// Use this to write your custom JS
//

$(function() {

    $(".btn-features").on("click", function() {

      //hide all sections
      $(".content-section").hide()
      //show the section depending on which button was clicked
      $("." + $(this).attr("data-section")).fadeIn()

      $('.btn-features').not(this).removeClass('activeb');    
      $(this).toggleClass('activeb');
      e.preventDefault();

      console.log(this);
    });
  
  });



window.onload=function(){
    document.getElementById("linkid").click();
    $(".section2").hide();
    
  };

  $('.Button').click(function(e) {
    $('.Button').not(this).removeClass('active');    
    $(this).toggleClass('active');
    e.preventDefault();
});


