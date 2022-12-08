function run1(input) {
  let matrix = createMatrix(input);

  let sum = 0;
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (
        x <= 0 ||
        y <= 0 ||
        x >= matrix.length - 1 ||
        y >= matrix.length - 1
      ) {
        sum++;
        continue;
      }
      if (checkLosLeft(matrix[x][y], matrix, x, y - 1)) {
        sum++;
        continue;
      }
      if (checkLosRight(matrix[x][y], matrix, x, y + 1)) {
        sum++;
        continue;
      }
      if (checkLosUp(matrix[x][y], matrix, x + 1, y)) {
        sum++;
        continue;
      }
      if (checkLosDown(matrix[x][y], matrix, x - 1, y)) {
        sum++;
        continue;
      }
    }
  }
  return sum;
}

function createMatrix(input) {
  let matrix = [];

  input.split('\n').forEach((line) => {
    let array = [];
    line.split('').forEach((tree) => {
      array.push(tree);
    });
    console.log(array);
    matrix.push(array);
  });

  return matrix;
}

function checkLosLeft(current, matrix, x, y) {
  if (y < 0) {
    return true;
  }
  if (matrix[x][y] >= current) {
    return false;
  }
  return checkLosLeft(current, matrix, x, y - 1);
}

function checkLosRight(current, matrix, x, y) {
  if (y >= matrix.length) {
    return true;
  }
  if (matrix[x][y] >= current) {
    return false;
  }
  return checkLosRight(current, matrix, x, y + 1);
}

function checkLosUp(current, matrix, x, y) {
  if (x >= matrix.length) {
    return true;
  }
  if (matrix[x][y] >= current) {
    return false;
  }
  return checkLosUp(current, matrix, x + 1, y);
}

function checkLosDown(current, matrix, x, y) {
  if (x < 0) {
    return true;
  }
  if (matrix[x][y] >= current) {
    return false;
  }
  return checkLosDown(current, matrix, x - 1, y);
}

function run2(input) {
  let matrix = createMatrix(input);

  let currentMax = 0;
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      const score1 = calculateDistanceLeft(matrix[x][y], matrix, x, y - 1, 0);
      const score2 = calculateDistanceRight(matrix[x][y], matrix, x, y + 1, 0);
      const score3 = calculateDistanceUp(matrix[x][y], matrix, x + 1, y, 0);
      const score4 = calculateDistanceDown(matrix[x][y], matrix, x - 1, y, 0);

      const totalScore = score1 * score2 * score3 * score4;
      if (totalScore > currentMax) {
        currentMax = totalScore;
      }
    }
  }
  return currentMax;
}

function calculateDistanceLeft(current, matrix, x, y, distance) {
  if (y < 0) {
    return distance;
  }
  if (matrix[x][y] >= current) {
    return distance + 1;
  }
  return calculateDistanceLeft(current, matrix, x, y - 1, distance + 1);
}

function calculateDistanceRight(current, matrix, x, y, distance) {
  if (y >= matrix.length) {
    return distance;
  }
  if (matrix[x][y] >= current) {
    return distance + 1;
  }
  return calculateDistanceRight(current, matrix, x, y + 1, distance + 1);
}

function calculateDistanceUp(current, matrix, x, y, distance) {
  if (x >= matrix.length) {
    return distance;
  }
  if (matrix[x][y] >= current) {
    return distance + 1;
  }
  return calculateDistanceUp(current, matrix, x + 1, y, distance + 1);
}

function calculateDistanceDown(current, matrix, x, y, distance) {
  if (x < 0) {
    return distance;
  }
  if (matrix[x][y] >= current) {
    return distance + 1;
  }
  return calculateDistanceDown(current, matrix, x - 1, y, distance + 1);
}

window.run1 = run1;
window.run2 = run2;
window.defaultValue = `30373
25512
65332
33549
35390`;
