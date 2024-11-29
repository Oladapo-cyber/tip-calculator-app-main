const reset = document.getElementById("reset");
const bill = document.getElementById("bill");
const custom = document.getElementById("custom");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const people = document.getElementById("people");
const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twentyFive = document.getElementById("twenty-five");
const fifty = document.getElementById("fifty");

console.log(
  reset,
  bill,
  custom,
  tip,
  total,
  people,
  five,
  ten,
  fifteen,
  twentyFive,
  fifty
);

const calculateTip = (value) => {
  console.log(value);

  const percent = value / 100;
  const billAmount = bill.value / people.value;
  const tipPerPerson = billAmount * percent;
  const billAmountPerPerson = tipPerPerson + billAmount;

  console.log(percent, billAmount, tipPerPerson, billAmountPerPerson);

  tip.textContent = `${"$" + tipPerPerson.toFixed(2)}`;

  total.textContent = `${"$" + billAmountPerPerson.toFixed(2)}`;
};

bill.addEventListener("change", function () {
  console.log("Bill:", bill.value);
});

custom.addEventListener("change", function () {
  console.log("Custom:", custom.value);
  calculateTip(custom.value);
});

people.addEventListener("change", function () {
  console.log("People:", people.value);
});

five.addEventListener("click", () => {
  calculateTip(5);
});
ten.addEventListener("click", () => {
  calculateTip(10);
});
fifteen.addEventListener("click", () => {
  calculateTip(15);
});
twentyFive.addEventListener("click", () => {
  calculateTip(25);
});
fifty.addEventListener("click", () => {
  calculateTip(50);
});

reset.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  tip.textContent = "$0.00";
  total.textContent = "$0.00";
  custom.value = "";
});
