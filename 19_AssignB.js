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

//=============Q1=====================================
arrayEmployee.forEach(elements => {
    if(elements.emp_company == "TCS")
    {
        console.log(`${elements.emp_name} is working in ${elements.emp_company}`);
    }
})


//=============Q2======================================
arrayEmployee.forEach(elements => {
    if( elements.emp_dept == "Finance")
    {
        console.log(`${elements.emp_name} is working in ${elements.emp_dept}`);
    }
   
})

//=========Q3========================================
arrayEmployee.forEach(elements => {
    
        if(elements.emp_name.startsWith("r") == true)
        {
            console.log(`${elements.emp_name}, ${elements.emp_id}, ${elements.emp_dept}`)
        }
})

//==========Q4========================================
arrayEmployee.forEach(elements => {
    if(elements.emp_salary > 75000)
    {
        console.log(`${elements.emp_name} is woking in ${elements.emp_company} with salary ${elements.emp_salary}`);
    }
})

//==========Q5========================================
arrayEmployee.forEach(elements => {
    if((elements.emp_salary >= 50000) &&(elements.emp_dept == "IT"))
    {
        console.log(`${elements.emp_name} is woking in ${elements.emp_company} with salary ${elements.emp_salary}`);
    }})

//===========Q6======================================
arrayEmployee.forEach(elements => {
    if(elements.emp_company == "Infy")
    {
        console.log(`${elements.emp_name} is working in ${elements.emp_company} in ${elements.emp_dept} department.`);
    }

})    
