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
          <div class="card-body" style="height: 50%;">
            <h2 class="card-header">${item.Vocabulary}</h2>
            <br>
            <h4 class="card-language">Language: ${item.language}</h4>
            <br>
            <div id="def-txt">
            <p class="card-definition">${item.Definition}</p>
            </div>
              <div id="cards-btn">
              <hr>
              <i id="edit-vocab-btn--${item.firebaseKey}" class="btn btn-info">Edit</i>
              <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger">Delete</i>
              </div>
          </div>
          <div class="card-footer">Submitted: ${item.time}</div>
        </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocabs, emptyVocabs };
