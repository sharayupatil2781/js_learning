// let voteEligibility = function (age) {
//   if (age < 1 || age > 130 || typeof +age != "number") {
//     console.log(`Invalid data!`);
//     return;
//   }

//   if (age < 18) {
//     console.log(`Not eligible for vote!`);
//   } else {
//     console.log(`Eligible for vote!`);
//   }
// };

let voteEligibility = function (age) {
  if (age < 1 || age > 130 || typeof +age != "number") {
    console.log(`Invalid data!`);
  } else {
    if (age < 18) {
      console.log(`Not eligible for vote!`);
    } else {
      console.log(`Eligible for vote!`);
    }
  }
};

//voteEligibility(45);
//voteEligibility(17);
//voteEligibility(8);
//voteEligibility(20);
//voteEligibility(-10);
//voteEligibility(200);
//voteEligibility(0);
voteEligibility(null);
