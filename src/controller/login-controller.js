import { facebookLog, googleLog, emailLog, registerLog } from '../firebase/auth.js'

export const facebookLoginEvent = (event) => {
    event.preventDefault();
    facebookLog().then(() => {
        window.location.hash = '#/mikuna';
    }).catch((error) => console.log(error.message));
}

export const googleLoginEvent = (event) => {
    event.preventDefault();
    googleLog().then(() => {
        window.location.hash = '#/mikuna';
    }).catch((error) => { console.log(error.message); });
}

export const emailLoginEvent = (event) => {
    event.preventDefault();
    const email = document.querySelector('#field-email');
    const password = document.querySelector('#field-password');
    const errorMsg = document.querySelector('.ms-error');
    emailLog(email.value, password.value).then(() => { window.location.hash = '#/mikuna'; })
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
}

export const registerLogEvent = (event) => {
    event.preventDefault();
    const email = document.querySelector('#field-email');
    const password = document.querySelector('#field-password');
    const errorMsg = document.querySelector('.ms-error');
    registerLog(email.value, password.value).then(() => {window.location.hash = '#/mikuna';})
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
}

export const hidePassword = () => {
    const password = document.querySelector('#field-password');
    const iconNotPassword = document.querySelector('#icon-notshow-password');
    const iconShowPassword = document.querySelector('#icon-show-password');
    password.setAttribute('type', 'text');
    iconNotPassword.classList.add('hide');
    iconShowPassword.classList.remove('hide');  
}

export const showPassword = () => {
    const password = document.querySelector('#field-password');
    const iconNotPassword = document.querySelector('#icon-notshow-password');
    const iconShowPassword = document.querySelector('#icon-show-password');
    password.setAttribute('type', 'password');
    iconNotPassword.classList.remove('hide');
    iconShowPassword.classList.add('hide');
}

const errorEmail = () => {
    password.classList.remove('field-error');
    email.classList.add('field-error');
}

const errorPassword = () => {
    email.classList.remove('field-error');
    password.classList.add('field-error');
}