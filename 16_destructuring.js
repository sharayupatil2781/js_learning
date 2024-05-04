

let person = {
    name: 'sharayu',
    city : 'pune',
    experience: 10,
    pincode: 411057
}

//object destructuring.......
//older way
// const myname = person.name;
// let mycity = person.city;
// let mypin = person.pin;

//but there is a better way to access the object values in variable
// let {name, city, pincode} = person;     //var names should be same as key!
// console.log(name, city, pincode);


//if key is not there, u can give the default value.
let {name, city, pincode, isMarried = true} = person;    
console.log(name, city, pincode, isMarried);

//=================================================
//array destructuring........
const array = ["jenny", "ram", "yash"];

const first = array[0];
const second = array[1];
const third = array[2];

//better way...
// let [no1, no2, no3] = array;
// console.log(no1, no2, no3);

let [no1, no2, no3, no4 ="deepti"]  = array;            //can give default value also
console.log(no1, no2, no3, no4);

