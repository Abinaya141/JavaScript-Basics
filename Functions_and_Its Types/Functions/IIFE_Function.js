// IIFE Function - Its a Self Invoking Function

var domesticAnimal = "Dog";
(function () {
  var domesticAnimal = "Cat";
  console.log("Wild Animal : Lion");
  console.log("Wild Animal : Tiger");
  console.log("Wild Animal : Elephant");
  console.log("Wild Animal : Giraffe");
})();

console.log("Domestic Animal :", domesticAnimal);
