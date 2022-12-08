let stacks = [];

function run1(input) {
  return run(input, readOpperationOneAtATime);
}

function readOpperationOneAtATime(quantity, fromStackIndex, toStackIndex) {
  let fromStack = stacks[fromStackIndex];
  let toStack = stacks[toStackIndex];

  let i = 0;
  while (i < quantity) {
    toStack.push(fromStack.pop());
    i++;
  }

  stacks[fromStackIndex] = fromStack;
  stacks[toStackIndex] = toStack;
}

function run2(input) {
  return run(input, readOpperationMultipleAtATime);
}

function readOpperationMultipleAtATime(quantity, fromStackIndex, toStackIndex) {
  let fromStack = stacks[fromStackIndex];
  let toStack = stacks[toStackIndex];

  let newToStack = toStack.concat(fromStack.slice(-quantity));
  let newFromStack = fromStack.slice(0, -quantity);

  stacks[fromStackIndex] = newFromStack;
  stacks[toStackIndex] = newToStack;
}

function run(input, readOpperation) {
  let inputs = input.split('\n\n');
  setupStacks(inputs[0]);

  inputs[1]
    .split('\n')
    .forEach((line) => readMoveOpperation(line, readOpperation));

  let sum = '';
  stacks.forEach((stack) => {
    sum += stack.pop();
  });
  return sum;
}

function setupStacks(input) {
  stacks = [];

  let list = input.split('\n');
  let indexes = [];
  let indexlist = list.pop();
  let stackNumber = 1;
  while (indexlist.includes(stackNumber)) {
    indexes.push(indexlist.indexOf(stackNumber));
    stackNumber++;
  }

  list.forEach((line) => {
    indexes.forEach((charIndex, arrayIndex) => {
      let character = line.charAt(charIndex);

      if (character != ' ') {
        let stack = stacks[arrayIndex];
        if (!stack) {
          stack = [];
        }
        stack.push(character);
        stacks[arrayIndex] = stack;
      }
    });
  });

  for (let i = 0; i < stacks.length; i++) {
    let stack = stacks[i];
    stacks[i] = stack.reverse();
  }
}

function readMoveOpperation(line, readOpperation) {
  line = line.replace('move ', '');
  line = line.replace('from ', '');
  line = line.replace('to ', '');
  let opperation = line.split(' ');

  let quantity = opperation[0];
  let fromStackIndex = opperation[1] - 1;
  let toStackIndex = opperation[2] - 1;
  readOpperation(quantity, fromStackIndex, toStackIndex);
}

window.run1 = run1;
window.run2 = run2;
window.defaultValue = ``;
