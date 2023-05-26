/* 
!   Operators
    - Plus          +
    - Times         *
    - Power         **
    - Dot           .
    - Assignment    =
    - Comparison    ==

    Used for:
        - Assign
        - Compare 
        - Arithmetic
        - Logical
        - Conditionals

    Expressions & Statement

    keyword name (expression) {
        code block
    }

    Statements are a collection of a keyword, an expression, and a code block.    
*/

//! Comparison Operators - Always asking a question
// Equal to
console.log("3" == 3);
// Strictly Equal to
console.log("Strictly Equal to: ", "3" === 3);
// Not Equal to
console.log("Not Equal to: ", "3" != 3);
console.log("Not Strictly Equal to: ", "3" != 3);  // strict

let aName = "bob";
console.log("Check name", aName == "Bob");  // return false

// Greater Than
3 > 2;

// Less Than
2 < 3;

// Greater Than or Equal To
3 >= 2;

// Less Than or Equal To
2 <= 3;

//! AND
2 && 3;

//! OR
2 || 3;

//! Logical Operators
let x = 1
console.log(x); // 1
x = x + 1;
console.log(x); // 2

// Addition
let r = 10;
r += 1; // r = r + 1;
console.log(r);

// Subtraction
r -= 2; // r = r -1;
console.log(r);

// Multiplication
r *= 2; // r = r * 2;
console.log(r);

// Reset Value
r = 10; 
console.log(r);

// Division
r /= 2; // r = r /2;
console.log(r);

// Remainder (Modulus)
r %= 3; // r = r % 3;
console.log(r);

// Exponential
r **= 3; // r = r ** 3;
console.log(r);

/* 
!   Challenge:
    Create 6 different variables. Each one will hold different data types.
        - variable will be detail:
            - First Name - holds a string
            - Last Name - holds a string
            - Birth Year - holds an integer
            - Needs Coffee - holds a boolean
            - The Current Year - holds an integer
            - Age - holds an integer.
                - This should reflect the difference between the current year and birth year. Not a literal.

        These values can be fictional.

            - Console Log Age.
        
*/

let firstName = "Ebeneezer";
let lastName = "Scrooge";
let birthYear = 1786;
let needsCoffee = true;
let currentYear = 1843;
let currentAge = currentYear - birthYear;
console.log(firstName + " " + lastName + " is");
console.log(currentAge + " years old.");
console.log(currentAge);

