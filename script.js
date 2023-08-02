const displayScreen = document.querySelector(".display");
const numBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const ACBtn = document.querySelector(".AC");
const equalsBtn = document.querySelector(".equals");
const negBtn = document.querySelector(".neg");
const percentBtn = document.querySelector(".percent");

let total = "";
let num = "";
let operator = "";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(firstNum, operator, secondNum) {
  switch (operator) {
    case "+":
      return add(+firstNum, +secondNum);
    case "-":
      return subtract(+firstNum, +secondNum);
    case "*":
      return multiply(+firstNum, +secondNum);
    case "/":
      return divide(+firstNum, +secondNum);
    default:
      return 0;
  }
}

function updateDisplay(val) {
  displayScreen.value = val;
}

numBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    num += e.target.textContent;
    updateDisplay(num);
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operator = e.target.textContent;

    if (total && num) {
      total = operate(total, operator, num);
      updateDisplay(total);
      num = "";
    } else if (num) {
      total = num;
      num = "";
    }
  });
});

equalsBtn.addEventListener("click", () => {
  if (total && num && operator) {
    total = operate(total, operator, num);
    updateDisplay(total);

    num = "";
    operator = "";
  }
});

ACBtn.addEventListener("click", (e) => {
  displayScreen.value = "";
  total = "";
  num = "";
  operator = "";
});

negBtn.addEventListener("click", () => {
  if (num) {
    num = +num * -1;
    updateDisplay(num);
  }
});
