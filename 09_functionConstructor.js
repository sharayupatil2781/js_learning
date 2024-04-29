//isadvantage: cant apply object oriented principles over this!(encapsulation,abstraction,polymorphism....)
function Person(name,city,age){
    this.name = name;
    this.city = city;
    this.age = age;

    //can add method also!
}

//object creation using function constructor
const jonas = new Person("jonas", "pune", 25);
console.log(jonas);

const Yash = new Person("Yash", "mumbai", 26);
console.log(Yash);

const Ram = new Person("Ram", "nagpur", 24);
console.log(Ram);

//==========instanceof operator===========
//whether the object that u have created is it from this Person class/function constructor or not
console.log(jonas instanceof Person);
console.log(Ram instanceof Person);

//===================================================
//Array.Prototype madhe ya push(), pop()....ya method astat!
const array = [2,4,6,8];
array.push(7);

//Prototype madhe yekhadi property/method add keli tr te objects na melet!
//function constructor.prototype.property = 
//(only for function constructor)
Person.prototype.country = "India";
console.log(`${jonas.name}., ${jonas.age}, ${jonas.city}, ${jonas.country}`);

console.log(`${Ram.name}., ${Ram.age}, ${Ram.city}, ${Ram.country}`);