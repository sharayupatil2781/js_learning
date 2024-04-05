//remove duplicate elements from array.(elements which are present more than once/ array should have only unique elements.)

//array madhun one by one element kadun set madhe taka.
//set duplicate elements remove karel!
//nanter ty set varun part yek array bnva.

//method to insert element at the end of array = push()
//for set - add()

const mySet = new Set();
let array = [2, 4, 1, 7, 9, 8, 7, 4, 1];
let newArr = [];

for (const elements of array) {
  mySet.add(elements);
}
console.log(`After converting to set: ${mySet}`);

for (const element of mySet) {
  newArr.push(element);
}

console.log(`Original array: ${array}`);
console.log(`Final array: ${newArr}`);

//Q. Remove duplicate elements using for loop.

console.log(`======================================`);
//26 March 15:00 shortcut way using -  spread operator
//2nd use case of spread operator - Yek set mai se aap ko yek new array bnana hai....

const trySet = new Set(array); //constructor      //array elements direct ch set madhe takle, set unique maintain karel!
const Brr = [...trySet]; //spread se set madhe elements spread kele ani array madhe takle
console.log(Brr);

/*
//by sir
const arrayElements = [...new Set(array)];
console.log(arrayElements);
*/

//you can explore more ways for this program!!!!!!!!111
