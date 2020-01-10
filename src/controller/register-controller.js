import { registerLog, createUserCollection } from '../firebase/auth.js';

export const viewRegister = () => {
    window.location.hash = '#/register';    
}

/*export const registerAuth = (event) => {
    event.preventDefault();

    const name = document.querySelector('#input-name');
    const email = document.querySelector('#input-email');
    const password = document.querySelector('#field-password');
 registerLog(email.value, password.value);
 createUserCollection(name.value, email.value).then((doc) => {
   console.log(name, email, 'funcionaa', doc);
   
 })
 .catch((error) => {
     console.log(error);
     
 })

}
*/
