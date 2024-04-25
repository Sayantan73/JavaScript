function addNumber(num1, num2){                     //(parameter1, parameter2)
    console.log(num1 + num2);
}
addNumber(3, 5)                                     // (argument1, argument2)

function logInUserMessage(userName = "user") {
    if (!userName) {                                // undefined or "" is false
        console.log("please enter a userName");
        return
    }
    return `${userName} just logged in`
}
console.log(logInUserMessage("karan"));

function calculateCartPrice(num1, num2, ...num3) {   // ...num3 is a rest operater create a array
    return num3
}
console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    userName: "karan",
    price: 199
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObject(user)
handleObject({
    userName: "Sayantan",
    price: 599
})

function returnSeconedNumber(arr) {
    return arr[1]
}
console.log(returnSeconedNumber([23, 55, 21, 11, 98]));