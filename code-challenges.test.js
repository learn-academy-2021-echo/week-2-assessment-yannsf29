// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisibleBy3", () => {
          var num1 = 15
           var num2 = 0
          var num3 = -7
// I am describing the goal of the function which is to be able to take the numbers in the variable and check if the numbers are divisble by three

    it("logs decides if the number is evenly divisble by three or not", () => {

      expect(divisibleBy3(num1)).toEqual(`${number1} is divisible by three.`)
      expect(divisibleBy3(num2)).toEqual(`${number2} is divisible by three.`)
      expect(divisibleBy3(num3)).toEqual(`${number3} is not divisible by three.`)
    })
  })
// I am expicting to get the result in each numbers of the variable.

// // // b) Create the function that makes the test pass.
// //
const divisibleBy3 = (number1) => {
  if ((number1)%3 === 0) {
// I created a function by adding each numbers ( if the number is divisible by 3 the remaining will equal 0)
    return `${number1} is divisible by three.`
  } else {
    return `${number1} is not divisible by three.`
// because a function has to have a return I am telling what the return is expected
  }
}

// var num1 = 15
// // // Expected output: "15 is divisible by three"
// var num2 = 0
// // // Expected output: "0 is divisible by three"
// var num3 = -7
// // // Expected output: "-7 is not divisible by three"

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
//
describe("capitalizer", () => {
// I am describing the goal of the test which is to have an array with all the words capitalized.

    var array1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    var array2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

    it("should an array with all the words capitalized", () => {

// I am explaining that it should return an array of words capitalized

      expect(capitalizer(array1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capitalizer(array2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
// the expected result

    })
  })

// // b) Create the function that makes the test pass.

const capitalizer = (array) => {
      let eachItem = array.map(value => {
// I am creating a function that takes in the array and .map (will do something to each item in the array)

      return value[0].toUpperCase() + value.substring(1)
    })

// adding the result will take the index of each word. toupercase will capitalized each first letter in the array
    return eachItem
  }

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//
//
// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.
//
// // a) Create a test with expect statements for each of the variables provided.


describe(“locator”, () => {

    let string1 = “learn”
    let string2 = “academy”
    let string3 = “challenges”
// I am describing the test of the function as a locator the goal is to log the index of the first vowel.

    it(“logs the index of the first vowel”, () => {
      expect(locator(string1)).toEqual(1)
      expect(locator(string2)).toEqual(0)
      expect(locator(string3)).toEqual(2)

    })
  })
// the expected result

// // b) Create the function that makes the test pass.
//
const locator = (string) => {
   let test = string.search(/[a,e,i,o,u,A,E,I,O,U]/g)
   return test
 }
 // I am creating a function to .search that will log where the first vowel is located in the string by the index


// var vowelTester1 = "learn"
// // // // Expected output: 1
// var vowelTester2 = "academy"
// // //Expected output: 0
// var vowelTester3 = "challenges"
// // Expected output: 2
