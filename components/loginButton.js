import { signIn } from '../utils/auth';
import navBar from './shared/navBar';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  navBar();
  const domString = '<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
