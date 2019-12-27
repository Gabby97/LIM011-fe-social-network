//Inicializar firebase
export const firebaseInitialize =() => {
  firebase.initializeApp({
      apiKey: "AIzaSyDbD06CrpZ2ItVxy4f33eRlbFM8GX_CF9k",
      authDomain: "social-network-b3bb7.firebaseapp.com",
      databaseURL: "https://social-network-b3bb7.firebaseio.com",
      projectId: "social-network-b3bb7",
      storageBucket: "social-network-b3bb7.appspot.com",
      messagingSenderId: "2817858639",
      appId: "1:2817858639:web:70c63c4b90a28861d8de3a",
      measurementId: "G-5WZN70EDCZ"
    //appId: '1:380076541838:web:8c591a8b9d53bb4b',
  });
  }

//Register 
export const registerLog = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

//Login con google
export const googleLog = () => firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

//Login con email y password // Inicio de sesion
export const emailLog = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

//Login con facebook
export const facebookLog = () => firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());

//Insertar en la base de datos
export const createUserCollection = (register) => {
  firebase.firestore().collection("users").doc(register.id).set({
    name: register.name,
    email: register.email,
    photo: register.photo 
});
}

// propiedad que usuario esta activo//
export const currentUser = () => firebase.auth().currentUser;

//post

