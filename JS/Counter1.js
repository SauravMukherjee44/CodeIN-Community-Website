$(document).ready(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 400
    });
  });

// Modal JS
let button = document.getElementById("btns");
  
button.addEventListener('click', (e)=> {
  e.preventDefault();
  
  let msg = document.getElementById("suscribeMsg");
  let email = document.getElementById("Email");
    
  email.value = "";
  msg.innerText = "Sucessfully! Subscribed";
  msg.style.color = "#f195a3";
    
})
  
