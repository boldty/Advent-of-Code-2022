function run1(input) {
  const startCycle = 20;
  const endCycle = 220;
  const intervall = 40;

  let list = input.split('\n').reverse();

  let i = 1;
  let x = 1;
  let output = [];
  let outputCycle = startCycle;
  while (i < endCycle) {
    let command = list.pop();
    let isAddCommand = command != 'noop';

    if (!isAddCommand) {
      i++;
    }

    let cycle = isAddCommand ? i + 1 : i;
    if (cycle == outputCycle) {
      output.push(x * cycle);
      if (cycle == endCycle) {
        break;
      }
      outputCycle += intervall;
    }
    if (isAddCommand) {
      x += Number(command.replace('addx ', ''));
      i += 2;
    }

    if (i == outputCycle) {
      output.push(x * i);
      if (i == endCycle) {
        break;
      }
      outputCycle += intervall;
    }
  }

  console.log(output);
  let sum = 0;
  output.forEach((element) => (sum += element));
  return sum;
}

function run2(input) {
  return '';
}

window.run1 = run1;
window.run2 = run2;
window.defaultValue = `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`;
