let title = "Project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 130;
let rollback = 30;
let fullPrice = 160;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");

let screensLowerCase = screens.toLowerCase();
console.log(screensLowerCase.split(" "));

console.log(
  "Процент отката посреднику за работу: " + fullPrice * (rollback / 100) + "%"
);
