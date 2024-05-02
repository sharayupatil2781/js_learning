let count = 0;
const spaceCount = function(str){
    for (const iterator of str) {
        if(iterator == ' ')
        {
            count++;
        }
        
    }
    return count;
}

// const totalspaces =  spaceCount("Rivision is the mother of success");
// console.log(totalspaces);

const totalspaces =  spaceCount("Java Script is the language of internate world");
console.log(totalspaces);
