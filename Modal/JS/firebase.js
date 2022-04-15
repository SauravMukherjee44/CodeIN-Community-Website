console.log("connected")

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAaaU2o7TKVDnOjJXuLdWAcQ-ZhTSlAhuI",
    authDomain: "codein-cba19.firebaseapp.com",
    projectId: "codein-cba19",
    storageBucket: "codein-cba19.appspot.com",
    messagingSenderId: "260247582179",
    appId: "1:260247582179:web:c902cc63870ba64e2a5cd6",
    measurementId: "G-RX3L8SV62J"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const fs = getFirestore();


  let button = document.getElementById("btns");
 
  
button.addEventListener('click', ()=> {
    let email = document.getElementById("Email").value;
    let subscribe = 1;
    subscribe++;

    setDoc(doc(fs, 'Subscribers', subscribe), {
        Email: email
    });

    email = "";
})
  
