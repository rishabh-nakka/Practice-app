
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2TX3M3WADW5Qk9QetRqugkJKgh5-A7iA",
    authDomain: "information-saver.firebaseapp.com",
    databaseURL: "https://information-saver-default-rtdb.firebaseio.com/",
    projectId: "information-saver",
    storageBucket: "information-saver.appspot.com",
    messagingSenderId: "610307117395",
    appId: "1:610307117395:web:b9a4dd95b5791ee804d1a6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function save(){
      var user_name= document.getElementById("user_input").value;
      var mail_id= document.getElementById("email_input").value;
      var mobile_number= document.getElementById("mobile_input").value;
      firebase.database().ref("/").child(user_name).update({
          email:mail_id,mobile:mobile_number
      });
  }