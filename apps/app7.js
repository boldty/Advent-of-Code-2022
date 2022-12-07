let map = new Map();
let lineNumber = 0;
const dirSepparator = '/';
let currentDir = '';

const commandCd = '$ cd ';
const commandLs = '$ ls';

function run1(input) {
  init(input);
  let sum = 0;
  map.forEach((value, key) => {
    if (value <= 100000) {
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
  if (dir == '/') {
    currentDir = '';
    return;
  }

  currentDir += dirSepparator + dir;
}

function moveUpOne(dir) {
  return dir.slice(0, dir.lastIndexOf('/'));
}

function handleLs(lines) {
  let size = calculateMapSize(lines);
  updateFileSize(currentDir, size);
}

function calculateMapSize(lines) {
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

function updateFileSize(dir, size) {
  if (dir == '' || dir == '/') {
    let currentSize = map.get('/') || 0;
    currentSize += size;
    map.set('/', currentSize);
    // Either or both?
    // Need to put in main dir as well
    return;
  }
  let currentSize = map.get(dir) || 0;
  currentSize += size;
  map.set(dir, currentSize);

  dir = moveUpOne(dir);
  updateFileSize(dir, size);
}

function run2(input) {
  init(input);
  let finalValue = 70000000;
  let totalSize = map.get('/');

  let requiredFreeSpace = 30000000 - (finalValue - totalSize);

  console.log('req' + requiredFreeSpace);

  map.forEach((value, key) => {
    if (value >= requiredFreeSpace && value < finalValue) {
      console.log(value);
      console.log(key);
      finalValue = value;
    }
  });
  return finalValue;
}

export { run1, run2 };
