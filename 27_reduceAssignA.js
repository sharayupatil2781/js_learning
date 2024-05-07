const arrayNumbers = [20,11,40,25,37,49,9, 90, 60 ,2, 19];

//==============1===================
let sum = 0;
for(let i = 0; i < arrayNumbers.length; i++ )
{
    sum = sum + arrayNumbers[i];
}
console.log(`Sum of array elements : ${sum}`);

const sum1 = arrayNumbers.reduce((runningTotal, currentTotal) => {
    return runningTotal + currentTotal;
})
console.log(sum1);

//==============2===================
const multiple5 = arrayNumbers.filter(elements => {
    return elements % 5 == 0;
});

console.log(multiple5);

const sum2 = multiple5.reduce((runningtotal, currentTotal) => 
{
    return runningtotal + currentTotal;
});
console.log(sum2);

