console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
for (let i = 2; i <= 10; i += 2) {
  console.log(i);

console.log('Test - should say "Hello World!"', hello());
}

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {

  return `Hello, ${name}!`;
}
helloName('jo');
console.log(helloName('jo!'));
console.log(helloName('Stacy!'))

// Remember to call the function to test
// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber,secondNumber) {
 return firstNumber + secondNumber;
}

function addNumbers(num1, num2) {
return num1 + num2;
}

console.log(addNumbers(5, 4));
console.log(addNumbers(6, 7));

addNumbers(2, 3);

// 4. Function to multiply three numbers & return the result
function multiplyThree() {
  let numbers = 2 * 4 * 8;
  return true;

}

function multiplyThreeNumbers(num1, num2, num3) {
  return num1 * num2 * num3;

}
console.log( multiplyThreeNumbers(2, 3, 4));
console.log( multiplyThreeNumbers(6, 8, 12));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return;
  } else{

  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {

}
 
function getlastItem(array) {
if (array.length === 0) {
  return undefined;


} else {
  return array[array.length - 1];
}
  
}

console.log(getlastItem(2, 3, 6));
console.log(getlastItem(['a',  'b', 'c']));
console.log(getlastItem([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {

}

function findValue (array, value) {

  for (let i = 0; i < array.length; i++) {
    if(array[i] === value ) {
       return true;
    }
  }

   return false;
}

console.log(findValue([1, 2, 4, 5], 6));
console.log(findValue(['a', 'b', 'c', 'd'], 'f'));
console.log(findValue([], 6));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}

//function isFirstLetter(letter, string) {
  //return string [0] ==== letter;
//}

//console.log(isFirstLetter('P', 'pizza'));
//console.log(isFirstLetter('H', 'Hello'));
//console.log(isFirstLetter('A', ''));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
