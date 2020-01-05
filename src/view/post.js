import { createPost, getPost, saveImgPost } from '../firebase.js'
import {templatePost} from '../view/template.js'

export default (user) => {
  const postContainer = document.createElement('div');
  const postTemplate = `
  <main class = "display-flex">
  <section class="social-perfil">
  <img class="photo-current-user" src='${user.photo}'>
      <h2>${user.name}</h2>
      <h2>${user.email}</h2>
  <button class = "button">Cerrar Sesión</button>
  </section>
  <section class= "social-post border">
  <form class = "input-post">
  <textarea id = "content-for-post" placeholder="¿Tienes algo que contarnos?"></textarea>
  <div>
  <i class="fab fa-itunes"></i>
  <button id = "button-create-post" class = "field btn-publicar">Publicar</button>
  <div>
  </form>
  <div class="container-posts display-flex-column" id="container-posts"></div>
  </section>
  </main>`;

  postContainer.innerHTML = postTemplate;
  const buttonCreatePost = postContainer.querySelector('#button-create-post');
  const contentForPost = postContainer.querySelector('#content-for-post');
  const btnPrivacy = postContainer.querySelector('#button-privacy-post');
  const btnImgPost = postContainer.querySelector('#btn-img-post');
  const imgToPost = postContainer.querySelector('#img-to-post');


  
  const updateSocialNetwork = () => {
   const container = document.querySelector(".container-posts");
   container.innerHTML = '';
   getPost().onSnapshot((querySnapshot) => {
      querySnapshot.forEach((post) => {
      let userPost = {
        id: post.data().uidUser,
        nameUser: post.data().nameUser,
        photoUser: post.data().photoUser,
        contentPost: post.data().contentPost,
        datePost: post.data().publicationDate
      }
     // userPost.datePost = userPost.datePost.substring(0,userPost.datePost.indexOf("GMT"));         
      container.innerHTML += templatePost(userPost);
    });
  })
  }

  buttonCreatePost.addEventListener('click', (e) => {
    e.preventDefault();
    createPost(user, contentForPost.value).then(() => {
      /*clearFormPost();*/
      updateSocialNetwork();
    }).catch(error => console.log(error));
  });

  /*btnImgPost.addEventListener('change', (e) => {
    const imgFile = e.target.files[0];
    saveImgPost(imgFile, user.id);
  });*/

  return postContainer;

}
