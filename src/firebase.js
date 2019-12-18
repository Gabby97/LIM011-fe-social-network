//Datos requeridos para el Register 
export const registerLog = (register) => {
    console.log(register.name);
     firebase.auth().createUserWithEmailAndPassword(register.email, register.password)
        .then((response) => {
            console.log(response.user.uid);
            createUserCollection(register, response.user.uid);
          /*   firebase.firestore().collection("users").doc(response.user.uid).set({
                name: register.name,
                age: register.age,
                gender: register.gender,
                email: register.email,
            }); */
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
};

const createUserCollection = (register, id) => {
  firebase.firestore().collection("users").doc(id).set({
    name: register.name,
    email: register.email 
});
}


//Login con email y password // Inicio de sesion
const emailLog = (email, password) => firebase.auth()
    .signInWithEmailAndPassword(email, password);


export const controlLogin = (email, password) => {
    emailLog(email, password).then((response) => {
        console.log(response);
        console.log('usuario registrado');
        //changeRoute('#/home');    
    }).catch((error) => {
        console.log(error.message);
    });
}


//Login con facebook
const facebookLog = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};
//Login con google
const googleLog = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};

// propiedad que usuario esta activo//
const currentUser = () => firebase.auth().currentUser;


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