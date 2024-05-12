//why we call function as a higher order function
//we can pass one function to another function as an argument also that funtion can return one more function.

function greet(callback)
{
    console.log(`Good morning..`);
    callback();
    // return function(){}
    let innerFunction = function(){
        console.log(`Inside inner function....`);
    }
    return innerFunction;
}

let saySomething = function(){
    console.log(`how are you!`);
}

// let innfun = greet(saySomething);
// innfun();
greet(saySomething)();