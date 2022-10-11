let num1 = [];
let num2 = [];
let operator = '';
let result = 0;
const btns = document.querySelectorAll('button');
const display = document.querySelector('.display');

function operate(op, a, b) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return false;
  }
}

function clearDisplay() {
  display.textContent = '0';
  num1 = [];
  num2 = [];
  operator = '';
}

function populateDisplay() {
  result = operate(operator, +num1.join(''), +num2.join(''));
  display.textContent = parseFloat(result.toFixed(8));
  if (!Number.isFinite(result)) {
    display.textContent = 'hehe';
  }

  num1 = [result];
  num2 = [];
  operator = '';
}

function deleteFromDisplay() {
  if (num2.length > 0) {
    num2.pop();
    display.textContent = num2.join('');
  } else if (num2.length === 0) {
    num1.pop();
    display.textContent = num1.join('');
  }
}

function clickNumber(e) {
  if (display.textContent.includes('.')) {
    document.querySelector('#dot').disabled = true;
  } else document.querySelector('#dot').disabled = false;
  if (operator.length === 0) {
    num1.push(e.target.textContent);
    display.textContent = num1.join('');
  } else if (operator.length > 0) {
    num2.push(e.target.textContent);
    display.textContent = num2.join('');
  }
}

btns.forEach((i) => {
  i.addEventListener('click', (e) => {
    if (e.target.classList.contains('clear')) {
      clearDisplay();
    }
    if (e.target.classList.contains('delete')) {
      deleteFromDisplay();
    }
    if (e.target.classList.contains('equals') && num2.length > 0) {
      populateDisplay();
    }
    if (e.target.classList.contains('operator')) {
      if (operator.length === 1) {
        populateDisplay();
      }
      operator = e.target.textContent;
    }
    if (e.target.classList.contains('number')) {
      clickNumber(e);
    }
  });
});

document.addEventListener('keydown', (e) => {
  console.log(e);
});
