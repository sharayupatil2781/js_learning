//closure.......(IMP fir interview)
let num3 = 300;
function outer(){
    let num2 = 200;
    let inner = function(){
        let num1 = 100;
        console.log(`Inner Function expression....`);
        console.log(`num1 : ${num1}`);
        console.log(`num2 : ${num2}`);
        console.log(`num3 : ${num3}`);

    }
    return inner;           //we are returning function
}

let result = outer();
result();
//console.log(result);

//In the inner function i can access its own variable(num1),  the outer function variable(num2), and  a global variable too(num3)!! & that is called closure!
// closure: we can define function inside function(inner function), this inner function has 3 scope chain 1)can access its own variable, 2)can access its outer function var 3)can access global var

//can call the function like this also...
outer()();      //outer() will return function, function()....
