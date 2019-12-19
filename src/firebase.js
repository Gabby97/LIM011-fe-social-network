//Register 
export const registerLog = (email,password) => firebase.auth().createUserWithEmailAndPassword(email, password);

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
const currentUser = () => firebase.auth().currentUser;

