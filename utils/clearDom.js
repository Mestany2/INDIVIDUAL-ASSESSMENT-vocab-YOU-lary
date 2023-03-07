const clearDom = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

const clearNav = () => {
  document.querySelector('#navbarText').innerHTML = '';
};

export {
  clearDom,
  clearNav
};
