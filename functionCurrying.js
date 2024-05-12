//function currying: whenever we have the function with multiple arguments, we can turn it into a sequence of functions with each single argument.

const multipleArgFunction = (a,b,c) => {
    return a + b + c;
}

console.log(multipleArgFunction(1,2,3));

const curryUnaryFunction = a => b => c => {
    return a + b + c
};

console.log(curryUnaryFunction(1));
console.log(curryUnaryFunction(1) (2));
console.log(curryUnaryFunction(1) (2) (3));
