//odd index element
const arr = [2, 4, 1, 7, 9, 8];
let i = 0;
for (i = 0; i < arr.length; i++) {
  if (i % 2 != 0) {
    console.log(arr[i]);
  }
}

//pro to get the sum of an array element
let sum = 0;
for (i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(`Sum of array elements is ${sum}`);
