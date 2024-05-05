const number = document.getElementById('number');
const result = document.getElementById('result');
const button = document.getElementById('calculate');

function calculate() {
  let num = number.value;
  let f = 1;
  for (let i = 1; i<=num; i++) {
    f *= i;
  }
  result.innerHTML = f;
}

button.addEventListener('click', calculate);