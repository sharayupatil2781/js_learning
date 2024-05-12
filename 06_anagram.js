//anagram : having exactly same chars
//silent listen
//convert to array of char - then sort - make it word - then apply check

let str1 = 'silent';
let str2 = 'listen';
const anagram = (s1, s2)=>{
    const firstWord = s1.split('').sort().join('');
    const secondWord = s2.split('').sort().join('');

    if(firstWord == secondWord){
        return true;
    }
    else{
        return false;
    }
}

let isanagram = anagram(str1, str2);
if(isanagram == true)
{
    console.log(`Given strings are anagram.`);
}
else
{
    console.log(`Given strings are not anagram.`);
}

//by sir....................................
// const isAnagram = (firstWord, secondWord ) =>{

//     const firstSortedWord = firstWord.split("").sort().join("");

//     const secondSortedWord = secondWord.split("").sort().join("");

//     return firstSortedWord == secondSortedWord;

// }

// let result = isAnagram("such", "much");

// console.log(`Given words or strings are anagram: ${result}`);

