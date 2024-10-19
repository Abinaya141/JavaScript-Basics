// Type 1

let place =
  " Kerala is known as God's own country for its natural beauty and which includes beaches, hills, backwaters, and tropical greenery ";

// Find a Length of the String

let stringLength = place.Length;

// SubString of the String

let subStringWithEnd = place.substring(77, 83);
let subStringWithOutEnd = place.substring(77);

// Trimmed String Whitespace

let trimmedString = place.trim();

// Search a word in the String

let searchedWord = place.includes("tropical");
let searchedWordoutPosition = place.includes("tropical", 70); // -----------It returns Boolean Values

// Find the String at Beginning & End

let stringStartsWith = place.startsWith("Kerala"); //----True
let stringEndsWith = place.EndsWith("greenery"); //----True

// Find index of the String
//( Search position of a particular word or character )

let indexSearchedKeyWithOutPosition = place.indexOf("own");
let indexSearchedKeyWithPosition = place.indexOf("Kerala", 6);

// Find Last Index of the String

let lastIndexOfSearchedkey = place.lastIndexOf("and");
let lastIndexOfSearchedkeyWithPosition = place.lastIndexOf("and", 50);

// Replace the String

let replaceString = place.replaceString("greenery", "forests");
let replaceAllString = place.replaceAllString("and", "&"); //------------Replace all 'and' to '&'

// Type 2 :

let flowers = " Sunflower, Rose, Jasmine, Tulip, Lotus ";

// Split the String Into an Array

let arrayOfFlowersAfterSplit = flowers.split(",");
let arrayOfFlowersAfterSplitWithPosition = flowers.split(",", 2);

// String Concat

let concatenedString = "flowers" + "Kerala";
let concatenedWithMultipleString = kerala.concat("fruits", "Devices");

// Basic  Function

//---* Case Of The String
let upperCaseString = place.toUpperCase();
let lowerCaseString = place.toLowerCase();

//---* Repeats of the string
const APP = "@Instagram ";
let newApp = APP.repeat(3); // @Instagram @Instagram @Instagram

//---* Find the position of the String
let findCharacterBasedOnPosition = place.charAt(21); // G

//---* Find Ascii Code of the String
let findAscciCode = place.charCodeAt(21); //---- (A - 65, a - 97)
