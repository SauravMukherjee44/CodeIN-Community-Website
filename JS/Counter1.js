$(document).ready(function(){
  $('.counter-value').each(function(){
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      },{
          duration: 3500,
          easing: 'swing',
          step: function (now){
              $(this).text(Math.ceil(now));
          }
      });
  });
});
// Subscribe Newsletter
let button = document.getElementById("btns");

button.addEventListener('click', (e)=> {
e.preventDefault();

let msg = document.getElementById("suscribeMsg");
let email = document.getElementById("Email");
  
email.value = "";
msg.innerText = "Sucessfully! Subscribed";    
})
