export default () => {
  const viewPlaces = `
  <main class="main-init">
  <section class="login-img"><img src="../src/image/login-phone.jpg" alt=""></section>
  <section class="section-register">
  <h4>Registre su informacion</h4>
  <form>
  <input type="text" id = "name" placeholder="Name" class="field-login"><br><br>
  <input type="number" id = "age" placeholder="Age" class="field-login"><br><br>
  <input type="text" id = "gender" placeholder="Gender" class="field-login"><br><br>
  <input type="email" id = "email" placeholder= "example@gmail.com" class="field-login"><br><br>
  <input type = "password" id = "password" placeholder = "Password" class="field-login"> <br><br>
  <input type="email" id = "confirm-password" placeholder="  Confirm Password" class="field-login"><br><br>
  <input type="submit" value="Log in" class="field-login button">
  </form>       
</section>
</main>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewPlaces;
  
  divElemt.querySelector('input[type="submit"]').addEventListener('click', (event) => {
    const password = event.target.parent("form").querySelector("#password")
    password.value
  })
  return divElemt;
};