moment.locale('ru');

const birthday = moment('1994-07-29', 'YYYY-MM-DD');
document.querySelector('.my_birthday')
.textContent = `Я родился ${birthday.format('D MMMM YYYY года')}`;


function handleDate() {
    const input = document.getElementById('userInput').value.trim();
    const regex = /^([0-2]\d|3[01])\/(0\d|1[0-2])\/\d{4}$/;

    if (!regex.test(input)) {
      document.getElementById('result').innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>ОШИБКА!!!</strong> Введите дату в формате ДД/ММ/ГГГГ
      </div>`;
      return;
    }

    const date = moment(input, 'DD/MM/YYYY', true);
    if (date.isValid()) {
      const formatted = date.format('YYYY году, месяц: MMMM, день: DD');
      document.getElementById('result').innerHTML = `Пользователь родился в ${formatted}`;
    }
  } 

  document.querySelector('button').addEventListener('click', () => {
    handleDate()
  })