function gradeCalculation(marks) {
  //if (marks < 1 || marks > 100 || typeof +marks != "number")
  if (marks < 1 || marks > 100 || isNaN(+marks)) {
    console.log(`Please provide the valid marks!`);
    return;
  }

  if (marks >= 90) {
    console.log(`Fantastic marks: ${marks}, You get A+`);
  } else if (marks >= 75 && marks < 90) {
    console.log(`Excellent marks: ${marks}, You get A`);
  } else if (marks >= 50 && marks < 75) {
    console.log(`Good marks: ${marks}, You get B`);
  } else if (marks >= 35 && marks < 50) {
    console.log(`Marks: ${marks}, You get C, Need improvement!`);
  } else {
    console.log(`Sorry, You are fail!`);
  }
}

//gradeCalculation(98);
//gradeCalculation(80);
//gradeCalculation(90);
//gradeCalculation(0);
//gradeCalculation(150);
//gradeCalculation(-7);
//gradeCalculation(35);
//gradeCalculation(29);
//gradeCalculation(64);
//gradeCalculation(49);
gradeCalculation("91");
//gradeCalculation("Eighty");
//gradeCalculation(undefined);
//gradeCalculation(null);

//console.log(typeof undefined);
