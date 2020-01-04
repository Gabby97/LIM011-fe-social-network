/* import { currentUser } from '../auth.js';

export const viewProfileUser = () => {
  const profileContainer = document.createElement('div');
  profileContainer.innerHTML = '';
  const profileTemplate = `
    <form class="form-profile">
      <img class="img-profile" src='${currentUser().photoURL}' height="50" width="50"/>
      <label class="name-profile" id="nombre">${currentUser().displayName}</label>
      <label class="label-profile">${currentUser().email}</label>
    </form>
    `;
  profileContainer.innerHTML = profileTemplate;
  profileContainer.classList.add('container-profile');
  return profileContainer;
}; */