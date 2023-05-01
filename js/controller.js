"use strict";
import * as config from "./config.js";
import * as help from "./helper.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

//DISPLAY TIME
const getTime = function () {
  const time = new Date();

  document.querySelector(".date").innerHTML = time.toLocaleDateString();
  document.querySelector(".time").innerHTML = time.toLocaleTimeString();
};

//ADDING STATISTICS
const printStat = function () {
  config.operationBtn.addEventListener("click", function (e) {
    e.preventDefault();
    config.statList.insertAdjacentHTML("afterbegin", help.addingStat());
    config.inputValue.value = "";
    config.selectBox.selectedIndex = 0;
    //Print a current balance
    config.balanceValue.textContent = `${help.displaySummary(help.balance)} 
    TMT`;
    help.saveAll();
  });
};

//Clearing the balance
const clearBalance = function () {
  config.clearBtn.addEventListener("click", function (e) {
    e.preventDefault;
    help.clearButton();
  });
};

//INIT FUNCTIONS
const init = function () {
  help.loadAll();
  setInterval(getTime, 1000);
  printStat();
  clearBalance();
};
init();

//Adding to local storage
// function saveAll() {
//   const toStorage = [];

//   const values = document.querySelectorAll("li");
//   for (let i = 0; i < values.length; i++) {
//     toStorage.push(values[i].innerHTML);
//   }

//   console.log(toStorage);
// }
