function showCategories() {
  const parent = document.querySelector('.categories > div');
  categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.textContent = category.name;
    categoryElement.setAttribute('data-category-id', category.id);
    categoryElement.classList.add('category-item');

    parent.appendChild(categoryElement);
  });
}

let currentProduct = null; 

function showProducts(products, categoryId) {
  const parent = document.querySelector('.products > div');
  parent.innerHTML = '';
  parent.setAttribute('data-category-id', categoryId);

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.textContent = product.name;
    productElement.setAttribute('data-products-id', product.id);
    productElement.classList.add('product-item');

    parent.appendChild(productElement);
  });
}

document.addEventListener('DOMContentLoaded', showCategories);

document.querySelector('.categories').addEventListener('click', (event) => {
  if (!event.target.classList.contains('category-item') ) {
    return;
  }

  const categoryId = parseInt(event.target.getAttribute('data-category-id'));
  
  const selectedCategory = categories.find(category => category.id === categoryId);
  if (!selectedCategory) {
    return;
  }

  showProducts(selectedCategory.products, categoryId);
});

function showProductInfo (productId) {
    const parent = document.querySelector('.information > div');
    parent.innerHTML = '';

    let selectedProduct ;
    for (const category of categories) {
        selectedProduct = category.products.find(product => product.id === productId);
        currentProduct = selectedProduct;
        if (selectedProduct) break;
    };
    
    if (!selectedProduct) {
        return;
    };

    const infoElement = document.createElement('div');
    infoElement.classList.add('info-item')
    infoElement.textContent = `Цена: ${selectedProduct.price} $`;

    parent.appendChild(infoElement);
}

document.querySelector('.products').addEventListener('click', (event) => {
    if (!event.target.classList.contains('product-item')) return;
  
    const productId = parseInt(event.target.getAttribute('data-products-id'));
    showProductInfo(productId);

    const existingButton = document.querySelector('.information .btn');
    if (existingButton) {
      existingButton.remove();
    }

    const btn = document.createElement('button');
    btn.textContent = 'Buy';
    btn.classList.add('btn');

    document.querySelector('.information').appendChild(btn);

    document.querySelector('.btn').addEventListener('click', () => {
      const parent = document.querySelector('.products');
  
      const header = document.createElement('h2');
      header.textContent = 'Please fill in this form';
      header.classList.add('header');
      parent.appendChild(header);
  
      const form = document.createElement('form');
      form.name = 'purchase_form';
      form.classList.add('purchase_form');
      parent.appendChild(form);
  
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.name = 'name';
      nameInput.placeholder = 'Name Surname';
      nameInput.style.width = '100%';
      form.appendChild(nameInput);
  
      const citySelect = document.createElement('select');
      citySelect.name = 'cities';
      citySelect.style.width = '100%';
  
      const optionsCity = [
          { value: '', text: 'Choose your city' },
          { value: 'od', text: 'Odessa' },
          { value: 'ky', text: 'Kyiv' },
          { value: 'lo', text: 'London' }
      ];
  
      optionsCity.forEach(optionData => {
          const option = document.createElement('option');
          option.value = optionData.value;
          option.textContent = optionData.text;
          citySelect.appendChild(option);
      });
  
      form.appendChild(citySelect);
  
      const npSelect = document.createElement('select');
      npSelect.name = 'np';
      npSelect.style.width = '100%';
  
      const optionsNp = [
          { value: '', text: 'Choose your NP address' },
          { value: '1', text: 'Odessa 1' },
          { value: '2', text: 'Odessa 2' },
          { value: '3', text: 'Odessa 3' },
          { value: '4', text: 'Odessa 4' },
          { value: '5', text: 'Odessa 5' }
      ];
  
      optionsNp.forEach(optionData => {
          const option = document.createElement('option');
          option.value = optionData.value;
          option.textContent = optionData.text;
          npSelect.appendChild(option);
      });
  
      form.appendChild(npSelect);
  
      const payment = document.createElement('p');
      payment.textContent = 'Please choose your payment method:';
      payment.classList.add('payment_method');
      form.appendChild(payment);
  
      const payInput1 = document.createElement('input');
      payInput1.type = 'radio';
      payInput1.name = 'pay_input';
      payInput1.value = 'invoice';
  
      const label1 = document.createElement('label');
      label1.textContent = ' Invoice payment';
      label1.prepend(payInput1);
  
      const payInput2 = document.createElement('input');
      payInput2.type = 'radio';
      payInput2.name = 'pay_input';
      payInput2.value = 'card';
  
      const label2 = document.createElement('label');
      label2.textContent = ' Payment by card';
      label2.prepend(payInput2);
  
      form.appendChild(label1);
      form.appendChild(document.createElement('br'));
      form.appendChild(label2);
  
      const quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.name = 'quantity_input';
      quantityInput.min = '1';
      quantityInput.style.width = '100%';
      form.appendChild(quantityInput);
  
      const commentTextarea = document.createElement('textarea');
      commentTextarea.name = 'commentText';
      commentTextarea.placeholder = 'Write your comment here';
      commentTextarea.rows = '5';
      commentTextarea.style.width = '100%';
      form.appendChild(commentTextarea);
  
      
      const confirmBtn = document.createElement('button');
      confirmBtn.classList.add('btn', 'confirm');
      confirmBtn.textContent = 'Confirm';
      form.appendChild(confirmBtn);

      confirmBtn.addEventListener('click', (event) => {
          event.preventDefault(); 
  
          const formElements = document.forms.purchase_form;
  
          const name = formElements.name.value.trim();
          const city = formElements.cities.value;
          const npAdress = formElements.np.value;
          const paymentMethod = formElements.pay_input.value;
          const quantityInfo = formElements.quantity_input.value;
  
        
          if(!name) {
            alert('Enter your name!');
            return;
          };
          let regExp = /^\w+\s\w+\s\w+$/;
          if (!name.match(regExp)) {
            alert('Enter your full name (First Middle Last)');
            return;
          };

          if(!city) {
            alert('Choose your city!')
            return;
          };

          if(!npAdress) {
            alert('Choose your np adress!')
            return;
          };

          if(!paymentMethod) {
            alert('Choose your payment Method!')
            return;
          };

          if(!quantityInfo) {
            alert('Choose your quantity of items!')
            return;
          };
          const today = new Date();
          const formattedDate = today.toLocaleDateString();

          const productInfo = {
            date: formattedDate,
            name: currentProduct.name,
            price: currentProduct.price
          };

          let savedProducts = JSON.parse(localStorage.getItem('selectedProduct')) || [];

          savedProducts.push(productInfo);

          localStorage.setItem('selectedProduct', JSON.stringify(savedProducts));
    
        const resultName = document.createElement('p');
        resultName.textContent = `Your name is: ${name}`;
        parent.appendChild(resultName);

        const resultCity = document.createElement('p');
        resultCity.textContent = `You choosed ${city} city`;
        parent.appendChild(resultCity);

        const resultNp = document.createElement('p');
        resultNp.textContent = `You choosed ${npAdress}nd np Adress`;
        parent.appendChild(resultNp);

        const resultMethod = document.createElement('p');
        resultMethod.textContent = `Your payment method is ${paymentMethod}`;
        parent.appendChild(resultMethod);

        const resultQuantity = document.createElement('p');
        resultQuantity.textContent = `Your quantity of item is: ${quantityInfo}`;
        parent.appendChild(resultQuantity);


        const userInfo = {
          username: name,
          userCity: city,
          userNp: npAdress,
          userPayment: paymentMethod,
          userQuantity: quantityInfo
        }

        let savedUser = JSON.parse(localStorage.getItem('userInfo')) || [];

          savedUser.push(userInfo);

          localStorage.setItem('userInfo', JSON.stringify(savedUser));
      });
  });    
});
