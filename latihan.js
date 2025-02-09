function tambah(nilai1, nilai2) {
  return nilai1 + nilai2;
}
console.log(tambah(2, 3));


function hitungTotal(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total;
}
console.log(hitungTotal([1, 2, 3, 4, 5]));
