const clearDom = () => {
  document.querySelector('#store').innerHTML = '';
  // document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

const clearBtn = () => {
  document.querySelector('#filter-btn').innerHTML = '';
};

export {
  clearDom,
  clearBtn
};
