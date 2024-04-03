//for - in loop To traverse the array
const arr = [2, 4, 1, 7, 9, 8];
for (const i in arr) {
  console.log(arr[i]);
}

//to find the odd indexed element
console.log(`----------------------------------`);
for (const i in arr) {
  if (i % 2 != 0) {
    console.log(arr[i]);
  }
}
