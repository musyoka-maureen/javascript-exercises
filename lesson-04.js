"use strict";

// Lesson 04 exercise: Operators and conditionals
// In your exercise repository, create a branch named `lesson-04-exercise` and switch to it,
// then open `lesson-04.js`, where the questions wait as comments. The file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// The file lists ten expressions that mix coercion, strict comparison, and logical
// combination, among them `3 === "3"`, `1 + true`, and `!(5 > 2)`. Write your predicted result
// as a comment beside each expression before running the file, then run it and correct any
// misses, leaving both the prediction and the actual result visible.

// * The provided expressions, write your prediction beside each before running:
console.log(3 === "3"); // prediction:false, result:false
console.log(3 == "3"); // prediction:true, result:true
console.log("5" - 1); // prediction:4, result:4
console.log("5" + 1); // prediction:51, result:51
console.log(1 + true); // prediction:2, result:2
console.log(10 >= 10); // prediction:true, result:true
console.log(!(5 > 2)); // prediction:false, result:false
console.log(4 !== "4"); // prediction:true, result:true
console.log("b" > "a"); // prediction:false, result:true
console.log(0 === -0); // prediction:true, result:true

// TODO: Part two.
// Write one `if` statement with an `else` branch on a variable of your choosing. Run the file
// twice with different values so that each branch has printed at least once, and record each
// run's output in a comment.
const stylist = "Sarah";

if (stylist === "Sarah") {
  console.log("Book stylist"); //output: Book stylist. //(base) morine@Mac JS-Exercises % node lesson-04.js //Book stylist
} else {
  console.log("Select another stylist");
}

if (stylist === "Miriam") {
  console.log("Book stylist");
} else {
  console.log("Select another stylist"); //output: Select another stylist. //(base) morine@Mac JS-Exercises % node lesson-04.js //Select another stylist
}

// TODO: Part three.
// Build an `else if` chain for order pricing: more than 12 items produces one message, more
// than 6 another, and everything else a third. Run it with values that reach every branch, and
// add a comment explaining why the most specific question must be asked first.
const orderQuantity = 10;
if (orderQuantity > 12) {
  console.log("You qualify for a bulk order free delivery"); //Starting with the most specific question or highest value first ensures that the correct branch is executed, starting with 6 would swallow other conditions and not allow the higher value to be checked.
} else if (orderQuantity > 6) {
  console.log("You qualify for a 10% delivery fee discount"); //second branch executed because orderQuantity is 10, which is greater than 6 but not greater than 12.
} else {
  console.log("No discount available"); //Anything 6 or below will reach this branch, which is the least specific condition.
}
//first run with 10: second branch executed because orderQuantity is 10, which is greater than 6 but not greater than 12.
//second run with 15: first branch executed because orderQuantity is 15, which is greater than 12.
//third run with 5: third branch executed because orderQuantity is 5, which is not greater than 6 or 12.

// TODO: Part four.
// For each of the eight provided values, which include `0`, `"0"`, an empty string, and a
// single space, predict in a comment whether it is truthy or falsy. Verify each prediction
// with `Boolean()` and correct your misses.

// * The eight provided values:
const courtValues = [false, 0, "0", "", " ", "bread", null, undefined];
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(" "));
console.log(Boolean("bread"));
console.log(Boolean(null));
console.log(Boolean(undefined));
//false: falsy, 0: falsy, "0": truthy, "": falsy, " ": truthy, "bread": truthy, null: falsy, undefined: falsy

// TODO: Part five.
// Rewrite the provided day-based `if` chain as a `switch` statement with a `default` case and
// a `break` in every case, and confirm that it prints the same answers for three test days.

// * The provided day-based if chain, rewrite it as a switch beneath it:
//const day = "Sunday";
//if (day === "Saturday") {
//console.log("Open 7:00 to 14:00");
//} else if (day === "Sunday") {
//  console.log("Open 8:00 to 12:00");
//} else if (day === "Monday") {
//console.log("Closed today");
//} else {
//console.log("Open 7:00 to 18:00");
//}
const day = "Tuesday";
switch (day) {
  case "Saturday":
    console.log("Open 7:00 to 14:00"); //third run with day = "Saturday" executes this branch because day is "Saturday"
    break;
  case "Sunday":
    console.log("Open 8:00 to 12:00"); //first run with day = "Sunday" executes this branch because day is "Sunday"
    break;
  case "Monday":
    console.log("Closed today"); //second run with day = "Monday" executes this branch because day is "Monday"
    break;
  default:
    console.log("Open 7:00 to 18:00"); //fourth run with day = "Tuesday" executes this branch because day is "Tuesday", which does not match any of the previous cases
    break;
}

// TODO: Part six.
// The file ends with a short broken program that contains an assignment where a comparison was
// intended, and a `switch` with a missing `break`. Run it, observe both incorrect behaviors,
// repair both, and describe each repair in one comment line.

// * The provided broken program, run it, observe both incorrect behaviors, then repair both:
let shopStatus = "open";
if (shopStatus === "closed") {
  console.log("Welcome in");
} else {
  console.log("Sorry, come back later");
}
//repair: changed assignment operator (=) to comparison operator (===) in the if condition to correctly check if shopStatus is "open" instead of assigning it
//added else block to handle the case when shopStatus is not "open" and print "Sorry, come back later"

const size = "M";
switch (size) {
  case "S":
    console.log("Small");
    break;
  case "M":
    console.log("Medium"); //introducing break ensures only this branch runs
    break;
  case "L":
    console.log("Large"); //missing break silently ran this case as well,hence printing 2 sizes.
    break;
  default:
    console.log("Unknown size");
    break;
}

// TODO: Part seven.
// Two classic exercises close the lesson. First, the leap year checker: a year is a leap year
// when it is divisible by 4 and not by 100, unless it is also divisible by 400. Implement the
// rule with the remainder operator and logical operators, and test it against 2024, 1900, and
// 2000. Second, FizzBuzz for a single number: for one number variable, print Fizz when it is
// divisible by 3, Buzz when it is divisible by 5, FizzBuzz when it is divisible by both, and
// the number itself otherwise. The loops lesson scales this to one hundred.

//leap year
const year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}
//2024 leap year, 1900 not a leap year, and 2000 leap year
//Fizzbuzz
const fizzBuzzNumber = 7;
if (fizzBuzzNumber % 3 === 0 && fizzBuzzNumber % 5 === 0) {
  console.log("FizzBuzz");
} else if (fizzBuzzNumber % 3 === 0) {
  console.log("Fizz");
} else if (fizzBuzzNumber % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(fizzBuzzNumber);
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
