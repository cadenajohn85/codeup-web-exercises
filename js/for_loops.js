(function() {
    "use strict";

    //Problem #2

    function showMultiplicationTable(someNumber) {
        for (var i = 1; i <=10; i++) {
            console.log(someNumber + " * " + i + " = " + (someNumber * i));
        }
    }

    showMultiplicationTable(7);

    //Problem #3

    for (var j = 0; j <10; j++) {
        //Generating random numbers where minimum is not 1:
        // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        var randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is even.");
        } else {
            console.log(randomNumber + " is odd.");
        }
    }


    //Problem #4

        // Solution from classmate

        // for (var k = 1; k < 10; k++) {
        //     console.log(k.toString().repeat(k));
        // }


        // Solution from friend

        var stringCounter = " ";
        for(var i = 1; i <10; ++i) {
            for (var j = 1; j <= i; ++j) {
                stringCounter = stringCounter + i.toString();
            }
            console.log(stringCounter.trim());
            stringCounter = ' ';
        }

    //Problem #5

    for (var m = 100; m > 0; m -= 5 ) {
        console.log(m);
    }

})();