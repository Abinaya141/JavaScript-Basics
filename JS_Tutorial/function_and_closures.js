// Closures : It can access and manipulate variables from its outer scope

// Closures in Javascript

let inviteMsg = "Welcome to Animal Exhibiton"; //
function getAnimal() {
  // Function declaration
  let animal = "Lion";
  function rareSpecies(ani) {
    animal = ani;
    console.log("Rare Species: ", animal, inviteMsg);
  }
  return rareSpecies;
}

let newSpecies = getAnimal();
newSpecies("Kangaroo");
newSpecies("Humming Bird");
console.log(getAnimal());

//  Output : Rare Species:  Kangaroo Welcome to Animal Exhibiton
//           Rare Species:  Humming Bird Welcome to Animal Exhibiton
//           [Function: rareSpecies]
