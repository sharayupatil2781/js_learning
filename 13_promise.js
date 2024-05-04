
let notesReady = false;
//success & reject je aapn pass kelay te pn function ahet.
const promise = new Promise(function(success, reject){
  if(notesReady)
  {
    success(`Here you go guys. Please use thi notes....`);
  }
});

promise.then(function(onSuccess){
  console.log(onSuccess);
}).catch(function(onFailure){
  console.log(onFailure);
}).finally(function(){
  console.log(`Finally i must have my notes...`)
});


//Instead of this u will use async and await - es6 feature