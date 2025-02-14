function hitungTotal(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(hitungTotal([1, 2, 3, 4, 5]));

//--------------------------------------------

const character = '#';
const count = 8;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return (
    ' '.repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    ' '.repeat(rowCount - rowNumber)
  );
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = '';

for (const row of rows) {
  result += row + '\n';
}

console.log(result);
