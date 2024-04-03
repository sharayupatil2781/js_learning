//for - of loop To traverse the array
const arr = [2, 4, 1, 7, 9, 8];

for (const elements of arr) {
  console.log(elements);
}

console.log("pro to multiple the array elements");
let mult = 1;
for (const elements of arr) {
  mult = mult * elements;
  console.log(mult);
}
console.log(`multiplication of an array elements: ${mult}`);

// let string = ["abc", "def", "hij", "klm"];
// for (const elements of string) {
//   console.log(elements);
// }

console.log("count the  total no of vowels form these array elements");
let item = "";
let temp;
let count = 0;
let friendlist = ["nEhaAAA", "raghU", "vinay", "priyaee"];
for (const i in friendlist) {
  item = friendlist[i].toLowerCase();
  for (const i in item) {
    temp = item.charAt(i);
    if (
      temp == "a" ||
      temp == "e" ||
      temp == "i" ||
      temp == "o" ||
      temp == "u"
    ) {
      count++;
    }
  }
}
console.log(count);

console.log("--------join()-----------");
console.log(friendlist);
const data = friendlist.join(","); //will return string /join elements by comma seperated
console.log(data);

console.log(friendlist.join("=")); //can join by any character

console.log("--------concat()-----------");
let Arr = ["a", "b", "c", "d"];
let Brr = ["x", "y", "z"];
console.log(Arr.concat(Brr));

console.log(`--------- Resize an array------------`);
let Crr = [1, 2, 3, 4, 5, 6, 7];
console.log(Crr);
Crr.length = 4;
console.log(Crr);
