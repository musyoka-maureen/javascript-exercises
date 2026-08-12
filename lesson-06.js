"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.
const dessertOptions = [
  "Tiramisu",
  "Baklava",
  "MochiIceCream",
  "Churros",
  "crèmeBrûlée",
  "truffles",
  "fudge",
  "chocolates",
  "brownies",
];
console.log(dessertOptions);
console.log(dessertOptions[0]);
console.log(dessertOptions[dessertOptions.length - 1]);
console.log(dessertOptions.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.
dessertOptions.push("cheesecake"); //Added cheesecake at the end of the array, item 10
console.log(dessertOptions);
dessertOptions.pop(); //removed cheesecake from the array bringing the list back to 9 items
console.log(dessertOptions);
dessertOptions.unshift("applePie"); //Added applePie as the first item of the list,index 0
console.log(dessertOptions);
dessertOptions.shift(); //removed applePie from the top of the list making Tiramisu index 0 again
console.log(dessertOptions);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

for (let i = 0; i < dessertOptions.length; i++) {
  //when you need the index itself
  console.log(dessertOptions[i]);
}

for (const dessertOption of dessertOptions) {
  //When you want every item on the list
  console.log(dessertOption);
}

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8, 5.5, 6.8, 15, 12, 10];

const withTax = prices.map(
  (price) => `Costs ${(price * 1.07).toFixed(2)} euros plus tax`,
);
console.log(withTax);

const affordable = prices.filter((price) => price < 5);
console.log(affordable);

console.log((prices.find((price) => price > 10) * 1.07).toFixed(2));
// forEach would return undefined because it is for side effects like printing, not creating a new array.

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];
artists.push("Bien");
for (const artist of artists) {
  console.log(`=== ${artist} ===`);
  console.log(`Listen to ${artist} now on every platform`);
}

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.
const newDessertOptions = dessertOptions;
newDessertOptions.push("PistachioIceCream");
console.log(newDessertOptions);
console.log(dessertOptions);

const spreaddessertOptions = [...dessertOptions];
spreaddessertOptions.push("DriedFruits");
console.log(spreaddessertOptions.length);
console.log(dessertOptions.length);

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.
for (let fizzBuzzNumber = 1; fizzBuzzNumber <= 100; fizzBuzzNumber++) {
  if (fizzBuzzNumber % 3 === 0 && fizzBuzzNumber % 5 === 0) {
    console.log("FizzBuzz");
  } else if (fizzBuzzNumber % 3 === 0) {
    console.log("Fizz");
  } else if (fizzBuzzNumber % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(fizzBuzzNumber);
  }
}

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];
let sum = 0;
for (const number of numbers) {
  sum = sum + number;
}
console.log(sum);
let largest = [0];
for (const number of numbers) {
  if (number > largest) {
    largest = number;
  }
}
console.log(largest);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.
function reverseString(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i];
  }
  return reversed;
}
function countVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
function isPalindrome(word) {
  const palindrome = word.toLowerCase();
  return palindrome === reverseString(palindrome);
}
console.log(reverseString("hello world"));
console.log(countVowels("hello world"));
console.log(isPalindrome("mom"));
console.log(isPalindrome("hello world"));
console.log(isPalindrome("level"));

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
