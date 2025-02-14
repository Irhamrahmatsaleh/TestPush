//-------------------GradeBookApp.js-------------------
// 1. Create a function named getAverage that takes an array of scores as an argument and returns the average score.
function getAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}
// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// 2. Create a function named getGrade that takes a score as an argument and returns a letter grade for the score.
function getGrade(score) {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(56));

// 3. Create a function named hasPassingGrade that takes a score as an argument and returns true if the score is passing and false if it is not.
function hasPassingGrade(score) {
  let grade = getGrade(score);
  if (grade !== 'F') {
    return true;
  } else {
    return false;
  }
}
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
