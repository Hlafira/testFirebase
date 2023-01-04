import { fbFilmsData, PLACE_Q, PLACE_W } from './fbFilms';
import { firebaseAuth } from './fbAuth';
import FilmsData from '../moviesAPI/filmsData';
import { async } from '@firebase/util';

const refs = {
  formLogin: document.querySelector('.login-form'),
  formRegistr: document.querySelector('.reg-form'),
  singOut: document.querySelector('#singOut'),
};
console.log(refs);
async function login(e) {
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  console.log('email ', email, ' password ', password);
  const result = await firebaseAuth.login(email, password);
  console.log(result);
  console.log(firebaseAuth.getUserDisplayName());
}
async function registr(e) {
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  const username = e.currentTarget.elements.name.value;
  console.log('email ', email, ' password ', password, '  name ', username);
  const result = await firebaseAuth.singUp(email, password, username);
  console.log(result);
  console.log(firebaseAuth.getUserDisplayName());
}

refs.formLogin.addEventListener('submit', e => {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  login(e);
});

refs.formRegistr.addEventListener('submit', e => {
  e.preventDefault();
  registr(e);
});

refs.singOut.addEventListener('click', e => {
  firebaseAuth.logOut();
});
