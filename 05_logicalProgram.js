//Inside function expression check whether given word is even or odd length
var result = function (word) {
  //console.log(`Inside function expression...`);
  var ret = word.length;
  return ret % 2 == 0 ? "even length word" : "Odd length word";
};

//var output = result("Javascript");
var output = result("I am hero");
console.log(output);

//write a function expression to check whether the no is multiple of 3 or not
var multiple = function (no) {
  var ret = no % 3 == 0 ? "Yes" : "No";
  return ret;
};

var ret = multiple(9);

console.log(`${ret}`);
