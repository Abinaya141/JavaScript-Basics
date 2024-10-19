/* Events
 * On click
 * On focus
 * On blur
 * On Mouseover
 */

// Adding EventListener

function popup() {
  alert("Hello ! How was your day ?");
}

// Removing EventListener

function popup() {
  removeEventListener("Click", popup);
}

// Prevent  Default Behaviour

const msg = document.getElementById("Message");
msg.addEventListener("click", (event) => {
  event.preventDefault();
});
