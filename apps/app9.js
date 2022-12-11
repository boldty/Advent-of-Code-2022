function run1(input) {
  let head = [0, 0];
  let tail = [0, 0];
  let visitedCells = [getString(0, 0)];

  input.split('\n').forEach((line) => {
    let opperation = line.split(' ');
    let dirrection = opperation[0];
    let moves = opperation[1];
    for (let move = 1; move <= moves; move++) {
      let response = updateVisistedCells(head, tail, dirrection, true);
      head = response[0];
      tail = response[1];

      const string = getString(tail[0], tail[1]);
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
  const numberOfNodes = 10;
  let nodes = [];
  for (i = 0; i < numberOfNodes; i++) {
    nodes.push([0, 0]);
  }

  let visitedCells = [getString(0, 0)];

  input.split('\n').forEach((line) => {
    let opperation = line.split(' ');
    let dirrection = opperation[0];
    let moves = opperation[1];
    for (let move = 1; move <= moves; move++) {
      for (let i = 0; i < nodes.length - 1; i++) {
        let head = nodes[i];
        let tail = nodes[i + 1];

        let response = updateVisistedCells(head, tail, dirrection, i == 0);
        nodes[i] = response[0];
        nodes[i + 1] = response[1];
      }

      const finalNode = nodes[numberOfNodes - 1];
      const string = getString(finalNode[0], finalNode[1]);
      if (visitedCells.indexOf(string) === -1) {
        visitedCells.push(string);
      }
    }
  });

  return visitedCells.length;
}

function updateVisistedCells(head, tail, dirrection, firstNode) {
  let headX = head[0];
  let headY = head[1];
  let tailX = tail[0];
  let tailY = tail[1];

  if (firstNode) {
    if (dirrection == 'R') {
      headX++;
    } else if (dirrection == 'L') {
      headX--;
    } else if (dirrection == 'U') {
      headY++;
    } else if (dirrection == 'D') {
      headY--;
    }
  }

  if (headX > tailX + 1) {
    tailX++;
    tailY = updateY(headY, tailY);
  } else if (headX < tailX - 1) {
    tailX--;
    tailY = updateY(headY, tailY);
  } else if (headY > tailY + 1) {
    tailY++;
    tailX = updateX(headX, tailX);
  } else if (headY < tailY - 1) {
    tailY--;
    tailX = updateX(headX, tailX);
  }

  head[0] = headX;
  head[1] = headY;
  tail[0] = tailX;
  tail[1] = tailY;
  return [head, tail];
}

function updateY(headY, tailY) {
  if (tailY < headY) {
    return tailY + 1;
  } else if (tailY > headY) {
    return tailY - 1;
  }
  return tailY;
}

function updateX(headX, tailX) {
  if (tailX < headX) {
    return tailX + 1;
  } else if (tailX > headX) {
    return tailX - 1;
  }
  return tailX;
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
