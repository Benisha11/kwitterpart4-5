//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyADtCKROgRj8sUvw1NND9vzEO1_gHwtRyE",
  authDomain: "kwitter-f546b.firebaseapp.com",
  databaseURL: "https://kwitter-f546b.firebaseio.com",
  projectId: "kwitter-f546b",
  storageBucket: "kwitter-f546b.appspot.com",
  messagingSenderId: "774768451832",
  appId: "1:774768451832:web:357dd3bfa45d419c135b0d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Hi , Welcome "+ user_name + " !";
function addRoom()
{
 room_name=document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="chat_page.html";
}
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("room name"+Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;

 //End code
 });
  });
  }
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="chat_page.html";  
}
