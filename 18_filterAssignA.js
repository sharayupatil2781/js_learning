const arrayNumbers = [20,11,40,25,37,49,9, 90, 60 ,2, 19];

const newarr = arrayNumbers.filter(elements => {
    return elements > 50;
});

console.log(newarr);

const evenarr = arrayNumbers.filter(elements => {
    return elements % 2 == 0;
});

console.log(evenarr);

const oddarr = arrayNumbers.filter(elements => {
    return elements % 2 != 0;
});
console.log(oddarr);

const multiple5 = arrayNumbers.filter(elements => {
    return elements % 5 == 0;
});

console.log(multiple5);

const arr20and50 = arrayNumbers.filter(elements => {
    return elements >= 20 && elements <= 50;
});

console.log(arr20and50);