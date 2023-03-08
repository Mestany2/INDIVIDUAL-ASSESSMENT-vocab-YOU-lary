import { createVocab, getVocabs, updateVocab } from '../api/vocabData';
import { showVocabs } from '../pages/vocabs';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCABULARY
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        Vocabulary: document.querySelector('#Vocabulary').value,
        Definition: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
        uid: user.uid,
        time: new Date().toLocaleString(),
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocab(patchPayload).then(() => {
          getVocabs(user.uid).then(showVocabs);
        });
      });
    }
    // TODO: CLICK EVENT FOR EDITING A VOCABULARY
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        Vocabulary: document.querySelector('#Vocabulary').value,
        Definition: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
        firebaseKey,
      };
      updateVocab(payload).then(() => {
        getVocabs(user.uid).then(showVocabs);
      });
    }
  });
};

export default formEvents;
