//Datos requeridos para el Register 
export const registerLog = (register) => {
    console.log(register.name);
     firebase.auth().createUserWithEmailAndPassword(register.email, register.password)
        .then((response) => {
            console.log(response.user.uid);
            
            firebase.firestore().collection("users").doc(response.user.uid).set({
                name: register.name,
                age: register.age,
                gender: register.gender,
                email: register.email,
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
       /*  firebase.auth().onAuthStateChanged((user) => {
          console.log(user);
          
          if (user) {
            // User logged in already or has just logged in.
            console.log(user.uid);
          } else {
            // User not logged in or has just logged out.
          }
        }); */
};


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



//Si deseamos cerrar sesion 
//const loginOut = () => firebase.auth().signOut();

// propiedad que usuario esta activo//
//const currentUser = () => firebase.auth().currentUser;


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
        console.log(currentUser());
        //changeRoute('#/home');     
    }).catch((error) => {
        console.log(error);
    });
};