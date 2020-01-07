import {getPost, savePost} from '../firebase/post.js';
import {currentUser} from '../firebase/auth.js'
import {paintPost} from '../view/template.js'

//llamada a guardar post en el database
export const createPostEvent = (event) => {
    event.preventDefault();
    const contentForPost = document.querySelector('#content-for-post')
    const user = currentUser();
    savePost(user,contentForPost.value).then(() => {
    //paintMikunaPost(user);
    window.location.hash = '#/mikuna';
    }).catch(error => console.log(error));
}

export const iconPrivateEvent = (event) => {console.log(event);}

//llamada a repintar la red social
export  const  paintMikunaPost  = (user) => {
  getPost ()
    . onSnapshot (( querySnapshot ) => {
      document.querySelector(".container-list-posts").innerHTML  =  ' ' ;
      querySnapshot . forEach (( post ) => {
      //  if ( post . data (). privacity  ===  ' 1 '  || ( post . data (). uidUser  ===  user.id  &&  post . data (). privacity  ===  ' 0 ' )) {
            paintPost ( post . data (), post . id);
       //   }
        });
      });
    };

