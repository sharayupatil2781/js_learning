const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(`----------- Q 1 -----------`);
console.log(`length of array: ${arrayNumbers.length}`);

console.log(`----------- Q 2 -----------`);
console.log(`First element: ${arrayNumbers[0]}`);
console.log(`Last element: ${arrayNumbers[arrayNumbers.length - 1]}`);

console.log(`----------- Q 3 -----------`);
console.log(
  `3rd last element of array: ${arrayNumbers[arrayNumbers.length - 3]}`
);

console.log(`----------- Q 4 -----------`);
for (const element of arrayNumbers) {
  if (element % 2 == 0) {
    console.log(element);
  }
}

console.log(`----------- Q 5 -----------`);
for (const element of arrayNumbers) {
  if (element % 2 != 0) {
    console.log(element);
  }
}

console.log(`----------- Q 6 -----------`);
let i = 0;
let sum = 0;
for (i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 == 0) {
    sum = sum + arrayNumbers[i];
  }
}
console.log(`Sum of even indexed elements: ${sum}`);

console.log(`----------- Q 7-----------`);
let j = 0;
let sumOdd = 0;
for (j = 0; j < arrayNumbers.length; j++) {
  if (j % 2 != 0) {
    sumOdd = sumOdd + arrayNumbers[j];
  }
}
console.log(`Sum of odd indexed elements: ${sumOdd}`);

console.log(`----------- Q 8-----------`);
let sumAll = 0;
for (const element of arrayNumbers) {
  sumAll = sumAll + element;
}
console.log(`Sum of all elements: ${sumAll}`);

console.log(`----------- Q 9-----------`);
console.log("Multiple of 5 are: ");
for (const element of arrayNumbers) {
  if (element % 5 == 0) {
    console.log(element);
  }
}

console.log(`----------- Q 10-----------`);
console.log(arrayNumbers.includes(115));

console.log(`----------- Q 11-----------`);
console.log(arrayNumbers.includes(23));

console.log(`----------- Q 12-----------`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(arrayNumbers);

console.log(`----------- Q 13-----------`);
arrayNumbers.splice(4, 3);
console.log(arrayNumbers);
