export default () => {
    const viewHome = `
    <main class="main-init">
    <section class="init-img"><img src="../src/image/header-phone.jpg" alt=""></section>
    <section>
    <h2>codebook</h2>
    <h5>!Bienvenida, coder!</h5>
    <form>
    <input type="email" id = "input-email" placeholder= "Email" class="field-login"><br><br>
    <input type="password" placeholder="  Password" class="field-login"> <br><br>
    <input type="submit" id = "btn-login" value="Log in" class="field-login button">
    </form>       
    <h5>O bien ingresa con...</h5>
    <h5>?No tienes una cuenta?<a href="#/lugares"> Registrate.</a></h5>
    <h5>?No tienes una cuenta?<a href="#/hola"> Registrate.</a></h5>
  </section>
  </main>`;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewHome;
    return divElemt;
};