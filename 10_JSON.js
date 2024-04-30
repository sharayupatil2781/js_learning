//JSON.parse()
//JSON.stringfy(): convert an object to JSON

const person = {
    name: "jonas",
    city: "pune",
    experience: 10,
    isMarred: false,
    skills: ["Html","CSS", "js"],
    address:{
        street: "wakad",
        city: "pune",
    }
}

//How to convert object to JSON string?
const result = JSON.stringify(person)
console.log(result);
console.log(`typeof result : ${typeof result}`);

//====================================================
//from JSON string to object
//use online JSON formattor(https://jsonformatter.org/)

//we used backtick. as hum double quote ke andhar double quote nahi likh sakte.
const personJSON = `
{
    "name": "jonas",
    "city": "pune",
    "experience": 10,
    "isMarred": false,
    "skills": [
      "Html",
      "CSS",
      "js"
    ],
    "address": {
      "street": "wakad",
      "city": "pune"
    }
  }`

  //convert JSON to object
const PersonObject = JSON.parse(personJSON); 
console.log(PersonObject); 
console.log(`type of personObject: ${typeof PersonObject}`);

//now once u have  a object u can access data.
//so UI var data diaplay kartana u need object. so tytun to tumi display karu shakta!
console.log(PersonObject.address.city)
console.log(PersonObject.name);

//==========Question===============
//log HTML as output.
console.log(person.skills[0]);