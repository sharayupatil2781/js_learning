let arrayNums = [1, 2, 3, 4, 5];
console.log(arrayNums);

console.log(`----- Total Elements / length-----`);
console.log(arrayNums.length);

console.log(`-----Accessing array elements-----`);
const firstNum = arrayNums[2];
console.log(firstNum);

console.log(`-----Accessing array's last elements-----`);
console.log(arrayNums[arrayNums.length - 1]);

console.log(`-------includes()-------`); //check whether the element is there in the array or not, returns true or false
console.log(arrayNums.includes(3));

console.log(`------Update element-----`);
arrayNums[2] = 90;
console.log(arrayNums);

console.log(`------indexOf()-----`); //capital 'o'
console.log(arrayNums.indexOf(90));
console.log(arrayNums.indexOf(400)); //if element is not there in array then -1

console.log(`-----Traversing an array-----`);
const arr = [10, 20, 30, 40, 50];
let i = 0;
for (i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}

console.log(`-----Traversing an array in reverse order-----`);
for (i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// console.log(`-----Traversing an array in reverse order-----`);
// let word = "";
// for (i = arr.length - 1; i >= 0; i--) {
//   const data = arr[i];
//   word = word + ", " + data;
//   console.log(arr[i]);
// }
// console.log(word); //output on the same line

//explore other array methods!!!!!!!!!!!!!!!!!!!!!!!  1:25
