const numericButtons = document.querySelectorAll(".numeric");
const operatorButtons = document.querySelectorAll(".operator");
const displayScreen = document.getElementById("screenBoard");
const upperDisplay = document.getElementById("screenExpression");
const equals = document.getElementById("equalsbutton");
const clearScreen = document.getElementById("buttonClear");
let operand1 = "";
let operator = "";
let operand2 = "";
let isOperatorUsed = 0;
let result = 0;

function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  return operand1 / operand2;
}

function operate(operator, operand1, operand2) {
  if (operator === "+") {
    return add(operand1, operand2);
  } else if (operator === "-") {
    return subtract(operand1, operand2);
  } else if (operator === "*") {
    return multiply(operand1, operand2);
  } else if (operator === "/") {
    return divide(operand1, operand2);
  }
}

function clear() {
  operand1 = "";
  operand2 = "";
  operator = "";
  displayScreen.textContent = "";
  isOperatorUsed = 0;
}

function evaluate() {
  result = operate(operator, operand1, operand2);
  operand1 = result;
  operator = "";
  operand2 = "";
  displayScreen.textContent = result;
}

numericButtons.forEach(function (number) {
  number.addEventListener("click", function () {
    console.log(`${number.dataset.value}`);
    if (isOperatorUsed === 0) {
      operand1 += number.dataset.value;
      displayScreen.textContent += number.dataset.value;
      operand1 = parseFloat(operand1);
    } else if (isOperatorUsed != 0) {
      operand2 += number.dataset.value;
      displayScreen.textContent += number.dataset.value;
      operand2 = parseFloat(operand2);
    }
  });
});

operatorButtons.forEach(function (Operator) {
  Operator.addEventListener("click", function () {
    console.log(`${Operator.dataset.value}`);
    if (operand1 === "") {
      console.log("need Operand first");
    } else {
      displayScreen.textContent += `${Operator.dataset.value}`;
      operator = Operator.dataset.value;
      isOperatorUsed++;
    }
  });
});

equals.addEventListener("click", evaluate);

clearScreen.addEventListener("click", clear);
