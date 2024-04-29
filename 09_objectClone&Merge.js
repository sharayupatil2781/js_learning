const person = {
    name: "jonas",
    city: 'pune',
    experience: 10
}

//cloning an object using spread operator
const personClone = {...person};            //Deep clone
console.log(personClone);
personClone.name = "sharayu";
console.log(personClone);


//cloning an object using Object.assign()
//jisme copy kiya:target   jahse copy kiya:source  
const cloneObject = Object.assign({}, person );
console.log(cloneObject);


//Merging an object
console.log(`=========== Marging an object ============`);

const sharayu = {
    firstName: 'sharayu',
    lastName: 'patil'

}
const address = {
    flatNumber: 1035,
    wing: "B2 Block",
    street: "Wakad"
}

//Object.assign will return a object
// const mergeObject = Object.assign(sharayu, address);
// console.log(mergeObject);

// console.log(`============merged object============`);
// console.table(mergeObject);

// console.log(`========sharayu===========`);
// console.table(sharayu);

//Now i dont want to affect the first object
const mergeObject = Object.assign({},sharayu, address);
console.table(mergeObject);
console.table(sharayu);
