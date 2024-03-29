let word = "JavaScript";
// for (let i = 0; i < word.length; i++) {
//   //console.log(word[i]);
//   console.log(word.charAt(i));
// }

let count = 0;
console.log("WAP to count char 'a'");
for (let i = 0; i < word.length; i++) {
  if (word.charAt(i) == "a") {
    count++;
  }
}
console.log(`Frequency of count is: ${count}`);
