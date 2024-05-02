//callback: passing one function as an argument to another function
//calling a function passed as an argument!

// function show(callback){
//     console.log(`Inside show!`);
//     callback();
// }

// let display = function(){}

// show(display);


//jenny: solve the assignment by own
function jennyHomework(callback){
    //callback(); => homework zalynanter bolval pahije!
    console.log(`Jenny started homework...`);
    console.log(`Jenny took 2 hours....`);
    console.log(`Finally,Jenny completed homework...!`)
    callback();
}

//Elon: Copy homework from jenny
let elonCopyHomework = function(){
    console.log(`Playing cricket....`);
    console.log(`Copying homework.....`);
    console.log(`after 10 minutes, Elon copied all homework...`);
}

//jenny calling elon once she done her homewrok: callback
jennyHomework(elonCopyHomework);