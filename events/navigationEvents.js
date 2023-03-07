import { getVocabs } from '../api/vocabData';
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
  // Add Vocabs
  document.querySelector('#add-vocab').addEventListener('click', () => {
    addVocabForm(user);
  });
};

export default navigationEvents;
