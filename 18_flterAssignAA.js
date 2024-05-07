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
const emp_radha = new Employee(33, "radha", "Hr", 74000, "Wipro");
const emp_rishi = new Employee(55, "rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "monika", "IT", 40000, "Wipro");
const emp_vinay = new Employee(88, "vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "mahesh", "Hr", 85000, "Infy");

const arrayEmployee =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];

const arrTCS = arrayEmployee.filter(elements => {
    return elements.emp_company == "TCS";
});

arrTCS.forEach(element => {
    console.log(element.emp_name);
});

//===================2===========
const arrWipro = arrayEmployee.filter(element => {
    return element.emp_company == "Wipro";
});

let sum = 0;
arrWipro.forEach(element => {
    sum = sum + element.emp_salary;
});

console.log(`Average salary of wipro employess: ${sum / arrWipro.length}`);

//===================3===========
const arrWiproOrInfy = arrayEmployee.filter(element => {
    return element.emp_company == "Wipro" || element.emp_company == "Infy" ;
});
let sum1 = 0;
arrWiproOrInfy.forEach(element => {
    sum1 = sum1 + element.emp_salary;
});
console.log(sum1);

console.log(`Average salary of wipro orInfy employess: ${sum1 / arrWiproOrInfy.length}`);