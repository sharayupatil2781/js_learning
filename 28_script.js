//How to select the element...
"use strict";
console.log(document.querySelector(".profile").textContent);
console.log(
  (document.querySelector(".stack").textContent = "adding new stack....")
);

//two element with the same class, but ocument.querySelector will select only the one at top
console.log(document.querySelector(".ui").textContent);

//will give all the elements when u pass element name or the class name

//const elementList = document.querySelectorAll(".ui");.....ny class name

//by element name
const elementList = document.querySelectorAll("li");

// it will have multiple elements  &b to log that.. for of loop
for (const element of elementList) {
  console.log(element.textContent);
}
//----------------------------------------------------------
//want to modify the text...
console.log(
  (document.querySelector(".stack").textContent = "My modified tech stack...")
);

//==========================================================
//changing CSS......
//first, select the element then change the css!
const changeCss = document.querySelector(".stack");
changeCss.style.color = "orange";

//creating an element using JS  - h2
const h2Element = document.createElement("h2");
const textNodeProject = document.createTextNode(
  "Project Name: College management system"
);
h2Element.appendChild(textNodeProject);

function eventClick()
{
  console.log("hey...he clicked me!");
}

// const addButton = document.querySelector(".btn");
    // addButton.addEventListener('click', () => {
    //   console.log('Add button click!');
    // });
  

    // document.querySelector('.btn').addEventListener('click', function(){
    //   console.log('Add button clicked.');
    //   //alert('Hey you clicked me.');
    //   //prompt('enter number: ', 0);  //by default no konta dhakvaycha ahe. = 0
    //   //console.log(num);
    //   const result = confirm("are u sure!");
    //   console.log(result);
    // });

    const addButton = document.querySelector('#add');

addButton.addEventListener('click', ()=>{

  const num = prompt("Enter the valid number to perform square", 1);

  const elementPara = document.createElement('p');

  const textNodeSquare = document.createTextNode(`Number ${num} and it's square is ${num*num}`)

  elementPara.style.color= 'orange';

  elementPara.appendChild(textNodeSquare)

  const squareResultElement = document.querySelector('.square-result');

  squareResultElement.appendChild(elementPara);

});