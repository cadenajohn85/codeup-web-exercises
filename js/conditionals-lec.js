(function(){
    "use strict";

    // var weatherToday = prompt("What's the weather today?");
    //
    // if (weatherToday === "rainy") {
    //     alert("Alert: It's raining today.")
    // }

    // var playerLives = 0;
    //
    // if (playerLives === 0) {
    //     alert("You have no more lives.")
    // }

    // var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
    //
    // console.log("the value of the confirm is:" + weShouldDeleteStuff)
    //
    // if (weShouldDeleteStuff) {
    //     // delete all the things...
    //     alert("We are deleting everything...");
    // } else {
    //     alert("Operation Canceled!");
    // }

    // var haveNutella = confirm("Do you have Nutella?");
    //
    // if (haveNutella) {
    //     alert("You're got plenty of Nutella. Making crepes now.");
    // } else {
    //     alert("You're out of Nutella. Adding Nutella to the shopping list.");
    // }

    // var pizzaPreference = prompt("What kind of pizza do you like?");
    //
    // if (pizzaPreference === "pineapple and hot sauce") {
    //     alert("What a coincidence, that's my favorite!");
    // } else if (pizzaPreference === "cheese") {
    //     alert("Just plain cheese? Okay...");
    // } else if (pizzaPreference === "pepperoni") {
    //     alert("Pepperoni is DELICIOUS");
    // } else {
    //     alert(pizzaPreference + " isn't my favorite, but let's order some!");
    // }

    // function getTrafficColor() {
    //     var trafficColor = prompt("What color is the traffic light?");
    //     if (trafficColor === "red") {
    //         alert("STOP!!!");
    //     } else if (trafficColor === "yellow") {
    //         alert("Slow down, please!");
    //     } else {
    //         alert("Go go go!");
    //     }
    // }
    //
    // getTrafficColor();

        // function evaluateIntersection(trafficColor) {
        //     if (trafficColor === "red") {
        //         return "STOP!!!";
        //     } else if (trafficColor === "yellow") {
        //         return "Slow down, please!";
        //     } else if (trafficColor === "green") {
        //         return "Go go go!";
        //     } else {
        //         return "Unusual situation: proceed with caution";
        //     }
        // }
        //
        // console.log(evaluateIntersection("blinking"), "should be red message");



//     var message;
//     var success = false;
//
//     // if (success) {
//     //     message = "Operation was successful.";
//     // } else {
//     //     message = "Oops, something went wrong.";
//     // }
//
//
//
// // the above if/else can be re-written as:
//     var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
//     console.log(message);

    // var weather = "partly cloudy";
    //
    // var weatherMessage = (weather === "rainy") ? "It's raining from ternary." : "Have a nice day from ternary.";
    // console.log(weatherMessage);

    // switch(weather) {
    //     case "rainy":
    //         alert("Umbrella");
    //         break;
    //     case "sunny":
    //         alert("Hot");
    //         break;
    //     default:
    //         alert("Great day!")
    //         break;
    // }

    // var pizzaPreference = prompt("What kind of pizza do you like?");
    //
    // switch(pizzaPreference) {
    //     case "pineapple and hot sauce":
    //         alert("What a coincidence, that's my favorite!");
    //         break;
    //     case "cheese":
    //         alert("Just plain cheese? Okay...");
    //         break;
    //     default:
    //         alert(pizzaPreference + " isn't my favorite, but let's order some!");
    //         break;
    // }

    // function evaluateIntersection(trafficColor) {
    //     switch(trafficColor) {
    //         case "red":
    //             return "STOP!!!";
    //             break; //break unreachable because we have a return above -- it's unnecessary.
    //         case "yellow":
    //             return "Slow down, please";
    //             break;
    //         case "green":
    //             return "Go, go, go!"
    //             break;
    //         default:
    //             return "Hmmm, something is strange here. Proceed with caution."
    //             break;
    //         }
    //     }
    // console.log(evaluateIntersection("green"), "green case");

    //Alternate format: declare a variable within the function,
    //Each case -- set the variable to the value you want.
    //Break out of each case.
    //OUTSIDE of case statement, return the variable.

    // var isShoppingDone;
    // var allowanceThisWeek = 5;
    //
    // if (isShoppingDone) {
    //     allowanceThisWeek += 5;
    // }
    //
    //
    //
    // //
    //
    // var userWeather;
    //
    // switch(userWeather) {
    //     case "sunny":
    //         return "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    //     case "rainy":
    //         return "Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long."
    //     case "snowing":
    //         return "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    //     case "overcast":
    //         return "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    //     default:
    //         return "";
    // }

    //

    //(userTheme === "black") ? background --> black, font --> white : background --> white, font --> black;

    //write a function that takes in a string
    //is string "bob"? return true
    //otherwise, return "longer than bob", "same as bob", or "shorter than bob"

    // function checkBob(str) {
    //     if (str === "bob") {
    //         return true;
    //     } else {
    //         if (str.length === "bob".length) {
    //             return "same as bob";
    //         } else if (str.length > "bob".length) {
    //             return "longer than bob";
    //         } else {
    //             return "shorter than bob";
    //         }
    //     }
    // }

    function checkBob(str) {
        if (str === "bob") {
            return true;
        } else {
            return checkNotBobLength(str);
        }
    }


    function checkNotBobLength(str) {
        if (str.length === "bob".length) {
            return "same as bob";
        } else if (str.length > "bob".length) {
            return "longer than bob";
        } else {
            return "shorter than bob";
        }
    }

    console.log(checkBob("bob"), "bob");
    console.log(checkBob("Dan"), "Dan");
    console.log(checkBob("Sally"), "Sally");
    console.log(checkBob("Ty"), "Ty");


})();