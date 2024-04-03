var array = [2, 4, 1, 7, 9, 8];
console.log("-----Original array-------");
console.log(array);

console.log("-----Removing last element-------");
array.pop();
console.log(array);

console.log("-----add element at the end-------");
array.push(100);
console.log(array);

console.log("-----add element at the start/ 0th index-------");
array.unshift(44);
console.log(array);

console.log("-----remove element at the start/ 0th index-------");
array.shift();
console.log(array);

console.log("-----slice()-------");
let brr = array.slice(2, 5);
console.log(brr);
let crr = array.slice(2); //if endindex is not mentioned
console.log(crr);

console.log("-----remove / delete middle element-------");
var array = [2, 4, 1, 7, 9, 8];
console.log(`original : ${array}`);
let deletedElements = array.splice(2, 3); //slice() will return the deleted elements
console.log(`returned array after deleting: ${deletedElements}`);
console.log(`final array : ${array}`);

console.log("----insert /add element in the middle of the array-------");
var array = [2, 4, 1, 7, 9, 8];
console.log(`original : ${array}`);
var deleteElements = array.splice(3, 1, 100);
console.log(deleteElements);
console.log(`final array : ${array}`);

console.log("=================================");
var array = [2, 4, 1, 7, 9, 8, 11, 22];
console.log(`original : ${array}`);
var deleteElements = array.splice(5, 0, 500, 400);
console.log(deleteElements);
console.log(`final array : ${array}`);
