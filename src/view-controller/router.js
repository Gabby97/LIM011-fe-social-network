import { components } from '../view/index.js';
import { currentUser } from '../firebase.js'


// vista de templates
export const viewTemplate = (router) => {
    //base es la caja basia que debomos llenar - extraido desde el html
    const base = document.getElementById('base');
    //' ' limpia el contenido de un elemento 
    base.innerHTML = '';
    switch (router) {
        case '':
        case '#/':
            { return base.appendChild(components.vistaLogin()) }
        case '#/register':
            { return base.appendChild(components.vistaRegistro()) }
        case '#/post':
            { return base.appendChild(components.vistaPost(currentUser()));
        }
        default: 
        break; 
    }
};

const changeRoute = (route) => {
    window.location.hash = route;
  };
