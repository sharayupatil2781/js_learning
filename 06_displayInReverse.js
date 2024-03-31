let data = "codemind";
let i = 0;
let word = "";
let ch;

for (i = data.length - 1; i >= 0; i--) {
  ch = data.charAt(i);
  word = word + ch;
}
console.log(word);
