(function() {
    "use strict";

    function showMultiplicationTable(someNumber) {
        for (var i = 1; i <=10; i++) {
            console.log(someNumber + " * " + i + " = " + (someNumber * i));
        }
    }

    //for loop runs ten times
    //each time, a new random # 20 - 200 is generated
    //each time, determine if random is even or odd

    for (var i = 0; i <10; i++) {
        //Generating random numbers where minimum is not 1:
        // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        var randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
        //console.log(i + " || " + randomNumber);
        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is even.");
        } else {
            console.log(randomNumber + " is odd.");
        }
    }

})();