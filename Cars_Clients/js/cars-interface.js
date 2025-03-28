// const carActions = {
//   view: viewCarDetails,
//   edit: editCarForm
// };

function createCarsInterface() {
  const parent = document.querySelector('.wrapper');
  if (!document.querySelector('.grid')) {
    generateAddButton(parent);
    generateGrid(parent);
  };
}

function generateGrid(parent) {
  const data = getCars();
  const gridElement = document.createElement('div');
  gridElement.classList.add('grid');
  generateGridHeader(gridElement);
  generateGridContent(gridElement, data);

  observeGridButtons(gridElement)

  parent.appendChild(gridElement);
}

function observeGridButtons(gridElement) {
  gridElement.addEventListener('click', event => {
    if (event.target.tagName !== 'BUTTON') {
      return;
    }

    const buttonType = event.target.getAttribute('data-action');
    const carId = event.target.parentNode.getAttribute('data-id');
    
    // 1
    if (buttonType === 'view') {
      viewCarDetails(carId);
    } else if (buttonType === 'edit') {
      editCarForm(carId);
    } else if (buttonType === 'delete') {
      deleteCar(carId);
    }

    // 2
    // switch(buttonType) {
    //   case 'view':
    //     // viewCarDetails(carId);
    //     break;
    // }

    // 3
    // buttonType === 'view' && viewCarDetails(carId);
    // buttonType === 'edit' && editCarForm(carId);

    // 4
    // carActions[buttonType](carId);
  });
}

function generateGridHeader(parent) {
  parent.innerHTML = `
    <div class="row header-row">
      <div>Brand</div>
      <div>Model</div>
      <div>Color</div>
      <div>Year</div>
      <div>Operations</div>
    </div>
  `;
}

function generateGridContent(parent, cars) {
  for(let car of cars) {
    const row = `
      <div class="row car-row">
        <div>${car.brand}</div>
        <div>${car.model}</div>
        <div>${car.color}</div>
        <div>${car.year}</div>
        <div data-id="${car.id}">
          <button type="button" data-action="view">View</button>
          <button type="button" data-action="edit">Edit</button>
          <button type="button" data-action="delete">Delete</button>
        </div>
      </div>
    `;

    parent.innerHTML += row;
  }
}

function generateAddButton(parent) {
  const button = document.createElement('button');
  button.textContent = 'Add new car';
  button.classList.add('add-button');
  button.addEventListener('click', () => {
    const parent = document.querySelector('.wrapper');
    generateCarForm(parent)
  })
  parent.appendChild(button);
}

function hideCarForm() {
  document.querySelector('.wrapper').innerHTML = '';
}

function viewCarDetails(carId) {
  const car = getCarById(carId);
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = 9999;

  // Создаём модальное окно
  const modal = document.createElement('div');
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.borderRadius = '10px';
  modal.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  modal.style.position = 'relative';
  modal.style.maxWidth = '600px';
  modal.style.maxHeight = '600px';
  modal.style.textAlign = 'center';
  modal.style.borderRadius = '20px';
  modal.style.border = '2px solid blue';

  // Текст модалки
  const text = document.createElement('p');
  text.innerText = `
  Your car brand is ${car.brand}
  Your car model is ${car.model}
  Your car year is ${car.year}
  Your car color is ${car.color}
  Your car complectation is ${car.complectation}
  `;
  text.style.fontWeight = 'bold';
  text.style.fontSize = '35px';

  // Кнопка закрытия
  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '10px';
  closeBtn.style.right = '15px';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontSize = '40px';
  closeBtn.style.fontWeight = 'bold';

  // Закрытие по кнопке
  closeBtn.onclick = () => document.body.removeChild(overlay);

  // Закрытие по клику вне окна
  overlay.onclick = (event) => {
    if (event.target === overlay) {
      document.body.removeChild(overlay);
    }
  };

  modal.appendChild(closeBtn);
  modal.appendChild(text);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
};

function deleteCar(carId) {
  showConfirmModal(carId);  
};

function showConfirmModal(carId) {
  // Затемнение
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = 9999;

  // Модальное окно
  const modal = document.createElement('div');
  modal.style.background = '#fff';
  modal.style.padding = '20px';
  modal.style.borderRadius = '10px';
  modal.style.textAlign = 'center';
  modal.style.minWidth = '300px';
  modal.style.boxShadow = '0 0 15px rgba(0,0,0,0.3)';

  // Сообщение
  const text = document.createElement('p');
  text.innerText = 'Are you sure you want to delete ?';

  // Кнопки
  const yesBtn = document.createElement('button');
  yesBtn.innerText = 'Yes';
  yesBtn.style.margin = '10px';
  yesBtn.style.padding = '8px 20px';
  yesBtn.style.borderRadius = '15px'

  const noBtn = document.createElement('button');
  noBtn.innerText = 'No';
  noBtn.style.margin = '10px';
  noBtn.style.padding = '8px 20px';
  noBtn.style.borderRadius = '15px'

  // Обработка кликов
  yesBtn.onclick = () => {
    document.body.removeChild(overlay);
    deleteCarById(carId);
    const elementToBeRemoved = document.querySelector(`.car-row *[data-id="${carId}"]`).parentNode;
    elementToBeRemoved.remove();
  };

  noBtn.onclick = () => {
    document.body.removeChild(overlay);
  };

  // Сборка
  modal.appendChild(text);
  modal.appendChild(yesBtn);
  modal.appendChild(noBtn);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
};


function editCarForm(carId) {
  const parent = document.querySelector('.wrapper');
  generateCarForm(parent, carId);
}

function generateCarForm(parent, carId = '') {
  const car = carId ? getCarById(carId) : null;

  // const form = document.createElement('form');
  // for (let formItemKey in carFormConfig) {
  //   const itemElement = document.createElement(carFormConfig[formItemKey].tag);
  //   itemElement.setAttribute('type', carFormConfig[formItemKey].type);
  // form.appendChild(itemElement)
  // }


  const form = `
    <form name="car">
      <p>
        <input type="text" name="brand" placeholder="Enter brand" ${car ? `value="${car.brand}"` : ''}>
        <span class="error brand-error"></span>
      </p>
      <p>
        <input type="text" name="model" placeholder="Enter model" ${car ? `value="${car.model}"` : ''}>
        <span class="error model-error"></span>
      </p>
      <p>
        <input type="text" name="color" placeholder="Enter color" ${car ? `value="${car.color}"` : ''}>
        <span class="error color-error"></span>
      </p>
      <p>
        <input type="text" name="year" placeholder="Enter year" ${car ? `value="${car.year}"` : ''}>
        <span class="error year-error"></span>
      </p>
      <p>
        <input type="text" name="complectation" placeholder="Enter complectation name" ${car ? `value="${car.complectation}"` : ''}>
        <span class="error complectation-error"></span>
      </p>
      <p>
        <input type="hidden" name="carId" value="${carId}" />
        <button type="button">Save</button>
      </p>
    </form>
  `;

  parent.innerHTML = form;

  observeCarFormButton();
}

function observeCarFormButton() {
  document.querySelector('form[name="car"] button').addEventListener('click', () => {
    const form = document.forms.car;

    const car = {
      brand: form.brand.value,
      model: form.model.value,
      year: form.year.value,
      color: form.color.value,
      complectation: form.complectation.value,
    }

    const carId = form.carId.value;
    // 1 - validation
    if (isValid(carFormConfig, car)) {
      // 2 - create or edit
      if (carId) {
        car.id = carId;
        saveCar(car, 'edit');
      } else {
        const id = Date.now();
        car.id = id;
        saveCar(car);
      }

      hideCarForm();
      createCarsInterface();
    }

  });
}
