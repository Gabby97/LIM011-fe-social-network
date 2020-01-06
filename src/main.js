import { viewTemplate } from './view-controller/router.js';
import './firebase.js';

//import { changeTemplate } from './view-controller/router.js';

const init = () => {
  viewTemplate(window.location.hash);

  window.addEventListener('hashchange', () => viewTemplate(window.location.hash));
}

window.addEventListener('load', init);
