var result = function (word) {
  //console.log(`Inside function expression...`);
  result = word.length % 2 == 0 ? "Even" : "ODD";
  console.log(`Given word ${word} is with ${result} length`);
};

result("javascript");
result("I'am hero");
