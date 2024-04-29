class Person{
    //data member
    // name;           //can remove this if arguments in constructor are of same name
    // city;
    // age;

    //constructor
    constructor(name, city, age){
        this.name = name;       //'this' refers to the current object
        this.city = city;
        this.age = age;
    }
    
    //method
    details(){
        console.log(`Person Details => Name: ${this.name}, city; ${this.city}, age: ${this.age}`)
    }

}

const sharayu = new Person('sharayu', 'pune', 24);
console.log(sharayu);
sharayu.details();

const Vinayak = new Person('Vinayak', 'Mumbai', 25);
console.log(Vinayak);
Vinayak.details();

const Neetu = new Person('Neetu', 'UP', 24);
console.log(Neetu);
Neetu.details();

console.log(`--------------------------------------------`)
//===========================objects inside an  array==================
//Traversing array object!!!
//for array - for-of loop
//for object - for-in loop
const array = [sharayu, Vinayak, Neetu];
// for (const iterator of array) {
//     for (const key in iterator) {
//         console.log(`${key} => ${iterator[key]}`);
//      }
    
// }

//2)--------------------------------
for (const iterator of array) {
    iterator.details();
}

