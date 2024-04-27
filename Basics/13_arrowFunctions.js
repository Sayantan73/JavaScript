const user = {
    userName: "Karan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to our website`);
        // console.log(this);
    }
}

user.welcomeMessage()
user.userName = "Sayantan"
user.welcomeMessage()

console.log(this);


// const chai = function() {
//     let userName = "hitesh"
//     console.log(this);                       
//     console.log(this.userName);
// }
// chai()


const chai = () => {
    let userName = "hitesh"
    console.log(this);                       
    console.log(this.userName);
}
chai()


// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)                // implesit return: work same dont't need return when we use parenthesis()

// const addTwo = (num1, num2) => num1 + num2                  // work same dont't need return  

// const addTwo = (num1, num2) => ({userName: "hitesh"})          // for returning a object we must have to use parenthesis() 


