console.log(`--------------- Q 1 ----------------`);
let result = function (no1, no2) {
  return no1 >= no2 ? no1 : no2;
};

let temp = result(800, 899);
console.log(`Greatest number is: ${temp}`);

console.log(`--------------- Q 2 ----------------`);
function isEvenorOddNum(no1) {
  return no1 % 2 == 0 ? "true" : "false";
}

let ret = isEvenorOddNum(101);
console.log(`Given number is even or not : ${ret}`);

console.log(`--------------- Q 3 ----------------`);
function wordLength(word) {
  let length = word.length;
  return length % 2 == 0 ? "even length" : "odd length";
}

const data = wordLength("google");
console.log(`${data}`);
