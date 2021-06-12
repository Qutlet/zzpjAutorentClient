import firebase from 'firebase';

var firebaseConfig = {
    apiKey: 'AIzaSyBKRJgZ3cdJkP6MyEvF-utoX9xREKQBwwE',
    authDomain: "autorent-a82d9.firebaseapp.com",
    databaseURL: 'https://autorent-a82d9-default-rtdb.europe-west1.firebasedatabase.app/',
    storageBucket: "autorent-a82d9.appspot.com"
  };
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;

//AIzaSyBKRJgZ3cdJkP6MyEvF-utoX9xREKQBwwE