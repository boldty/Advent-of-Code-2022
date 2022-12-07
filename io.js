import { run1, run2 } from './apps/app7.js';

const defaultValue = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

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
