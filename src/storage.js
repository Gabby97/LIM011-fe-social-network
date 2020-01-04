import { storage } from './firebase.js';
//import { db } from './firebase.js';
//import { db } from './firebase.js'

// Subimos un archivo dentro de images del storage 

export const uploadPostImage = (file) => {
    const storageRef = storage.ref();
    // Points to 'images'
    const imagesRef = storageRef.child('images');
    
    
    // Note that you can use variables to create child values
   const ref = imagesRef.child(file.name);
  
    console.log(file.name);
    
  
    ref.put(file).then((snapshot) => {
      console.log(snapshot);
    }).catch((e) => {
        console.log(e);
        
    });
  };