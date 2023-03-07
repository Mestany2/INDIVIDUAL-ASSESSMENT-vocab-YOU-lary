import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (firebaseKey) => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;

  getAuthors().then((authorsArray) => {
    authorsArray.forEach((author) => {
      domString += `
          <option 
            value="${author.firebaseKey}" 
            ${firebaseKey === author.firebaseKey ? 'selected' : ''}>
              ${author.first_name} ${author.last_name} 
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-author', domString);
  });
};

export default selectLanguage;