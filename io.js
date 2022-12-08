document.addEventListener('DOMContentLoaded', () => init());

function init() {
  if (!defaultValue) {
    return;
  }
  document.getElementById('input').value = defaultValue;
  read();
}

function read() {
  const inputElement = document.getElementById('input');
  const outputElement1 = document.getElementById('output1');
  const outputElement2 = document.getElementById('output2');

  const inputValue = inputElement.value;
  if (!inputValue) {
    console.log('Missing input');
    return;
  }

  outputElement1.value = run1(inputValue);
  outputElement2.value = run2(inputValue);
}

window.read = read;
