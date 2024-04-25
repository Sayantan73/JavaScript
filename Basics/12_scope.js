let c = 300

if (true) {
    let a = 10
    let b = 20
    let c = 30
    console.log("inner: ", c);
}

console.log(c);



console.log(addOne(5))

function addOne(num){
    return num + 1
}


console.log(addTwo(5))                          // not working because of hoisting function hold by a variable 

const addTwo = function(num){                   // addTwo is a expression
    return num + 2
}
