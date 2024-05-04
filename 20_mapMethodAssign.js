const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

//==========Q1===============================
const addArray = arrayNumbers.map(elements => {
    return elements + 10;
})

console.log(addArray);

//============Q2=============================
const cubeArray = arrayNumbers.map(elements => {
    return elements ** 3;
})

console.log(cubeArray);

//============Q3===============================
const indexArray = arrayNumbers.map((elements, index) => {
    return elements + index;
})

console.log(indexArray);