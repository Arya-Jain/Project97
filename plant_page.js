const firebaseConfig = {
  apiKey: "AIzaSyBAIJhRvM90EFi6ZrFpd385QMVVMa_wPCo",
  authDomain: "project97-e62e9.firebaseapp.com",
  databaseURL: "https://project97-e62e9-default-rtdb.firebaseio.com",
  projectId: "project97-e62e9",
  storageBucket: "project97-e62e9.appspot.com",
  messagingSenderId: "364520589666",
  appId: "1:364520589666:web:a701e058cec90d9d79843b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
  user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML= "Welcome <b style='color:green;'>" + user_name+"</b>!";
  document.getElementById("p").innerHTML="Hello <b>"+user_name+"</b> ! Do you know how many trees get cut everyday in order to make house or for humans benefit we  are forgotten about our mother nature we ned to protect our planet So ,  "+user_name+" will you help us in our goal to save our planet If yes click on continue if no then Thank you for visting our website"
 
function logout(){
 
    localStorage.removeItem("user_name") ;
    window.location.replace("index.html") ; 
  
}

function move(){
  window.location="plant_room.html";

}

function notIntrested(){
  window.location="index.html";
}
 