console.log(`Important...................!!!!!!!!!!!!!1`);
var result = 0 == " ";
console.log(result); //true

result = 0 == "0";
console.log(result); //true

result = 0 == false;
console.log(result); //true

result = null == undefined;
console.log(result); //true

result = 1 == [1];
console.log(result); //true

result = 1 == true;
console.log(result); //true

result = 1 == "1";
console.log(result); //true
