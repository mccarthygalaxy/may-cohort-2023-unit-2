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

//! For In          Iterates over an Enumerable
let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 3
}

for(key in student) {
    console.log(key); // name awesome degree week
    console.log(student[key]);
}

let first = "erIC";
let capName;

for(let i in first) {
    console.log(i);
    console.log(typeof i);
    if(i == 0) {
        capName = first[i].toUpperCase();
    } else { 
        capName += first[i].toLowerCase();
    }
}

console.log(capName);

//! For Of          
// for(value of student) {
//     console.log(value);
// } 
// doesn't work -- object properties are NOT 'iterable', they are enumerable.

let cats = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']

for(cat of cats) {
    console.log(`${cat} cat says "meow".`);
}

//! While

/* 
    Structure:

    while(condition) {
        code block...
    }
*/

let city = [
    'building', 'building', 'light pole', 'bridge', 'building', 'light pole', 'tree', 'light pole', 'empty street'
];

let structure = city[0];
let pos = 0;

while(structure != 'empty street') {
    console.log(`Spider-Man swings from the ${structure}!`);
    pos++;
    structure = city[pos];
}

console.log(`Spider-Man lands in the ${structure}.`);

//! Do While
/* 
    Structure:

    do {
        code block...
    } while (condition)
*/

let spidyHP = 20;
let badGuys = [
    {
        baddie: "Green Goblin",
        hp: 15
    },
    {
        baddie: "Venom",
        hp: 25
    },
    {
        baddie: "Stilt Man",
        hp: 15
    },
    {
        baddie: "Thug",
        hp: 0
    }

];

let rand = Math.floor(Math.random() * badGuys.length);
let villain = badGuys[rand];

console.log(`${villain.baddie} has appeared!`);

do {

    console.log(`${villain.baddie} hit Spider-Man!`);
    spidyHP--;
    console.log(`Spider-Man HP: ${spidyHP}`);

    if(villain.baddie = "Thug") {
        console.log(`Spider-Man webs ${villain.baddie}`)
        // break;
    }

    let spidyHit = Math.floor(Math.random() * 3);
    console.log(`Spider-Man hits ${villain.baddie} for ${spidyHit} damage!!`);
    villain.hp -= spidyHit;
    console.log(`Villain HP: ${villain.hp}`);

    if(spidyHP === 0) {
        break; // breaks us out of the loop based on if the condition is met.
    }

} while (villain.hp > 0)

villain.hp <= 0 ? console.log(`Spider-Man captures ${villain.baddie}`) : console.log(`${villain.baddie} has taken down Spider-Man.`);