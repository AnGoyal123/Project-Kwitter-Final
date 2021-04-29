//YOUR FIREBASE 
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDYZFVgcvRzxBPAClb0G9OjRZOCD7N_jtc",
      authDomain: "kwitter-project-624db.firebaseapp.com",
      databaseURL: "https://kwitter-project-624db-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-624db",
      storageBucket: "kwitter-project-624db.appspot.com",
      messagingSenderId: "617061220847",
      appId: "1:617061220847:web:e2425417e097bed297761a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("userName");
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          })
          document.getElementById("msg").value = "";
    }

function logout(){
      localStorage.removeItem("userName");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log("------------");
console.log(message_data);

name = message_data['name']
message = message_data['message']
like = message_data['like']

part1 = "<h4>" + name+ "<img class='user_tick' src='tick.png'></h4>";
part2 = "<h4 class='message_h4'>" + message+ "</h4>"

part3 = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
part4 = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like+"</span></button><hr>"

row = part1 + part2 + part3 + part4;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked button like");
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      })
}