
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyDl8fs441eRLaRtBKQHJEg1-_9ZM__bnNk",
  authDomain: "apparriendo.firebaseapp.com",
  databaseURL: "https://apparriendo.firebaseio.com",
  projectId: "apparriendo",
  storageBucket: "apparriendo.appspot.com",
  messagingSenderId: "723239490047"
};
firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Usuario a ingresado

           
    } else {
      window.open("index.html","_self");
    }
  });


  function salir(){

    firebase.auth().signOut().then(function() {
      window.open("index.html","_self")
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }


 
