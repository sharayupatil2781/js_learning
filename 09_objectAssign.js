let professor = {
  name: "Ganajanan Sir",
  subject: "Angular",
  expertise: "UI Developer",
  age: 30,
  teachingExp: 5,
  degrees: {
    engineering: "CSE",
    PHD: "Adv Computing",
  },
  certificates: [
    "Hacker Rank Participation",
    "Certificate in IFE Course",
    "Certificate in Adv Computing",
  ],
};

console.log(professor);
//console.table(professor);

console.log("---------------Adding new property--------------");
professor.totalExperience = 14;
console.log(professor);

console.log("---------------Modifying existing property--------------");
professor.age = 33;
console.log(professor);

console.log("---------------Adding element in array at index 2 --------------");

professor.certificates.splice(2, 0, "Oracle Certified");
console.log(professor);

console.log("---------------Last element of the array --------------");
let lastIndex = professor.certificates.length - 1;
console.log(`Last index: ${lastIndex}`);
console.log(
  `Last element of the array Certificate: ${professor.certificates[lastIndex]}`
);

console.log(`-------Complete Object------`);
console.log(professor);

let data = {
  name: "shara",
  age: 23,
  job: "none",
};
console.log(data);

console.log("----Traversing array Certificates using for Of loop------");
for (const element of professor.certificates) {
  console.log(element);
}
