"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать");
let screenPrice = parseInt(prompt("Сколько будет стоить данная работа?"));
let adaptive = !!prompt("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = parseInt(prompt("Сколько это будет стоить?"));
let service2 = prompt("Какой еще дополнительный тип услуги нужен?");
let servicePrice2 = parseInt(prompt("Сколько это будет стоить?"));
let rollback = 10;

let screensLowerCase = screens.toLowerCase();

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

const getAllServicePrices = function (price1, price2) {
  return price1 + price2;
};
let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(screen, service) {
  return screen + service;
}
let fullPrice = getFullPrice(screenPrice, allServicePrices);

const getServicePercentPrices = function (fullPrice, rollback) {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
};
let servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

const getTitle = function (title) {
  return (
    title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase()
  );
};
title = getTitle(title);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screensLowerCase.split(" "));

console.log(getRollbackMessage(fullPrice));

console.log(servicePercentPrice);
