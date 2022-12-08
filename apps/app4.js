function run1(input) {
  return input.split('\n').filter((pair) => hasDupliacteSpan(pair, spanOverlap))
    .length;
}

function spanOverlap(start1, start2, end1, end2) {
  if (start1 >= start2 && end1 <= end2) {
    return true;
  }
  if (start2 >= start1 && end2 <= end1) {
    return true;
  }
  return false;
}

function run2(input) {
  return input.split('\n').filter((pair) => hasDupliacteSpan(pair, anyOverlap))
    .length;
}

function anyOverlap(start1, start2, end1, end2) {
  if (start1 >= start2 && start1 <= end2) {
    return true;
  }
  if (end1 <= end2 && end1 >= start2) {
    return true;
  }
  if (start2 >= start1 && start2 <= end1) {
    return true;
  }
  if (end2 <= end1 && end2 >= start1) {
    return true;
  }
  return false;
}

function hasDupliacteSpan(pairString, overlapFunction) {
  let pair = pairString.split(',');
  let spanString1 = pair[0];
  let spanString2 = pair[1];

  let span1 = spanString1.split('-');
  let span2 = spanString2.split('-');

  let start1 = Number(span1[0]);
  let end1 = Number(span1[1]);

  let start2 = Number(span2[0]);
  let end2 = Number(span2[1]);

  return overlapFunction(start1, start2, end1, end2);
}

window.run1 = run1;
window.run2 = run2;
window.defaultValue = ``;
