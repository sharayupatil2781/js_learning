'use strict';

const json = `
{
    "name": "Alex Melon",
    "id": "E00245",
    "role":["Dev", "DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married": false,
    "address": {
        "street": "32,Laham St." ,
        "city": "Innsbruck",
        "country":"Austria"
    },
    "referred-by" : "E0012"
    }
`
//Converting to object..........
const data = JSON.parse(json);
console.log(data);

//=================Q2=====================
console.log(data.role[0]);

//================Q3========================
const string = data.name;
//console.log(string, typeof string);

const string1 = string.split(" ");
console.log(string1, typeof string1);
console.log(string1[1]);

//==============Q4===========================
const string3 = data.doj;
const string4 = string3.split("-");
console.log(string4);
console.log(string4[2]);