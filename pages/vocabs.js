import clearDom from '../utils/clearDom';
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
          <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${item.Vocabulary}</h5>
            <h6 class="card-title">${item.Definition}</h6>
              <hr>
              <i class="btn btn-success" id="view-book-btn--${item.firebaseKey}">View</i>
              <i id="edit-book-btn--${item.firebaseKey}" class="btn btn-info">Edit</i>
              <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger">Delete</i>
          </div>
        </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocabs, emptyVocabs };
