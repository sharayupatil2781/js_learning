//grade calculation
//pass - fail = marks <= 34 else pass
//marks >= 35 &&  marks < 55 : C
//marks >= 55 && marks < 75 ; B
//marks >= 75 && marks <= 100 : A

function calculateGrade(marks) {
  if (marks < 1 || marks > 100 || marks == null) {
    console.log(`Invalid value!!! Please enter valid marks!`);
    return;
  }
  if (marks <= 34) {
    console.log("Sorry, you are Fail!");
  } else {
    console.log("Congratulation, you are Pass!");

    if (marks >= 35 && marks < 55) {
      console.log(`You got C grade with marks ${marks}`);
    } else if (marks >= 55 && marks < 75) {
      console.log(`You got B grade with marks ${marks}`);
    } else {
      console.log(`You got A grade with marks ${marks}`);
    }
  }
}

//calculateGrade(24);
//calculateGrade(35);
//calculateGrade(100);
//calculateGrade(155);
calculateGrade(null);
