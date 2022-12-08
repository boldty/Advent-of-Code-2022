function run1(input) {
  let sum = 0;
  input.split('\n').forEach((contents) => {
    let compartment1 = contents.substring(0, contents.length / 2);
    let compartment2 = contents.substring(contents.length / 2);
    sum += calculatePointsForGroups([compartment1, compartment2]);
  });

  return sum;
}

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
    if (!otherGroups.find((group) => !group.includes(character))) {
      let points = calculatePointsForCharacter(character);
      return points;
    }
  }
}

function calculatePointsForCharacter(character) {
  const isUpperCase = character == character.toUpperCase();
  if (isUpperCase) {
    return character.charCodeAt(0) - 38; // A = 65
  } else {
    return character.charCodeAt(0) - 96; // a = 97
  }
}

window.run1 = run1;
window.run2 = run2;
window.defaultValue = ``;
