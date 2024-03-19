/*
function swap(arg1, arg2) {
  console.log("Values before swap.....");
  console.log(arg1, arg2);

  let temp = arg1;
  arg1 = arg2;
  arg2 = temp;

  console.log("Values after swap.....");
  console.log(arg1, arg2);
}

swap("pune", "Mumbai");
swap(11, 22);

// function addition(num1, num2) {
//   console.log(num1 * num2);
// }

// addition(12);    //NAN
// addition(12, 2, 3);    //24

*/

//function with no argument and no return value
function show() {
  console.log("Inside show function....");
}

show();

//function with  argument and no return value
function addition(no1, no2, no3) {
  console.log(no1 + no2 + no3);
}
addition(1, 2, 30);
addition(10, 20);
addition(12.0, 15.5, 1);
addition(16, 10, 90, 44);
addition("Hii", "Good", "Morning");

//function with  argument and  return value
function Display(no1, no2) {
  let finalAmount = 0;
  finalAmount = no1 + no2;
  return finalAmount;

  console.log("Hello i am Bahubali!!!"); //unreachable code
  console.log("Good morning katapa!");
}

let result = Display(100, 20);
console.log(`I have ${result} rs in account!`);
