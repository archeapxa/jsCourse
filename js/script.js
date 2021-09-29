"use strict";

const title = document.getElementsByTagName("h1")[0];
const handlerButton = document.getElementsByClassName("handler_btn");
const addElementButton = document.querySelector(".screen-btn");
const othersPercent = document.querySelectorAll(".other-items.percent");
const othersNumber = document.querySelectorAll(".other-items.number");
const rollback = document.querySelector(".rollback input[type=range]");
const rangeValue = document.querySelector(".rollback .range-value");
const totalInput1 = document.getElementsByClassName("total-input")[1];
const totalInput2 = document.getElementsByClassName("total-input")[2];
const totalInput3 = document.getElementsByClassName("total-input")[3];
const totalInput4 = document.getElementsByClassName("total-input")[4];
const totalInput5 = document.getElementsByClassName("total-input")[5];

let screens = document.querySelectorAll(".screen");

console.log(title);
console.log(handlerButton);
console.log(addElementButton);
console.log(othersPercent);
console.log(othersNumber);
console.log(rollback);
console.log(rangeValue);
console.log(totalInput1);
console.log(screens);

const appData = {
  rollback: 10,
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },
  asking: function () {
    do {
      appData.title = prompt(
        "Как называется ваш проект?",
        "Калькулятор верстки"
      );
    } while (appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {
      let name = "";
      do {
        name = prompt("Какие типы экранов нужно разработать");
      } while (appData.isNumber(name));

      let price = 0;
      do {
        price = parseFloat(
          prompt("Сколько будет стоить данная работа?").match(/\d+/)
        );
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");

    for (let i = 0; i < 2; i++) {
      let price = 0;
      let name = "";
      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (appData.isNumber(name));

      do {
        price = parseFloat(prompt("Сколько это будет стоить?").match(/\d+/));
      } while (!appData.isNumber(price));

      appData.services[name + "_" + i] = +price;
    }
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && !!num;
  },
  isString: function (str) {},
  getRollbackMessage: function (price) {
    if (price > 30000) {
      return "Даем скидку в 10%";
    } else if (price > 15000 && price <= 30000) {
      return "Даем скидку в 5%";
    } else if (price > 0 && price <= 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },
  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },
  getTitle: function (title) {
    appData.title =
      appData.title.trim().charAt(0).toUpperCase() +
      appData.title.trim().slice(1).toLowerCase();
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData);
  },
};

// appData.start();
