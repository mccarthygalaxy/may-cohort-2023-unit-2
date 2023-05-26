//! Conditionals
/* 
    Falsey    
        - false
        - 0
        - empty strings ( "", '' )
        - null
        - undefined
        - NaN (not a number)

    Conditionals evaluates an expression and responds if it is true.    
*/

let isOn = true;

if (isOn == true) {
    console.log('The light is on!');
}

/* Structure
    if(expression condition evaluated) {
        code that runs if expression is true
    }
*/

if(isOn) {
    console.log("There is light!");
}

isOn = false;
if(isOn == false) {
    console.log("The light is off...");
}

//! Else - If Else Statement
let weather = 75;

if(weather < 70) {
    console.log('Wear a jacket.');    
} else {
    console.log('No jacket needed!');
}

let rain = true;
if(weather < 70 && rain) {
    console.log('Wear a jacket and boots.');
} else {
    console.log('No boots needed.');
}

rain = false;
if(weather < 70 || rain) {
    console.log('Get your rain jacket.');
} else {
    console.log('Going to be nice.');
}
