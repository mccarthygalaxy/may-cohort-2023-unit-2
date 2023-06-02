//! Challenge: Make a for loop where you add up all the numbers from 1 to 50. This should equal to 1275.

let sum = 0;

for(let i = 1; i <= 50; i++) {
    console.log(i);
    sum += i // sum = sum + i
    console.log(sum);
}