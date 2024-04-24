const score = 400
console.log(score);

const balance = new Number(200)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString("en-IN"));


// ********************Math*********************

console.log(Math.abs(-76452)); // print the abosolute means change negative number to positive
console.log(Math.round(64.8653));
console.log(Math.floor(64.8653));
console.log(Math.ceil(64.8653));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
console.log((Math.random() *10) +1);

const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1)) + min);



