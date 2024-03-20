function stringHandson() {
  let str = "   He you are doing good, keep it up   ";
  console.log(`1.Given string is: ${str}`);
  console.log(`2.Length of string: ${str.length}`);

  let str1 = str.trim();
  console.log(
    `3.String after removing white spaces: ${str1} and length of that string is ${str1.length}`
  );

  console.log(`4.extra white spaces removed are: ${str.length - str1.length}`);

  console.log(
    `5.First char is "${str1.charAt(0)}" amd last char is "${str1.charAt(
      str1.length - 1
    )}"`
  );

  let totalWords = str1.split(" ");
  console.log(`6.total words in string are: ${totalWords.length}`);

  console.log(
    `7. Index of "good" in the given string is ${str1.indexOf("good")}`
  );

  console.log(
    `8.Substring from index 22 is: "${str1.substring(22, str1.length + 1)}"`
  );

  // console.log(
  //   `8.Substring from index 22 is: "${str1.slice(22, str1.length + 1)}"`
  // );

  console.log(`9.Given string ends with "up": ${str1.endsWith("up")}`);

  let temp1 = str1.search(" ");
  let start = str1.substring(0, temp1);
  String(start);
  console.log(start, typeof start);
  //start = "H";
  console.log(`10.Given string starts with "Hey": ${str1.startsWith(start)}`); //check this???????????????????????????????????????????????????????????????????????????????????
}

stringHandson();
