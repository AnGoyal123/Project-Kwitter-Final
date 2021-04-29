
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
document.getElementById("User_name").innerHTML = "Welcome "+user_name+"!"

function addRoom(){
      room_name = document.getElementById("roomName").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row = "<div class= 'room_name' id='"+Room_names+"' onclick = 'redirectToRoomName(this.id)'># "+Room_names+ "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("userName")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}


