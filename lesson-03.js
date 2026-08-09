"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.
const shopName = "Couture & Coffee";
let openingHour = 7;
let closingHour = 19;
console.log(
  `Welcome to ${shopName}! We are open from ${openingHour} AM to ${closingHour} PM.`,
);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.
// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";
console.log(messy.trim().toLowerCase()); // trim() removes whitespace from both ends of the string, toLowerCase() converts all characters to lowercase
console.log(
  messy.replace("Maison   Sarah", "The Corner Bakery").trim().toLowerCase(),
); // replace() replaces the specified substring with a new substring, trim() removes whitespace from both ends of the string, toLowerCase() converts all characters to lowercase

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";
console.log(product.length); // logs the length of the product string
console.log(product.indexOf("whole")); // logs the position at which the word "whole" begins in the product string
console.log(product.slice(16, 21)); // logs a slice of the product string containing the word "whole"
console.log(flavorList.split(",")); // logs the resulting pieces of the comma-separated list

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;
const finalPrice = netPrice + netPrice * taxRate; // calculates the final price by adding the net price and the tax amount
console.log(`The final price is ${finalPrice.toFixed(2)}`); //toFixed() formats the number to two decimal places, and it must come last because it converts the number to a string

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.
const randomNum = Math.floor(Math.random() * 6) + 1;
console.log(randomNum);
const adaptedNum = Math.floor(Math.random() * 11) + 10;
console.log(adaptedNum);

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.
const shapes = "------------------------------";
console.log(shapes.repeat(3)); // repeat() creates a new string by repeating the original string a specified number of times, in this case, 3 times

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.
let firstName = "Maureen";
let lastName = "Musyoka";
let username = firstName[0].toLowerCase() + lastName.toLowerCase();
console.log(username);

let adjective = "funny";
let noun = "man";
let verb = "danced";
let place = "park";
console.log(
  `Long time a go, there was a ${adjective} ${noun} who ${verb} in the ${place} every day.`,
);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
