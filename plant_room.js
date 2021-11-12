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

 
 

function addplant(){
    
   plant_specie= document.getElementById("plant_name").value;

   firebase.database().ref("/").child(plant_specie).update({
        purpose:"adding plant name"
    });

    localStorage.setItem("plant_specie",plant_specie);
       
     window.location="user_plant.html";
 
 }

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Plant_names = childKey;
  //Start code
   row="<div class='plant_name' id="+Plant_names+" onclick='RedirectToPlantName(this.id)' ><center><img  id= 'plant_image' src='download.jpg' >"+Plant_names+" </div> <hr color='green'></center>";
   document.getElementById("output").innerHTML += row;
  //End code
  });});}

  function RedirectToPlantName(name){
   console.log(name);
   localStorage.setItem("plant_name",name);
   window.location="plants_by_other_people.html";
}

getData();

 function logout(){
  
 
    localStorage.removeItem("user_name") ;
    window.location.replace("index.html") ; 
  

 }