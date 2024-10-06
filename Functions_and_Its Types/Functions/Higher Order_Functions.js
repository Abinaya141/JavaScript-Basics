// Higher Order Functions

// Takes another function as argument
// Return a function
// Takes another function as argument and returns a functions

// Takes another function as argument

function sumOfMultiple(numberOne, numberTwo, callback) {
  if (numberOne % 2 == 0) numberOne = numberOne + 3;
  if (numberTwo % 2 != 0) numberTwo = numberTwo - 3;
  return callback(numberOne, numberTwo);
}

console.log("HOF:", sumOfMultiple(30, 50, multiply));

// Return a function (Closure)
function multiplier(numberOne) {
  function result(index) {
    return index * numberOne;
  }
  return result;
}

let resultOne = multiplier(4);
console.log(resultOne(2)); // 8
console.log(resultOne(4)); // 16
console.log(resultOne(8)); // 32
console.log(resultOne(9)); // 36
console.log(resultOne(6)); // 24
let resultTwo = multiplier(7);
console.log(resultTwo(2)); // 14
console.log(resultTwo(4)); // 28
console.log(resultTwo(8)); // 56
console.log(resultTwo(9)); // 63
console.log(resultTwo(6)); // 42

console.log(resultOne(10)); // 40;

// Takes another function as argument and returns functions

function multiLevel(callbackOne, callbackTwo) {
  function innerFunction(numberOne) {
    return callbackOne(callbackTwo(numberOne));
  }

  return innerFunction;
}

const multiplyByTwo = (x) => x * 2;
const multiplyByThree = (x) => x * 3;
