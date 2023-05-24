// Variables are containers that hold data value.

/*
    Single-line: CTRL+/ or CMD+/
    Multi-line:
    Quick Key:  Alt+Shirt+A - Windows
                Option-Shift-A - Mac
*/              

/* 
    variable keywords:
        - var
        - let
        - const
*/

let a = 2; // <-- notes to that line

    let     b       =       1       ;
//  (1)     (2)     (3)     (4)     (5)
/* 
    1. JS keyword to denote the creation of a variable.
    2. The name of the variable. Typically named for what it should be holding.
        ex: let streetAddress = "123 Main Street";
    3. Assignment operator. 
    4. The initial value.
    5. CLosing statment.
*/

//! Variable Initialization
//  Initialization is to the RIGHT side of the assignment operator (=)
let x = 10; // <-- 10 has been initialized to the variable "x".

//! Assigning to Other Variable
let first = "John ";
let last = "Smith";

let full = first + last; // return = "John Smith" (a single string)

//! Additional Examples
let c; // <-- Declaration of a variable.
console.log("Declaration", c);

c = 10; // Assigning our variable
console.log("Initialization 1:", c);

c = 33; // Reassigning the value of our variable.
console.log("Reassigning:", c);

let y = 'Hello';
// emmet for console.log() -> clg
console.log("Both", c, y);

//! Const
// "new" in ES6: declares vatiable meant to remain unchanged.

let today = "Great!";
const javaScript = "Wonderful!";
console.log(today, javaScript);

today = "Lovely!";
console.log(today, javaScript);

// javaScript = "Super!"; 
console.log(today, javaScript); // TypeError

