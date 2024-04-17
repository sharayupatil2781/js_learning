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
