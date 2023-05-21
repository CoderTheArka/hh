const firebaseConfig = {
    apiKey: "AIzaSyC8wgPUMiaAb3ZyiHU1ds1AopTReQJl7Oo",
    authDomain: "registration-91aca.firebaseapp.com",
    databaseURL: "https://registration-91aca-default-rtdb.firebaseio.com",
    projectId: "registration-91aca",
    storageBucket: "registration-91aca.appspot.com",
    messagingSenderId: "179474768603",
    appId: "1:179474768603:web:ae470a22b1e14eb06262fe"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var username = localStorage.getItem('sgdyenj');

  function getData() {firebase.database().ref('Searched/' + username).on('value', function(snapshot) {document.getElementById("gg").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    
   //Start code
   console.log("Room Name - "+ Room_names);
   localStorage.setItem('Names', Room_names);
   localStorage.setItem('Room_Names',Room_names);
   row = "<div id='"+Room_names+"' onclick='RedirecttoRoomName(this.id)' class='container'><div class='text'><p id='emailofother'>"+Room_names+"</p><p id='emailofother1' class='ff'></p></div></div><hr>";
  
   document.getElementById("gg").innerHTML += row;
  //End code
   });});}
getData();

function RedirecttoRoomName(name){
  alert(name);
  localStorage.setItem("room_name505", name);
  window.location = 'YourName.html';
}
function logout(){
  localStorage.removeItem('sgdyenj');
  localStorage.removeItem('room_name_1');
  localStorage.removeItem('Names');
  localStorage.removeItem('email');
  localStorage.removeItem('room_name505');
  localStorage.removeItem('Room_Names');
  window.location = 'index.html';

}



