(function(){

    "use strict";

    // var x = 2;
    // while (x < 70000) {
    //     console.log(x);
    //     x *= 2;
    // }

        // Generate total # of cones (50 - 100)
    // Generate # of cones sold this round (2 - 6)
    // Console log cones sold with do while
    // Decide if there are enough cones to sell
    // Subtract sold from total cones
    // Decide if there are still cones available

    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("You need to sell " + allCones + " cones today.");
    do {
        var conesThisRound = Math.floor(Math.random() * 5) + 1;
        if (conesThisRound > allCones) {
            console.log ("Cannot sell you " + conesThisRound + " I only have " +
            allCones + " cones left.");
            continue;
        }
        console.log(conesThisRound + " cones sold...")
        allCones = allCones - conesThisRound;
        //console.log("\tYou still need to sell " + allCones + " more cones.");
    } while (allCones > 0);
     console.log("Yay! I sold them all.");

})();

