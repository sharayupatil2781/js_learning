class Student{
    rolllNumber;
    name;
    division;

constructor(rollNumber, name, division)
{
    this.rolllNumber = rollNumber;
    this.name = name;
    this.division = division;
}

getDetails()
{
    console.log(`${this.name} has roll number ${this.rolllNumber} & belong to division ${this.division}`);
}
}

const Neha = new Student(10, "Naha", 'A');
console.log(Neha);
Neha.getDetails();

const Ram = new Student(11, "Ram", 'C');
console.log(Ram);
Ram.getDetails();

const Ravi = new Student(12, "Ravi", 'B');
console.log(Ravi);
Ravi.getDetails();