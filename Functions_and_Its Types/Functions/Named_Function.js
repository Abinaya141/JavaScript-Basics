// Named functions

// Without argument & Without return
// With argument & Without return
// Without argument & With return
// With argument & With return

// *Without argument & Without return

function primaryColor() {
  console.log("Red , Yellow , Blue ");
}

// *With argument & Without return

function teamGame(game) {
  console.log(`My Favourite outdoor game is ${game}!`);
}

// *Without argument & With return

function food() {
  return "Biryani";
}

// *With argument & With return

function add(number1, number2) {
  return number1 + number2;
}

// Print Command :

console.log("--- Without argument & Without return ---");
primaryColor();

console.log("--- With argument & Without return --- ");
let favGame = "cricket";
teamGame(favGame);

console.log("--- Without argument & With return ---");
let favFood = "Biriyani";
console.log("Fav Food :", favFood);

console.log("--- With argument & With return ---");
let result = add(7, 5);
console.log("Result :", result);
