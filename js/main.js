$(function(){

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$('button').on('click', function(event){

  var newEmail = $('input').val();

  if(isEmail(newEmail)){
  event.preventDefault();
  $('input').text('');
  prompt("Thanks for subscribing!");


  }else if(newEmail === ''){
    event.preventDefault();
    alert("Please submit a valid email address.");
  }

});


});
