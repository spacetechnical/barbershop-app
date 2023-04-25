"use strict";
"use strict";
import * as config from "./config.js";
import * as help from "./helper.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

const startConfig = function () {
  config.inputName.focus();
  config.inputValue.value =
    config.inputName.value =
    config.balanceValue.textContent =
      "";
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
    config.inputName.value = config.inputValue.value = "";

    //Print a current balance
    config.balanceValue.textContent = `${help.displaySummary()} TMT`;
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
  startConfig();
  setInterval(getTime, 1000);
  printStat();
  clearBalance();
};
init();
