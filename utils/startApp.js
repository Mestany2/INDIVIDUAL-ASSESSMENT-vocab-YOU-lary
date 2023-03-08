import { getVocabs } from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showVocabs } from '../pages/vocabs';

const startApp = (user) => {
  domBuilder();
  formEvents(user);
  navBar();
  domEvents(user);
  logoutButton();
  navigationEvents(user);
  getVocabs(user.uid).then((vocabs) => showVocabs(vocabs));
};

export default startApp;
