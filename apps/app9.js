let tailX = 0;
let tailY = 0;
let headX = 0;
let headY = 0;
let firstMove = true;

function run1(input) {
  let visitedCells = [getString(tailX, tailY)];

  input.split('\n').forEach((line) => {
    let opperation = line.split(' ');
    let dirrection = opperation[0];
    let moves = opperation[1];
    let isXMove = true;
    firstMove = true;
    for (let move = 1; move <= moves; move++) {
      const string = getString(tailX, tailY);
      if (visitedCells.indexOf(string) === -1) {
        visitedCells.push(string);
      }
      // Head
      //console.log(getString(headX, headY));
      //console.log(getString(tailX, tailY));
      //console.log(dirrection);
      if (dirrection == 'R') {
        headX++;
        if (headX > tailX + 1) {
          tailX++;
        } else {
          firstMove = false;
          continue;
        }
        updateY();
      }
      if (dirrection == 'L') {
        headX--;
        if (headX < tailX - 1) {
          tailX--;
        } else {
          firstMove = false;
          continue;
        }
        updateY();
      }
      if (dirrection == 'U') {
        headY++;
        if (headY > tailY + 1) {
          tailY++;
        } else {
          firstMove = false;
          continue;
        }
        updateX();
      }
      if (dirrection == 'D') {
        headY--;
        if (headY < tailY - 1) {
          tailY--;
        } else {
          firstMove = false;
          continue;
        }
        updateX();
      }
    }
    firstMove = false;

    const string = getString(tailX, tailY);
    if (visitedCells.indexOf(string) === -1) {
      visitedCells.push(string);
    }
  });
  console.log(visitedCells);

  return visitedCells.length;
}

function updateY() {
  if (firstMove) {
    return;
  }
  tailY = headY;
}

function updateX() {
  if (firstMove) {
    firstMove = false;
    return;
  }
  tailX = headX;
}

function getString(x, y) {
  const sepparator = '~';
  return x + sepparator + y;
}

function run2(input) {
  return '';
}

window.run1 = run1;
window.run2 = run2;
window.defaultValue = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;
