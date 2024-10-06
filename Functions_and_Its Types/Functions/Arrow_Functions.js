// Arrow Functions :

// Single Statements

let oneArgument = (x) => x * 9;
console.log("Factorial:", oneArgument(9)); // Factorial: 81

let multipleArgument = (numberOne, numberTwo) => numberOne + numberTwo;
console.log("Add :", multipleArgument(34, 67)); // Add : 101

let withNoArgument = () => console.log("Arrow function without argument");

// Multiple Statements

let differenceOfNumber = (numberOne, numberTwo) => {
  const DIFFERENCE = numberOne - numberTwo;
  return DIFFERENCE;
};
console.log("Difference :", differenceOfNumber(30, 10)); // Difference : 20

// Arrow Function  with call back

setTimeout(() => {
  console.log("Arrow Function  with call back");
}, 2000);

// Returning an object

let userDetails = () => ({ name: "Abinaya S", DOB: 14 - 10 - 2003 });
