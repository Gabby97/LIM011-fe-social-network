import { currentUser } from '../firebase.js'


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
    <button type="submit" id = "publicar" value="Publicar" class="field-login button">Publicar</button>
    <p class="error" id="error"></p>
    </form>     
  </section>
  </main>`;

  postContainer.innerHTML = postTemplate;
  return postContainer;
}
//holaaaaaaaaaaaaaaa
