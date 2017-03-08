$(document).ready(function(){
 $('.txt_in').mouseenter(function(){
 	$(this).focus();
  $(this).css("border-color","yellow");
 });
 
  $('.txt_in').mouseleave(function(){
 	$(this).blur();
  $(this).css("border-color","grey");
 });


 $('#submit_btn').click(function(){
 	         alert("Your response is sent. Thankyou for you suggestions");

 })

});
