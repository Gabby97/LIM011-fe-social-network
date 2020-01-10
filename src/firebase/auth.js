
//Register 
export const registerLog = (register) => 
firebase.auth().createUserWithEmailAndPassword(register.email, register.password);

export const createUserCollection = (register, id) => {
    firebase.firestore().collection("users").doc(id).set({
      nombre: register.name,
      correo: regiter.email 
  });
  }

//Login con google
export const googleLog = () => firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

//Login con email y password // Inicio de sesion
export const emailLog = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

//Login con facebook
export const facebookLog = () => firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());

//usuario actual
export const currentUser = () => {
    const user = firebase.auth().currentUser;
    const userData = {
        id: user.uid,
        name: (user.displayName === null) ? 'Anonimo' : user.displayName,
        email: user.email,
        photo: (user.photoURL === null) ? './image/photo.png' : user.photoURL
    }
    return userData;
}

//cerrar sesion
export const signOut = () => firebase.auth().signOut();

