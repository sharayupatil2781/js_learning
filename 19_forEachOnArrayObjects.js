class Person{
    
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
const Vinayak = new Person('Vinayak', 'Mumbai', 25);
const Neetu = new Person('Neetu', 'UP', 24);
const stew = new Person('stew', 'pune', 58);

const arrayPerson = [sharayu, Vinayak, Neetu, stew];

console.log(`========WAP to get the employee from city - pune=========`);

arrayPerson.forEach(element => {
    if(element.city == 'pune'){
        console.log(element.name);
    }
})

let sum = 0;
console.log(`======WAP to get the average age===========`);
arrayPerson.forEach(element => {
    sum = sum + element.age;
})

const average = sum / arrayPerson.length;
console.log(`Average age of studentds is ${average}`);
