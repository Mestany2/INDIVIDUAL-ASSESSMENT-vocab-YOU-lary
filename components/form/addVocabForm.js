import clearDom from "../../utils/clearDom"

const addVocabForm = (obj={}) => {
    clearDom ();
    const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocabulary</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter A Vocabulary" value="${obj.Vocabulary || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="description" style="height: 100px">${obj.Definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <button type="submit" class="btn btn-primary">Submit
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectAuthor(`${obj.firebaseKey || ''}`);
};

export default addVocabForm;
