console.log(`string used with + gives string type`);
var result;

result = "3" + 2;
console.log(result);

result = "3" + true;
console.log(result);

result = "3" + undefined;
console.log(result);

result = "3" + null;
console.log(result);

console.log(`If boolean is used then true is 1, false is 0`);
result = "4" - true;
console.log(result);

result = 4 + true;
console.log(result);

result = 4 + false;
console.log(result);

console.log(`Numeric string used with -  /  * results number type`);
result = "4" - "2";
console.log(result);

result = "4" - 2;
console.log(result);

result = "4" * 2;
console.log(result);

result = "4" / 2;
console.log(result);

console.log(
  `Arithmetic operation of undefined with number, boolean or null gives NaN `
);

result = 4 + undefined;
console.log(result);

result = 4 - undefined;
console.log(result);

result = true + undefined;
console.log(result);

result = null + undefined;
console.log(result);

console.log(`Convert number, string and boolean values to numbers : Number()`);
result = Number("123");
console.log(`${result} , typeof result: ${typeof result}`);

result = Number("324e-1");
console.log(`${result} , typeof result: ${typeof result}`);

result = Number(true);
console.log(`${result} , typeof result: ${typeof result}`);

result = Number(false);
console.log(`${result} , typeof result: ${typeof result}`);

console.log(`If a string is an invalid number, the result will be NaN`);
result = Number("hello");
console.log(`${result} , typeof result: ${typeof result}`);

result = Number(undefined);
console.log(`${result} , typeof result: ${typeof result}`);

result = Number(NaN);
console.log(`${result} , typeof result: ${typeof result}`);

console.log(`string to number using + operator`);
let temp = "100";
console.log(`Value: ${temp} , typeof value: ${typeof temp}`);
let temp1 = +temp;
console.log(`value : ${temp1}, typeof value : ${typeof temp1}`);

console.log(`Number to string datatype using string`);
let data = 500;
console.log(`Value: ${data} , typeof value: ${typeof data}`);
let data1 = String(data);
console.log(`Value: ${data1} , typeof value: ${typeof data1}`);
