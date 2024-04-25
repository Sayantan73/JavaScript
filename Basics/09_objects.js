// object decleare by literal(not singleton) or constractor(singleton)

// object literals
const mySym = Symbol("key1")
const jsUser = {
    name : "karan",
    "full Name": "Sayantan Karan",
    [mySym]: "mykey1",
    age: 22,
    location: "jaipur",
    email: "sayantankaran73@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "saterday"]
}
console.log(jsUser.age);
console.log(jsUser["name"]);
console.log(jsUser["full Name"]);   // only [] this syntax will work
console.log(jsUser[mySym]);         // only [] this syntax will work

jsUser.email = "sayantankaran32@gmail.com"
// Object.freeze(jsUser)               // could not update any value
jsUser.age = 23                     // not work for using freeze
console.log(jsUser);
jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

const tinderUser = {}
tinderUser.id = "abc123"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("id"));

const regulerUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sayantan",
            lastName: "Karan"
        }
    }
}

console.log(regulerUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {3: "e", 4: "f"}
console.log(Object.assign({}, obj1, obj2, obj3));        // (source, destination1, destination2, destination3)

const obj5 = {...obj1, ...obj2, ...obj3}                 // spread means spread all objects in a single object
console.log(obj5);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]
console.log(users[0].email);



//object with constractor
// const tinderUser = new Object()