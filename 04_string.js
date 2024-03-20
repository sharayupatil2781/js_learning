//length
let greet = "Good Morning";
let totalChars = greet.length;
console.log("Total chars/ length of string: ", totalChars);

//charAt
let charAt = greet.charAt(8);
console.log("char at index: ", charAt);

//indexOf
let charAtPos = greet.indexOf("M");
console.log("index of particular char is: ", charAtPos);

//concat
let firstName = "sharayu";
let lastName = "patil";
console.log("My name is: ", firstName.concat(lastName));

//replace
let str = "Hellooo Dev";
console.log(str.replace("Dev", "World"));
console.log(str);

console.log(str.replace("o", "p"));
console.log(str.replace("ooo", "p"));
console.log(str.replace("ooo", "ppp"));

//toUpperCase
let str1 = "Good Morning";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

//trim
let str2 = "  shara patil  "; //trim spaces (front and back)
console.log(str2);
console.log(str2.length);

let temp = str2.trim();
console.log(temp);
console.log(temp.length);
console.log(`Total removed spaces are ${str2.length - temp.length}`);

//toString
let num = 15;
console.log(num);
console.log(typeof num);

let numString = num.toString();
console.log(numString);
console.log(typeof numString);

//includes
let check = "My name is codingtute! 34";
console.log(check.includes("name"));
console.log(check.includes("!"));
console.log(check.includes(12));
console.log(check.includes(34));

//search
let data = "hello all!";
console.log(data.search("all"));
console.log(data.search("e"));
console.log(data.search("!"));

//slice(start,end)
let data1 = "software developer";
console.log(data1.slice(2, 10));

//split
let data3 = "How are u all!";
let result = data3.split(" ");
console.log(result);
console.log(result.length);

//substring(start, end)
let sentence = "All is well!";
console.log(sentence.substring(2, 10));

//Q.W a function with name totalWord............. to find the total no of words
function totalWord(str) {
  let answer = str.split(" ").length;
  return answer;
}

let words = totalWord("I am happy!");
console.log(`Total no of words are ${words}`);

let words1 = totalWord("I am learning JS the language of internet.");
console.log(`Total no of words are ${words1}`);
