import { getPost, savePost } from '../firebase/post.js';
import { currentUser } from '../firebase/auth.js';
import { paintPost } from '../view/template.js';
//  llamada a guardar post en el database
export const createPostEvent = (event) => {
  event.preventDefault();
  const contentForPost = document.querySelector('#content-for-post');
  const user = currentUser();
  savePost(user, contentForPost.value).then(() => {
  // paintMikunaPost(user);
    window.location.hash = '#/mikuna';
  }).catch();
};
//  export const iconPrivateEvent = (event) => { console.log(event); };
// llamada a repintar la red social
export const paintMikunaPost = () => {
  getPost().onSnapshot((querySnapshot) => {
    document.querySelector('.container-list-posts').innerHTML = '';
    querySnapshot.forEach((post) => {
      paintPost(post.data(), post.id);
    });
  });
};
