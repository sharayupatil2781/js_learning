// var isMarried = true;
// let age = 21;

// if (age >= 21) {
//   console.log("yes!, you are eligible.");
// }
// console.log("End of the program!");

console.log("-----------------------------------------------");

var marriageCheck = function (age, name) {
  if (age >= 21) {
    console.log(`${name} is eligible for marriage!`);
  }

  console.log("Marriage eligibility check done!");
};

marriageCheck(24, "sneha");
marriageCheck(23, "rahul");
marriageCheck(20, "aman");

console.log("-----------------------------------------------");

var marriageEligibility = function (age, name, gender) {
  if (age >= 21 && gender == "male") {
    console.log(`${name} is eligible for marriage.`);
  }

  if (age >= 18 && gender == "female") {
    console.log(`${name} is eligible for marriage.`);
  }
};

marriageEligibility(22, "rohan", "male");
marriageEligibility(20, "neha", "female");
marriageEligibility(20, "Yash", "male");
