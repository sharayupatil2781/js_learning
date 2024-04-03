//can create the array like this but bad practice
//const array = new Array();
//const arrayName = [];  //use this!

const set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(20); //duplicate will not get store
set.add(40);
console.log(set); //o/t is totally depends on ypur Node.js version that u have installed. so veglhe desu shakt!

console.log(`Total elements in set: ${set.size}`);

console.log(`---------- Delete an element ----------`);
set.delete(30);
console.log(set);

console.log(
  `---------- To check whether the element is present or not -------`
);
console.log(`${set.has(50)}`);
console.log(`${set.has(10)}`);

console.log(`---------- Traversing set ----------`);
//for of loop
for (const element of set) {
  console.log(element);
}
