
function add(n1, ...values){
    console.log(n1);
    console.log(values, typeof values);
}

add(5,6,7,8);

//==================================================
//function with default value
function division(n1, n2 = 1){
    console.log(n1,n2);
}

division(2,5);
division(7);            //you can provide the default value.