//import { controlRegister } from '../controller.js'
import { registerLog } from '../firebase.js'
// antesssss      export const viewRegister = () => {
export default () => {
  const regContainer = document.createElement('div');
  const registerTemplate = `
  <main class="main-init">
  <section class="login-img"><img src="../src/image/login-phone.jpg" alt=""></section>
  <section class="section-register">
  <h4>Registre su informacion</h4>
  <form id = "form-register">
  <input type="text" id = "name" value = "" placeholder= "Name" class="field-login"><br><br>
  <input type="email" id = "email" placeholder= "example@gmail.com" class="field-login"><br><br>
  <input type = "password" id = "password" placeholder = "Password" class="field-login"> <br><br>
  <button type="submit" id = "registro" value="Log in" class="field-login button">Regístrate</button>
  <p class="error" id="error"></p>
  </form>     
</section>
</main>`;
{/* <div class = "btn-fb-google">
<a id="fb" href="#"><img id = "icon-facebook" src="./image/facebook.png" class = "icons" alt="facebook icon"></a>
<a id="goog" href="#"><img id = "icon-email" src="./image/search.png" class = "icons" alt="emai icon"></a>   
</div>    */}

regContainer.innerHTML = registerTemplate;
 
regContainer.querySelector('#fb').addEventListener('click', (event) => {
  event.preventDefault();
  controlFb();
 });
 regContainer.querySelector('#goog').addEventListener('click', (event) => {
  event.preventDefault();
  controlGoogle();
 });


regContainer.querySelector('button[type = "submit"]').addEventListener('click', (event) => {
  event.preventDefault();
  const register = {
        name: regContainer.querySelector('#name').value,
        email: regContainer.querySelector('#email').value,
        password: regContainer.querySelector('#password').value
    }
  registerLog(register);
})
return regContainer;
};



/*regContainer.innerHTML = registerTemplate;
regContainer.classList.add('center');

const btnRegister = regContainer.querySelector('#registro');
btnRegister.addEventListener('click', () => {
  controlRegister();
})*/

  /*const divElemt = document.createElement('div');
  divElemt.innerHTML = viewPlaces;
  
  divElemt.querySelector('button[type="submit"]').addEventListener('click', (event) => {
    event.preventDefault();
    const nameUser = event.target.parentElement.querySelector("#name").value;    
    console.log(nameUser);
    // nameUser.value
  })
  return divElemt;*/