"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.
const brownie = {
  name: "chocolate brownie",
  price: 2.5,
  glutenFree: true,
  texture: "fudgy",
  describe: function () {
    return `${this.name} costs ${this.price} Euros, its's ${this.texture}`;
  },
};
const field = ["texture"];
console.log(brownie.name);
console.log(brownie[field]);
console.log(brownie.describe());
//bracket notation reads and writes through a string, which is required exactly when the key lives in a variable or contains characters a name cannot.
// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.
const menuItems = [
  { name: "Tiramisu", price: 5.5, glutenFree: false, vegetarian: true },
  { name: "Baklava", price: 4.5, glutenFree: false, vegetarian: true },
  { name: "Mochi Ice Cream", price: 6, glutenFree: true, vegetarian: true },
  { name: "Churros", price: 2.5, glutenFree: false, vegetarian: true },
  { name: "Crème Brûlée", price: 6.5, glutenFree: true, vegetarian: true },
];
for (const menuItem of menuItems) {
  console.log(
    `${menuItem.name} - €${menuItem.price} - Gluten-free: ${menuItem.glutenFree} - Vegetarian: ${menuItem.vegetarian}`,
  );
}
// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.
const vegetarianNames = menuItems
  .filter((menuItem) => menuItem.vegetarian === true)
  .map((menuItem) => menuItem.name);
console.log(vegetarianNames);
const cheapItem = menuItems.find((menuItem) => menuItem.price < 3);
console.log(cheapItem);
//find returns undefined when nothing matches
// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.
const menuItemOne = {
  name: "Tiramisu",
  price: 5.5,
  glutenFree: false,
  vegetarian: true,
};
console.log(Object.keys(menuItemOne));
console.log(Object.values(menuItemOne));
console.log(Object.entries(menuItemOne));

for (const menuItem of menuItems) {
  for (const [key, value] of Object.entries(menuItem)) {
    console.log(`${key}: ${value}`);
  }
}
// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

const originalTiramisu = { name: "Tiramisu", price: 5.5 };
const copyTiramisu = originalTiramisu;
copyTiramisu.price = 9.99;
console.log(originalTiramisu.price);

const realCopyTiramisu = { ...originalTiramisu, price: 5.5 };
console.log(originalTiramisu.price, realCopyTiramisu.price);
// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";
const words = sentence.split(" ");
const counter = {};
for (const word of words) {
  counter[word] = (counter[word] || 0) + 1;
}
console.log(counter);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
