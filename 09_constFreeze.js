const person = {
    name: 'jonas',
    experience : 10,
    city : 'pune'
}

// const pin = 1234;
// pin = 8977;

//reference var cannot point to any other object
// person = {                   //not allowed
//     pin : 12345
// }

console.log(person);
//but can modify content
person.city = 'Mumbai';
console.log(person);

//=========================freeze(can't update / add)========================
const address = {
    flatNumber: 1005,
    wing: "B2 Block",
    street: "wakad"
}

Object.freeze(address);    

console.log(address);
address.street = "kharadi";     //wont reflect this change as object address is freezed
console.log(address);

//====================================================
//for in loop (to traverse over object)
//for of(use for of to traverse array, will get direct value )
//for in.........loop
for (const key in person) {
    console.log(`${key} => ${person[key]}`);
}

//===========in operator: to check whether the property is available in object or not===============
console.log("street" in address);
console.log("pin" in address);

//get the kays from an object
const noOfKeys = Object.keys(address)
console.log(noOfKeys);

//get the values from an object
const values = Object.values(address);
console.log(values);