import { run1, run2 } from './apps/app4.js';

function read() {
  const inputElement = document.getElementById('input');
  const outputElement1 = document.getElementById('output1');
  const outputElement2 = document.getElementById('output2');

  outputElement1.value = run1(inputElement.value);
  outputElement2.value = run2(inputElement.value);
}

window.read = read;
