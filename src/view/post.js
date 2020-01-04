import { currentUser } from '../auth.js';
import { uploadPostImage } from '../storage.js';


export default () => {
    const user = currentUser();
    console.log(user);
    const postContainer = document.createElement('div');
    const postTemplate = `
    <main class="main-init">
    <section class="login-img"><img src="../src/image/login-phone.jpg" alt=""></section>
    <section class="section-register">
    <h4>Solo se comparte lo que nos apaciona</h4>
    <form id = "form-register">
    <h1 id = "user-name" >${user.displayName}</h1>
    <figure id = "user-photo">
    <img src = ${user.photoURL} height="42" width="42">
    </figure>
    <textarea name="textarea" rows="10" cols="20">Write something here</textarea>
    <a id="icon-post" href="#"></a>
    <button type="submit" id = "publicar" value="Publicar" class="field-login button">Publicar</button>
    <p class="error" id="error"></p>
    <div class = "post-colum">
    <textara class = "comment">
    <label>
    <img id = "icon-post" src="../image/picture.png" class = "icons" alt="post icon">
    <input type="file" value="upload" id="fileButton" />
  </label>
     </div>
    
    </form>     
  </section>
  </main>`;

  postContainer.innerHTML = postTemplate;
 // Incompleto, en proceso
  /* const uploader = postContainer.querySelector('#uploader');
  const fileButton = postContainer.querySelector('#fileButton'); */

  postContainer.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const $file = postContainer.querySelector('input')
     const file = $file.files[0]

     if (file) {
     uploadPostImage(file);
     console.log(snapshot);
     
     console.log('entro');
     
     }
     /* const collectionPost = (userPost) => {
      name:userPost.nam
    } */

  })
  return postContainer;
} 
