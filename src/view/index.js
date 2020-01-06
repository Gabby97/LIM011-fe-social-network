import { viewLogin }  from '../view/login.js';
import  viewRegister  from '../view/register.js';
import viewPost from '../view/post.js';
import  Different from './404.js';


const components = {
   vistaLogin: viewLogin,
    vistaRegistro: viewRegister,
    vistaPost: viewPost,
    different: Different,
}


export { components }

