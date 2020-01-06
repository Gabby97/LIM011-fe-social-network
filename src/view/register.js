import { registerLog } from '../auth.js';
import { createUserCollection } from '../app.js';

export default () => {
  const regContainer = document.createElement('div');
  const registerTemplate = `
  <main class="main-init">
  <section class="init-img"><img src="../src/image/header-phone.jpg" alt=""></section>
  <section>
  <h2>codebook</h2>
  <h5>!Bienvenida, coder!</h5>
  <form>
  <input type="text" name = "Name" id = "input-name" placeholder= "  Name" class="field-login"><br><br>
  <input type="email" name = "Correo" id = "input-email" placeholder= "  Email" class="field-login"><br><br>
  <input type="password" name = "Contraseña" id = "input-password" placeholder="  Password" class="field-login"> 
  <span id = "icon-notshow-password" ><i class="icon-inside-field fas fa-eye-slash"></i></span>
  <span id = "icon-show-password" class = "hide" ><i class="icon-inside-field  far fa-eye"></i></span><br><br>
  <p class="ms-error"></p>
  <button type="submit" id = "btn-login" value="Registrar" class="field-login button">Log in</button><br><br>
  </form>  
  <label>¿Ya tienes una cuenta?&nbsp;<a href="#/" id="iniciar-sesion">Iniciar Sesión</a></label>
</section>
</main>`;

  regContainer.innerHTML = registerTemplate;

  //variables globales
  const name = regContainer.querySelector('#input-name');
  const email = regContainer.querySelector('#input-email');
  const password = regContainer.querySelector('#input-password');
  const errorMsg = regContainer.querySelector('.ms-error');
  const iconNotPassword = regContainer.querySelector('#icon-notshow-password');
  const iconShowPassword = regContainer.querySelector('#icon-show-password');

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


  //boton registrar
  regContainer.querySelector('button[type = "submit"]').addEventListener('click', (event) => {
    event.preventDefault();
    registerLog(email.value, password.value).then((response) => {
      const register = {
        id: response.user.uid,
        name: name.value,
        email: email.value,
        photo: '../image/photo.png'
      }
      createUserCollection(register);
      window.location.hash = '#/post';

    })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            errorEmail();
            errorMsg.innerHTML = '**El formato del correo ingresado no es valido, verifica e intente de nuevo**';
            break;
          case 'auth/email-already-in-use':
            errorEmail();
            errorMsg.innerHTML = '**El correo electrónico proporcionado esta siendo utilizado por otro miembro., verifica e intente de nuevo**';
            break;
          case 'auth/email-already-exists':
            errorEmail();
            errorMsg.innerHTML = '**El correo electrónico proporcionado esta siendo utilizado por otro miembro., verifica e intente de nuevo**';
            break;
          case 'auth/weak-password':
            errorPassword();
            errorMsg.innerHTML = '**La contraseña debe tener al menos 6 caracteres**';
            break;
          default:
            // console.log(error);
            break;
        }
      });
  });


  const errorEmail = () => {
    password.classList.remove('field-error');
    email.classList.add('field-error');
  }

  const errorPassword = () => {
    email.classList.remove('field-error');
    password.classList.add('field-error');
  }

  return regContainer;
};