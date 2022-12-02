const Rock = {
  value: 'A',
  beats: void 0, // Scissors - Declared in setup
  points: 1,
};
const Paper = {
  value: 'B',
  beats: void 0, // Rock - Declared in setup
  points: 2,
};
const Scissors = {
  value: 'C',
  beats: void 0, // Paper - Declared in setup
  points: 3,
};

setup();

function setup() {
  Rock.beats = Scissors;
  Paper.beats = Rock;
  Scissors.beats = Paper;
}

let possibleMoves = [Rock, Paper, Scissors];

function run1(input) {
  var sum = 0;
  input
    .split('\n')
    .forEach(
      (current) => (sum += calculatePoints(current, getMyMoveFromValue))
    );
  return sum;
}

const myValueToOpponentValueMap = {
  X: 'A',
  Y: 'B',
  Z: 'C',
};

function getMyMoveFromValue(opponentMove, myMoveValue) {
  const formattedMoveValue = myValueToOpponentValueMap[myMoveValue];
  return possibleMoves.find((current) => current.value == formattedMoveValue);
}

function run2(input) {
  var sum = 0;
  input
    .split('\n')
    .forEach(
      (current) => (sum += calculatePoints(current, getMyMoveFromWinState))
    );
  return sum;
}

function getMyMoveFromWinState(opponentsMove, winState) {
  if (winState == 'X') {
    // Lose
    return possibleMoves.find((current) => current == opponentsMove.beats);
  }
  if (winState == 'Y') {
    // Draw
    return opponentsMove;
  }
  if (winState == 'Z') {
    // Win
    return possibleMoves.find((current) => current.beats == opponentsMove);
  }
}

function calculatePoints(movesString, getMyMoveFunction) {
  let moves = movesString.split(' ');

  let opponentMoveValue = moves[0];
  let opponentMove = possibleMoves.find(
    (current) => current.value == opponentMoveValue
  );

  let myMoveValue = moves[1];
  let myMove = getMyMoveFunction(opponentMove, myMoveValue);

  return calculatePointsSum(myMove, opponentMove);
}

function calculatePointsSum(myMove, opponentMove) {
  var sum = myMove.points;
  if (myMove == opponentMove) {
    sum += 3; // Draw
  } else if (myMove.beats == opponentMove) {
    sum += 6; // Win
  } else {
    sum += 0; // Loss
  }
  return sum;
}

export { run1, run2 };
