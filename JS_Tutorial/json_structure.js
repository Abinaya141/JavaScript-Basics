// JSON Structure Example :
{
  "fruits"= [
    {
      "name": "Apple",
      "color": "Red",
      "quantity": 10
    },
    {
      "name": "Banana",
      "color": "Yellow",
      "quantity": 20
    },
    {
      "name": "Grapes",
      "color": "Purple",
      "quantity": 15
    }
  ]
}

// Defining the JSON structure as a string

let jsonData = `{
  "fruits": [
    { "name": "Apple", "color": "Red", "quantity": 10 },
    { "name": "Banana", "color": "Yellow", "quantity": 20 },
    { "name": "Grapes", "color": "Purple", "quantity": 15 }
  ]
}`;

// Parsing the JSON string into a JavaScript object

let data = JSON.parse(jsonData);

// Accessing and displaying the fruits data

data.fruits.forEach(fruit => {
  console.log("Name:", fruit.name);
  console.log("Color:", fruit.color);
  console.log("Quantity:", fruit.quantity);
  console.log("---------------------");
});
// Output :

Name: Apple
Color: Red
Quantity: 10
//---------------------//

Name: Banana
Color: Yellow
Quantity: 20
//---------------------//

Name: Grapes
Color: Purple
Quantity: 15
//---------------------//

