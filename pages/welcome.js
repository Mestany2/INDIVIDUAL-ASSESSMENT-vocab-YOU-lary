import loginButton from '../components/loginButton';
import renderToDom from '../utils/renderToDom';

const welcomePage = () => {
  document.querySelector('#app').innerHTML = '';
  const domString = `
    <h1 class="display-3">Welcome to Vocab-YOU-lary!</h1>
    <div id="login-button"><div>
    `;
  renderToDom('#app', domString);
  loginButton();
};

export default welcomePage;
