//var
function varFunc() {
  var a = 10;
  console.log(a);
  if (true) {
    var a = 20;
    console.log(a);
  }
  var a = 30;
  console.log(a);
}
varFunc();

//let
function letFunc() {
  let b = 60;
  console.log(b);
  if (true) {
    let b = 40;
    b = 30;
    console.log(b);
  }
  console.log(b);
}
letFunc();

//const
function constFunc() {
  const c = 60;
  console.log(c);
  if (true) {
    const c = 120;
    console.log(c);
  }
  console.log(c);
}
constFunc();

//Data types
var a = 50; //---- Number
console.log(typeof a);
var b = "Abinaya"; //---- String
console.log(typeof b);
var c = false;
-(
  //---- Boolean
  console.log(typeof c)
);
var d = null; //---- Null
console.log(typeof d);
var e; //---- Undefined
console.log(typeof e);

//Synchronous
function synchronousFunc() {
  console.log("x");
  console.log("y");
  console.log("z");
}
synchronousFunc();

//asynchronous
function asynchronousFunc() {
  console.log("welcome");
  function play() {
    console.log("guys");
  }
  setTimeout(play, 3000);
  console.log("everyone");
  console.log("hi");
}
asynchronousFunc();
