let isprime = false;
const prime = function(num){
    for(let i = 2; i < num; i++)
    {
        if(num % i == 0)
        {
            return false;
        }
    }

    return true;
}

const result = prime(2);
if(result == false){
    console.log(`Number is not prime!`);
}
else{
    console.log(`Number is prime!`);
}

//==========by sir===========
// function isPrime(num){

//     for (let index = 2; index < num; index++) {
   
//       if (num%index==0) {
   
//        return false;
   
//       } 
   
//     }
   
//     return true;
   
//    }
   
//    const result = isPrime(7);
   
//    console.log(`Is 7 Prime Number : ${result}`);
   
    
   
//    const result1 = isPrime(9);
   
//    console.log(`Is 7 Prime Number : ${result1}`);