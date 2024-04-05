function factorialOfNum(no) {
  if (typeof no != "number" || no == NaN) {
    console.log("Invalid input!");
    return;
  }

  let mult = 1;
  let i = 0;
  for (i = no; i >= 1; i--) {
    mult = mult * i;
  }
  return mult;
}

//let result = factorialOfNum(5);
//let result = factorialOfNum(3);
//let result = factorialOfNum(null);
//let result = factorialOfNum(8);
//let result = factorialOfNum(undefined);
//let result = factorialOfNum(9);
let result = factorialOfNum(0);

if (typeof result == "number") {
  console.log(result);
}

//console.log(typeof NaN);
