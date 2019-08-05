"use strict";

//Task 1-6
console.log("Hello from external JavaScript");

//Task 2-1
alert("Welcome to my Website!");

//Task 2-2
var userFavoriteColor = prompt("What's your favorite color?");
alert("Great, " + userFavoriteColor + " is my favorite color too!");


//Task 2-3-1

var littleMerMaidDaysRented = prompt("How many days did you rent 'The Little Mermaid'?");
var brotherBearDaysRented = prompt("How many days did you rent 'Brother'?");
var herculesDaysRented = prompt("How many days did you rent 'Hercules'?");
var dailyRentalFee = prompt("How much is the daily rental fee?");

var totalRentalCost = (Number(littleMerMaidDaysRented) + Number(brotherBearDaysRented) +
    Number(herculesDaysRented)) * Number(dailyRentalFee);

alert("Your total rental fee comes to: $" + totalRentalCost);

//Task 2-3-2

var googleHourlyRate = prompt("How much do you get paid by Google per hour?");
var googleHoursWorked = prompt("How many hours did you work for Google this week?");

var amazonHourlyRate = prompt("How much do you get paid by Amazon per hour?");
var amazonHoursWorked = prompt("How many hours did you work for Amazon this week?");

var facebookHourlyRate = prompt("How much do you get paid by Facebook per hour?");
var facebookHoursWorked = prompt("How many hours did you work for Facebook this week?");

var totalWeeklyPay = (Number(googleHourlyRate) * Number(googleHoursWorked)) +
    (Number(amazonHourlyRate) * Number(amazonHoursWorked)) +
    (Number(facebookHourlyRate) * Number(facebookHoursWorked));

alert("Your total pay this week comes to: $" + totalWeeklyPay);

//Task 2-3-3

var classHasSpace = confirm("Is there space in the new class?\n" +
    "(Click 'OK' for yes, or 'Cancel' for no)");
var ClassConflict = confirm("Are there any conflicts with the student's current schedule?\n" +
    "(Click 'OK' for yes, or 'Cancel' for no)");

var canEnroll = classHasSpace && !ClassConflict;

alert("Evaluating if the students is able to enroll in the new class:\n\n" +
canEnroll);

//Task 2-3-4

var offerStillValid = confirm("Is the offer still valid?\n" +
    "(Click 'Ok' for yes, or 'Cancel' for no)");
var isPremiumMember = confirm("Is the user a premium member?\n" +
    "(Click 'Ok' for yes, or 'Cancel' for no)");
var numberOfItemsPurchased = prompt("How many items is the user purchasing?");

var applyOffer = offerStillValid && (isPremiumMember || Number(numberOfItemsPurchased) > 2);
alert("Evaluating if promotional offer will be applied:\n\n" +
    applyOffer);