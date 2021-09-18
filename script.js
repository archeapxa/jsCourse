"use strict";

const appData = {
  rollback: 10,
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать",
      "Простые, сложные"
    );
    do {
      appData.screenPrice = parseFloat(
        prompt("Сколько будет стоить данная работа?").match(/\d+/)
      );
    } while (!appData.isNumber(appData.screenPrice));
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && !!num;
  },
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
  getAllServicePrices: function () {
    let sum = 0;
    let questionSum = 0;
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.service2 = prompt("Какой еще дополнительный тип услуги нужен?");
      }
      do {
        questionSum = parseFloat(
          prompt("Сколько это будет стоить?").match(/\d+/)
        );
      } while (!appData.isNumber(questionSum));
      sum += questionSum;
    }
    return sum;
  },
  getFullPrice: function (screen, service) {
    return screen + service;
  },
  getServicePercentPrices: function (fullPrice, rollback) {
    return Math.ceil(fullPrice - fullPrice * (rollback / 100));
  },
  getTitle: function (title) {
    return (
      title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase()
    );
  },
  start: function () {
    appData.asking();

    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice(
      appData.screenPrice,
      appData.allServicePrices
    );
    appData.servicePercentPrice = appData.getServicePercentPrices(
      appData.fullPrice,
      appData.rollback
    );
    appData.title = appData.getTitle(appData.title);
    this.logger();
  },
  logger: function () {
    console.log(appData);
  },
};

appData.start();
