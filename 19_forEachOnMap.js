let mapStudentMarks = new Map();
mapStudentMarks.set("Elon",90);
mapStudentMarks.set("Stev",56);
mapStudentMarks.set("Yash",78);
mapStudentMarks.set("Ram",45);
mapStudentMarks.set("Neha",89);

mapStudentMarks.forEach((key, value) =>{
    console.log(value, key);
})