let i = 0;
let sum = 1;
let iRet = 0;

function factorial(num) {
  for (i = num; i >= 1; i--) {
    sum = sum * i;
  }
  return sum;
}

iRet = factorial(0);
console.log(`Factorial of 3 is: ${iRet}`);
