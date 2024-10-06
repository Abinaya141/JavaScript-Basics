// Function Expressions

console.log("<---- Function Expressions ---->");

var welcomeAll = function () {
  console.log("Var variable in Function Expression");
};
welcomeAll();

let welcomeAll = function (name) {
  console.log(`Welcome ${name}! to Javascript Tutorial`);
};
welcomeAll("Abinaya");

const multiply = function (numberOne, numberTwo) {
  return numberOne * numberTwo;
};
multiply(7, 8);
