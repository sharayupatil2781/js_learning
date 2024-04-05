let arrayMarks = [90, 56, 45, 72, 80, 84];
let mapOfStudents = new Map();
mapOfStudents.set("Elon", 90);
mapOfStudents.set("Jenny", 45);
mapOfStudents.set("Ratan", 72);
mapOfStudents.set("Andy", 80);
mapOfStudents.set("Larry", 84);
//mapOfStudents.set("Ratan", 90); //if u add duplicate key

//console.log(mapOfStudents);
console.table(mapOfStudents); //can use table() method

console.log(`------------get(): to get the value----------------`);

let data = mapOfStudents.get("Ratan"); //will return the value against that key!
console.log(`Jenny's marks: ${data}`);

let data1 = mapOfStudents.get("Ram"); //ashi key nahiy so data1 var intialize ch nahi honar so tyt undefined asel te return kerel.
console.log(data1); //if key is not there/available then will return undefined

console.log(`------------has(): is key available or not----------------`);

console.log(mapOfStudents.has("Larry"));
console.log(mapOfStudents.has("Rohan"));

let sizeOfMap = mapOfStudents.size;
//console.log(`size of map / total no of elements in the map: ${mapOfStudents.size}`);
console.log(`total no of elements in the map: ${sizeOfMap}`);

console.log(`To delete the element`);
mapOfStudents.delete("Andy");
console.table(mapOfStudents);

console.log(`To see the total no of keys`);
console.log(mapOfStudents.keys());
console.log(mapOfStudents.values());

console.log(`To traverse the map....`);
const allKeys = mapOfStudents.keys();
for (const element of allKeys) {
  console.log(element);
}

const allValue = mapOfStudents.values();
for (const element of allValue) {
  console.log(element);
}

console.log(`Traversing map with keys and values together............`);
//with the help of keys hum value ley sakte hai! with the help of get() method
const keys = mapOfStudents.keys();
for (const element of keys) {
  //console.log(element);
  //console.log(mapOfStudents.get(element));

  const data = mapOfStudents.get(element);
  console.log(`Student name: ${element} , Marks: ${data}`);
}
