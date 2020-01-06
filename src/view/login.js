import { emailLog, googleLog, facebookLog } from '../auth.js';
import { createUserCollection } from '../app.js';

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
    <input type="email" name = "Correo" id = "input-email" placeholder= "  Email" class="field-login"><br><br>
    <input type="password" name = "Contraseña" id = "input-password" placeholder="  Password" class="field-login"> 
    <span id = "icon-notshow-password" ><i class="icon-inside-field fas fa-eye-slash"></i></span>
    <span id = "icon-show-password" class = "hide" ><i class="icon-inside-field  far fa-eye"></i></span><br><br>
    <p class="ms-error"></p>
    <button type="submit" id = "btn-login" value="Log in" class="field-login button">Log in</button>
    <p class="registro">O bien ingresa con...</p>
    </form>  
    <div class = "btn-fb-google">
      <a id="icon-facebook" href="#"><img id = "icon-facebook" src="./image/facebook.png" class = "icons" alt="facebook icon"></a>
      <a id="icon-google" href="#"><img id = "icon-email" src="./image/search.png" class = "icons" alt="emai icon"></a>   
    </div>  
    <label>¿No tienes una cuenta?&nbsp;<a href="#/register" id="registrate">Regístrate.</a></label>
  </section>
  </main>`;

  logContainer.innerHTML = loginTemplate;
  //vaiables globales
  const email = logContainer.querySelector('#input-email');
  const password = logContainer.querySelector('#input-password');
  const errorMsg = logContainer.querySelector('.ms-error');
  const iconNotPassword = logContainer.querySelector('#icon-notshow-password');
  const iconShowPassword = logContainer.querySelector('#icon-show-password');

  //boton mostrar-ocultar contrasena
  iconNotPassword.addEventListener('click', (event) => { 
    password.setAttribute('type', 'text');
    iconNotPassword.classList.add('hide');
    iconShowPassword.classList.remove('hide');
  });

  iconShowPassword.addEventListener('click', (event) => { 
    password.setAttribute('type', 'password');
    iconNotPassword.classList.remove('hide');
    iconShowPassword.classList.add('hide');
  });


  //boton Face
  logContainer.querySelector('#icon-facebook').addEventListener('click', (event) => {
    event.preventDefault();
    facebookLog().then((response) => {
      window.location.hash = '#/post';
      const register = {
        id: response.user.uid,
        name: response.user.displayName,
        email: response.user.email,
        photo: response.user.photoURL
      }
      createUserCollection(register);
    })
      .catch((error) => {
        console.log(error.message);
      });
  });

//Pruebaaaa
/** 
 * facebookLog, googleLog y emailLog
 * log(proveedor) -> facebookLog, googleLog o emailLog
*/


  //boton Google
  logContainer.querySelector('#icon-google').addEventListener('click', (event) => {
    event.preventDefault();
    googleLog().then((response) => {
      window.location.hash = '#/post';
      const register = {
        id: response.user.uid,
        name: response.additionalUserInfo.profile.name,
        email: response.additionalUserInfo.profile.email,
        photo: response.additionalUserInfo.profile.picture
      }
      createUserCollection(register);
    })
      .catch((error) => {
        console.log(error.message);
      });
  });

  //boton login
  logContainer.querySelector('button[type = "submit"]').addEventListener('click', (event) => {
    event.preventDefault();
    emailLog(email.value, password.value).then((response) => {
      //  window.location.hash = '#/social-network';
    })
      .catch((error) => { // Error
        switch (error.code) {
          case 'auth/invalid-email':
            errorEmail();
            errorMsg.innerHTML = '**El formato del correo ingresado no es valido, verifica e intente de nuevo**';
            break;
          case 'auth/user-not-found':
            errorEmail();
            errorMsg.innerHTML = '**No hay usuario registrado con ese correo, verifica e intente de nuevo**';
            break;
          case 'auth/wrong-password':
            errorPassword();
            errorMsg.innerHTML = '**La contraseña no es válida, verifica e intente de nuevo**';
            break;
          default:
            console.log(error);
            break;
        }
      });
  })

  const errorEmail = () => {
    password.classList.remove('field-error');
    email.classList.add('field-error');
  }

  const errorPassword = () => {
    email.classList.remove('field-error');
    password.classList.add('field-error');
  }


  return logContainer;
};