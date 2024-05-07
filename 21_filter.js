//filter() : filetr out elements based on condition

//filter out even elememnts....
let array = [2,4,1,7,8,9, 21, 42];
// const evenArray = array.filter(element => {
//     // if(element % 2 == 0)
//     // {
//     //     return element;
//     // }

//     return element % 2 == 0;
// });

//can write like this also...
const evenArray = array.filter(element => element % 2 == 0);

console.log(evenArray);

//===================================================
//find out the numbers which are multiple of 3
const multipleOf3 = array.filter(element => {
    if(element % 3 == 0)
    {
        return element;
    }
})

console.log(`Multiple of 3 : ${multipleOf3}`);

//find out all the persons which are from mumbai.
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
const Vinayak = new Person('Vinayak', 'Mumbai', 47);
const Neetu = new Person('Neetu', 'Mumbai', 36);
const stew = new Person('stew', 'pune', 58);

const arrayPerson = [sharayu, Vinayak, Neetu, stew];

const cityArray = arrayPerson.filter(element => {
    if(element.city == "Mumbai")
    {
        return element;
    }
})

//console.log(cityArray); //will return object so need to traverse the array.
cityArray.forEach(element => console.log(element.name))

cityArray.forEach(element => {
    element.details();
})

//=====================================================
//chaining bhi kar sakte hai.....
console.log(`======find out all the person whose age is >= 35 ========`);
// const ageArray = arrayPerson.filter(element =>{
//     return element.age >= 35;
// }).forEach(element => element.details());


//only want to log the name....
const ageArray = arrayPerson.filter(element =>{
    return element.age >= 35;
}).map(element => {
    return element.name
}).forEach(element => console.log(element))
//console.log(ageArray);