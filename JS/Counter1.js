$(document).ready(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 400
    });
  });

  // Subscribe Newsletter
  let button = document.getElementById("btns");
  
button.addEventListener('click', (e)=> {
  e.preventDefault();
  
  let msg = document.getElementById("suscribeMsg");
  let email = document.getElementById("Email");

  console.log(email.value); 
  console.log(typeof email.value);

  if(email.value=='') msg.innerText = "Kindly Insert an email"; 
  else msg.innerText = "Sucessfully! Subscribed";

  email.value = "";
})
