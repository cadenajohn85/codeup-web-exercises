(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsStringWithBreaks = planetsArray.join("<br>");
    console.log(planetsStringWithBreaks);

    //Add necessary tags in between list items

    var planetsUnorderedList = planetsArray.join("</li><li>");
    console.log(planetsUnorderedList);

    //Add necessary tags at beginning of list and 1st list item
    planetsUnorderedList = "<ul><li>" + planetsUnorderedList;
    console.log(planetsUnorderedList);

    //Add necessary tags at end of list and list items
    planetsUnorderedList += "</li></ul>";
    console.log(planetsUnorderedList);

})();
