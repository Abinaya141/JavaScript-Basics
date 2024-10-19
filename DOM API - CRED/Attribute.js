/* Attributes
 * ID
 * Class
 * Accesskey
 * ContentEditable
 * Inert
 * Hidden
 * Title
 * Data-*
 */
// Create Element & Setting Attributes

const createElement = document.createElement("p");
createElement.setAttribute("id", "set-Attribute");
createElement.setAttribute("title", "attribute");
createElement.setAttribute("hidden", "attribute");

// Getting Attribute
const getAttributeBasedOnId = createElement.getAttributeBasedOnId("id");

// Removing Attribute
createElement.removeAttribute("hidden");

// Checking The Attribute ( it returns only the Boolean values )
createElement.hasAttribute("title");

// Adding New Attribute to a existing Attribute
element.titleList.add("add-title");
