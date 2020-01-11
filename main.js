'use strict';

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '2000-01-01');

let appData = {
    money,
    time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}


let key;

for (let i = 0; i < 2; i++) {
    key = prompt('Введите обязательную статью расходов в этом месяце', 'Хлеб');
    appData.expenses[key] = prompt('Во сколько обойдется?', '2000');
}


alert ('Ваш бюджет на день: ' + money/30 + 'р.');



/*
for (let prop in appData.expenses) {
        alert('На ' + prop + ' Ваш дневной бюджет составляет: ' + appData.expenses[prop]/30);  

  }
*/

//test