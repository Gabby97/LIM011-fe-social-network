import { auth } from './firebase.js';

//Login con google
export const googleLog = () => 
auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

export const facebookLog = () => 
auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());

//Login con email y password // Inicio de sesion
export const emailLog = (email, password) => 
auth.signInWithEmailAndPassword(email, password);

//Register
export const registerLog = (email, password) => 
auth.createUserWithEmailAndPassword(email, password);

// propiedad que usuario esta activo//
export const currentUser = () => 
auth.currentUser;

export const loginOut = () => 
auth.signOut();