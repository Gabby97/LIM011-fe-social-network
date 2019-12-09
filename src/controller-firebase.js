firebase.initializeApp({
    apiKey: "AIzaSyDbD06CrpZ2ItVxy4f33eRlbFM8GX_CF9k",
    authDomain: "social-network-b3bb7.firebaseapp.com",
    projectId: "social-network-b3bb7",
  });

const db = firebase.firestore();

db.collection('users').doc('gabbacvdo@gmail.com').set({
    name: 'Gaby',
    lastName: 'Acevedo',
    gender: 'Female',
    age: '22'
});
db.Auth().signInWithEmailAndPassword('gabbacvdo@gmail.com', '123455').catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });