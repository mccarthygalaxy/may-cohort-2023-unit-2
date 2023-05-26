/*
Use this string: let name = 'sAmwISe';

Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    
    Gold:
    If the first letter of a string is uppercase, console.log that first letter of a string plus the rest of the string to lowercase.
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase.
*/


    console.log('\nFirst Run:');

    let theName = "sAmwISe";
    console.log(`"${theName}"`); // String Interpolation to get ""
    
    let firstChar = theName.charAt(0);
    let remainChar = theName.substring(1);
    
    //  Bronze
    console.log('\nBRONZE:');
    if (firstChar == firstChar.toUpperCase()) {
        console.log(firstChar);
    } else {
        console.log('Hey, this isn\'t written correctly.');
    }
    
    //  Silver
    console.log('\nSILVER:');
    if (firstChar == firstChar.toUpperCase()) {
        console.log(firstChar);
    } else {
        console.log(remainChar.toLowerCase());
    }
    
    // Gold
    console.log('\nGOLD:');
    if (firstChar == firstChar.toUpperCase()) {
        console.log(firstChar + remainChar.toLowerCase() + ' (was upper)');
    } else {
        console.log(firstChar.toUpperCase() + remainChar.toLowerCase() + ' (was lower)');
    }
    
console.log('\n<><><><><><><><><><><><><><><><><><><><><>'); // Dividing Line
    
    console.log('\nSecond Run:');
    
    let theName2 = "OrCRisT";
    console.log(`"${theName2}"`); // String Interpolation to get ""
    
    let firstChar2 = theName2.charAt(0);
    let remainChar2 = theName2.substring(1);
    
    //  Bronze
    console.log('\nBRONZE:');
    if (firstChar2 == firstChar2.toUpperCase()) {
        console.log(firstChar2);
    } else {
        console.log('Hey, this isn\'t written correctly.');
    }
    
    //  Silver
    console.log('\nSILVER:');
    if (firstChar2 == firstChar2.toUpperCase()) {
        console.log(firstChar2);
    } else {
        console.log(remainChar2.toLowerCase());
    }
    
    // Gold
    console.log('\nGOLD:');
    if (firstChar2 == firstChar2.toUpperCase()) {
        console.log(firstChar2 + remainChar2.toLowerCase() + ' (was upper)');
    } else {
        console.log(firstChar2.toUpperCase() + remainChar2.toLowerCase() + ' ( was lower)');
    }