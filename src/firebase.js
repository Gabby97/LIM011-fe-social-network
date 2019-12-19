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


<<<<<<< HEAD
=======
export const controlFb = () => {
    facebookLog().then((response) => {
        console.log(response);
        //changeRoute('#/home');    
    }).catch((error) => {
        console.log(error);
    });
};

export const controlGoogle = () => {
    googleLog().then((response) => {
        console.log(response);
        const register = {
          name: response.isplayName,
          email: response.email,
        }
        createUserCollection(register, response.user.uid);
        console.log(response.user.uid);
        //changeRoute('#/home');     
    }).catch((error) => {
        console.log(error);
        console.log('holaaa, esta listo');
        console.log('cambio de rama');

        
    });
};
>>>>>>> b9d9a0818546bb420d07608504b50ab513bf6787
