function run1(input) {
  let tailX = 0;
  let tailY = 0;
  let headX = 0;
  let headY = 0;
  let visitedCells = [getString(tailX, tailY)];

  input.split('\n').forEach((line) => {
    let opperation = line.split(' ');
    let dirrection = opperation[0];
    let moves = opperation[1];
    for (let move = 1; move <= moves; move++) {
      if (dirrection == 'R') {
        headX++;
        if (headX > tailX + 1) {
          tailX++;
          tailY = headY;
        }
      } else if (dirrection == 'L') {
        headX--;
        if (headX < tailX - 1) {
          tailX--;
          tailY = headY;
        }
      } else if (dirrection == 'U') {
        headY++;
        if (headY > tailY + 1) {
          tailY++;
          tailX = headX;
        }
      } else if (dirrection == 'D') {
        headY--;
        if (headY < tailY - 1) {
          tailY--;
          tailX = headX;
        }
      }

      const string = getString(tailX, tailY);
      if (visitedCells.indexOf(string) === -1) {
        visitedCells.push(string);
      }
    }
  });

  return visitedCells.length;
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
