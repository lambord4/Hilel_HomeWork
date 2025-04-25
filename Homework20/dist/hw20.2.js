"use strict";

moment.locale('ru');
var birthday = moment('1994-07-29', 'YYYY-MM-DD');
document.querySelector('.my_birthday').textContent = "\u042F \u0440\u043E\u0434\u0438\u043B\u0441\u044F ".concat(birthday.format('D MMMM YYYY года'));
function handleDate() {
  var input = document.getElementById('userInput').value.trim();
  var regex = /^([0-2]\d|3[01])\/(0\d|1[0-2])\/\d{4}$/;
  if (!regex.test(input)) {
    document.getElementById('result').innerHTML = "\n      <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n        <strong>\u041E\u0428\u0418\u0411\u041A\u0410!!!</strong> \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u0414\u0414/\u041C\u041C/\u0413\u0413\u0413\u0413\n      </div>";
    return;
  }
  var date = moment(input, 'DD/MM/YYYY', true);
  if (date.isValid()) {
    var formatted = date.format('YYYY году, месяц: MMMM, день: DD');
    document.getElementById('result').innerHTML = "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0440\u043E\u0434\u0438\u043B\u0441\u044F \u0432 ".concat(formatted);
  }
}
document.querySelector('button').addEventListener('click', function () {
  handleDate();
});