//! For
/* 
    Three Parameters
        1 initial expression
        2 condition
        3 increment expression

*/

let i = 7;                  // global scope!

//    (1)    (2)    (3)   
for(i = 0; i < 10; i++) {   //local scope!
    console.log(i);         //local scope! 
}

let ii = 7;
//    (1)    (2)    (3)   
for(ii; ii < 10; ii++) {    //local scope!
    console.log(ii);        //local scope! 
}

/* 
    keyword(initial expression; condition; increment) {
        code block
    }
*/

for(let i = 10; i <= 100; i += 10 ) {
    console.log(i);
}

//* Challenge: using a for loop, count to 20 by 2's. Starting at -10.

let v = -10

for(v; v <= 20; v += 2) {
    console.log(v);
}
console.log(v);
let x = v * 2   // Because we assigned it to a variable (v)
console.log(x);
// Or this: 

for(let i = -10; i <= 20; i += 2) {
    console.log(i);
}

// Another example (counting backwards by 1)
for(i = 10; i >= 0; i--) {
    console.log(i);
}

// Another example (counting backwards by 2)
for(i = 0; i >= -25; i-=2) {
    console.log(i);
}

//! Challenge: using a for loop, go through and name and display each letter individually.

let firstName = "Steve";

for (let i = 0; i < firstName.length; i++) {
    const element = firstName[i];
    console.log(element);
}

//! Challenge: Make a for loop where you add up all the numbers from 1 to 50. This should equal to 1275.

let sum = 0;

for(let i = 1; i <= 50; i++) {
    console.log(i);
    sum += i // sum = sum + i
    console.log(sum);
}
