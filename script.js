"use strict";

let title = "Project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 130;
let rollback = 30;
let fullPrice = 160;
let adaptive = true;

let screensLowerCase = screens.toLowerCase();
console.log(screensLowerCase.split(" "));

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");

console.log(
  "Процент отката посреднику за работу: " + fullPrice * (rollback / 100) + "%"
);

title = prompt("Как называется ваш проект?");
screens = prompt("Какие типы экранов нужно разработать");
screenPrice = parseInt(prompt("Сколько будет стоить данная работа?"));
adaptive = !!prompt("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = parseInt(prompt("Сколько это будет стоить?"));
let service2 = prompt("Какой еще дополнительный тип услуги нужен?");
let servicePrice2 = parseInt(prompt("Сколько это будет стоить?"));

fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice <= 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}
