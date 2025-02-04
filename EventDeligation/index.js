// Event delegation is a technique where a single event listener is added to a parent element.
// This listener will handle events triggered by its child elements due to event bubbling up the DOM.
// In the example below, we have a list of items, and we want to know which item was clicked.
// Instead of adding an event listener to each item, we add one event listener to the parent element.
// Based on the clicked target element, we can determine which item was clicked.
// Then, we can route the event to a new page based on the clicked item's ID.
const catagory = document.getElementById("catagory");
catagory.addEventListener("click", e => {
  console.log(e.target.id);
  // check if the clicked element is an LI element in the list or child of the list
  if (e.target.tagName === "LI") {
    window.location.href = "/" + e.target.id;
  }
});

// Select the parent element with id "form"
const form = document.querySelector("#form");

// Add an event listener to the parent element
// This listener will handle 'keyup' events triggered by its child elements
form.addEventListener("keyup", e => {
  // Check if the target element has the data-uppercase attribute
  if (e.target.dataset.uppercase !== undefined) {
    // If it does, convert the input value to uppercase
    e.target.value = e.target.value.toUpperCase();
  }
});
