let numberOfElements = 3;

function run1(input) {
  var max = 0;

  input.split('\n\n').forEach((current) => {
    max = Math.max(max, getSumOfString(current));
  });

  return max;
}

function run2(input) {
  var array = [];

  input.split('\n\n').forEach((current) => {
    let value = getSumOfString(current);
    addIfLarger(array, value);
  });

  return array.reduce((sum, current) => sum + current);
}

function getSumOfString(string) {
  return string
    .split('\n')
    .map(Number)
    .reduce((sum, current) => sum + current);
}

function addIfLarger(array, value) {
  if (array.length < numberOfElements) {
    array.push(value);
    return;
  }

  let min = Math.min(...array);
  if (min < value) {
    array[array.indexOf(min)] = value;
  }
}

window.run1 = run1;
window.run2 = run2;
window.defaultValue = ``;
