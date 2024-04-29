// Falsy value: false, 0, -0, Bigint 0n, "", null, undefined, NaN

// Truthy value: "0", "false", " ", [], {}, functioln(){}

// Nullish coalescing Operator (??): null / undefined
let val1
val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 10
console.log(val1);

val1 = undefined ?? 20
console.log(val1);

val1 = null ?? 30 ?? 40
console.log(val1);


// ternary operater simple version of if-else statement
// condition ? true : false
const iseTeaPrice = 100
iseTeaPrice <= 80 ? console.log("less than 80") : console.log("Greater than 80");
