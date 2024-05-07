
const array = [2, [4, 1, 7], 8 , 9, , 7];
console.log(array.length);

//we have array inside array.
//now i want to flaten this array! i.e jo array ke andhar array hai unsko bhi nikal do! empty sapce bhi nekalna hai.
//we can do that with the  help of flat() method.

const flatnedArray = array.flat();
console.log(flatnedArray);

//=============================================
const array1 = [2, [4, 1, [7, [8, 4]]], 8 , 9, , 7];
//want to flaten the array till depth 2, i.t flat(2)
const flatnedArray1 = array1.flat(2);
console.log(flatnedArray1);

const flatnedArray2 = array1.flat(3);
console.log(flatnedArray2);

//===========================================
const array3 = [5, , 7, 9, [44, 5]];
const flatnedArray3 = array3.flat();
console.log(flatnedArray3);


//explore flatMap() , find() ---- homework