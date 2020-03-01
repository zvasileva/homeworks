"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent)) {
      return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    }

    if (isNaN(contribution)) {
      return `Параметр "Сумма первоначального взноса" содержит неправильное значение ${contribution}`;
    }

    if (isNaN(amount)) {
      return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;
    }

    let p = percent/12/100;
    let creditBody = amount - contribution;
    let now = new Date();
    let n = Math.floor(Math.abs(now.getTime() - date.getTime()) / (1000 * 3600 * 24)/30);
    let monthAmount = creditBody * (p + p/(((1 + p)**n)-1));
    let totalAmount = monthAmount * n;
    totalAmount = totalAmount.toFixed(2);
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    if (name.replace(/\s/g, '') === "") {
        name = 'Аноним';
     }
    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
}