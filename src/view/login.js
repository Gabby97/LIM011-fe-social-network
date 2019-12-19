import { emailLog, googleLog, facebookLog, createUserCollection } from '../firebase.js';

export const viewLogin = () => {
  const logContainer = document.createElement('div');
  logContainer.innerHTML = '';
  const loginTemplate = `
    <main class="main-init">
    <section class="init-img"><img src="../src/image/header-phone.jpg" alt=""></section>
    <section>
    <h2>codebook</h2>
    <h5>!Bienvenida, coder!</h5>
    <form>
    <input type="email" name = "Correo" id = "input-email" placeholder= "Email" class="field-login"><br><br>
    <input type="password" name = "Contraseña" id = "input-password" placeholder="  Password" class="field-login"> <br><br>
    <p class="error" id="error"></p>
    <button type="submit" id = "btn-login" value="Log in" class="field-login button">Log in</button>
    <p class="registro">O bien ingresa con...</p>
    </form>  
    <div class = "btn-fb-google">
      <a id="icon-facebook" href="#"><img id = "icon-facebook" src="./image/facebook.png" class = "icons" alt="facebook icon"></a>
      <a id="icon-google" href="#"><img id = "icon-email" src="./image/search.png" class = "icons" alt="emai icon"></a>   
    </div>  
    <label class="registro">¿No tienes una cuenta?&nbsp;<a class="bold" href="#/register" id="registrate">Regístrate.</a></label>
  </section>
  </main>`;

  logContainer.innerHTML = loginTemplate;
  //boton Face
  logContainer.querySelector('#icon-facebook').addEventListener('click', (event) => {
    event.preventDefault();
    facebookLog().then((response) => {
      //  window.location.hash = '#/social-network'; 
      console.log(response);
      const register = {
        id: response.user.uid,
        name: response.additionalUserInfo.profile.name,
        email: response.additionalUserInfo.profile.email,
        photo: response.additionalUserInfo.profile.picture
      }
      createUserCollection(register);
    })
      .catch((error) => { // Para ver si devuelve un error
        console.log(error.message);
      });
  });

  //boton Google
  logContainer.querySelector('#icon-google').addEventListener('click', (event) => {
    event.preventDefault();
    googleLog().then((response) => {
      //  window.location.hash = '#/social-network'; 
      const register = {
        id: response.user.uid,
        name: response.additionalUserInfo.profile.name,
        email: response.additionalUserInfo.profile.email,
        photo: response.additionalUserInfo.profile.picture
      }
      createUserCollection(register);
    })
      .catch((error) => { // Para ver si devuelve un error
        console.log(error.message);
      });
  });

  //boton login
  logContainer.querySelector('button[type = "submit"]').addEventListener('click', (event) => {
    event.preventDefault();
    const email = logContainer.querySelector('#input-email').value;
    const password = logContainer.querySelector('#input-password').value;
    emailLog(email, password).then((response) => {
      //  window.location.hash = '#/social-network';
      console.log('Logueado con exito');
    })
      .catch((error) => { // Para ver si devuelve un error
        console.log(error.message);
      });
  })

  return logContainer;
};
