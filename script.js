/* eslint-disable prefer-const */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
const display = document.querySelector('#display');
let num1 = [];
let op = [];
let num2 = [];
let result = [];

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('number') && op.length == 0) {
    num1.push(e.target.textContent);
    display.textContent += e.target.textContent;
  } else if (e.target.classList.contains('number') && !num1.length == 0 && !op.length == 0) {
    display.textContent = num2.join('');
    num2.push(e.target.textContent);
    display.textContent += e.target.textContent;
  }
  if (e.target.classList.contains('operator') && !num1.length == 0 && !op.length == 0 && !num2.length == 0) {
    result = operate(+num1.join(''), op[0], +num2.join(''));
    display.textContent = result;
    num1.splice(0, 10, result);
    num2 = [];
  }
  if (e.target.classList.contains('operator') && !num2.length == 0 && !op.length == 0) {
    op.splice(0, 1, e.target.textContent);
  } else if (e.target.classList.contains('operator')) {
    op.splice(0, 1, e.target.textContent);
  }
  if (e.target.classList.contains('equals')) {
    result = operate(+num1.join(''), op[0], +num2.join(''));
    display.textContent = result;
    num1.splice(0, 10, result);
    num2 = [];
  }
  if (e.target.classList.contains('ac')) {
    display.textContent = '';
    display.innerHTML = '';
    num1 = [];
    op = [];
    num2 = [];
    result = [];
  }
});

const operate = function(a, operator, b) {
  switch (operator) {
    case '+':
      return a + b;
      break;
    case '-':
      return a - b;
      break;
    case '*':
      return a * b;
      break;
    case '/':
      return a / b;
      break;
  }
};
