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
  room_name = localStorage.getItem("room_name");

  function send()
{
    msg = document.getElementById("msg").nodeValue;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

//End code
    } });  }); }
getData();
function updateLike(message_id) 
{
console.log("clicked on like button- "+message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
    like: updated_likes
});
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
}