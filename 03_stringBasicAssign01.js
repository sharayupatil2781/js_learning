function stringBasics() {
  console.log(`1.My dream company is ${"TCS"}!`);

  let hobby1 = "Swimming";
  let hobby2 = "Singing";
  let hobby3 = "Gardning";

  console.log(`2.My hobbies are: ${hobby1}, ${hobby2} and ${hobby3}!`);

  console.log(`No of characters in hobby1 : ${hobby1.length}`);
  console.log(`No of characters in hobby2 : ${hobby2.length}`);
  console.log(`No of characters in hobby3 : ${hobby3.length}`);

  console.log(
    `sum of total no of characters: ${
      hobby1.length + hobby2.length + hobby3.length
    }`
  );

  console.log(`${hobby1}${hobby2}${hobby3}`);
}

stringBasics();
