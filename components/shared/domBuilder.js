import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="filter-btn">
    <button type="button" class="btn btn-light" id="all-btn">All</button>
    <button type="button" class="btn btn-secondary" id="html-btn">HTML</button>
    <button type="button" class="btn btn-success" id="java-btn">JavaScript</button>
    <button type="button" class="btn btn-danger" id="css-btn">CSS</button>
    </div>
    <br>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
