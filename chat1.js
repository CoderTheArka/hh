
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

  function send(){
    msg = document.getElementById('msg').value ;
    firebase.database().ref(localStorage.getItem('room_name_1') + '/').update({
      name : localStorage.getItem('sgdyenj'),
      message : msg,
      like:0
    
        });
document.getElementById("msg").value = "";
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