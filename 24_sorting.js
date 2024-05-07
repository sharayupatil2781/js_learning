//Now i want to sort this array.
const array = [2, 40,19, 79, 8, 9];

console.log(`Original array: ${array}`);

//reverse the array...
console.log(`reverseing the array :${array.reverse()}`);

//default sorting on array number...
console.log(`sorting the array :${array.sort()}`);
//why this is happing, as wo har element ko string consider kar rha hai or u could consider ki just first digit match kar rha hai!

const arrayFriends = ["Stew", "Elon", "Jenny", "Bill"];
console.log(arrayFriends);
console.log(`Sorting friends in ascending order..`);
arrayFriends.sort();
console.log(arrayFriends);

console.log(`Sorting friends in decending order..`);
arrayFriends.reverse();
console.log(arrayFriends);



//Conclusion: so, jab hmara array of string hota hai tab ye sorting method acche se kam karta hai kyu ki internally jab ye sort karta hai to element ko string consider karta hai but jab numbers ka array rhega ye gadbda jata hai! kuki esko bhi ye string coonsider karva jata hai!
//Now how to solve this problem....
//we have to write the logic inside the sort method
//ye bhi yek array function leta hai...
//ascending order....
array.sort((n1, n2) => {
    return n1 > n2  ? 1 : -1;
});
console.log(array);

//1 matlab shifting karo..
//-1 matlab shifting mat karo..


//decending order....
array.sort((n1, n2) => {
    return n1 > n2  ? -1 : 1;
});
console.log(array);

//or first sort kro aur fir reverse()karo!