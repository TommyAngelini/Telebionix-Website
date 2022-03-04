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

      console.log(this);
    });
  
  });


window.onload=function(){
    document.getElementById("linkid").click();
    $(".section2").fadeOut();
    
  };