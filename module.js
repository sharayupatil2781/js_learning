//main.js
const array = [2,3,4,5,6,9,8];

export default array;       //default:es file mese yek array/function/object/var maine export kiya hai.

//Now how to export multiple...(instead of default export we just write export)
export const PI = 3.14;
export let show = function(){
    console.log(`Hey buddy... I am inside function exp.`);
}


//1. default export: jo bhi aapko export karna hai usko declare/define karo aur bad mai uska nam deke export karo.
//2. export: jab mai define kar rha hu uske pahle export lika hai!