import { viewLogin }  from '../view/login.js';
import  viewRegister  from '../view/register.js';
import  Different  from './404.js';
import viewPost from '../view/post.js'
//import { viewProfileUser } from '../view/side-face.js'


const components = {
   vistaLogin: viewLogin,
    vistaRegistro: viewRegister,
    vistaPost: viewPost,
    different: Different,
    vistaPost: viewPost,
}


export { components }

