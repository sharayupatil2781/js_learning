let a = 0;
let b = 0;
let result = a / b;
console.log(`${result}`);
console.log(typeof result);

//+ operator to convert string to number
let n1 = "10";
let temp1 = "23";
console.log(`Value of n1: ${n1} , type of n1 :${typeof n1}`);

let n2 = +n1;
console.log(`Value of n2: ${n2} , type of n2 :${typeof n2}`);

let temp2 = Number(temp1);
console.log(`Value of temp2: ${temp2} , type of temp2 :${typeof temp2}`);

console.log(`---------------------------------------------------------`);
let num1 = "100";
let num2 = 90;
console.log(`Equality check: ${num1 == num2}`);
console.log(`strict equality check: ${num1 === num2}`);

console.log(`---------------------------------------------------------`);
console.log(`+ operator: ${num1 + num2}`);
console.log(`- operator: ${num1 - num2}`);
console.log(`${true + 1}`);

//Explicit conversion
console.log(`---------------------------------------------------------`);
let no1 = "100";
console.log(`value of no1: ${no1}, typeof no1 ${typeof no1} `);
let no2 = Number(no1);
console.log(`value of no2: ${no2}, typeof no2 ${typeof no2} `);

let no3 = "My love";
console.log(`value of no3: ${no3}, typeof no3 ${typeof no3} `);
let no4 = Number(no3);
console.log(`value of no4: ${no4}, typeof no4 ${typeof no4} `);

let no5 = 200;
console.log(`value of no5: ${no5}, typeof no5 ${typeof no5} `);
let no6 = String(no5);
console.log(`value of no6: ${no6}, typeof no6 ${typeof no6} `);

let no7 = true;
console.log(`value of no7: ${no7}, typeof no7 ${typeof no7} `);
let no8 = Number(no7);
console.log(`value of no8: ${no8}, typeof no8 ${typeof no8} `);

//let no10 = 0
let no10 = 40; //non zero number sati true return karel!
console.log(`value of no10: ${no10}, typeof no10 ${typeof no10} `);
let no11 = Boolean(no10);
console.log(`value of no11: ${no11}, typeof no11 ${typeof no11} `);

let no12 = "hello";
console.log(`value of no12: ${no12}, typeof 12 ${typeof no12} `);
let no13 = Boolean(no12);
console.log(`value of no13: ${no13}, typeof no13 ${typeof no13} `);
