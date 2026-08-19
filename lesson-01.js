console.log("Habari yako");
console.log("Guten Tag");
console.log("Good Morning");
console.log("Mwamukie ata");

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.

/*(base) morine@Mac JS-Exercises % node
Welcome to Node.js v24.18.0.
Type ".help" for more information.
> 9+10
19
> 56*12
672
> 567-89
478
> 45/9
5
> 60/10
6
> */

// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.

/*(base) morine@Mac JS-Exercises % node lesson-01.js
Habari yako
Guten Tag
Good Morning
Mwamukie ata
(base) morine@Mac JS-Exercises % */

// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.

/* I deleted the last line console.log("Mwamukie ata"); and didn't save, on running the the output still had itas though i hadn't deleted it. On saving the output now had 3 greetings
(base) morine@Mac JS-Exercises % node lesson-01.js
Habari yako
Guten Tag
Good Morning
(base) morine@Mac JS-Exercises */

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.
/*On DevTools Console,one way the experience was different:It was like the REPL one command at a time, I also didn't have to save any file.
One way the experience was the same is I used the command console/log(); in both cases*/

// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.

/*(base) morine@Mac Desktop % node lesson-01.js
node:internal/modules/cjs/loader:1520
  throw err;
  ^

Error: Cannot find module '/Users/morine/Desktop/lesson-01.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1517:15)
    at wrapResolveFilename (node:internal/modules/cjs/loader:1071:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1095:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1122:12)
    at Module._load (node:internal/modules/cjs/loader:1294:5)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v24.18.0
(base) morine@Mac Desktop % 
I resolved the error by checking with pwd which folder I was in, then navigated using cd to the folder: JS-Exercises*/

// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
