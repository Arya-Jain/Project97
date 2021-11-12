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
  plant_name= localStorage.getItem("plant_name") ;

function getData() { firebase.database().ref(plant_name).on('value', function(snapshot) {  snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
  //Start code
     
     date=message_data ['date'];
     name = message_data['name'];
     specie = message_data['specie'];
     user_name = message_data['user_name'];
     document.getElementById("U_ser_name").innerHTML = "The name of the person who planted : <b>"+user_name+"</b>";
     document.getElementById("plant_specie").innerHTML = "The specie of the plant is : <b> "+specie + "</b>";
     document.getElementById("plant_date").innerHTML = "The date on which the plant was planted: <b>"+date+"</b>";
     document.getElementById("plant_name").innerHTML = "The name of the plant : <b>"+name+"</b>";
  //End code
    } });  }); }
  getData();

  function Go_Back(){
      window.location="plant_room.html"

  }