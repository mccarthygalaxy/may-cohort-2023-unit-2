/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

function tipCalc(subtotal,percentage) {
    percentTip = percentage / 100;
    // let tip =  percentTip * subtotal; //non rounding version
    let tip = Math.round((percentTip * subtotal) * 100) / 100; // rounded
    let totalAmt = subtotal + tip;
    totalAmt = Math.round((totalAmt * 1) * 100) / 100; // rounded total
    
// Tipper Evaluation
    if(percentage >= 20) {
        tipper = "Excellent";
    } else if (percentage >= 18) {
        tipper = "Good";
    } else if (percentage >= 15 && percentage <= 17) {
        tipper = "Average";
    } else {
        tipper = "Poor";
    }
    
    console.log(`If your check total is \$${subtotal}, with a ${percentage}% tip, you should tip the amount of \$${tip}.`);
    console.log(`For a total payment of ${totalAmt}.`);
    console.log(`${tipper} Tipper Alert!`);
}

tipCalc(77.79,18);
console.log("\n" + "<-------------------------------------->" + "\n")
tipCalc(245.17,5);
console.log("\n" + "<-------------------------------------->" + "\n")
tipCalc(10.66,22);
console.log("\n" + "<-------------------------------------->" + "\n")
tipCalc(40.00,15);


//! Abandoned Ternary version, due to over-complexity

    // percentage >= 20 ? tipper = "Excellent" : 
    //     (18 < percentage) ? tipper = "Good" : 
    //     (15 <= percentage && percentage<= 17) ? tipper = "Average" : tipper = "Poor";