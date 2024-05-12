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
const vinayak = new Person('vinayak', 'bangalore', 47);
const neetu = new Person('neetu', 'mumbai', 36);
const stew = new Person('stew', 'pune', 58);

const arrayPerson = [sharayu, vinayak, neetu, stew];

console.log(`==============================================`);
//sorting an array of objects/person with its name...
//u can sort it by name or city or age...
arrayPerson.sort((p1, p2) => {
    return p1.name >= p2.name ? 1 : -1
});

arrayPerson.forEach(element => {
    console.log(element.name, element.city, element.age);
});

console.log(`==============================================`);

//sorting an array of objects/person with its city...
arrayPerson.sort((p1, p2) => {
    return p1.city >= p2.city ? 1 : -1
});
arrayPerson.forEach(element => {
    console.log(element.name, element.city, element.age );
});
