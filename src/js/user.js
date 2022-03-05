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


// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("hamburgericon").style.top = "0";
  } else {
    document.getElementById("hamburgericon").style.top = "-50px";
  }
}