/*
    - Create a function called "fizzBuzz".
    - Within the function, create a loop that counts from 1 to 100.
      - Create a variable within the loop called "response".
    - For each iteration, evaluate the expression (i). 
      - For numbers evenly divisible by 3, store "Fizz" within "response".
      - For numbers evenly divisible by 5, store "Buzz" within "response".
      - For numbers evenly divisible by both 3 and 5, store "Fizz Buzz" within "response".
      - For numbers not divisible by either, store the value of the expression.
    - log the response variable within the console for each iteration.
    
    - After the function has completed, log a string that details how many different 
      "Fizz", "Buzz", and "Fizz Buzz" were found.
    
      example: "There were X Fizz Buzz, X Fizz, and X Buzz counted."
      hint:
        What kind of operator helps us with finding out division with remainders? 
        Consider how to store the values outside of the function.  
*/

let fizzBuzz = 0;
let fizz = 0;
let buzz = 0;

for(i = 1; i <= 100; i++) {
  let response = null;
  // var fizzBuzz = 0;
  // var fizz = 0;
  // var buzz = 0;

  if(i % 15 === 0) {
    response = "Fizz Buzz!";
    fizzBuzz++;
  } else if (i % 5 === 0) {
    response = "Buzz";
    fizz++;
  } else if (i % 3 === 0) {
    response = "Fizz";
    buzz++;
  } else {
    response = i;
  }
  console.log(response);
}
console.log(`\nThere were ${fizzBuzz} Fizz Buzzes.`);
console.log(`There were ${fizz} Fizzes.`);
console.log(`There were ${buzz} Buzzes.`);