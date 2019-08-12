(function(){
    "use strict";

    //Problem #2

    //prompt use for number
    //check if valid range
    //check if odd

       // var userNumber = prompt("Please enter an odd number between 1 and 50.");
       //  console.log(userNumber);
       //  while (userNumber < 1 || userNumber > 50) {
       //      //  || userNumber % 2 !== -1
       //      if (parseFloat(userNumber) % 2 === -1 ) {
       //          break;
       //      }
       //      userNumber = prompt("I'm sorry, that was not a valid input.\n" +
       //          "Please enter an odd number between 1 and 50.");
       //  }

    var userNumber = -1;

    while (userNumber !== 0) {
        userNumber = parseFloat(prompt("Please enter an odd number between 1 and 50."));
        if (userNumber >= 1 && userNumber <=50 && userNumber % 2 === 1) {
            break;
        }
    }

    for (var i = 1; i < 50; i += 2) {
        //console.log("i = " + i + ", userNumber = " + userNumber);
        if (i === userNumber) {
            console.log ("Yikes! Skipping number: " + userNumber);
            continue;
        }
        console.log("Here is an odd number: " + i);
    }




})();