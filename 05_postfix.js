var a = 5;
b = a++;

console.log(a);
console.log(b);

var n1 = 5;
var ret = n1++ + ++n1 + n1++;
console.log(ret);
console.log(n1);

var a = 2;
var b = ++a + ++a + a++ - --a;
console.log(b);
console.log(a);

var a = 4;
var b = a-- + ++a + ++a + a++;
console.log(b);
console.log(a);

//Ternary operator
var a = 7;
var ret = a % 2 == 0 ? "Even" : "Odd";
console.log(ret);

//var break;    //not allowed
