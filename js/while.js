(function(){

    "use strict";

    //Problem #2

    var x = 2;
    while (x < 70000) {
        console.log(x);
        x *= 2;
    }

    //Problem #3

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

