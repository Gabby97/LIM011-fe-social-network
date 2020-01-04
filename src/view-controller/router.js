//import { viewLogin } from '../view/login.js';
//import { viewRegister } from '../view/register.js';
import { components } from '../view/index.js';
import { loginOut } from '../auth.js';

// vista de templates
export const viewTemplate = (router) => {
    //base es la caja basia que debomos llenar - extraido desde el html
    const base = document.getElementById('base');
    //' ' limpia el contenido de un elemento 
    base.innerHTML = '';
    switch (router) {
        case '':
            { return base.appendChild(components.vistaLogin()) }
        case '#/register':
            { return base.appendChild(components.vistaRegistro()) }
        case '#/post':
            { return base.appendChild(components.vistaPost()) }
        default: 
        break; 
    }
};

const changeRoute = (route) => {
    window.location.hash = route;
  };
