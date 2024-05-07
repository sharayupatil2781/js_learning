//reduce 
let array = [2, 4, 1, 7, 8, 9];
//sum the array.
//is array ki value ysi reduce karo ki aapko sirf 1 value mele!(isum, imult.....)
//currentValue = 2,4,1,7,8,9.............
//runnigTotal = 0, (2 + 4) (6 + 1) (7 + 7).....

//bydefault value of runningTotal = 0
// const sum = array.reduce((runningTotal, currentValue) => {
//     return runningTotal + currentValue;
// }
// )


//U can start value of runningTotal as u want, u can write any value. e.g 100 or 0
const sum = array.reduce((runningTotal, currentValue) => {
    return runningTotal + currentValue;
}, 100
);

console.log(sum);

//========================================================
class Employee{
    constructor(emp_id, emp_name, emp_dept,emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "monika", "IT", 40000, "Wipro");
const emp_vinay = new Employee(88, "vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "mahesh", "Hr", 85000, "Infy");

const arrayEmployee =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];

console.log(`Get/ filter out the employees from IT department`);
console.log(`Get/ filter out the average salary of employees from IT department`);

const itEmp = arrayEmployee.filter(element =>{
    return (element.emp_dept == "IT");
});

const sumSalary = itEmp.reduce((runningTotal, currentValue) => {
    return runningTotal + currentValue.emp_salary;
}, 0);

console.log(sumSalary);
console.log(`Avegare salary of It employees: ${sumSalary / itEmp.length}`);