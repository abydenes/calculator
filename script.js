/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
let displayValue = '';
let operator;
const display = document.querySelector('#display');


/* OPERATOR FUNCTIONS */

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = function(a, operator, b) {
  switch (operator) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
  }
};

/* BUTTONS */

// number buttons
const button1 = document.querySelector('#one');
button1.addEventListener('click', () => {
  displayValue += 1;
  display.textContent += '1';
});
const button2 = document.querySelector('#two');
button2.addEventListener('click', () => {
  displayValue += 2;
  display.textContent += '2';
});
const button3 = document.querySelector('#three');
button3.addEventListener('click', () => {
  displayValue += 3;
  display.textContent += '3';
});
const button4 = document.querySelector('#four');
button4.addEventListener('click', () => {
  displayValue += 4;
  display.textContent += '4';
});
const button5 = document.querySelector('#five');
button5.addEventListener('click', () => {
  displayValue += 5;
  display.textContent += '5';
});
const button6 = document.querySelector('#six');
button6.addEventListener('click', () => {
  displayValue += 6;
  display.textContent += '6';
});
const button7 = document.querySelector('#seven');
button7.addEventListener('click', () => {
  displayValue += 7;
  display.textContent += '7';
});
const button8 = document.querySelector('#eight');
button8.addEventListener('click', () => {
  displayValue += 8;
  display.textContent += '8';
});
const button9 = document.querySelector('#nine');
button9.addEventListener('click', () => {
  displayValue += 9;
  display.textContent += '9';
});
const button0 = document.querySelector('#zero');
button0.addEventListener('click', () => {
  displayValue += 0;
  display.textContent += '0';
});

// operator buttons
const buttonPlus = document.querySelector('#plus');
buttonPlus.addEventListener('click', () => {
  operator = '+';
  displayValue += '+';
  display.textContent += '+';
});
const buttonMinus = document.querySelector('#minus');
buttonMinus.addEventListener('click', () => {
  operator = '-';
  displayValue += '-';
  display.textContent += '-';
});
const buttonMultiply = document.querySelector('#multiply');
buttonMultiply.addEventListener('click', () => {
  operator = '*';
  displayValue += '*';
  display.textContent += '*';
});
const buttonDivide = document.querySelector('#divide');
buttonDivide.addEventListener('click', () => {
  operator = '/';
  displayValue += '/';
  display.textContent += '/';
});
const buttonEquals = document.querySelector('#equals');
buttonEquals.addEventListener('click', () => {
  test();
});
const buttonAc = document.querySelector('#ac');
buttonAc.addEventListener('click', () => {
  display.innerHTML = '';
  displayValue = [];
});

function test() {
  displayValue =
  operate(+displayValue.split(operator)[0], operator, +displayValue.split(operator)[1]);
  display.textContent = displayValue;
}
