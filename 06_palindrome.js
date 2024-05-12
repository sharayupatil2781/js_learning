//madam, dad, mom, nayan, radar, amma, mam, level, nitin
const str = 'nitin';

let isPalindrome =  function(data){
    const arrayOfChar = data.split('');  //string to array
    arrayOfChar.reverse();        //array reverse
    const word = arrayOfChar.join('');    //array to string
    return word;
}

let check = isPalindrome(str);

if(str === check)
{
    console.log(`Given string is palindrome.`);
}    
else
{
    console.log(`Given string is not  palindrome.`);

}


//by sir...
// madam dad mom nayan radar amma mam level nitin

// hello

// function isPalindrome(word){

//     const arrayChars = word.split("");

//     arrayChars.reverse();

//     const reverseWord = arrayChars.join("");

//     const result = reverseWord==word;

//     return result;

// }

// var result = isPalindrome("nitin");

// console.log(`is word 'nitin' palindrome : ${result}`);