/*
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

*/

//explore other array methods!!!!!!!!!!!!!!!!!!!!!!!  1:25
//tried myself.....check once by comparing with 08_arrayOperations.js
console.log("-----push(): to add element at the end of the array----");
const Brr = [2, 5, 7, 6, 5, 10];
Brr.push(4);
Brr.push(77, 99);
console.log(Brr);

console.log("-----pop(): to delete the element at the end of the array----");
Brr.pop(); //No need to give the value, last one will get deleted
console.log(Brr);

console.log("-----unshift(): to add element at the start of the array----");
Brr.unshift(10);
console.log(Brr);

console.log("------shift(): to delete the first element-----");
Brr.shift(); //No need to give the value, first one will get deleted
console.log(Brr);

console.log("--------slice()---------");
// Brr.slice(4);
// console.log(Brr);  //this will not work! as slice method does not change the content of the array

let Crr = Brr.slice(4); //will return subarray/particular portion of array
console.log(Crr);

let Drr = Brr.slice(2, 5); //will return subarray form given indexes
console.log(Drr);

console.log(`---------splice()-------------`);
Brr.splice(1, 3, 11, 12, 13); //1st version
console.log(Brr);

Brr.splice(4, 1); //2nd version
console.log(Brr);

Brr.splice(1, 2, 200); //3rd version
console.log(Brr);

Brr.splice(4, 1, 33, 44); //4th version
console.log(Brr);

Brr.splice(2, 0, 412);
console.log(Brr);

/*  ?????????????????????????????????????????????????
const Brr = [2, 5, 7, 6, 5, 10];
Brr[2] = 77;
console.log(Brr);
*/
