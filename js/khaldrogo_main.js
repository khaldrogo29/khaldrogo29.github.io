$(document).ready(function(){
 $('.txt_in').mouseenter(function(){
 	$(this).focus();
  $(this).css("border-color","yellow");
 });

 $('#submit_btn').click(function(){
 	         alert("Your response is sent. Thankyou for you suggestions");

 })

});
