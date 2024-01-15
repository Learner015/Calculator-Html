// Assuming these variables are defined somewhere in your code
let firstNumber = "";
let secondNumber = "";
let operator = ""; // You need to define operator somewhere in your code
let displayElement = document.getElementById("display"); // Assuming you have a display element with the id "display"

let numButtons = document.getElementsByClassName("numButton");

for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", function() {
    if (operator === "") {
      firstNumber += this.textContent;
      updateDisplay(firstNumber);
    } else {
      secondNumber += this.textContent;
      updateDisplay(secondNumber);
    }
  });
}

let eqButton = document.getElementsByClassName("eqButton")[0];
eqButton.addEventListener("click", function() {
  result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
  updateDisplay(result);
})

let clearButton = document.getElementsByClassName("clearButton")[0];
clearButton.addEventListener("click", function() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = "";
  updateDisplay("");
})

let opButtons = document.getElementsByClassName("opButton");

for (let i = 0; i < opButtons.length; i++) {
  opButtons[i].addEventListener("click", function() {
    operator = this.textContent;
  });
}

function updateDisplay(value) {
  // Assuming displayElement is a DOM element where you want to show the numbers
  displayElement.textContent = value;
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b == 0) {
        return 'Error! Division by zero is undefined';
    } else {
        return a / b;
    }
}
function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}