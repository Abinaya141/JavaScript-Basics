// Value Type: Immutable /Copied value /Compared value
// * Passed by Value - Number, String, Boolean, Null, Undefined
// * These datatypes are stored in 'Stack'

// Example

let a = 10;
let b = a; // a shared its memory data to the b

console.log("Before modifying a:");
console.log("a:", a); 
console.log("b:", b);

// Output : 10 (a shared its value to b )

// Modifying a doesn't affect b

 a = 20;

console.log("After modifying a:");
console.log("a:", a); // 20
console.log("b:", b); // 10

// Reference Type: Mutable /copied value /Compared value
// * Passed by Reference - Array, Object, Function, Date
// * These datatypes are stored in 'Heap' 

// Example

let array1 = [1, 2, 3];
let array2 = array1;

console.log("Before modifying array1:");
console.log("array1:", array1); // [1, 2, 3]
console.log("array2:", array2); // [1, 2, 3]

// Modifying array1 will also affect array2

array1.push(4);

console.log("After modifying array1:");
console.log("array1:", array1); // [1, 2, 3, 4]
console.log("array2:", array2); // [1, 2, 3, 4]















