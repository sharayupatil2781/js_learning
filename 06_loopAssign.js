// console.log(`------------ Q 1 ------------`);
// const str = "I am very good IT developer";
// const str1 = str.toLowerCase();
// //console.log(str1);
// let count = 0;
// let i = 0;
// for (i = 0; i < str1.length; i++) {
//   let ch = str1.charAt(i);
//   if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
//     count++;
//   }
// }

// console.log(`Total no of vowels in the string are: ${count}`);

// console.log(`------------ Q 2 ------------`);
// let sum = 0;
// let i = 0;
// function sumOfCubes(startRange, endRange) {
//   for (i = startRange; i <= endRange; i++) {
//     sum = sum + i ** 3;
//     console.log(sum);
//   }
//   return sum;
// }

// let result = sumOfCubes(1, 5);
// console.log(`Sum of cubes of numbers form 1 to 5 is : ${result}`);

console.log(`------------ Q 3 ------------`);
let i = 0;
let word = "";
function oddPositionChars(str) {
  for (i = 0; i < str.length; i++) {
    if (i % 2 != 0 && str.charAt(i) != " ") {
      word = word + str.charAt(i);
    }
  }
  console.log(word);
}

//oddPositionChars("hardwork always pays back");
oddPositionChars("Soon i will be a UI It champ");
