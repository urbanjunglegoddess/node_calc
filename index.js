const rs = require("readline-sync");

const operationSign = ["+", "-", "/", "*", "%"];

function getNumber(prompt) {
  while (true) {
    let num = rs.question(prompt);
    if (!isNaN(Number(num))) {
      return Number(num);
    }
    console.log("This is not a number");
  }
}

function getInput() {
  while (true) {
    let input = rs.question(
      "What operation would you like to perform? (or enter like '6 / 6') "
    );
    let parts = input.trim().split(" ");
    if (parts.length === 3 && operationSign.includes(parts[1])) {
      let firstNum = Number(parts[0]);
      let secondNum = Number(parts[2]);
      if (!isNaN(firstNum) && !isNaN(secondNum)) {
        return { op: parts[1], firstNum, secondNum };
      }
    }
    if (operationSign.includes(input.trim())) {
      let op = input.trim();
      let firstNum = getNumber("Please enter the first number: ");
      let secondNum = getNumber("Please enter the second number: ");
      return { op, firstNum, secondNum };
    }
    console.log("That is not a valid operation");
  }
}

function calculate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    default:
      return null;
  }
}

const { op, firstNum, secondNum } = getInput();
let output = calculate(firstNum, secondNum, op);
console.log(`The result is: ${output}`);
