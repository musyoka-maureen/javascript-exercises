"use strict";

// Lesson 08 exercise: Classes
// In your exercise repository, create a branch named `lesson-08-exercise` and switch to it,
// then open `lesson-08.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Write an `Artist` class with a constructor that receives a name, a genre, and a total
// runtime, and a `describe` method that returns one sentence built from the instance's own
// properties through `this`. Create two instances with `new` and log both descriptions.
class Artist {
  constructor(name, genre, total) {
    this.name = name;
    this.genre = genre;
    this.total = total;
  }
  describe() {
    return `${this.name}, ${this.genre}, ${this.total} of music `;
  }
  static named(artists, name) {
    return artists.find((artist) => artist.name === name);
  }
}
const justin = new Artist("Justin", "Afrobeats", "26");
const bien = new Artist("Bien", "Afro-pop", "46");

console.log(justin.describe());
console.log(bien.describe());
// TODO: Part two.
// The file provides the artists as an array of plain objects. Loop over it with `for...of`,
// create an `Artist` instance from each object with `new`, collect the instances into a new
// array with `push`, and log every description with a second loop or `forEach`.

// * The artists as plain objects, provided:
const artistData = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

const artists = [];
for (const artist of artistData) {
  const artistInstance = new Artist(artist.name, artist.genre, artist.total);

  artists.push(artistInstance);
}
artists.forEach((artist) => console.log(artist.describe()));
const foundArtist = Artist.named(artists, "Asake");

console.log(foundArtist.describe());
// TODO: Part three.
// The file contains three short snippets: a class call that is missing `new`, an arrow
// function used as a method that reads `this`, and a correct call. Predict the outcome of each
// in a comment before running, then verify one snippet at a time and correct your misses,
// leaving both prediction and result visible.

// * Three snippets. Predict each outcome in a comment, then verify one at a time.
// ! Snippet one, a class call missing new. Uncomment after part one, predict first:
const broken = new Artist("Pinkfong", "Children's music", "11:31"); //prediction: TypeError results: TypeError: Class constructor Artist cannot be invoked without 'new'
// ! Snippet two, an arrow function used as a method that reads this:
const single = {
  title: "Hurt",
  artist: "Johnny Cash",
  describe: () => `${this.title} by ${this.artist}`,
};
console.log(single.describe()); //prediction: arrows handle this differently, and inside a class that difference stops methods from reaching their own instance. results: undefined by undefined
// * Snippet three, the correct call. Uncomment after part one:
console.log(new Artist("Asake", "Afrobeats", "14:08").describe());

// TODO: Part four.
// Write a `FeaturedArtist` class that extends `Artist`, adds a blurb property through a
// constructor that calls `super` first, and overrides `describe` so that it builds on the
// superclass version through `super.describe()`. Promote one artist and log the result.
class FeaturedArtist extends Artist {
  constructor(name, genre, total, blurb) {
    super(name, genre, total);
    this.blurb = blurb;
  }

  describe() {
    return `${super.describe()}. Featured: ${this.blurb}`;
  }
}

const featured = new FeaturedArtist(
  "Asake",
  "Afrobeats",
  "14:08",
  "The loudest new voice out of Lagos",
);
console.log(featured.describe());

// TODO: Part five.
// The file ends with a constructor function and two prototype method assignments, working code
// in the pre-2015 style. Do not rewrite it. Above each line, add a comment naming its
// equivalent in class syntax, then confirm by running that its behavior matches your `Artist`
// class.

// * Working pre-2015 code, provided. Do not rewrite it, annotate it:

//function ArtistOld plays the role of the class and its constructor at once with New
function ArtistOld(name, genre) {
  this.name = name;
  this.genre = genre;
}
//method describe attached to function prototype serving as a shared object every instance can reach
ArtistOld.prototype.describe = function () {
  return `${this.name}, ${this.genre}`;
};
//method tag attached to function prototype serving as a shared object every instance can reach
ArtistOld.prototype.tag = function () {
  return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`;
};
const oldArtist = new ArtistOld("Asake", "Afrobeats");

console.log(oldArtist.describe());
console.log(oldArtist.tag());

// TODO: Part six.
// As a stretch, add a static method `Artist.named` that receives an array of instances and a
// name and returns the matching instance using `find`, and log the description of the instance
// it returns. The `get` keyword from the extension is your alternative if getters caught your
// interest.

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
