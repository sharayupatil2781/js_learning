//call():
let person = {
    age : 22,
    city : 'pune'
}

function greet(message, sayHello){
    console.log(message, sayHello);
}

//now i want to call this function with the help of this object
//call this greet() by passing this object as an arg
//ham ky kar rahe hai es function ko Person ka context set kar rahe hai.
greet.call(person, "Good Morning", "Hey Hello");

//jab bhi hum koi named function create karr rhe hote hai to uske pass ye call method available hoat hi hai!

//===============================================
//apply():can use apply method also.
greet.apply(person, ["Good Morning", "Hey Hello"] );

//only diff is that apply ko call karte time arguments array ke andar pass kar skate hai.
//so values kaise pass karna chahte ho, as a comma seperated or  want to pass values as a array.

//call & apply done ka bhi use same hi hai...u can use anything.

//===============================================
//bind(): one more function as an arg return karva deta hai aapko.

let newFunction = greet.bind(person);
newFunction("Good Morning", "Hey Hello");

//so es method ko ye object bind krega. bind karne ke bad new fun return karga.
