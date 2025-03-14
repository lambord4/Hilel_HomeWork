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

    btn.addEventListener('click', () => {
        const newDiv = document.createElement('div');
        newDiv.textContent = `🎉You successfully made a purchase🎉`;
        newDiv.classList.add('purchase-message');
    
        document.querySelector('.products').appendChild(newDiv);
    });

  });
