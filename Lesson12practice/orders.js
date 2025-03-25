document.querySelector('.orders').addEventListener('click', () => {
    document.querySelector('.wrapper').style.display = 'none';
    document.querySelector('.order-info').style.display = 'none';
    document.querySelector('.orders').style.display = 'none';
  
    // Кнопка назад
    const prevButton = document.createElement('button');
    prevButton.classList.add('prev-button');
    prevButton.type = 'button';
    prevButton.textContent = 'Назад';
    document.body.appendChild(prevButton);
  
    // Контейнер заказов
    const ordersContainer = document.createElement('div');
    ordersContainer.classList.add('user-orders');
    ordersContainer.innerHTML = `<h2>Ваши заказы</h2>`;
    document.body.appendChild(ordersContainer);

    const savedProduct = JSON.parse(localStorage.getItem('selectedProduct')) || [];

    if (savedProduct.length > 0) {
        savedProduct.forEach((order, index) => {
            ordersContainer.innerHTML += `
            <div class="order-row" data-index="${index}">
                <p class="order-item">
                Дата Заказа: ${order.date} | Продукт: ${order.name} | Цена: $${order.price}
                </p>
                <button type="button" class="delete-btn" data-index="${index}">Удалить Заказ</button>
            </div>`;
          });
    } else {
    ordersContainer.innerHTML += `<p>Заказов еще нет</p>`;
    }
    
    ordersContainer.addEventListener('click', (event) => {
        const target = event.target;
      
        // Удаление заказа
        if (target.classList.contains('delete-btn')) {
          const index = parseInt(target.dataset.index);
      
          target.closest('.order-row').remove();
      
          const savedProduct = JSON.parse(localStorage.getItem('selectedProduct')) || [];
          savedProduct.splice(index, 1);
          localStorage.setItem('selectedProduct', JSON.stringify(savedProduct));
      
          const userInfo = JSON.parse(localStorage.getItem('userInfo')) || [];
          userInfo.splice(index, 1);
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
        }
      
        // Показ информации по заказу
        if (target.classList.contains('order-item')) {
          const index = parseInt(target.closest('.order-row')?.dataset.index);
          const savedUsers = JSON.parse(localStorage.getItem('userInfo')) || [];
      
          if (savedUsers[index]) {
            const user = savedUsers[index];
            alert(`Имя: ${user.username}\nГород: ${user.userCity}\nАдрес НП: ${user.userNp}\nОплата: ${user.userPayment}\nКоличество: ${user.userQuantity}`);
          } else {
            alert('Информация о пользователе не найдена.');
          }
        }
      });
      
  
    prevButton.addEventListener('click', () => {
      document.querySelector('.wrapper').style.display = 'flex';
      document.querySelector('.order-info').style.display = 'block';
      document.querySelector('.orders').style.display = 'block';
      prevButton.remove();
      ordersContainer.remove();
    });
});