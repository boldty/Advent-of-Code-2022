function run1(input) {}

function run2(input) {
  const groupSize = 3;

  let sum = 0;
  let index = 0;
  let list = input.split('\n');
  while (index < list.length) {
    sum += calculatePointsForGroups(list.slice(index, index + groupSize));
    index += groupSize;
  }

  return sum;
}

function calculatePointsForGroups(groups) {
  let compareGroup = groups[0];
  let otherGroups = groups.slice(1);

  for (let character of compareGroup) {
    if (groupsContainChacter(character, otherGroups)) {
      let points = calculatePointsForCharacter(character);
      return points;
    }
  }
}

function groupsContainChacter(character, groups) {
  for (let group of groups) {
    if (!group.includes(character)) {
      return false;
    }
  }
  return true;
}

function calculatePointsForCharacter(character) {
  const isUpperCase = character == character.toUpperCase();
  if (isUpperCase) {
    return character.charCodeAt(0) - 38; // A = 65
  } else {
    return character.charCodeAt(0) - 96; // a = 97
  }
}

export { run1, run2 };
