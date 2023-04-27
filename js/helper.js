import * as config from "./config.js";

//Array of balance
export let balance = [];

// Adding statistics
export const addingStat = function () {
  //Identification
  const name = config.selectBox.options[config.selectBox.selectedIndex].text;
  if (name === undefined || name === "Select a barber") return "";
  const amount = Number(config.inputValue.value);
  if (!amount && typeof amount !== number) return;

  // Adding an amount to value
  balance.push(amount);

  //Adding html
  return `
  <li class="statistics__element flex">
  <div class="date flex">
    <p class="statistics_name">${name}</p>
    <p class="statistics__time">${new Date().toLocaleTimeString()}</p>
  </div>
  <p class="statistics__value">${amount} TMT</p>
</li>
  `;
};

//Display current summary
export const displaySummary = function () {
  const sum = balance.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return sum;
};

//Remove all data(clear)
export const clearButton = function () {
  balance = [];
  config.statList.innerHTML = "";
  config.balanceValue.textContent = "";
};
