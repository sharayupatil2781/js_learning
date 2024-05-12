//why we call function as a First class citizen?
//1st reason:  function expression(fun can be stroed inside var)
const show = function(){
    console.log(`Inside show function..`);
}

show();

//2: callback(one fun can be passed as an arg to another fun)
function greet(callback)
{
    console.log(`Good morning..`);
    callback();
}

let saySomething = function(){
    console.log(`how are you!`);
}

greet(saySomething);

//3: function can return another fun
function display(){
    console.log(`Inside show function...`);
    let data = function(){
        console.log(`Inside data of display!`);
    }
    return data;
}

display()();
// let temp = display();
// temp();