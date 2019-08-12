(function(){
    "use strict";

    //Problem #2

    var userNumber = -1;

    while (userNumber !== 0) {
        userNumber = parseFloat(prompt("Please enter an odd number between 1 and 50."));
        if (userNumber >= 1 && userNumber <=50 && userNumber % 2 === 1) {
            break;
        }
    }

    //Problem #3

    for (var i = 1; i < 50; i += 2) {
        if (i === userNumber) {
            console.log ("Yikes! Skipping number: " + userNumber);
            continue;
        }
        console.log("Here is an odd number: " + i);
    }

})();