import loginButton from '../components/loginButton';
import renderToDom from '../utils/renderToDom';

const welcomePage = () => {
  document.querySelector('#app').innerHTML = '';
  const domString = `
    <div>
    <div id="text-style">
    <h1 id="text-styles"> Welcome to Vocab-<em>YOU</em>-lary!</h1>
    <div id="login-button"><div>
    </div>
    <br>
    </div>

    `;
  renderToDom('#app', domString);
  loginButton();
};

export default welcomePage;
