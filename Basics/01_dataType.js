"use strict";  // treate all js code as newer version

// premetive datatypes
let name = "Sayantan Karan"     // string
let age = 21                    // number 
let isLoggedIn = false          // boolean
let state;                      // undefined
let bigNum = 83984789309893878n // bigint
let outSideTemp = null          // null(standalone value)(type == object)
let id = Symbol('123')          // symbol(unique used in react)
let anotherId = Symbol('123')

// Non-Premetive
const heros = ["thor", "hulk", "Iron Man"]  // Array

let myObj = {
    name: "Sayantan",                       // Object
    age : 22
}

const wish = function(){
    console.log("Good Morning");            // Functions
}


console.table([name, age, isLoggedIn, state, bigNum, outSideTemp, (id == anotherId)])


// Primitive
// 7types: String, Number, Boolean, null, undefined, Symbol, Bigint

// Reference or non-premetive
// Array, Object, Functions
