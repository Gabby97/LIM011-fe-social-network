import { emailLog } from '../src/firebase/auth.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();

mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);

// iniciando tests


describe('Inicio de sesion con email y password', () => {
  it('Debería ser una funcion', () => {
    expect(typeof emailLog).toBe('function');
  });

  it('Debería poder iniciar sesion', () => emailLog('front@end.la', '123456')
    .then((user) => {
      expect(user.email).toBe('front@end.la');
    }));
});
