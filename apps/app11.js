function run1(input) {
  return(calculateOutput(input, 20, 3));
}

function run2(input) {
  return(calculateOutput(input, 10000, undefined));
}

function calculateOutput(input, loops, divideNewValueBy) {
  let monkeyList = getInputList(input);
  var lcmDivisor = monkeyList.map(monkey => monkey.divisibleTest).reduce((val1, val2) => val1 * val2);

  for (let i = 0; i < loops; i++) {
    monkeyList.forEach((monkey) => {
      monkey.items.forEach((item) => {

        let opperatorFunction;
        if(monkey.operationType === '+') 
          opperatorFunction = (val1,val2) => val1 + val2;
        else if (monkey.operationType === '*') 
          opperatorFunction = (val1,val2) => val1 * val2;
        else 
          throw new Error('Unexpected opperation type');
        
        const operatorNumber = monkey.operationValue === 'old' ? Number(item) : Number(monkey.operationValue);
        let newValue = opperatorFunction(item, operatorNumber);
        if(divideNewValueBy) {
          newValue = Math.floor(newValue / divideNewValueBy);
        }
        const newValueReminder = newValue % lcmDivisor;

        if(newValue % monkey.divisibleTest == 0) 
          monkeyList[monkey.trueMonkey].items.push(newValueReminder);
        else 
          monkeyList[monkey.falseMonkey].items.push(newValueReminder);

        monkey.inspectionCount ++;
      });
      monkey.items = [];
    });
    
  }

  monkeyList.sort((val1, val2) => val2.inspectionCount - val1.inspectionCount);
  return monkeyList[0].inspectionCount * monkeyList[1].inspectionCount;
}

function getInputList(input) {
  let monkeyList = [];
  input.split('\n\n').forEach((content) => {
    var lines = content.split('\n');
    if(lines.length < 6) {
      throw Error('Unexpected data');
      return;
    }
    var items = lines[1].replace('Starting items: ','').split(', ').map(Number);
    var operation = lines[2].replace('Operation: new = old ','').split(' ');
    var operationType = operation[0];
    var operationValue = operation[1];
    var divisibleTest = Number(lines[3].replace('Test: divisible by ',''));
    var trueMonkey = Number(lines[4].replace('  If true: throw to monkey ',''));
    var falseMonkey = Number(lines[5].replace('  If false: throw to monkey ',''));


    monkeyList.push({
      items: items,
      operationType: operationType,
      operationValue: operationValue,
      divisibleTest: divisibleTest,
      trueMonkey: trueMonkey,
      falseMonkey: falseMonkey,
      inspectionCount: 0
    })
  });

  return monkeyList;
}

var input = `Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`;

var result1 = run1(input);
console.log('result 1: \n' + result1);
var result2 = run2(input);
console.log('result 2: \n' + result2);