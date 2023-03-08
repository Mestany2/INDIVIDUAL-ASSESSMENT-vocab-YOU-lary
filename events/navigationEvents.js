import {
  getCSSVocabs,
  getHTMLVocabs,
  getJSVocabs,
  getVocabs
} from '../api/vocabData';
import addVocabForm from '../components/form/addVocabForm';
import { showVocabs } from '../pages/vocabs';
import { signOut } from '../utils/auth';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // Show Vocabs
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocabs(user.uid).then(showVocabs);
  });

  document.querySelector('#all-btn').addEventListener('click', () => {
    getVocabs(user.uid).then(showVocabs);
  });

  document.querySelector('#title-logo').addEventListener('click', () => {
    getVocabs(user.uid).then(showVocabs);
  });

  // Add Vocabs
  document.querySelector('#add-vocab').addEventListener('click', () => {
    addVocabForm(user);
  });
  // Filter
  document.querySelector('#html-btn').addEventListener('click', () => {
    getHTMLVocabs(user.uid).then(showVocabs);
  });

  document.querySelector('#css-btn').addEventListener('click', () => {
    getCSSVocabs(user.uid).then(showVocabs);
  });

  document.querySelector('#java-btn').addEventListener('click', () => {
    getJSVocabs(user.uid).then(showVocabs);
  });
};

export default navigationEvents;
