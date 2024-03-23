console.log(`---------------Que 1--------------`);
function squareOfWordLength(str) {
  let temp = str.length;
  return temp ** 2;
}

let no1 = squareOfWordLength("JavaScript");
console.log(`length square is: ${no1}`);

let no2 = squareOfWordLength("Google chrome");
console.log(`length square is: ${no2}`);

let no3 = squareOfWordLength("Developer Smart");
console.log(`length square is: ${no3}`);

console.log(`---------------Que 2--------------`);
function display() {
  let string = "I am Angular Developer";
  let totalLength = string.length;
  // console.log(totalLength);
  let ret = string.split(" ");
  let totalWords = ret.length;
  //console.log(totalWords);

  console.log(
    `string length divided by total words ${totalLength / totalWords}`
  );

  console.log(
    `string length multiply by total words ${totalLength * totalWords}`
  );
}

display();
