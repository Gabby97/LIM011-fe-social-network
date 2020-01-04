  const app = firebase.initializeApp({
    apiKey: "AIzaSyDbD06CrpZ2ItVxy4f33eRlbFM8GX_CF9k",
    authDomain: "social-network-b3bb7.firebaseapp.com",
    databaseURL: "https://social-network-b3bb7.firebaseio.com",
    projectId: "social-network-b3bb7",
    storageBucket: "gs://social-network-b3bb7.appspot.com",
    messagingSenderId: "2817858639",
    appId: "1:2817858639:web:70c63c4b90a28861d8de3a",
    measurementId: "G-5WZN70EDCZ"
  })
console.log(app);

// Exportar el store para guardar datos en la base de datos 
// que no es en tiempo real
  export const db = app.firestore();
//Exportamos storage para la subida de archivos
  export const storage = app.storage();
// Exortas el auth para la autenticacion
  export const auth = app.auth();

//Register 
export const registerLog = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

//Login con google
export const googleLog = () => firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

//Login con email y password // Inicio de sesion
export const emailLog = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

//Login con facebook
export const facebookLog = () => firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());

// Solicitar datos del usuario activo
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
  
//crear post
export const createPost = (uidUser, nameUser, photoUser, contentPost, publicationDate) => firebase.firestore()
  .collection('posts')
  .add({
    uidUser,
    nameUser,
    photoUser,
    contentPost,
    like: [],
    publicationDate,
  });

export const getPost = () => firebase.firestore().collection("posts").get();

export const saveImgPost = (imgFile, uidUser) => {
  if (imgFile) {
    const upload = firebase.storage().ref(`images/${uidUser}/${imgFile.name}`)
    upload.put(imgFile);
    console.log(imgFile.name);
    console.log(imgFile);   
    
  }
};



  

//post

