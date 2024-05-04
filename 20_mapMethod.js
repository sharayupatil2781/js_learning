'use strict';

const array = [2,4,1,7,9,8];
//Now i want to transform this array elements, add 10 to every element & get the new array.....
//or can take square.

let newArray = [];
// for (const iterator of array) {
//     newArray.push(iterator + 10);
// }
// console.log(newArray);

// array.forEach(elements =>{
//     newArray.push(elements ** 2);
// })
// console.log(newArray);


//Now ,the short way to handle this operaton , we have map() method!
//which can tranform any array(number array, string array, object array)
//map() : in order to transform the element
//syntax is very similar to foreach, the only difference is, foreach doesn't return anything but map() method will retrun  a new/transformed array.

const transformedArray = array.map(currentValue => {
    return currentValue + 20;
})

console.log(transformedArray);

//what is the difference between map() method &  foreach method?
//=============================================================

class Person{

    constructor(name, city, age){
        this.name = name;     
        this.city = city;
        this.age = age;
    }
    
    details(){
        console.log(`Person Details => Name: ${this.name}, city; ${this.city}, age: ${this.age}`)
    }
}

const sharayu = new Person('sharayu', 'pune', 24);
const Vinayak = new Person('Vinayak', 'Mumbai', 25);
const Neetu = new Person('Neetu', 'UP', 24);
const stew = new Person('stew', 'pune', 58);

const arrayPerson = [sharayu, Vinayak, Neetu, stew];
//want to transform this array with the person name only.

const personName = arrayPerson.map(elements => {
     //return elements.name;
     return elements.city;
})

console.log(personName);