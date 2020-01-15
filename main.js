'use strict';

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '2000-01-01');

let appData = {
    money,
    timeData: time,
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