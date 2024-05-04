//1. Arrow function with no arg & no return value.
const show = () => {
    console.log(`Inside show....`);
}

show();

//2. Arrow function with arg & no return value.
const add = (no1, no2) => {
    console.log(`Adddition is: ${no1 + no2}`);
}



//if arrow function has only one line then u can skip the {}
// const add = (no1, no2) => console.log(`Adddition is: ${no1 + no2}`);
add(5,10);

//2. Arrow function with arg & return value.
const sub = (no1, no2) => {
    return no1 - no2;
}

const result = sub(15, 10);
console.log(`substraction is: ${result}`);