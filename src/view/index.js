import { viewLogin }  from '../view/login.js';
import  viewRegister  from '../view/register.js';
import  Different  from './404.js';
import viewMikuna from '../view/mikuna.js'


const components = {
   vistaLogin: viewLogin,
    vistaRegistro: viewRegister,
    different: Different,
    vistaMikuna: viewMikuna,
}


export { components }

