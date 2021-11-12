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

  plant_name = localStorage.getItem("plant_specie") 

  function add_plant(){
      date = document.getElementById("date").value;
      name = document.getElementById("name").value;
      user_name = localStorage.getItem("user_name");
      specie = localStorage.getItem("plant_specie");
      firebase.database().ref(plant_name).push({
        date: date,
        name: name,
        specie:specie,
        user_name : user_name });
  }

function next_page(){
  window.location.replace("thank_you.html");
}

