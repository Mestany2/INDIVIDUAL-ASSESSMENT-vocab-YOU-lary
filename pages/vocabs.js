import { clearDom } from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocabs = () => {
  const domString = '<h1>No Vocabularies</h1>';
  renderToDOM('#store', domString);
};

const showVocabs = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
          <div class="card-body" style="height: 25%;">
            <h2 class="card-title">${item.Vocabulary}</h2>
            <h4 class="card-language">Language: ${item.Language}</h4>
            <h6 class="card-definition">${item.Definition}</h6>
              <hr>
              <i id="edit-vocab-btn--${item.firebaseKey}" class="btn btn-info">Edit</i>
              <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger">Delete</i>
          </div>
        </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocabs, emptyVocabs };
