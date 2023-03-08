import { getVocabs } from '../../api/vocabData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (firebaseKey, user) => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="language" required>
    <option value="">Select a Language</option>`;

  getVocabs(user.uid).then((vocabsArray) => {
    vocabsArray.forEach((vocab) => {
      domString += `
          <option 
            value="${vocab.Language}" 
            ${firebaseKey === vocab.firebaseKey ? 'selected' : ''}>
              ${vocab.Language} 
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;
