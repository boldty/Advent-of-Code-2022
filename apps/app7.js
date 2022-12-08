const dirSepparator = '/';
const commandCd = '$ cd ';
const commandLs = '$ ls';

let map = new Map();
let lineNumber = 0;
let currentDir = '';

function run1(input) {
  init(input);
  const maxDirSize = 100000;

  let sum = 0;
  map.forEach((value, key) => {
    if (value <= maxDirSize) {
      sum += value;
    }
  });
  return sum;
}

function init(input) {
  map = new Map();
  lineNumber = 0;
  currentDir = '';

  let lines = input.split('\n');
  while (lineNumber < lines.length) {
    let line = lines[lineNumber];
    lineNumber++;
    if (line.startsWith(commandCd)) {
      handleCd(line);
      continue;
    }
    if (line.startsWith(commandLs)) {
      handleLs(lines);
      continue;
    }
    console.log('unexpected command: ' + line);
  }
}

function handleCd(line) {
  const dir = line.replace(commandCd, '');
  changeCurrentDir(dir);
}

function changeCurrentDir(dir) {
  if (dir == '..') {
    currentDir = moveUpOne(currentDir);
    return;
  }
  if (dir == dirSepparator) {
    currentDir = '';
    return;
  }

  currentDir += dirSepparator + dir;
}

function moveUpOne(dir) {
  return dir.slice(0, dir.lastIndexOf(dirSepparator));
}

function handleLs(lines) {
  let size = calculateSize(lines);
  updateSizes(currentDir, size);
}

function calculateSize(lines) {
  let sum = 0;
  while (lineNumber < lines.length) {
    let line = lines[lineNumber];
    if (line.startsWith('$')) {
      return sum;
    }
    lineNumber++;
    let fileSize = line.split(' ')[0];
    if (isNaN(fileSize)) {
      continue;
    }
    sum += Number(fileSize);
  }
  return sum;
}

function updateSizes(dir, size) {
  if (dir == '') {
    dir = dirSepparator;
  }
  let currentSize = map.get(dir) || 0;
  currentSize += size;
  map.set(dir, currentSize);

  if (dir == dirSepparator) {
    return;
  }
  dir = moveUpOne(dir);
  updateSizes(dir, size);
}

function run2(input) {
  init(input);
  const maxSize = 70000000;
  const totalSize = map.get(dirSepparator);
  const requiredFreeSpace = 30000000 - (maxSize - totalSize);

  let finalValue = maxSize;
  map.forEach((value, key) => {
    if (value >= requiredFreeSpace && value < finalValue) {
      finalValue = value;
    }
  });
  return finalValue;
}

window.run1 = run1;
window.run2 = run2;
window.defaultValue = ``;
