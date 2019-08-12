(function() {
    "use strict";

    //Problem #2

    function showMultiplicationTable(someNumber) {
        for (var i = 1; i <=10; i++) {
            console.log(someNumber + " * " + i + " = " + (someNumber * i));
        }
    }

    //Problem #3

    //for loop runs ten times
    //each time, a new random # 20 - 200 is generated
    //each time, determine if random is even or odd

    // for (var j = 0; j <10; j++) {
    //     //Generating random numbers where minimum is not 1:
    //     // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    //     var randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    //     if (randomNumber % 2 === 0) {
    //         console.log(randomNumber + " is even.");
    //     } else {
    //         console.log(randomNumber + " is odd.");
    //     }
    // }


    //Problem #4

    // for (var k = 1; k < 10; k++) {
    //     console.log(k.toString().repeat(k));
    // }


            // for (var j = 1; j <10; j++) {
            //     // convert j to a string
            //     var counterString = j.toString() + "string";
            //     // create a string variable that strings together chars counter-# of times
            //     for (var counter = 1; )
            //     //console.log the string
            //     console.log(j);
            //     console.log(counterString);
            // }

            // for (var j = 1; j <10; j++) {
            //     console.log(j);
            //     var jAsString = j.toString();
            //     var counterString;
            //     var counter = 0;
            //     //var k = j;
            //     while (counter < j) {
            //         counterString = jAsString + jAsString;
            //     }
            //     console.log(counterString);
            // }

            // function makeCounterString (someNumber) {
            //     var jAsString = someNumber.toString();
            //     for (someNumber)
            //     var counterString =
            // }

    //Problem #5

    // for (var m = 100; m > 0; m -= 5 ) {
    //     console.log(m);
    // }



})();