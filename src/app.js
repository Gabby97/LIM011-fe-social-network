import { db } from './firebase.js'

//creamos usuarios en la tabla 
export const createUserCollection = (register) => {
    db.collection("users").doc(register.id).set({
      name: register.name,
      email: register.email,
      photo: register.photo 
  });
  }

  