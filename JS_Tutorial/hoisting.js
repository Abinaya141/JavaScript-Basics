// Hoisting :

// Moving the code which is called variable var to the top of the programme not physically by virtually during compilation.

// Hoisting var in js

console.log(a);
var a = 10; //---- undefined

// (In creation phase)
LC: {
  a: undefined;
}

// (In execution phase)
LC: {
  a: 10;
}

// Hoisting let in js

console.log(b);
let b = 20; //---- ReferenceError: b is not defined

// Hoisting const in js

console.log(c);
const c = 30;
//  ------ ReferenceError: c is not defined

//Temporal Dead Zone :

// For 'let'
LC: {
  b: uninstalized;
}

LC: {
  b: undefined;
}

LC: {
  b: 20;
}

// For 'const'
LC: {
  c: uninstalized;
}

LC: {
  c: undefined;
}

LC: {
  c: 30;
}
