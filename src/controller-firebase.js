firebase.initializeApp({
    apiKey: "AIzaSyDbD06CrpZ2ItVxy4f33eRlbFM8GX_CF9k",
    authDomain: "social-network-b3bb7.firebaseapp.com",
    databaseURL: "https://social-network-b3bb7.firebaseio.com",
    projectId: "social-network-b3bb7",
    storageBucket: "social-network-b3bb7.appspot.com",
    messagingSenderId: "2817858639",
    appId: "1:2817858639:web:70c63c4b90a28861d8de3a",
    measurementId: "G-5WZN70EDCZ"
  });

const db = firebase.firestore();
const dba = firebase.auth();


db.collection('users').doc('marcvdo@gmail.com').set({
    name: 'Maria',
    lastName: 'López',
    gender: 'Female',
    age: '22'
});
dba.createUserWithEmailAndPassword('marcvdo@gmail.com', '123455abd').catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
