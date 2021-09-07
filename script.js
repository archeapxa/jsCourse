"use strict";

let rollback = 10;
let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let screensLowerCase;

const isNumber = function (num) {
  // num = num.match(/\D+/, "");
  return !isNaN(parseFloat(num)) && isFinite(num) && !!num;
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать", "Простые, сложные");
  do {
    screenPrice = parseFloat(
      prompt("Сколько будет стоить данная работа?").match(/\d+/)
    );
  } while (!isNumber(screenPrice));
  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price > 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price > 0 && price <= 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

const getAllServicePrices = function () {
  let sum = 0;
  let questionSum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой еще дополнительный тип услуги нужен?");
    }
    do {
      questionSum = parseFloat(
        prompt("Сколько это будет стоить?").match(/\d+/)
      );
    } while (!isNumber(questionSum));
    sum += questionSum;
  }

  return sum;
};

function getFullPrice(screen, service) {
  return screen + service;
}

const getServicePercentPrices = function (fullPrice, rollback) {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
};

const getTitle = function (title) {
  return (
    title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase()
  );
};

asking();

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle(title);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

screensLowerCase = screens.toLowerCase();
console.log(screensLowerCase.split(" "));

console.log(getRollbackMessage(fullPrice));

console.log(servicePercentPrice);
