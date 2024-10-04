// Data Types - Primitive & Non primitive

// * Primitive Data Types

// Number :

var a = 50; //---- Number
console.log(typeof a);

// String :

var b = "Abinaya"; //---- String
console.log(typeof b);

// Boolean :

var c = false;
console.log(typeof c);

var c = true;
console.log(typeof c);

// Null :

var d = null;
console.log(typeof d);

// Undefined :

var e;
console.log(typeof e);

// Symbol :

let uniqueId = Symbol("id");
console.log(typeof uniqueId);

// * Non-Primitive Data Types

// Array :

let colors = ["blue", "green", "red"];
console.log(typeof colors);

// Object :

let person = {
  name: "Abinaya",
  age: 21,
};
console.log(typeof person);

// Function :

function greet() {
  return "Hello, World!";
}
console.log(typeof greet);
