//use case of set timeout / callback:

//global function!(already defined) available in any file.
//takes 2 arg, (function, timeout(kiti velananter(sec, millisecond) ya pass kelely funtion la call kraychy.. ))

let show = function(){
    console.log(`show function expression...`);
}
setTimeout(show,3000 )     //1 sec = 3000 milisecond

//==================================
//can do like this also!
// setTimeout(function(){
//     console.log(`show function expression...`);
// }, 3000)

//==========================================================
//callback hell:

setTimeout(function(){
    console.log(`Hello`);
    setTimeout(function(){
        console.log(`Good morning..`);
        setTimeout(function(){
            console.log(`How are you!`);
        }, 3000)
    }, 2000)
}, 1000)