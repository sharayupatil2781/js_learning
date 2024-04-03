const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(`---------- Q1 ----------`);
console.log(fruits_seasonal[0]);
console.log(fruits_seasonal[fruits_seasonal.length - 1]);

console.log(`---------- Q2 ----------`);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`---------- Q3 ----------`);
fruits_seasonal.splice(fruits_seasonal.indexOf("Mango"), 1);
console.log(fruits_seasonal);

console.log(`---------- Q4 ----------`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log(`---------- Q5 ----------`);
let index = fruits_seasonal.indexOf("Water Melon");
fruits_seasonal.splice(index, 0, "Dragon Fruit");
console.log(fruits_seasonal);

console.log(`---------- Q6 ----------`);
let index1 = fruits_seasonal.indexOf("Orange");
fruits_seasonal.splice(index1, 1, "Kiwi");
console.log(fruits_seasonal);

console.log(`---------- Q7 ----------`);
console.log(fruits_seasonal.slice(1, 5));

console.log(`---------- Q8 ----------`);
let index3 = fruits_seasonal.length;
const temp = fruits_seasonal.slice(index3 - 3);
console.log(temp);
