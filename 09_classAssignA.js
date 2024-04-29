class Vehicle{
    name;
    color;
    modelYear;
    vehicleNo;
    NoOfSeats;

    constructor(name,color,modelYear,vehicleNo,NoOfSeats){
        this.name = name;
        this.color = color;
        this.modelYear = modelYear;
        this.vehicleNo = vehicleNo;
        this.NoOfSeats = NoOfSeats;
    }

    getdetails(){
        console.log(`Name: ${this.name}, Color: ${this.color}, ModelYear: ${this.modelYear}, VehicleNo: ${this.vehicleNo}, NoOfseats: ${this.NoOfSeats}`);
    }
}

const swift = new Vehicle("swift",'blue',2016, 'MH12334',4);
console.log(swift);
const toyato = new Vehicle("toyato",'silver',2016, 'Gj12334',5);
const KN = new Vehicle("KN",'black',2018, 'MH12334',7);
const Audi = new Vehicle("audi",'blue',2014, 'MH12334',4);
const thar = new Vehicle("thar",'black',2011, 'MH12334',7);

const arr = [swift, toyato, KN, Audi, thar];

//====traversing array================
for (const iterator of arr) {
    iterator.getdetails();
}

console.log(`==========================================`);
//======================Q2=====================
class College{
    name;
    location;
    departments;
    noOfStudents;

    constructor(Name, location,Departments, NoOfStudents){
        this.name = Name;
        this.location = location;
        this.departments = Departments;
        this.noOfStudents = NoOfStudents;
    }

    display()
    {
        console.log(`Name: ${this.name}, location: ${this.location}, departments: ${this.departments}, NoOfStudent: ${this.noOfStudents}`);
    }
}

const kIT = new College('KIT','kolhapur',4,1000);
kIT.display();

const BVCOEK = new College('BVCOEK','kolhapur',5,1000);
BVCOEK.display();

const COEP = new College('COEP','Pune',6,10000);
COEP.display();

const GPK = new College('GPK','kolhapur',5,1000);
GPK.display();
