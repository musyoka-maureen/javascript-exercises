"use strict";
const brandName = "Berlin Luxe & Glam"; // not intended to change
const tagLine = "Make them stare!"; //It's attached to the brand, not intended to change
let openingHours = "8:00 Uhr - 18:00 Uhr"; //Working hours can be amended from time to time
let weekendHours = "10:00 Uhr - 15:00 Uhr"; //Working hours can be amended from time to time
let services = "stylist, Makeup, Accessories"; //Services offered could change from time to time
let customerName = "Sarah"; //Customer name can change from time to time
let requestedStylist = null; //Intentionally left as null- Requested stylist can be null if the customer has no preference on in the event of a walk in client
let appointmentNotes; //The filed exists but has not been assigned a value yet, it should be assigned a value.

console.log(brandName);
console.log(tagLine);
console.log(openingHours);
console.log(weekendHours);
console.log(services);
console.log(customerName);
console.log(requestedStylist);
console.log(appointmentNotes);
console.log(typeof brandName);
console.log(typeof tagLine);
console.log(typeof openingHours);
console.log(typeof weekendHours);
console.log(typeof services);
console.log(typeof requestedStylist); // This is a famous historical bug of the language, as it returns "object" instead of "null"
console.log(typeof appointmentNotes);

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";
const myNumber = 426; // Example number to convert to string
const myAddress = "123 Main St"; // Example string to convert to number (will produce NaN since the address has both numbers and letters)
console.log(Number(priceText), typeof Number(priceText)); // Converted string to number
console.log(Number(countText), typeof Number(countText)); // Converted string to number
console.log(Boolean(flagText), typeof Boolean(flagText)); // Converted string to boolean
console.log(String(myNumber), typeof String(myNumber)); // Converted number to string
console.log(Number(myAddress), typeof Number(myAddress)); // This will produce NaN

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
let bakeryName = "Maison Sarah";
bakeryName = "The Corner Bakery"; //error: Assignment to constant variable. Update to the bakery name not possible with `const`. To Repair: either Changed `const` to `let` to allow reassignment or keep it as `const` and remove the reassignment line. I chose to change `const` to `let` to allow reassignment.
console.log(bakeryName); //To print the bakery name to the console after reassignment
let openingHour = 7; //error: openingHour is not defined. To Repair: Declare the variable with `let` or `const` before using it. I chose to declare it with `let`.
console.log(openingHour); //To print the opening hour to the console after declaration
let loafCount = 12; //error: loafCount is not defined. To Repair: Declare the variable with `let` or `const` before using it. I chose to declare it with `let` and assign a value of 12.
console.log(loafCount); //To print the loaf count to the console after declaration and assignment

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.
let a = 5;
let b = 10;
let temp = a; // Store the value of a in a temporary variable
a = b; // Assign the value of b to a
b = temp; // Assign the value of temp (original a) to b
console.log("After swapping: a =", a, ", b =", b); // Log the swapped values

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
