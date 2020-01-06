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
