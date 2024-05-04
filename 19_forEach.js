//array/ set traverse sati => for of loop
//================================================
//for-each loop(ES6): we pass an  arrow function(99%) as an argument/ anonymous function

const array = [2,4,1,7,9,8];

array.forEach(element => {
    console.log(element);
})

// array.forEach((element, index, array) => {
//     console.log(element);
//     console.log(index);
//     console.log(array);
// })


//find even number.................
array.forEach(element =>{
    if(element % 2 == 0)
    {
        console.log(element);
    }
})