import {
  deleteVocab,
  getSingleVocab,
  getVocabs,
} from '../api/vocabData';
import addVocabForm from '../components/form/addVocabForm';
import { showVocabs } from '../pages/vocabs';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteVocab(firebaseKey).then(() => {
        getVocabs(user.uid).then(showVocabs);
      });
    }
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(user, vocabObj));
    }
  });
};

export default domEvents;
