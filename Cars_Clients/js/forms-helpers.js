const carFormConfig = {
  brand: {
    regExp: /^\w{3,10}$/i,
    errorSelector: '.brand-error',
    errorMessage: 'Brand is incorrect',
    // tag: 'input',
    // type: 'text',
    // placeholder: 'Enter brand',
  },
  model: {
    regExp: /^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/,
    errorSelector: '.model-error',
    errorMessage: 'Model is incorrect',
  },
  color: {
    regExp: /^\w{3,10}$/i,
    errorSelector: '.color-error',
    errorMessage: 'Color is incorrect',
  },
  year: {
    regExp: /^\d{4}$/,
    errorSelector: '.year-error',
    errorMessage: 'Year is incorrect',
  },
  complectation: {
    regExp: /^\w{3,10}$/i,
    errorSelector: '.complectation-error',
    errorMessage: 'Complectation is incorrect',
  }
};

function isValid(config, obj) {
  let valid = true;
  
  for (let key in config) {
    if (!obj[key].match(config[key].regExp)) {
      document.querySelector(config[key].errorSelector).innerHTML = config[key].errorMessage;
      valid = false;
    } else {
      document.querySelector(config[key].errorSelector).innerHTML = '';
    }
  }

  return valid;
}