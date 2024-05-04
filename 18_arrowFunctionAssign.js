//=========== Q 1 ==============
const data = () => console.log(`Good morning, Today is monday!`);

data();

//========== Q 2 ===============
const mult = (no1, no2, no3 = 1) =>{
    console.log(`Multiplication is: ${no1 * no2 * no3}`);
}

mult(5,5,2);
mult(10,4)

//============== Q 3 ===============
const add = (n1, n2, n3, n4, n5) =>
{
    return n1 + n2 + n3 + n4 + n5;
}

const addition = add(100, 100, 200, 349, 756);
console.log(`addition is: ${addition}`);

const message = add("I am ", "learning ", "Es6 ", "features ","in depth!");
console.log(message);