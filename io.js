import { run2 as run } from './apps/app1.js';

function read() {
  const inputElement = document.getElementById('input');
  const outputElement = document.getElementById('output');

  outputElement.value = run(inputElement.value);
}

window.read = read;
