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





var user = localStorage.getItem('room_name505'); ;
function addRoom(){

   var username = localStorage.getItem('sgdyenj');
    console.log(username);
    firebase.database().ref("Rooms/" + username + '/').child(document.getElementById('kjkj').value).update({
    purpose : "adding room name"

    });
    localStorage.setItem("room_name",document.getElementById('kjkj').value);
    document.getElementById('kjkj').innerHTML = '';
  }

  function getData() {firebase.database().ref("Rooms/" + user + '/').on('value', function(snapshot) {document.getElementById("reciver").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - "+ Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("reciver").innerHTML += row;
  //End code
   });});}
getData();
var username = localStorage.getItem('sgdyenj');
function getData1() {firebase.database().ref("Rooms/" + username + '/').on('value', function(snapshot) {document.getElementById("sender").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey1  = childSnapshot.key;
    Room_names1 = childKey1;
   //Sta
   console.log("Room Name - "+ Room_names1);
   row = "<div class='room_name' id="+Room_names1+" onclick='redirecttoRoomName1(this.id)' >#"+Room_names1+"</div><hr>";
   document.getElementById("sender").innerHTML += row;
  //End code
   });});}
getData1();

function redirecttoRoomName(name){
   console.log(name);
   localStorage.setItem("room_name_1", name);
   window.location = "chat_page.html"
}
function redirecttoRoomName1(name){
    console.log(name);
    localStorage.setItem("room_name_1", name);
    window.location = "chat_page.html"
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