(function(){
"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

    var userConfirms = confirm("Would you like to enter a number?");

    if (!userConfirms) {
    } else {
        var userNumber = +(prompt("Please enter a number."));
        if (isNaN(userNumber)) {
            alert("Warning! You did not enter a valid number.");
        } else {
            if (Math.abs(userNumber) % 2 === 1) {
                alert("Your number is odd.");
            } else {
                alert("Your number is even.");
            }
            alert("If you add 100 to your number, you'll get " + (userNumber + 100));
            if (Math.sign(userNumber) === 1) {
                alert("Your number is positive.");
            } else if (Math.sign(userNumber) === -1) {
                alert("Your number is negative.");
            } else if (userNumber === 0 || userNumber === -0) {
                alert("Your number is 0, so it is neither positive nor negative.");
            } else {
                alert("Your number is something very sneaky indeed. You've broken my logic.");
            }
        }
    }

    if (userConfirms) {
        var userNumber2 = getUserNumber();
        var isValid = checkIfValid(userNumber2);
        if (isValid) {
            checkIfOdd(userNumber2);
            add100(userNumber2);
            checkSign(userNumber2);
        }
    }

    function getUserNumber() {
        return +prompt("Please enter another number.");
    }

    function checkIfValid(userNumber2) {
        if (isNaN(userNumber2)) {
            alert("Warning! You did not enter a valid number.");
            return false;
        } else {
            return true;
        }
    }

    function checkIfOdd(userNumber2) {
        if (Math.abs(userNumber2) % 2 === 1) {
            alert("Your number is odd.");
        } else {
            alert("Your number is even.");
        }
    }

    function add100(userNumber2) {
        alert("If you add 100 to your number, you'll get " + (userNumber2 + 100) + ".");
    }

    function checkSign(userNumber2) {
        if (Math.sign(userNumber2) === 1) {
            alert("Your number is positive.");
        } else if (Math.sign(userNumber2) === -1) {
            alert("Your number is negative.");
        } else if (userNumber2 === 0 || userNumber2 === -0) {
            alert("Your number is 0, so it is neither positive nor negative.");
        } else {
            alert("Your number is something very sneaky indeed. You've broken my logic.");
        }
    }

    /* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(someColor) {
    if (someColor.toLowerCase() === "red") {
        return "Red is the color of strawberries.";
    } else if (someColor.toLowerCase() === "orange") {
        return "Orange is the color of mandarins.";
    } else if (someColor.toLowerCase() === "yellow") {
        return "Yellow is the color of bananas.";
    } else if (someColor.toLowerCase() === "green") {
        return "Green is the color of avocados.";
    } else if (someColor.toLowerCase() === "blue") {
        return "Blue is the color of elderberries.";
    } else if (someColor.toLowerCase() === "indigo") {
        return "Indigo is the color of plums.";
    } else if (someColor.toLowerCase() === "violet") {
        return "Violet is the color of eggplants.";
    } else {
        return ("I don't know anything about " + someColor + ".");
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

analyzeColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor2(someColor) {
    switch(someColor.toLowerCase()) {
        case "red":
            return "Red is the color of strawberries.";
        case "orange":
            return "Orange is the color of mandarins.";
        case "yellow":
            return "Yellow is the color of bananas.";
        case "green":
            return "Green is the color of avocados.";
        case "blue":
            return "Blue is the color of elderberries.";
        case "indigo":
            return "Indigo is the color of plums.";
        case "violet":
            return "Violet is the color of eggplants.";
        default:
            return ("I don't know anything about " + someColor + ".");
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("Please enter a color: ");
var colorAlert = analyzeColor2(userColor);
alert(colorAlert);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, originalTotal) {
    switch(luckyNumber) {
        case 0:
            return originalTotal;
        case 1:
            return originalTotal - originalTotal * .1;
        case 2:
            return originalTotal - originalTotal * .25;
        case 3:
            return originalTotal - originalTotal * .35;
        case 4:
            return originalTotal - originalTotal * .5;
        case 5:
            return 0;
    }
}

    /**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 5

var luckyNumber = Math.floor(Math.random() * 6);

var userOriginalTotal = +prompt("Please enter your original total:");

var discountedPrice = calculateTotal(luckyNumber, userOriginalTotal);

alert("Your lucky number was: " + luckyNumber + ".");
alert("Your original total was $" + userOriginalTotal.toFixed(2) + ".");
alert("Thanks to your lucky number,\n" +
    "you now pay a discounted price of only $" + discountedPrice.toFixed(2) + "!");

})();