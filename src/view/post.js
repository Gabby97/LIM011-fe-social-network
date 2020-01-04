import { createPost, getPost, saveImgPost } from '../firebase.js'
import {templatePost} from '../view/template.js'

export default (user) => {
  const postContainer = document.createElement('div');
  const postTemplate = `
  <main class = "display-flex center">
  <section class="display-flex-column center social-perfil">
  <img class="photo-current-user" src='${user.photo}'>
      <h2>${user.name}</h2>
      <h2>${user.email}</h2>
  <button>Cerrar Sesión</button>
  </section>
  <section class= "display-flex-column center social-post">
  <form class = "display-flex-column center input-post">
  <textarea id = "content-for-post" placeholder="¿Tienes algo que contarnos?"></textarea>
  <div class = "display-flex center">
  <img class="img-to-post" id="img-to-post" src="">
  <input type="file" value="upload" id="btn-img-post" accept="image/png, image/jpeg"/>
  <select name="privacity">
   <option selected value="1">Publico</option>
   <option value="2">Solo YO</option>
  </select>
  <button id = button-create-post >Publicar</button>
  </div>
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
   getPost().then((response) => {
    response.forEach(post => {
      let userPost = {
        nameUser: post.data().nameUser,
        photoUser: post.data().photoUser,
        contentPost: post.data().contentPost,
        imgPost: "",
        datePost: post.data().publicationDate.toDate().toString()
      }
      userPost.datePost = userPost.datePost.substring(0,userPost.datePost.indexOf("GMT"));         
      container.innerHTML += templatePost(userPost);
    });
  })
  }

  buttonCreatePost.addEventListener('click', (e) => {
    e.preventDefault();
    createPost(user.id, user.name, user.photo, contentForPost.value, imgToPost.getAttribute('src'),new Date()).then(() => {
      /*clearFormPost();*/
      updateSocialNetwork();
    }).catch(error => console.log(error));
  });

  btnImgPost.addEventListener('change', (e) => {
    const imgFile = e.target.files[0];
    saveImgPost(imgFile, user.id);
  });

  return postContainer;

}
