let person = {
  name: "Ram",
  city: "pune",
  experience: 10,
};

console.log(person);
//console.table(person);

console.log(`Type of person is: ${typeof person}`);

console.log(`-----Accessing object properties-----`);
//let data = person.city;
let data = person["city"];

console.log(`person city is: ${data}`);
console.log(`person exp is: ${person.experience}`);

console.log(`-----Adding properties in object-----`);
person.isMarried = true;
console.table(person);

console.log(`-----Deleting properties from an object-----`);
delete person.experience;
console.table(person);

console.log(`-----Creating an empty object-----`);
let address = {};
console.table(address);
address.pin = 112233;
console.table(address);

console.log(`----- creating Method inside an object-----`);
const bank = {
  name: "SBI Bank Wakad",
  city: "Pune",
  totalStaff: 90,
  homeLoanROI: 9.5,
  bankDetails: function () {
    //function expression
    console.log(
      `Bank name is: ${this.name}, city:${this.city}, totalStaff:${this.totalStaff}`
    ); //jy object chy aatmadhe ahat tytle name property as name property baki object madhe pn ahe bagha!
  },

  calculateHomeLoan: function (amount) {
    return (amount * this.homeLoanROI * 1) / 100;
  },
};
bank.bankDetails();
let interest = bank.calculateHomeLoan(50000);
console.log(`Interest to pay on money: ${interest}`);

console.log(`--------nested object : object inside object--------`);
const jennyDetails = {
  //object 1
  name: "Jenny",
  age: 25,
  country: "USA",
  address: {
    //object 1
    flatNo: 123,
    floorNo: 3,
    street: "Bergen road",
    city: "LA",
    state: "ABC",
    getAddress: function () {
      const address = `Flat No: ${this.flatNo}, Floor No: ${this.floorNo}, street: ${this.street}, city: ${this.city}, state: ${this.state}`;

      return address;
    },
  },
};

// const address = {
//   flatNo: 123,
// floorNo:3,
// street: "Bergen road",
// city : 'LA' };

console.log(`Type of jennyDetails: ${typeof jennyDetails}`);
console.log(`Type of address: ${typeof address}`);

//to access city in address
console.log(`City: ${jennyDetails.address.city}`);

//to update the state
jennyDetails.address.state = "xyz";
console.table(jennyDetails.address);

//method inside nested object
const data1 = jennyDetails.address.getAddress();
console.log(`Full address is: ${data1}`);
