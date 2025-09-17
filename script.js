/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
const Student = {
  firstName: "Ada",
  lastName: "Lovelace",
  gpa: 3.3,             // underscore means "internal field" by convention
  get fullName() {       // computed when read
    return this.firstName + " " + this.lastName;
  },
  get gpa() {            // safe read access
    return this.gpa;
  },
  set updateGpa(newGpa) {       // safe write access with validation
    if (newGpa >= 0 && newGpa <= 4) {
      this.gpa = newGpa;
    }
  }
};
let s1 = new Student;

s1.firstName = ali;

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
let courses = {
  CS101: "Intro to CS",
  MATH201: "Calculus",
  ENG301: "English Lit"
};

for (let code in courses) {
  console.log(code + " → " + courses[code]);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/

let message = "Hello";

console.log("Length:", message.length);
console.log("First character:", message.charAt(0));
console.log("Last character:", message.charAt(message.length - 1));

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
let today = new Date();

let day = today.getDate();
let month = today.getMonth();      // 0–11
let year = today.getFullYear();

console.log("Day:", day);
console.log("Month (0–11):", month);
console.log("Year:", year);

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
let nums = [12, 45, 7, 89, 23, 67, 34, 10, 5, 77];

let min = Math.min(nums);
let max = Math.max(nums);

console.log("Min:", min);
console.log("Max:", max);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

// End of Advance JavaScript Lab — good luck!
