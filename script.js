// Week 6: JavaScript Practice Workshop
// INFO 153A/253A - UC Berkeley

// ============================================
// SAMPLE DATA FOR PRACTICE
// ============================================

// Arrays for practice exercises
const numbers = [5, 12, 8, 20, 3, 15, 7];
const colors = ["red", "green", "blue", "yellow"];
const names = ["Alice", "Bob", "Charlie", "Diana"];

console.log("✅ JavaScript Practice Workshop Loaded!");
console.log("📚 Follow README.md for step-by-step exercises");
console.log("💡 Open browser console (F12) to see your output");
console.log("");

// ============================================
// EXERCISE 1: FUNCTION BASICS
// ============================================
// Practice writing functions with parameters and return values

// TODO: Exercise 1.1 - Write a greet(name) function
// Should return "Hello, [name]!"
const greet = (name) => {
    return "Hello, " + name;
}

greet("Kate");


// TODO: Exercise 1.2 - Write math functions
// add(num1, num2) - returns sum
const add = (num1, num2) => {
    return num1 + num2;
}
// multiply(num1, num2) - returns product
const multiply = (num1, num2) => {
    return num1 * num2;
}
// calculateArea(width, height) - returns width * height
const calculateArea = (width, height) => {
    return multiply(width, height);
}


// TODO: Exercise 1.3 - Write functions that call other functions
// square(num) - returns num * num
// sumOfSquares(num1, num2) - uses square() function
const square = (num) => {
    return num * num;
}

const sumOfSquares = (num1, num2) => {
    return square(num1) + square(num2);
}

// Test your Exercise 1 functions here:
console.log(greet("Sarah"));
console.log(add(5, 3));
console.log(sumOfSquares(3, 4));


// ============================================
// EXERCISE 2: CONTROL FLOW
// ============================================
// Practice if/else, switch statements, and ternary operators

// TODO: Exercise 2.1 - Write control flow functions
// checkAge(age) - returns "Adult" if >= 18, else "Minor"
// getGrade(score) - returns letter grade A-F based on score
const checkAge = (age) => {
    if (age >= 18) {
        return "Adult"
    } else {
        return "Minor"
    }
}

const getGrade = (score) => {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// TODO: Exercise 2.2 - Write switch statement functions
// getDayType(day) - returns "Weekday" or "Weekend"
// getSeasonEmoji(season) - returns emoji for each season
const getDayType = (day) => {
    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            return "Weekday";
        case "Saturday":
        case "Sunday":
            return "Weekend";
        default:
            return "Invalid day";
        
    }
}

// TODO: Exercise 2.3 - Write ternary operator functions
// isEven(num) - returns "Even" or "Odd"
// getPassFail(score) - returns "Pass" if >= 60, else "Fail"
const isEven = (num) => {
    return (num % 2 === 0) ? "Even" : "Odd";
}

const getPassFail = (score) => {
    reurn (score >= 60) ? "Pass" : "Fail";
}

// Test your Exercise 2 functions here:
// console.log(checkAge(25));
// console.log(getGrade(85));
// console.log(getDayType("Monday"));
// console.log(isEven(4));


// ============================================
// EXERCISE 3: LOOPS
// ============================================
// Practice for loops, while loops, and for...of loops

// TODO: Exercise 3.1 - Basic for loops
// printNumbers(n) - logs numbers 1 to n
const printNumbers = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i + 1)
    }
}
// sumNumbers(n) - returns sum of 1 to n
const sumNumbers = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// countDown(n) - logs countdown from n to 1


// TODO: Exercise 3.2 - Loop through arrays
// findMax(arr) - returns largest number in array
// countEvens(arr) - returns count of even numbers


// TODO: Exercise 3.3 - for...of loops
// sumArray(arr) - returns sum of all numbers in array
// printItems(arr) - logs each item in array
const sumArray = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}


// Test your Exercise 3 functions here:
// console.log(sumNumbers(10));
// console.log(findMax(numbers));
// console.log(sumArray([1, 2, 3, 4, 5]));


// ============================================
// EXERCISE 4: ARRAY METHODS
// ============================================
// Practice forEach, filter, map, and reduce

// TODO: Exercise 4.1 - forEach practice
// Use forEach to log each color in the colors array
// Use forEach with index to log "0: red", "1: green", etc.
colors.forEach(color => console.log(color));


// TODO: Exercise 4.2 - filter practice
// Create function getLargeNumbers(arr) that returns numbers > 10
// Create function getEvens(arr) that returns only even numbers
const largeNumbers = numbers.filter(num => num > 10);
const evens = numbers.filter(num => num % 2 === 0);

// TODO: Exercise 4.3 - map practice
// Create function doubleNumbers(arr) that doubles each number
// Create function uppercaseNames(arr) that converts names to uppercase
const doubles = numbers.map(num => num * 2);


// TODO: Exercise 4.4 - reduce practice (optional)
// Create function sumAll(arr) that returns sum using reduce
// Create function findProduct(arr) that returns product of all numbers
sum = numbers.reduce((total, num) => total + num, 0);


// TODO: Exercise 4.5 - Combine methods
// Create function processNumbers(arr) that:
// 1. Filters for even numbers
// 2. Doubles each number
// 3. Returns the sum of results


// Test your Exercise 4 functions here:
// colors.forEach(color => console.log(color));
// console.log(getLargeNumbers(numbers));
// console.log(doubleNumbers([1, 2, 3, 4, 5]));


// ============================================
// BONUS CHALLENGES
// ============================================
// Try these if you finish early!

// CHALLENGE 1: FizzBuzz
// Write a function fizzBuzz() that prints numbers 1-100
// For multiples of 3 print "Fizz"
// For multiples of 5 print "Buzz"
// For multiples of both print "FizzBuzz"


// CHALLENGE 2: Palindrome Checker
// Write function isPalindrome(str) that checks if a string
// reads the same forwards and backwards
// Example: isPalindrome("racecar") should return true


// CHALLENGE 3: Find Duplicates
// Write function findDuplicates(arr) that returns
// array of duplicate values
// Example: [1, 2, 3, 2, 4, 3] should return [2, 3]


// ============================================
// TESTING AREA
// ============================================
// Write your own test code here!

console.log("=== Your Test Code Below ===");

// Example: Test a function you wrote
// console.log(greet("World"));