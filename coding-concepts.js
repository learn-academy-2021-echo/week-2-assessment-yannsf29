// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// var cohort = "Echo 2021"
// console.log(cohort.split(""))

// a) Your answer: it will convertthe string "Echo 2021" into an Array expected ouput: [
//   'E', 'c', 'h',
//   'o', ' ', '2',
//   '0', '2', '1'
// ]
// b) Verify and explain: it convert a string into an Array


// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: it should say undefined because the parameter name is not define
// b) Verify and explain: the terminal logged undefined because the paramter is not define.


// --------------------3) What will this log?

// var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: it should multiply each number of the Array by 2 expected output: [ 8, 10, 12, 14, 16 ]
// b) Verify and explain: it did multiplied each number of the array by 2


// --------------------4) What will this log?
//
// var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: it should return only the odd numbers expexted output: [ 11, 13, 15 ]
// b) Verify and explain: it did returned only the odd numbers, .filter will make a decision about each about each item in the array and the function will divide each number and return each numbers who are not equal to 0 "odd NUmbers"


// --------------------5) What will this log?

// var myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: it should return the index 0 of the Array expected ouput: JavaScript
// b) Verify and explain: it did return only the array at index 0 which was "javacript" because we are calling the index in the console log.


// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name){
//     this.student = name,
//     this.cohort = "Delta",
//     this.year = 2021
//   }
// }
// var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: it should return the array some hard coded section and the name george as a student since we are adding the name george in the console log. expected output: { student: 'George', cohort: 'Delta', year: 2021 }
// b) Verify and explain: it did return the whole array from the class learn and addes the name george (dynamic).
