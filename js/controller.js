"use strict";
"use strict";
import * as config from "./config.js";
import * as help from "./helper.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

const startConfig = function () {
  config.inputValue.value = config.balanceValue.textContent = "";
  config.selectBox.selectedIndex = 0;
};

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
    config.balanceValue.textContent = `${help.displaySummary()} TMT`;
  });
};

//Clearing the balance
const clearBalance = function () {
  config.clearBtn.addEventListener("click", function (e) {
    e.preventDefault;
    help.clearButton();
    startConfig();
  });
};

//INIT FUNCTIONS
const init = function () {
  startConfig();
  setInterval(getTime, 1000);
  printStat();
  clearBalance();
};
init();
