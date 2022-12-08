function run1(input) {
  let matrix = [];
  input.split('\n').forEach((line) => {
    let array = [];
    line.split('').forEach((tree) => {
      array.push(tree);
    });
    console.log(array);
    matrix.push(array);
  });

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
      if (1 < checkLosLeft(matrix[x][y], matrix, x, y - 1, 1)) {
        sum++;
        continue;
      }
      if (1 < checkLosRight(matrix[x][y], matrix, x, y + 1, 1)) {
        sum++;
        continue;
      }
      if (1 < checkLosUp(matrix[x][y], matrix, x + 1, y, 1)) {
        sum++;
        continue;
      }
      if (1 < checkLosDown(matrix[x][y], matrix, x - 1, y, 1)) {
        sum++;
        continue;
      }
    }
  }
  return sum;
}

function checkLosLeft(current, matrix, x, y, distance) {
  if (y < 0) {
    return distance;
  }
  if (matrix[x][y] >= current) {
    return distance + 1;
  }
  return checkLosLeft(current, matrix, x, y - 1, distance + 1);
}

function checkLosRight(current, matrix, x, y, distance) {
  if (y >= matrix.length) {
    return distance;
  }
  if (matrix[x][y] >= current) {
    return distance + 1;
  }
  return checkLosRight(current, matrix, x, y + 1, distance + 1);
}

function checkLosUp(current, matrix, x, y, distance) {
  if (x >= matrix.length) {
    return distance;
  }
  if (matrix[x][y] >= current) {
    return distance + 1;
  }
  return checkLosUp(current, matrix, x + 1, y, distance + 1);
}

function checkLosDown(current, matrix, x, y, distance) {
  if (x < 0) {
    return distance;
  }
  if (matrix[x][y] >= current) {
    return distance + 1;
  }
  return checkLosDown(current, matrix, x - 1, y, distance + 1);
}

function run2(input) {
  let matrix = [];
  input.split('\n').forEach((line) => {
    let array = [];
    line.split('').forEach((tree) => {
      array.push(tree);
    });
    console.log(array);
    matrix.push(array);
  });

  let currentMax = 0;
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (
        x <= 0 ||
        y <= 0 ||
        x >= matrix.length - 1 ||
        y >= matrix.length - 1
      ) {
        continue;
      }
      const score1 = checkLosLeft(matrix[x][y], matrix, x, y - 1, 0);
      const score2 = checkLosRight(matrix[x][y], matrix, x, y + 1, 0);
      const score3 = checkLosUp(matrix[x][y], matrix, x + 1, y, 0);
      const score4 = checkLosDown(matrix[x][y], matrix, x - 1, y, 0);

      const totalScore = score1 * score2 * score3 * score4;
      if (totalScore > currentMax) {
        console.log(x + ' ' + y);
        console.log(score1);
        console.log(score2);
        console.log(score3);
        console.log(score4);
        currentMax = totalScore;
      }
    }
  }
  return currentMax;
}

export { run1, run2 };
