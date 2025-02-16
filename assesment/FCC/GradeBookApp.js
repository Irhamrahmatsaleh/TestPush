//-------------------GradeBookApp.js-------------------
// 1. Create a function named getAverage that takes an array of scores as an argument and returns the average score.
function getAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

// 2. Create a function named getGrade that takes a score as an argument and returns a letter grade for the score.
function getGrade(score) {
  if (score === 100) {
    return 'A++';
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

// 3. Create a function named hasPassingGrade that takes a score as an argument and returns true if the score is passing and false if it is not.
function hasPassingGrade(score) {
  return getGrade(score) !== 'F';
}

// 4. Create a function named studentMsg that takes an array of scores and a student's score as arguments and returns a message to the student.
function studentMsg(totalScores, studentScore) {
  let classAverage = getAverage(totalScores);
  let studentGrade = getGrade(studentScore);
  let passed = hasPassingGrade(studentScore);
  let message = 'Class average: ' + classAverage + '. Your grade: ' + studentGrade + '. ';

  if (passed) {
    message += 'You passed the course.';
  } else {
    message += 'You failed the course.';
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
