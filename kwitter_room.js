var firebaseConfig = {
    apiKey: "AIzaSyBJ3tzWi0-RPj9QnWsScoMyVQ9Rb1LQbTA",
    authDomain: "kwitter-c363e.firebaseapp.com",
    databaseURL: "https://kwitter-c363e-default-rtdb.firebaseio.com",
    projectId: "kwitter-c363e",
    storageBucket: "kwitter-c363e.appspot.com",
    messagingSenderId: "692186094505",
    appId: "1:692186094505:web:7a25a62b389bb5191602b8",
    measurementId: "G-YJW8JD953W"
  };

  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";
  function addRoom() {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"Adding Room Name"
        });
        localStorage.setItem("room_name",room_name);
        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
     Room_names = childKey;
    
console.log("Room Name - "+room_names);
row = "<div class='room_name' id= " + room_names +"onclick = 'redirectToRoomName(this.id)'>#"+room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row;
    });
});
}
getData();
function redirectToRoomName(name) 
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}