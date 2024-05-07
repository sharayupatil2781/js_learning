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

console.log(`=============Q1=====================`)
const wiproEmp = arrayEmployee.filter(element => {
    return element.emp_company == "Wipro";
});
wiproEmp.forEach(element => console.log(element.emp_name))

console.log(`=============Q2=====================`)
const ITHrArray = arrayEmployee.filter(element => {
    return (element.emp_dept == "IT" || element.emp_dept == 'Hr')
});
ITHrArray.forEach(element => console.log(element.emp_name));

console.log(`=============Q3=====================`)
const empId = arrayEmployee.filter(element => {
    return element.emp_id > 50;
})
empId.forEach(element => console.log(element.emp_name));

console.log(`=============Q4=====================`)
let temp;
const name = arrayEmployee.filter(element => {
    temp = element.emp_name;
    return (temp.startsWith('a') ||  temp.startsWith('v')|| temp.startsWith('m'))
})
name.forEach(element => console.log(element.emp_name));

console.log(`=============Q5=====================`)

const avgSalary = arrayEmployee.filter(element => {
    return element.emp_salary;
});

let sum = 0;
avgSalary.forEach(element => {
    sum = sum + element.emp_salary;
})

console.log(`Average salary of employees: ${sum / avgSalary.length}`);

console.log(`=============Q6=====================`)
const ITEmp = arrayEmployee.filter(element => {
    return element.emp_dept == "IT";
});

sum = 0;
ITEmp.forEach(element => {
    sum = sum + element.emp_salary;
})

console.log(`Average salary of IT employess : ${sum / ITEmp.length}`);