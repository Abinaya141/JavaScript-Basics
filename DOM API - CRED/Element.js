// Selecting Elements

// Based On ID

const selectBasedOnId = document.getElementById("Group1");

// Based On Class

const selectBasedOnClass = document.getElementsByClassName("create");

// Based On Tag-Name

const selectBasedOnTagName = document.getElementsByTagName("h3");

// Query Selector All

const selectBasedOnQueryAll = document.querySelectorAll(".Group1");

// Manipulating An Element

const manipulatingBasedOnId = document.getElementById("api");
manipulatingBasedOnId.innerHTML =
  "<p>API : Application Programming Interface</p>";
manipulatingBasedOnId.style.color = "blue";
manipulatingBasedOnId.contentEditable = "true";
manipulatingBasedOnId.accessKey = "A";
manipulatingBasedOnId.class = "Interface";

// Creating An Element
// * Append used for children from parent

const creatingNewElement = document.createElement("h1");
creatingNewElement.textContent = "Creating Heading Element";
creatingBasedOnId.appendChild(creatingAnotherElement);

// * Prepend used for existing Parent

const creatingNewElement = document.createElement("article");
creatingNewElement.textContent = "parent-id";
creatingBasedOnId.prependChild(creatingAnotherElement);

//Removing An Element

const removeElement = document.getElementsByTagName("h1")[0];
