/* In Array it works as Stack which means First In Last Out

 Push : Add an item into the array at last
 Pop : Delete anitem from the array at last
 Unshift : Add an item into the array Beginning
 Shift : Delete an item from the array Beginning
 join : join the string using given Arg it maybe space or comma and wrk as existing value
*/

let techBrands = ["Google", "Amazon", "Facebook", "Instagram", "Uber"];
// Insert Data into an array
techBrands.push("Twitter"); // "Google","Amazon","Facebook","Instagram","Uber","Twitter"

// Insert an Item into array Beginning
techBrands.unshift("Netflix"); // "Netflix","Google","Amazon","Facebook","Instagram",,"Uber"

// Delete an Item from the array
techBrands.pop(); //"Netflix","Google","Amazon","Facebook","Instagram","Uber"

// Remove an item into array Beginning
techBrands.shift(); //"Google","Amazon","Facebook","Instagram",,"Uber"

// Joining the array elements
let techBrandsString = techBrands.join(" "); // Google Amazon Facebook Instagram Uber

// Splice (It works as well as delete and replace) of an array

// * In splice in array it removes 1st-Amazon from 2nd element (Facebook)
techBrands.splice(1, 2); // op : 'Google' , 'Instagram' , 'Uber'

// Removes the start position 0 to 2nd element
techBrands.splice(0, 2); // op : "Uber"

// Replace the data which is remove
techBrands.splice(1, 2, "Walmart"); // op : "Uber","Walmart"
techBrands.splice(1, 2, "Walmart", "Netflix"); // op : "Uber",["Walmart","Netflix"]
techBrands.splice(1, 1, "Walmart"); // op : "Walmart"

// Slice (it will change the existing array and Return the deleted element)

const slicedArrayWithEnd = techBrands.slice(0, 1); // "Uber"
const slicedArrayWithOutEnd = techBrands.slice(1); // "Walmart","Netflix"

// Searching an Element/item in array

const isFoundSearchedFArray = techBrands.includes("Amazon"); // false
const isFoundSearchedTArray = techBrands.includes("Uber"); // true

// Loops in array

// Single Argument :
techBrands.forEach((item) => {
  console.log("techBrands");
});                       // Item="Uber"

  // Multiple Argumemt :
  techBrands.forEach((item, index) => {
    console.log("Index : " + index, "Item :" + item);
  })
); // Index : 0 Item :"Uber"
