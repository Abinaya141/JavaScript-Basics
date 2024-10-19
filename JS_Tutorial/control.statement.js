// If Statement

let female = true;

if (female) {
  console.log("Only for ladies!");
}
//Output - Only for ladies!

// If - Else  Statement

let rcbWins = true; // Change false if RCB loses

if (rcbWins) {
  console.log("Ee Sala Cup Namade !");
} else {
  console.log("India Wins !");
}
// Output - Ee Sala Cup Namade !

// Else - If Statement

let domain = "IT";
if ("domain = Computer Science") {
  console.log("Classroom In - A Block");
} else if ("domain = Business Administrative") {
  console.log("Classroom In - B Block");
} else if ("domain = IT") {
  console.log("Classroom In - D Block");
} else {
  console.log("Will Update Soon");
}

// Output - Classroom In - D Block

// Switch Statement

let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Fair");
    break;
  case "D":
    console.log("Needs Improvement");
    break;
  case "F":
    console.log("Failed");
    break;
  default:
    console.log("Invalid Grade");
}

// Output : Good

// For Loop Statement

for (let i = 1; i <= 5; i++) {
  console.log("Number :" + i);
}
// Output : Number : 1
Number: 2;
Number: 3;
Number: 4;
Number: 5; //

// While Loop

let i = 21;
while (i <= 23) {
  console.log("Roll No: " + i);
  i++;
}
// Output : Roll No: 21
//          Roll No: 22
//          Roll No: 23

// Do - While Loop

let j = 30;
do {
  console.log("Count: " + j);
  j++;
} while (j <= 32);

// Output : Count: 31
Count: 32;
Count: 33; //

// For - 0f Loop

let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
  console.log(color);
}

// Output :
Red;
Green;
Blue; //

// For - in Loop

let person = { name: "Abinaya", age: 20, from: "Coimbatore" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Output :
name: Abinaya;
age: 20;
from: Coimbatore; //
