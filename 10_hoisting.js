//Hoisting: a variable or a function can be used before declaration

console.log(city);      //will not give error!
var city;

//let city;                     //error
//const city = 'pune';        //error

//======================function============
//Normal way of programming: first declare it & then use it.but in JS for var keyword it will not give issue, because hoisting!

square(5);      //will work!

function square(num){
    console.log(num * num);
}

//square(5);

//function expression
//cube(3);            //will not work in case of functioin expression.
const cube = function(num)
{
    console.log(num ** 3);
}

